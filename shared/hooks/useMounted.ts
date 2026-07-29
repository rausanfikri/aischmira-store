import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

/**
 * Hook to determine if component has mounted on client.
 * Uses useSyncExternalStore for hydration safety in React 19 / Next.js App Router.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
