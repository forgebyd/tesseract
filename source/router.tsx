import { createRouter } from '@tanstack/react-router';
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query';

import { QueryClient } from '@tanstack/react-query';

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
    context: {
      queryClient: queryClientInstance,
    },

    routeTree,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 30000,
  });

  setupRouterSsrQueryIntegration({
    queryClient: queryClientInstance,
    router: routerInstance,
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
