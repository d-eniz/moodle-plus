import Header from "./Header";
import styles from "./Courses.module.css";
import { courseData } from "../data/courseData";
import { FiBook, FiCode, FiDatabase, FiCloud } from "react-icons/fi";
import { Link } from "react-router-dom";

interface CoursesProps {
  onLogout: () => void;
}

const getCourseIcon = (courseTitle: string) => {
  if (courseTitle.includes("Programming")) return <FiCode className={styles.courseIcon} />;
  if (courseTitle.includes("Data Structures")) return <FiDatabase className={styles.courseIcon} />;
  if (courseTitle.includes("Web Development")) return <FiCloud className={styles.courseIcon} />;
  return <FiBook className={styles.courseIcon} />;
};

const Courses = ({ onLogout }: CoursesProps) => {
  return (
    <div>
      <Header isAuthenticated onLogout={onLogout} />
      <div className="container page-container">
        {/* Header with underline */}
        <div className={styles.coursesHeader}>
          <h1>My Courses</h1>
          <p>Browse and continue your enrolled courses</p>
          <div className={styles.headerUnderline}></div>
        </div>

        <div className={styles.courseGrid}>
          {courseData.map((course) => (
            <div key={course.id} className={styles.courseCard}>
              <div className={styles.courseIconContainer}>{getCourseIcon(course.title)}</div>
              <div className={styles.courseDetails}>
                <h2 className={styles.courseTitle}>{course.title}</h2>
                <p className={styles.courseInstructor}>Instructor: {course.instructor}</p>
                <div className={styles.progressBarContainer}>
                  <div className={styles.progressBar} style={{ width: `${course.progress}%` }}></div>
                </div>
                <p className={styles.progressText}>{course.progress}% Complete</p>
                <Link to={`/modules/${course.id}`} className={styles.continueButton}>
                  Continue Learning
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
