import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';

import type { QueryClient } from '@tanstack/react-query';

import { TanStackDevtools } from '@tanstack/react-devtools';
import { ReactQueryDevtoolsPanel as TanStackQueryDevtoolsPanel } from '@tanstack/react-query-devtools';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';

import { DefaultInternalServerError } from '~/components/error/default-internal-server-error.tsx';
import { DefaultNotFoundError } from '~/components/error/default-not-found-error.tsx';
import { Document } from '~/components/shared/document.tsx';

import { ThemeProvider } from '~/contexts/theme-context.tsx';

import {
  attachLink,
  attachMeta,
  attachSeo,
  attachStyle,
} from '~/libraries/helpers.ts';

// import globals.css as globals styles
import styles from '~/styles/globals.css?url';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  errorComponent: DefaultInternalServerError,
  notFoundComponent: DefaultNotFoundError,
  shellComponent: RouteComponent,
  head: () => ({
    meta: [
      attachMeta('apple-mobile-web-app-title', 'Tesseract'),
      attachMeta('title', 'Tesseract'),
      attachMeta('charset', 'utf-8'),
      attachMeta('viewport', 'width=device-width, initial-scale=1'),
      ...attachSeo({
        title: 'Tesseract',
        description:
          'A todo application that almost understands the 4D of your todo list',
        keywords: [
          'tesseract',
          'todo',
          'todo-application',
          'react',
          'vite',
          'typescript',
        ],
      }),
    ],
    links: [
      attachLink('apple-touch-icon', '/apple-touch-icon.png', {
        sizes: '180x180',
      }),
      attachLink('icon', '/favicon-96x96.png', {
        type: 'image/png',
        sizes: '96x96',
      }),
      attachLink('icon', '/favicon.svg', { type: 'image/svg+xml' }),
      attachLink('shortcut icon', '/favicon.ico'),
      attachLink('manifest', '/site.webmanifest'),
      attachStyle(styles),
    ],
  }),
});

function RouteComponent(): React.ReactNode {
  return (
    <Document>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
      <TanStackDevtools
        config={{ position: 'bottom-right' }}
        plugins={[
          { name: 'TanStack Query', render: <TanStackQueryDevtoolsPanel /> },
          { name: 'TanStack Router', render: <TanStackRouterDevtoolsPanel /> },
        ]}
      />
    </Document>
  );
}
