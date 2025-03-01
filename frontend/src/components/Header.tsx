"use client"

import { useContext } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { ThemeContext } from "../contexts/ThemeContext"
import styles from "./Header.module.css"
import {
  FiHome,
  FiInfo,
  FiStar,
  FiGrid,
  FiCalendar,
  FiTrendingUp,
  FiSun,
  FiMoon,
  FiLogIn,
  FiLogOut,
  FiUser
} from "react-icons/fi"

interface HeaderProps {
  onLogout?: () => void
  isAuthenticated?: boolean
}

const Header = ({ onLogout, isAuthenticated = false }: HeaderProps) => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const navigate = useNavigate()

  const userData = JSON.parse(localStorage.getItem("lms-user") || "{}")
  const userRole = userData?.role || "student"
  const { firstName = "John", lastName = "Doe", email = "user@example.com" } = userData

  const handleLogout = () => {
    if (onLogout) {
      onLogout()
      navigate("/")
    }
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img
              src="/moodleplus.png"
              alt="Moodle+"
              className={styles.logo}
            />
          </Link>
        </div>

        <nav className={styles.nav}>
          {isAuthenticated ? (
            <>
              <NavLink
                to={userRole ? `/${userRole}-dashboard` : "/"}
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.active : ""}`
                }
                end
              >
                <FiGrid className={styles.navIcon} />
                Dashboard
              </NavLink>
              <NavLink
                to="/timeline"
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.active : ""}`
                }
              >
                <FiCalendar className={styles.navIcon} />
                Timeline
              </NavLink>
              <NavLink
                to="/grades"
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.active : ""}`
                }
              >
                <FiTrendingUp className={styles.navIcon} />
                Grades
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.active : ""}`
                }
                end
              >
                <FiHome className={styles.navIcon} />
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.active : ""}`
                }
              >
                <FiInfo className={styles.navIcon} />
                About
              </NavLink>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.active : ""}`
                }
              >
                <FiStar className={styles.navIcon} />
                Features
              </NavLink>
            </>
          )}
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.footerActions}>
            <button
              onClick={toggleTheme}
              className={styles.themeToggle}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? (
                <FiMoon className={styles.authIcon} />
              ) : (
                <FiSun className={styles.authIcon} />
              )}
              Change View
            </button>

            {isAuthenticated ? (
              <button onClick={handleLogout} className={styles.authButton}>
                <FiLogOut className={styles.authIcon} />
                Logout
              </button>
            ) : (
              <Link to="/login" className={styles.authButton}>
                <FiLogIn className={styles.authIcon} />
                Login
              </Link>
            )}
          </div>

          {isAuthenticated && (
            <div className={styles.userInfo}>
              <div className={styles.userAvatar}>
                <FiUser className={styles.userIcon} />
              </div>
              <div className={styles.userDetails}>
                <span className={styles.userName}>{firstName} {lastName}</span>
                <span className={styles.userEmail}>{email}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}

export default Header