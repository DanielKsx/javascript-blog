const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  { ignores: ['node_modules/**', 'dist/**', 'build/**'] },
  js.configs.recommended,
  {
    files: ['js/**/*.js', 'js/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: { ...globals.browser, console: 'readonly' }
    },
    rules: { semi: ['error', 'always'], quotes: ['warn', 'single'], 'no-unused-vars': 'warn' }
  }
];
