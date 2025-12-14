// @ts-check

/** @type {import('prettier').Config} */
const config = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: 'lf',
  printWidth: 80,
  singleQuote: true,
  jsxSingleQuote: true,
  semi: true,
  trailingComma: 'es5',
  tabWidth: 2,
  useTabs: false,

  plugins: ['prettier-plugin-prisma'],

  overrides: [
    {
      files: ['*.*rc'],
      options: {
        parser: 'json',
        printWidth: 100,
        singleQuote: false,
        tabWidth: 4,
        trailingComma: 'none',
      },
    },
    {
      files: ['*.{json,jsonc}', '*.{yaml,yml}'],
      options: {
        printWidth: 100,
        singleQuote: false,
        tabWidth: 4,
        trailingComma: 'none',
      },
    },
  ],
};

export default config;
