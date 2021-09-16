module.exports = {
  extends: [
    'stylelint-config-recess-order',
    'stylelint-config-standard',
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    'stylelint-declaration-block-no-ignored-properties',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'declaration-no-important': true,
    'declaration-block-no-duplicate-properties': true,
    'max-nesting-depth': 4,
    'number-leading-zero': 'never',
    'plugin/declaration-block-no-ignored-properties': true,
    'selector-max-type': 2,
    'string-quotes': 'single',
  },
}
