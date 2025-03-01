"use client"

import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ThemeContext } from "../contexts/ThemeContext"
import styles from "./Header.module.css"

interface HeaderProps {
  onLogout?: () => void
  isAuthenticated?: boolean
}

const Header = ({ onLogout, isAuthenticated = false }: HeaderProps) => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    if (onLogout) {
      onLogout()
      navigate("/")
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <h1>EduLearn</h1>
        </Link>
      </div>
      <nav className={styles.nav}>
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className={styles.navLink}>
              Dashboard
            </Link>
            <Link to="/timeline" className={styles.navLink}>
              Timeline
            </Link>
            <Link to="/grades" className={styles.navLink}>
              Grades
            </Link>
          </>
        ) : (
          <>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
            <Link to="/about" className={styles.navLink}>
              About
            </Link>
            <Link to="/features" className={styles.navLink}>
              Features
            </Link>
          </>
        )}
      </nav>
      <div className={styles.actions}>
        <button
          onClick={toggleTheme}
          className={styles.themeToggle}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        {isAuthenticated ? (
          <button onClick={handleLogout} className={styles.authButton}>
            Logout
          </button>
        ) : (
          <Link to="/login" className={styles.authButton}>
            Login
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header

