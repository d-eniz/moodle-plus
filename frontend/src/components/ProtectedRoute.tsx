import { Navigate } from "react-router-dom"
import type { ReactNode } from "react"

interface ProtectedRouteProps {
  isAuthenticated: boolean
  children: ReactNode
}

const ProtectedRoute = ({ isAuthenticated, children }: ProtectedRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

export default ProtectedRoute

