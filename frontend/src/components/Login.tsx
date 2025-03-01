"use client"

import { useState, type FormEvent } from "react"
import { Link } from "react-router-dom"
import Header from "./Header"
import styles from "./Login.module.css"

interface LoginProps {
  onLogin: (credentials: { email: string; password: string }) => boolean
}

const Login = ({ onLogin }: LoginProps) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please enter both email and password")
      return
    }

    const success = onLogin({ email, password })
    if (!success) {
      setError("Invalid email or password")
    }
  }

  return (
    <div>
      <Header />
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <h2>Login to Your Account</h2>
          <p>Welcome back! Please enter your details.</p>

          {error && <div className={styles.errorMessage}>{error}</div>}

          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className={styles.formOptions}>
              <div className={styles.rememberMe}>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link to="/forgot-password" className={styles.forgotPassword}>
                Forgot password?
              </Link>
            </div>

            <button type="submit" className={styles.loginButton}>
              Sign in
            </button>
          </form>

          <div className={styles.registerPrompt}>
            <p>
              Don't have an account? <Link to="/register">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

