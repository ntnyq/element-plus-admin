const { resolve } = require('path')
const { noEmpty } = require('../utils')

module.exports = {
  description: 'Generate a new component',

  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name please',
      validate: noEmpty('name'),
    },
  ],

  actions: data => {
    const name = data.name
    const pascalName = `{{pascalCase name}}`
    const actions = [
      { path: `src/components/${pascalName}.vue`, template: `index` },
    ].map(({ path, template }) => ({
      type: 'add',
      path,
      templateFile: resolve(__dirname, `${template}.hbs`),
      data: { name },
    }))

    return actions
  },
}
