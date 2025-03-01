"use client"

import { useState, type FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import Header from "./Header"
import styles from "./Register.module.css"

interface RegisterProps {
  onRegister: (credentials: { email: string; password: string; role: string }) => boolean
}

const Register = ({ onRegister }: RegisterProps) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [role, setRole] = useState("student")
  const [error, setError] = useState("")
  const navigate = useNavigate() // Hook to navigate after registration

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    const success = onRegister({ email, password, role })
    if (!success) {
      setError("Registration failed. Try again.")
      return
    }

    // Navigate based on the user's role
    if (role === "student") {
      navigate("/student-dashboard") // Redirect to the student dashboard
    } else if (role === "teacher") {
      navigate("/teacher-dashboard") // Redirect to the teacher dashboard
    }
  }

  return (
    <div>
      <Header />
      <div className={styles.registerContainer}>
        <div className={styles.registerCard}>
          <h2>Create an Account</h2>
          <p>Join us today by filling in your details.</p>

          {error && <div className={styles.errorMessage}>{error}</div>}

          <form onSubmit={handleSubmit} className={styles.registerForm}>
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

            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Role</label>
              <div className={styles.radioGroup}>
                <label>
                  <input
                    type="radio"
                    value="student"
                    checked={role === "student"}
                    onChange={() => setRole("student")}
                  />
                  Student
                </label>
                <label>
                  <input
                    type="radio"
                    value="teacher"
                    checked={role === "teacher"}
                    onChange={() => setRole("teacher")}
                  />
                  Teacher
                </label>
              </div>
            </div>

            <button type="submit" className={styles.registerButton}>
              Sign up
            </button>
          </form>

          <div className={styles.loginPrompt}>
            <p>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
