module.exports = {
  extends: [ 'stylelint-config-standard' ],
  plugins: [ 'stylelint-scss' ],
  rules: {
    'at-rule-no-unknown': null,
    'at-rule-empty-line-before': null,

    'number-leading-zero': null,

    'selector-pseudo-element-colon-notation': 'single',

    // for scss usage
    'scss/at-rule-no-unknown': true
  }
}
