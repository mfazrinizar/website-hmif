import { useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import RouterBuilder from "./App.router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
  const routes = useMemo(() => RouterBuilder(), []);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  );
}

export default App;
