module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    "plugin:vue/base",
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "linebreak-style": 0,
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
  },
};