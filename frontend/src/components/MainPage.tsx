import { Link } from "react-router-dom"
import Header from "./Header"
import styles from "./MainPage.module.css"

const MainPage = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1>Welcome to Moodle+</h1>
              <p>The modern learning management system designed for students and educators</p>
              <div className={styles.heroCta}>
                <Link to="/login" className="btn btn-primary">
                  Get Started
                </Link>
                <a href="#features" className="btn btn-secondary">
                  Learn More
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <img src="/placeholder.svg?height=400&width=600" alt="Students learning online" />
            </div>
          </div>
        </section>

        <section id="features" className={styles.features}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Features</h2>
            <div className="grid grid-cols-1 grid-cols-3">
              <div className="card">
                <h3>Interactive Courses</h3>
                <p>
                  Engage with multimedia content, quizzes, and assignments designed to enhance your learning experience.
                </p>
              </div>
              <div className="card">
                <h3>Progress Tracking</h3>
                <p>Monitor your academic progress with detailed analytics and performance metrics.</p>
              </div>
              <div className="card">
                <h3>Collaborative Learning</h3>
                <p>Connect with peers and instructors through discussion forums and group projects.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.testimonials}>
          <div className="container">
            <h2 className={styles.sectionTitle}>What Our Users Say</h2>
            <div className="grid grid-cols-1 grid-cols-2">
              <div className="card">
                <p>
                  "Moodle+ has transformed how I approach my studies. The intuitive interface and comprehensive
                  features make learning enjoyable."
                </p>
                <div className={styles.testimonialAuthor}>
                  <strong>Sarah Johnson</strong>
                  <span>Computer Science Student</span>
                </div>
              </div>
              <div className="card">
                <p>
                  "As an educator, Moodle+ provides me with all the tools I need to create engaging content and track
                  student progress effectively."
                </p>
                <div className={styles.testimonialAuthor}>
                  <strong>Dr. Michael Chen</strong>
                  <span>Professor of Biology</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className="container">
            <h2>Ready to Transform Your Learning Experience?</h2>
            <p>Join thousands of students and educators who are already using Moodle+.</p>
            <Link to="/login" className="btn btn-primary">
              Get Started Today
            </Link>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Moodle+. Some rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default MainPage