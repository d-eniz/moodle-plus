import { Link } from "react-router-dom"
import Header from "./Header"
import styles from "./Dashboard.module.css"
import { courseData } from "../data/courseData"
import { FiBook, FiCode, FiDatabase, FiCloud } from "react-icons/fi"

interface DashboardProps {
  onLogout: () => void
}

const getCourseIcon = (courseTitle: string) => {
  if (courseTitle.includes("Programming")) return <FiCode className={styles.courseIcon} />
  if (courseTitle.includes("Data Structures")) return <FiDatabase className={styles.courseIcon} />
  if (courseTitle.includes("Web Development")) return <FiCloud className={styles.courseIcon} />
  return <FiBook className={styles.courseIcon} />
}
const TeacherDashboard = ({ onLogout }: DashboardProps) => {
  return (
    <div>
      <Header isAuthenticated onLogout={onLogout} />
      <div className="container page-container">
        <div className={styles.dashboardHeader}>
          <h1>Teacher Dashboard</h1>
          <p>Welcome back, Teacher!</p>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3>Courses</h3>
            <p className={styles.statValue}>{courseData.length}</p>
          </div>
          <div className={styles.statCard}>
            <h3>Assignments</h3>
            <p className={styles.statValue}>12</p>
          </div>
          <div className={styles.statCard}>
            <h3>Upcoming Deadlines</h3>
            <p className={styles.statValue}>5</p>
          </div>
          <div className={styles.statCard}>
            <h3>Students</h3>
            <p className={styles.statValue}>200</p>
          </div>
        </div>

        <section className={styles.courseSection}>
          <div className={styles.sectionHeader}>
            <h2>My Courses</h2>
            <Link to="/courses" className={styles.viewAll}>
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 grid-cols-2 grid-cols-3">
            {courseData.map((course) => (
              <div key={course.id} className={styles.courseCard}>
                <div className={styles.courseImage}>
                  {getCourseIcon(course.title)}
                </div>
                <div className={styles.courseContent}>
                  <h3>{course.title}</h3>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: `${course.progress}%` }}></div>
                  </div>
                  <p className={styles.progressText}>{course.progress}% Complete</p>
                  <Link to={`/modules/${course.id}`} className={styles.continueButton}>
                    Continue Learning
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.dashboardGrid}>
          <section className={styles.recentActivity}>
            <h2>Recent Activity</h2>
            <div className={styles.activityList}>
              <div className={styles.activityItem}>
                <div className={styles.activityIcon}>📄</div>
                <div className={styles.activityContent}>
                  <p>
                    You graded <strong>Assignment 2</strong> for <strong>Introduction to Programming</strong>
                  </p>
                  <span className={styles.activityTime}>2 hours ago</span>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityIcon}>📝</div>
                <div className={styles.activityContent}>
                  <p>
                    You created a new assignment for <strong>Data Structures</strong>
                  </p>
                  <span className={styles.activityTime}>Yesterday</span>
                </div>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityIcon}>📚</div>
                <div className={styles.activityContent}>
                  <p>
                    You updated the syllabus for <strong>Web Development Fundamentals</strong>
                  </p>
                  <span className={styles.activityTime}>2 days ago</span>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.upcomingDeadlines}>
            <h2>Upcoming Deadlines</h2>
            <div className={styles.deadlineList}>
              <div className={styles.deadlineItem}>
                <div className={styles.deadlineDate}>
                  <span className={styles.day}>15</span>
                  <span className={styles.month}>Jun</span>
                </div>
                <div className={styles.deadlineContent}>
                  <h4>Grade Final Project</h4>
                  <p>Web Development Fundamentals</p>
                </div>
              </div>
              <div className={styles.deadlineItem}>
                <div className={styles.deadlineDate}>
                  <span className={styles.day}>18</span>
                  <span className={styles.month}>Jun</span>
                </div>
                <div className={styles.deadlineContent}>
                  <h4>Grade Quiz 3</h4>
                  <p>Data Structures</p>
                </div>
              </div>
              <div className={styles.deadlineItem}>
                <div className={styles.deadlineDate}>
                  <span className={styles.day}>20</span>
                  <span className={styles.month}>Jun</span>
                </div>
                <div className={styles.deadlineContent}>
                  <h4>Grade Group Discussions</h4>
                  <p>Introduction to Programming</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TeacherDashboard
