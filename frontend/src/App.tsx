import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header"; // Import your Header component
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import Register from "./components/register";
import Dashboard from "./components/student-dashboard";
import TeacherDashboard from "./components/teacher-dashboard";
import ModulePage from "./components/ModulePage";
import Grades from "./components/Grades";
import Timeline from "./components/Timeline";
import Courses from "./components/Courses";
import Forum from "./components/Forum";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

const Layout = () => {
  return (
    <div className="app-container">
      <Header /> {/* Sidebar / Header */}
      <main className="main-content">
        <Outlet /> {/* This is where your page content will be rendered */}
      </main>
    </div>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<string | null | undefined>(undefined); // Allow for undefined role

  // Check if user is already logged in
  useEffect(() => {
    const user = localStorage.getItem("lms-user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setIsAuthenticated(true);
      setUserRole(parsedUser.role);  // Set the user's role from localStorage
    }
  }, []);

  const handleLogin = (credentials: { email: string; password: string }) => {
    // In a real app, you would validate credentials against a backend
    if (credentials.email && credentials.password) {
      const user = { email: credentials.email, role: "student" }; // Example, adjust as needed
      localStorage.setItem("lms-user", JSON.stringify(user));
      setIsAuthenticated(true);
      setUserRole(user.role);  // Store the role
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    localStorage.removeItem("lms-user");
    setIsAuthenticated(false);
    setUserRole(undefined);  // Clear the role
  };

  const handleRegister = (user: { email: string; password: string; role: string }) => {
    // In a real app, you would save the user data to a backend
    if (user.email && user.password && user.role) {
      localStorage.setItem("lms-user", JSON.stringify(user));
      setIsAuthenticated(true);
      setUserRole(user.role);  // Set the role after registration
      return true;
    }
    return false;
  };

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={isAuthenticated && userRole !== undefined ? <Navigate to={`/${userRole}-dashboard`} /> : <MainPage />} />
            <Route
              path="/login"
              element={isAuthenticated && userRole !== undefined ? <Navigate to={`/${userRole}-dashboard`} /> : <Login onLogin={handleLogin} />}
            />
            <Route
              path="/register"
              element={isAuthenticated && userRole !== undefined ? <Navigate to={`/${userRole}-dashboard`} /> : <Register onRegister={handleRegister} />}
            />
            {/* Redirect based on user role or to main page if undefined */}
            <Route
              path="/student-dashboard"
              element={
                userRole === "student" ? (
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Dashboard onLogout={handleLogout} />
                  </ProtectedRoute>
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/teacher-dashboard"
              element={
                userRole === "teacher" ? (
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <TeacherDashboard onLogout={handleLogout} />
                  </ProtectedRoute>
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/modules/:moduleId"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ModulePage onLogout={handleLogout} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/grades"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Grades onLogout={handleLogout} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/timeline"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Timeline onLogout={handleLogout} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/courses"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Courses onLogout={handleLogout} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/forum"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Forum onLogout={handleLogout} />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
