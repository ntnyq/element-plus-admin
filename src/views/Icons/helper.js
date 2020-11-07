const ctx = require.context('@/icons/svg', false, /\.svg$/)
const RE = /\.\/(.*)\.svg/

const icons = ctx.keys().map(i => {
  return i.match(RE)[1]
})

export default icons
