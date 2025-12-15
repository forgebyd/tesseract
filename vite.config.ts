import pluginTailwindCss from '@tailwindcss/vite';
import pluginReact from '@vitejs/plugin-react';
import pluginTsConfigPaths from 'vite-tsconfig-paths';

import { devtools as pluginTanStackDevTools } from '@tanstack/devtools-vite';
import { tanstackStart as pluginTanStackStart } from '@tanstack/react-start/plugin/vite';
import { nitro as pluginNitro } from 'nitro/vite';

import { defineConfig, PluginOption } from 'vite';

const config = defineConfig(({ mode }) => ({
  preview: {
    host: 'localhost',
    port: 3001,
  },
  server: {
    host: 'localhost',
    port: 3000,
  },

  plugins: [
    pluginTanStackDevTools(),
    pluginTsConfigPaths({ projects: ['./tsconfig.json'] }),

    /**
     * Only attach nitro plugin when it is not in development mode.
     *
     * It is causing some unexpected behavior, such as not loading
     * the fallback component for 'not-found' error and crashing
     * when running vitest.
     *
     * @see https://github.com/TanStack/router/issues/5476#issuecomment-3420644230
     */
    mode === 'production'
      ? pluginNitro({
          output: {
            dir: 'dist',
            publicDir: 'dist/public',
            serverDir: 'dist/server',
          },
        })
      : null,

    pluginTailwindCss(),
    pluginTanStackStart({
      srcDirectory: 'source',

      router: {
        generatedRouteTree: 'routeTree.ts',
        quoteStyle: 'single',
        semicolons: true,
      },
    }),
    pluginReact({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ] satisfies PluginOption[],
}));

export default config;
