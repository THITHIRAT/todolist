import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import TodoList from "./components/TodoList";
import ProtectedRoute from "./utils/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    <Routes>
      <Route index element={<Login />} />
      <Route path="/list" element={
        <ProtectedRoute>
          <TodoList />
        </ProtectedRoute>
      } />
    </Routes>
    // </QueryClientProvider>
  );
}

export default App;
