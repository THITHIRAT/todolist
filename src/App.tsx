import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import ProtectedRoute from "./utils/ProtectedRoute/ProtectedRoute";
import Login from "./pages/Login";
import Todos from "./pages/Todos";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route index element={<Login />} />
        <Route
          path="/todos"
          element={
            <ProtectedRoute>
              <Todos />
            </ProtectedRoute>
          }
        />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
