import React from "react";
// import TodoList from "./components/TodoList";
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
      // <TodoList />
      <Routes>
        <Route index element={<Login />} />
        {/* <Route path="home" element={<Login />} /> */}
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    // </QueryClientProvider>
  );
}

export default App;
