import pluginTailwindCss from '@tailwindcss/vite';
import pluginReact from '@vitejs/plugin-react';
import pluginTsconfig from 'vite-tsconfig-paths';

import { defineConfig, PluginOption } from 'vite';

const config = defineConfig({
  build: {
    outDir: 'dist',
  },
  preview: {
    host: 'localhost',
    port: 3001,
  },
  server: {
    host: 'localhost',
    port: 3000,
  },

  /**
   * Register vite plugins here
   * @see https://vite.dev/guide/using-plugins
   */
  plugins: [
    pluginTsconfig(),
    pluginTailwindCss(),
    pluginReact({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ] satisfies PluginOption[],
});

export default config;
