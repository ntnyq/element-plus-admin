const { resolve } = require('path')
const { noEmpty } = require('../utils')

module.exports = {
  description: 'Generate a new vuex module',

  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Vuex module name please',
      validate: noEmpty('name'),
    },
  ],

  actions: data => {
    const name = data.name
    const camelName = `{{camelCase name}}`
    const actions = [
      { path: `src/store/modules/${camelName}.js`, template: `index` },
    ].map(({ path, template }) => ({
      type: 'add',
      path,
      templateFile: resolve(__dirname, `${template}.hbs`),
      data: { name },
    }))

    return actions
  },
}
