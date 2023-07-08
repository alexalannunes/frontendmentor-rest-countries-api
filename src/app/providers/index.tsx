import { QueryClientProvider } from "./QueryClientProvider";
import { Router } from "./RouterProvider";

export function Provider() {
  return (
    <QueryClientProvider>
      <Router />
    </QueryClientProvider>
  );
}
