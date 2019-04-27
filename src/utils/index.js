/**
 * @description 空函数
 */
export function noop () { }

/**
 * @description 时间格式化
 * @default 默认格式化为 2018-01-01 12:00:00
 */
export function formatTime (value, fmt = 'yyyy-MM-dd hh:mm:ss') {
  const time = new Date(value)
  let obj = {
    'M+': time.getMonth() + 1,
    'd+': time.getDate(),
    'h+': time.getHours(),
    'm+': time.getMinutes(),
    's+': time.getSeconds(),
    'q+': Math.floor((time.getMonth() + 3) / 3),
    S: time.getMilliseconds()
  }

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  for (let k in obj) {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? obj[k] : ('00' + obj[k]).substr(('' + obj[k]).length))
    }
  }

  return fmt
}

/**
 * @description 将url上的参数转化为对象
 */
export function param2Obj (url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}'
  )
}
