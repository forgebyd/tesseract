import { createRouter } from '@tanstack/react-router';
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query';

import { QueryClient } from '@tanstack/react-query';

import { DefaultInternalServerError } from '~/components/error/default-internal-server-error.tsx';
import { DefaultNotFoundError } from '~/components/error/default-not-found-error.tsx';

// @ts-ignore
import { routeTree } from '~/routeTree.ts';

export function getRouter() {
  const queryClientInstance = new QueryClient();

  /**
   * Create TanStack router instance with some of
   * custom options applied
   * @see https://tanstack.com/start/latest/docs
   */
  const routerInstance = createRouter({
    routeTree,

    context: {
      queryClient: queryClientInstance,
    },

    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultInternalServerError,
    defaultNotFoundComponent: DefaultNotFoundError,
    scrollRestoration: true,
  });

  setupRouterSsrQueryIntegration({
    router: routerInstance,
    queryClient: queryClientInstance,
  });

  return routerInstance;
}

/**
 * Re-declaring module definition of tanstack-router to make the
 * type available and inferred correctly based-on the router instance
 */
declare module '@tanstack/react-router' {
  export interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
