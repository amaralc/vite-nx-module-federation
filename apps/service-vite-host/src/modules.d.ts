// type SetAtom<Args extends unknown[], Result> = (...args: Args) => Result;

// Important to prevent typescript errors
declare module 'service-vite-remote/Button';

// Important to prevent typescript errors
declare module 'service-vite-remote/store' {
  export const useCount: () => [number, () => void];
}
