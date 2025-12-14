// @ts-check

/**
 * This function does run a type check using 'tsc' command,
 * the separation of this function is to ensure that
 * the script is running with no paths passed
 *
 * @returns {string}
 */
function runTypeCheck() {
  return 'pnpm lint.check.type';
}

/** @type {import('lint-staged').Configuration} */
const config = {
  '*.*rc': ['pnpm prettier.format'],
  '*.css': ['pnpm prettier.format'],
  '*.md': ['pnpm prettier.format'],
  '*.{ts,tsx}': ['pnpm lint.fix', 'pnpm prettier.format', runTypeCheck],
  '*.{js,jsx}': ['pnpm lint.fix', 'pnpm prettier.format'],
  '*.{json,jsonc}': ['pnpm prettier.format'],
  '*.{yaml,yml}': ['pnpm prettier.format'],
};

export default config;
