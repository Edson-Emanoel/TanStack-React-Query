import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Todos } from "./screens/todos"

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  )
}

export default App