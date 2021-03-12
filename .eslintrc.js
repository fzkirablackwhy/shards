module.exports = {
  root: true,
  env: {
    node: true,
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },


  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "max-classes-per-file": 'off',
    "@typescript-eslint/no-use-before-define": 'off',
    'import/prefer-default-export': "off",
    'lines-between-class-members': "off",
    'class-methods-use-this': 'off',
    // dd
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
};
