module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended'],
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'error',
  },
};
