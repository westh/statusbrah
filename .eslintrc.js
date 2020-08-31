module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'standard'
  ],
  rules: {
    'vue/html-quotes': [
      1,
      'single',
      { avoidEscap: true }
    ],
    quotes: [
      1,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
