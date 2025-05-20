/**
 * @file xlsx
 *
 * @see {@link https://sheetjs.com/}
 */

import { interopDefault } from '@ntnyq/utils'
import type { Range, WorkBook, WorkSheet } from 'xlsx'

interface ExcelData<T = any> {
  headers: string[]
  data: any[]
  results: T[]
  meta: {
    sheetName: string
  }
}

let cachedXLSX: typeof import('xlsx') | undefined

function transformWorksheet(worksheet: WorkSheet, range: Range) {
  let str = ' '
  let char = 65
  let customWorkSheet = {
    t: 's',
    v: str,
    r: `<t> </t><phoneticPr fontId="1" type="noConversion"/>`,
    h: str,
    w: str,
  }
  if (!worksheet || !worksheet['!ref']) {
    return []
  }

  let c = 0
  let r = 1
  while (c < range.e.c + 1) {
    while (r < range.e.r + 1) {
      if (!worksheet[String.fromCodePoint(char) + r]) {
        worksheet[String.fromCodePoint(char) + r] = customWorkSheet
      }
      r++
    }
    r = 1
    str += ' '
    customWorkSheet = {
      t: 's',
      v: str,
      r: `<t> </t><phoneticPr fontId="1" type="noConversion"/>`,
      h: str,
      w: str,
    }
    c++
    char++
  }
}

async function ensureXLSX() {
  if (!cachedXLSX) {
    cachedXLSX = await interopDefault(import('xlsx'))
  }
  return cachedXLSX
}

async function getWorksheetHeaders(worksheet?: WorkSheet) {
  const headers: string[] = []

  if (!worksheet || !worksheet['!ref']) {
    return headers
  }

  const xlsx = await ensureXLSX()

  const range = xlsx.utils.decode_range(worksheet['!ref'])

  transformWorksheet(worksheet, range)

  const r = range.s.r

  for (let c = range.s.c; c <= range.e.c; c++) {
    // walk every column in the range
    const cell = worksheet[xlsx.utils.encode_cell({ r, c })]

    if (cell && cell.t) {
      headers.push(xlsx.utils.format_cell(cell))
    } else {
      headers.push(`UNKNOWN${c}`)
    }
  }

  return headers
}

export async function parseWorkbook(workbook: WorkBook) {
  const excelData: ExcelData[] = []

  const xlsx = await ensureXLSX()

  for (const sheetName of workbook.SheetNames) {
    const worksheet = workbook.Sheets[sheetName]
    const headers = await getWorksheetHeaders(worksheet)
    const data: any[] = []

    // TODO: use generic type
    let results = xlsx.utils.sheet_to_json<any>(worksheet, { raw: true })

    results = results.map(row => {
      const array: any[] = []

      for (const field in row) {
        array.push(row[field])

        if (row[field] instanceof Date) {
          //
        }
      }

      data.push(array)
      return row
    })

    excelData.push({
      headers,
      data,
      results,
      meta: {
        sheetName,
      },
    })
  }

  return excelData
}

export async function parseExcelFile(rawFile: File) {
  try {
    const data = await rawFile.arrayBuffer()
    const xlsx = await ensureXLSX()

    const workbook = xlsx.read(data, { type: 'array', cellDates: true })
    const excelData = await parseWorkbook(workbook)

    return excelData
  } catch (err) {
    console.log(err)
  }
}
