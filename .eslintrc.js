module.exports = {
  env: {
    node: true,
    es2020: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  plugins: ['prettier'],
  parserOptions: { ecmaVersion: 2018, sourceType: 'module' },
  rules: {
    'no-multiple-empty-lines': 'warn',
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'prefer-const': 'error',
  },
};
