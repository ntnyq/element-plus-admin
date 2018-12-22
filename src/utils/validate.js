/* 用户名检测 */
export function isvalidUsername (str) {
  const validNames = [ 'admin', 'editor' ]
  return validNames.includes(str)
}
