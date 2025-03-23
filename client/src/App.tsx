import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
