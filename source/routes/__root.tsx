import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';

import type { QueryClient } from '@tanstack/react-query';

import { TanStackDevtools } from '@tanstack/react-devtools';
import { ReactQueryDevtoolsPanel as TanStackQueryDevtoolsPanel } from '@tanstack/react-query-devtools';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';

import { Document } from '~/components/shared/document.tsx';
import { ThemeProvider } from '~/contexts/theme-context.tsx';

// import globals.css as globals styles
import styles from '~/styles/globals.css?url';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: 'Tesseract' }],
    links: [{ rel: 'stylesheet', href: styles }],
    scripts: [],
    styles: [],
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
