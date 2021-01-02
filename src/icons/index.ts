/**
 * @file Load all icons
 * @module icons/index
 * @author ntnyq <https://github.com/ntnyq>
 */

const requireContext = require.context('./svg', false, /\.svg$/)
const requireAll = (context: __WebpackModuleApi.RequireContext) => context.keys().map(context)

try {
  requireAll(requireContext)
} catch (err) {
  console.log(err)
}
