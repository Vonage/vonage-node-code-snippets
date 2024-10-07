const globals = require('globals');
const eslint = require('@eslint/js');
const stylisticJs = require('@stylistic/eslint-plugin-js');
const nodePlugin = require('eslint-plugin-n');

module.exports = [
  eslint.configs.recommended,
  stylisticJs.configs['disable-legacy'],
  nodePlugin.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/js/semi': ['error', 'always'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/js/function-call-argument-newline': ['error', 'consistent'],
      '@stylistic/js/array-bracket-newline': ['error', { 'multiline': true }],
      '@stylistic/js/dot-location': ['error', 'property'],
      '@stylistic/js/arrow-parens': ['error', 'always'],
      '@stylistic/js/arrow-spacing': ['error', {before: true, after: true}],
    },

  },
  {
    files: ['packages/*/src/**/*.{js}'],
  },
  {
    settings: {
      node: {
        version: '>=18.0.0',
      },
    },
    rules: {
      // Leave this off. This rule cannot handle monorepos
      'n/no-missing-import': ['off'],
      'n/no-unsupported-features/es-builtins': [
        'error', {
          'ignores': [],
        },
      ],
    },
  },

];
