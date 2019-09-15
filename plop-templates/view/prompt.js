const { resolve } = require('path')
const { noEmpty } = require('../utils')

module.exports = {
  description: 'Generate a new page',

  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Page name please',
      validate: noEmpty('name'),
    },
  ],

  actions: data => {
    const name = data.name
    const pascalName = `{{pascalCase name}}`
    const actions = [
      { path: `src/views/${pascalName}/index.vue`, template: `index` },
      { path: `src/views/${pascalName}/style.scss`, template: `style` },
    ].map(({ path, template }) => ({
      type: 'add',
      path,
      templateFile: resolve(__dirname, `${template}.hbs`),
      data: { name },
    }))

    return actions
  },
}
