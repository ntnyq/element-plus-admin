/**
 * @file ESLint config
 */

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    `@ntnyq/vue`,
    `@vue/typescript/recommended`,
    `.eslintrc-auto-import.json`,
  ],
  parserOptions: {
    ecmaVersion: 2022,
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === `production` ? `warn` : `off`,
    'vue/component-name-in-template-casing': [`error`, `PascalCase`],
    'vue/multi-word-component-names': `off`,
  },
}
