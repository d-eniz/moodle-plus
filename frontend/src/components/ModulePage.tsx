import { useParams, Link } from "react-router-dom"
import Header from "./Header"
import styles from "./ModulePage.module.css"
import { courseData } from "../data/courseData"
import { moduleData } from "../data/moduleData"

interface ModulePageProps {
  onLogout: () => void
}

const ModulePage = ({ onLogout }: ModulePageProps) => {
  const { moduleId } = useParams<{ moduleId: string }>()

  // Find the course that contains this module
  const course = courseData.find((course) => course.id === moduleId)

  // Get modules for this course
  const modules = moduleData.filter((module) => module.courseId === moduleId)

  if (!course) {
    return (
      <div>
        <Header isAuthenticated onLogout={onLogout} />
        <div className="container page-container">
          <h1>Module not found</h1>
          <Link to="/dashboard">Return to Dashboard</Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Header isAuthenticated onLogout={onLogout} />
      <div className="container page-container">
        <div className={styles.moduleHeader}>
          <div className={styles.breadcrumbs}>
            <Link to="/dashboard">Dashboard</Link> / <Link to="/courses">Courses</Link> / <span>{course.title}</span>
          </div>
          <h1>{course.title}</h1>
          <p>Instructor: {course.instructor}</p>
        </div>

        <div className={styles.moduleLayout}>
          <aside className={styles.moduleSidebar}>
            <div className={styles.moduleProgress}>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${course.progress}%` }}></div>
              </div>
              <p>{course.progress}% Complete</p>
            </div>

            <div className={styles.moduleList}>
              <h3>Course Modules</h3>
              {modules.map((module, index) => (
                <div
                  key={module.id}
                  className={`${styles.moduleItem} ${module.completed ? styles.completed : ""} ${module.id === "1" ? styles.active : ""}`}
                >
                  <div className={styles.moduleNumber}>{index + 1}</div>
                  <div className={styles.moduleInfo}>
                    <h4>{module.title}</h4>
                    <p>{module.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <main className={styles.moduleContent}>
            <div className={styles.contentHeader}>
              <h2>Module 1: Introduction</h2>
              <div className={styles.contentNav}>
                <button className={styles.navButton} disabled>
                  Previous
                </button>
                <button className={styles.navButton}>Next</button>
              </div>
            </div>

            <div className={styles.contentBody}>
              <div className={styles.videoContainer}>
                <div className={styles.videoPlaceholder}>
                  <div className={styles.playButton}>▶</div>
                </div>
              </div>

              <div className={styles.lessonContent}>
                <h3>Introduction to the Course</h3>
                <p>
                  Welcome to this course! In this module, we'll cover the fundamental concepts that will form the
                  foundation for the rest of your learning journey.
                </p>

                <h4>Learning Objectives</h4>
                <ul>
                  <li>Understand the core principles of the subject</li>
                  <li>Familiarize yourself with the terminology</li>
                  <li>Learn about the history and evolution of the field</li>
                  <li>Prepare for the practical applications in later modules</li>
                </ul>

                <h4>Required Reading</h4>
                <p>Before proceeding to the next module, please review the following materials:</p>
                <ul>
                  <li>
                    <a href="#">Introduction to the Subject (PDF)</a>
                  </li>
                  <li>
                    <a href="#">Historical Context and Evolution (Article)</a>
                  </li>
                </ul>

                <div className={styles.quizSection}>
                  <h4>Knowledge Check</h4>
                  <p>Test your understanding of the concepts covered in this module:</p>
                  <button className={styles.quizButton}>Start Quiz</button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default ModulePage

