import Header from "./Header"
import styles from "./Grades.module.css"
import { courseData } from "../data/courseData"

interface GradesProps {
  onLogout: () => void
}

const Grades = ({ onLogout }: GradesProps) => {
  // Sample grades data
  const grades = [
    {
      courseId: "1",
      assignments: [
        { name: "Assignment 1", score: 85, maxScore: 100, weight: 10 },
        { name: "Assignment 2", score: 92, maxScore: 100, weight: 10 },
        { name: "Quiz 1", score: 78, maxScore: 100, weight: 5 },
        { name: "Midterm Exam", score: 88, maxScore: 100, weight: 25 },
        { name: "Final Project", score: 95, maxScore: 100, weight: 30 },
        { name: "Final Exam", score: 90, maxScore: 100, weight: 20 },
      ],
    },
    {
      courseId: "2",
      assignments: [
        { name: "Assignment 1", score: 75, maxScore: 100, weight: 15 },
        { name: "Assignment 2", score: 82, maxScore: 100, weight: 15 },
        { name: "Quiz 1", score: 90, maxScore: 100, weight: 10 },
        { name: "Midterm Exam", score: 85, maxScore: 100, weight: 30 },
        { name: "Final Project", score: null, maxScore: 100, weight: 30 },
      ],
    },
    {
      courseId: "3",
      assignments: [
        { name: "Assignment 1", score: 95, maxScore: 100, weight: 20 },
        { name: "Quiz 1", score: 88, maxScore: 100, weight: 10 },
        { name: "Quiz 2", score: 92, maxScore: 100, weight: 10 },
        { name: "Final Project", score: null, maxScore: 100, weight: 60 },
      ],
    },
  ]

  // Calculate weighted average for a course
  const calculateCourseGrade = (assignments: any[]) => {
    const completedAssignments = assignments.filter((a) => a.score !== null)
    if (completedAssignments.length === 0) return "N/A"

    const totalWeight = completedAssignments.reduce((sum, a) => sum + a.weight, 0)
    const weightedSum = completedAssignments.reduce((sum, a) => sum + (a.score / a.maxScore) * a.weight, 0)

    return totalWeight > 0 ? Math.round((weightedSum / totalWeight) * 100) : "N/A"
  }

  // Get letter grade based on percentage
  const getLetterGrade = (percentage: number | string) => {
    if (percentage === "N/A") return "N/A"
    if (typeof percentage === "string") return "N/A"

    if (percentage >= 90) return "A"
    if (percentage >= 80) return "B"
    if (percentage >= 70) return "C"
    if (percentage >= 60) return "D"
    return "F"
  }

  return (
    <div>
      <Header isAuthenticated onLogout={onLogout} />
      <div className="container page-container">
        <div className={styles.gradesHeader}>
          <h1>My Grades</h1>
          <p>View your academic performance across all courses</p>
        </div>

        <div className={styles.gradeSummary}>
          <div className={styles.summaryCard}>
            <h3>Overall GPA</h3>
            <p className={styles.summaryValue}>3.7</p>
          </div>
          <div className={styles.summaryCard}>
            <h3>Courses Completed</h3>
            <p className={styles.summaryValue}>5</p>
          </div>
          <div className={styles.summaryCard}>
            <h3>Current Courses</h3>
            <p className={styles.summaryValue}>{courseData.length}</p>
          </div>
        </div>

        <div className={styles.courseGrades}>
          {grades.map((courseGrade) => {
            const course = courseData.find((c) => c.id === courseGrade.courseId)
            const courseAverage = calculateCourseGrade(courseGrade.assignments)
            const letterGrade = getLetterGrade(courseAverage)

            return (
              <div key={courseGrade.courseId} className={styles.courseGradeCard}>
                <div className={styles.courseHeader}>
                  <h2>{course?.title}</h2>
                  <div className={styles.courseGrade}>
                    <span className={styles.percentage}>{courseAverage}%</span>
                    <span className={styles.letter}>{letterGrade}</span>
                  </div>
                </div>

                <div className={styles.assignmentList}>
                  <div className={styles.assignmentHeader}>
                    <span>Assignment</span>
                    <span>Score</span>
                    <span>Weight</span>
                  </div>

                  {courseGrade.assignments.map((assignment, index) => (
                    <div key={index} className={styles.assignmentItem}>
                      <span className={styles.assignmentName}>{assignment.name}</span>
                      <span className={styles.assignmentScore}>
                        {assignment.score !== null ? `${assignment.score}/${assignment.maxScore}` : "Not graded"}
                      </span>
                      <span className={styles.assignmentWeight}>{assignment.weight}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Grades

