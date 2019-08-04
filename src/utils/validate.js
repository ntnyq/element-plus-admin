/**
 * 检测用户名是否符合要求
 * @param {string} str 用户名字符串
 */
export function isvalidUsername (str) {
  const validNames = ['admin', 'editor']
  return validNames.includes(str)
}
