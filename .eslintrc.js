/**
 * @file ESLint config
 */

module.exports = {
  root: true,

  env: {
    'vue/setup-compiler-macros': true,
  },

  extends: [
    `@ntnyq`,
    `.eslintrc-auto-import.json`,
  ],

  rules: {
    'no-debugger': process.env.NODE_ENV === `production` ? `warn` : `off`,
    'vue/component-name-in-template-casing': [`error`, `PascalCase`],
    'vue/multi-word-component-names': `off`,
  },

  overrides: [
    {
      files: `*.d.ts`,
      rules: {
        "vue/prefer-import-from-vue": `off`,
        "import/newline-after-import": `off`,
        "@typescript-eslint/consistent-type-imports": `off`,
      },
    },
  ],
}
