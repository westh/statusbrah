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
      { avoidEscap: false }
    ],
    quotes: [
      1,
      'single',
      { avoidEscape: true }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
