"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"
import MainPage from "./components/MainPage"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import ModulePage from "./components/ModulePage"
import Grades from "./components/Grades"
import Timeline from "./components/Timeline"
import ProtectedRoute from "./components/ProtectedRoute"
import "./App.css"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check if user is already logged in
  useEffect(() => {
    const user = localStorage.getItem("lms-user")
    if (user) {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (credentials: { email: string; password: string }) => {
    // In a real app, you would validate credentials against a backend
    if (credentials.email && credentials.password) {
      localStorage.setItem("lms-user", JSON.stringify({ email: credentials.email }))
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  const handleLogout = () => {
    localStorage.removeItem("lms-user")
    setIsAuthenticated(false)
  }

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <MainPage />} />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard onLogout={handleLogout} />
              </ProtectedRoute>
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
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

