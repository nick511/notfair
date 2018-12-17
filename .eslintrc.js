module.exports = {
  extends: ['standard', 'react-app', 'plugin:prettier/recommended'],
  env: {
    browser: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
}
