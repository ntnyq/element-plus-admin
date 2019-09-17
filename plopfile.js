// See https://github.com/amwmedia/plop#case-modifiers
const generators = [
  'view',
  'component',
  'module',
]

module.exports = plop => {
  generators.map(v => plop.setGenerator(v, require(`./plop-templates/${v}/prompt`)))
}
