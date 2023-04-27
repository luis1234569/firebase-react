import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Links from "./components/links/Links";
import Layout from "./layout/Layout";

function App() {
  return (
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route
              path="crud-links"
              element={
                <ProtectedRoute>
                  <Links />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </AuthProvider>
  );
}

export default App;
