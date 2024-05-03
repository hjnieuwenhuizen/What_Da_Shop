import { browser } from 'globals';
import { configs as jsConfigs } from '@eslint/js';
import { configs as reactConfigs } from 'eslint-plugin-react';

export default {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'google',
    'plugin:prettier/recommended',
    jsConfigs.recommended,
    reactConfigs.recommended,
  ],
  globals: {
    ...browser,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    indent: [2, 'tab', { SwitchCase: 1, VariableDeclarator: 1 }],
    'no-tabs': 0,
    'react/prop-types': 0,
    'react/jsx-indent': [2, 'tab'],
    'react/jsx-indent-props': [2, 'tab'],
    'max-len': 0,
    'react/jsx-uses-vars': [2],
    'linebreak-style': 0,
    'no-dupe-keys': 0,
    'valid-jsdoc': 0,
  },
};
