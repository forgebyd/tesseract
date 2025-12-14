// @ts-check

import jsEslint from '@eslint/js';
import tsEslint from 'typescript-eslint';

import globals from 'globals';

import pluginReact from 'eslint-plugin-react';
import pluginReactCompiler from 'eslint-plugin-react-compiler';
import pluginReactHook from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';

import pluginTanStackQuery from '@tanstack/eslint-plugin-query';
import pluginTanStackRouter from '@tanstack/eslint-plugin-router';

import { defineConfig, globalIgnores } from 'eslint/config';

/** @type {import('eslint/config').Config[]} */
const config = defineConfig([
  globalIgnores(['node_modules']),
  globalIgnores(['build', 'dist', 'out']),
  globalIgnores(['**/routeTree.ts', '**/routeTree.gen.ts']),
  {
    files: ['*.ts', '*.tsx'],
    extends: [
      jsEslint.configs.recommended,
      tsEslint.configs.recommended,

      // React
      pluginReact.configs.flat['recommended'],
      pluginReact.configs.flat['jsx-runtime'],
      pluginReactCompiler.configs.recommended,
      pluginReactHook.configs.flat.recommended,
      pluginReactRefresh.configs.vite,

      // TanStack
      pluginTanStackQuery.configs['flat/recommended'],
      pluginTanStackRouter.configs['flat/recommended'],
    ],
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
  },
]);

export default config;
