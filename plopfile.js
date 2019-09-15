// See https://github.com/amwmedia/plop#case-modifiers
// const viewGenerator = require('./plop-templates/view/prompt')
// const componentGenerator = require('./plop-templates/component/prompt')
// const moduleGenerator = require('./plop-templates/module/prompt')
const generators = [
  'view',
  'component',
  'module',
]

module.exports = plop => {
  generators.map(v => plop.setGenerator(v, require(`./plop-templates/${v}/prompt`)))
  // plop.setGenerator('view', viewGenerator)
  // plop.setGenerator('component', componentGenerator)
  // plop.setGenerator('module', moduleGenerator)
}
