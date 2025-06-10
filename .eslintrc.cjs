module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    // Allow single word component names
    'vue/multi-word-component-names': 'off',
    // Allow usage of any type
    '@typescript-eslint/no-explicit-any': 'off',
    // Allow require statements
    '@typescript-eslint/no-var-requires': 'off',
    // Ignore unused vars to reduce noise
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
