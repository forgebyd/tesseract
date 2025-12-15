import pluginTailwindCss from '@tailwindcss/vite';
import pluginReact from '@vitejs/plugin-react';
import pluginTsConfigPaths from 'vite-tsconfig-paths';

import { devtools as pluginTanStackDevTools } from '@tanstack/devtools-vite';
import { tanstackStart as pluginTanStackStart } from '@tanstack/react-start/plugin/vite';
import { nitro as pluginNitro } from 'nitro/vite';

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
    pluginTanStackDevTools(),
    pluginNitro({
      output: {
        dir: 'dist',
        publicDir: 'dist/public',
        serverDir: 'dist/server',
      },
    }),
    pluginTsConfigPaths({ projects: ['./tsconfig.json'] }),
    pluginTailwindCss(),
    pluginTanStackStart({
      srcDirectory: 'source',

      sitemap: {
        enabled: true,
      },

      /**
       * TanStack React Router configuration goes here,
       * rewriting the name of generated routeTree
       * @see https://tanstack.com/router/latest/docs/
       */
      router: {
        generatedRouteTree: 'routeTree.ts',
        quoteStyle: 'single',
        semicolons: true,
      },
    }),
    pluginReact({
      babel: {
        /**
         * Enable react compiler plugin
         * @see https://react.dev/learn/react-compiler/introduction
         */
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ] satisfies PluginOption[],
});

export default config;
