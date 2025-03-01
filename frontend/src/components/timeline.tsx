import { useState } from "react"
import Header from "./Header"
import styles from "./Timeline.module.css"

interface TimelineProps {
  onLogout: () => void
}

interface Event {
  id: string
  title: string
  date: Date
  type: "assignment" | "exam" | "lecture" | "meeting"
  course: string
  description: string
}

const Timeline = ({ onLogout }: TimelineProps) => {
  // Sample timeline data
  const today = new Date()
  const events: Event[] = [
    {
      id: "1",
      title: "Assignment 3 Due",
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2),
      type: "assignment",
      course: "Introduction to Programming",
      description: "Submit your solution to the programming problems in Chapter 5.",
    },
    {
      id: "2",
      title: "Midterm Exam",
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5),
      type: "exam",
      course: "Data Structures",
      description: "Covers all material from Weeks 1-6. Bring your student ID and a calculator.",
    },
    {
      id: "3",
      title: "Group Project Meeting",
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
      type: "meeting",
      course: "Web Development Fundamentals",
      description: "Meet with your team to discuss progress on the final project.",
    },
    {
      id: "4",
      title: "Guest Lecture: Industry Insights",
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3),
      type: "lecture",
      course: "Introduction to Programming",
      description: "Special guest lecture by industry expert on real-world applications.",
    },
    {
      id: "5",
      title: "Quiz 2",
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7),
      type: "exam",
      course: "Web Development Fundamentals",
      description: "Short quiz covering HTML, CSS, and basic JavaScript concepts.",
    },
    {
      id: "6",
      title: "Final Project Proposal Due",
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10),
      type: "assignment",
      course: "Data Structures",
      description: "Submit a 2-page proposal for your final project, including objectives and methodology.",
    },
  ]

  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => a.date.getTime() - b.date.getTime())

  // Filter options
  const [filter, setFilter] = useState<string>("all")

  // Filter events based on selected filter
  const filteredEvents = filter === "all" ? sortedEvents : sortedEvents.filter((event) => event.type === filter)

  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
  }

  // Calculate days until event
  const getDaysUntil = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const eventDate = new Date(date)
    eventDate.setHours(0, 0, 0, 0)

    const diffTime = eventDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return "Today"
    if (diffDays === 1) return "Tomorrow"
    return `In ${diffDays} days`
  }

  // Get icon for event type
  const getEventIcon = (type: string) => {
    switch (type) {
      case "assignment":
        return "📝"
      case "exam":
        return "📚"
      case "lecture":
        return "🎓"
      case "meeting":
        return "👥"
      default:
        return "📅"
    }
  }

  return (
    <div>
      <Header isAuthenticated onLogout={onLogout} />
      <div className="container page-container">
        <div className={styles.timelineHeader}>
          <h1>Timeline</h1>
          <p>Keep track of upcoming events and deadlines</p>
        </div>

        <div className={styles.filterContainer}>
          <div className={styles.filterButtons}>
            <button
              className={`${styles.filterButton} ${filter === "all" ? styles.active : ""}`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`${styles.filterButton} ${filter === "assignment" ? styles.active : ""}`}
              onClick={() => setFilter("assignment")}
            >
              Assignments
            </button>
            <button
              className={`${styles.filterButton} ${filter === "exam" ? styles.active : ""}`}
              onClick={() => setFilter("exam")}
            >
              Exams
            </button>
            <button
              className={`${styles.filterButton} ${filter === "lecture" ? styles.active : ""}`}
              onClick={() => setFilter("lecture")}
            >
              Lectures
            </button>
            <button
              className={`${styles.filterButton} ${filter === "meeting" ? styles.active : ""}`}
              onClick={() => setFilter("meeting")}
            >
              Meetings
            </button>
          </div>
        </div>

        <div className={styles.timelineContainer}>
          {filteredEvents.length > 0 ? (
            <div className={styles.timeline}>
              {filteredEvents.map((event) => (
                <div key={event.id} className={styles.timelineItem}>
                  <div className={styles.timelineDate}>
                    <div className={styles.dateInfo}>
                      <span className={styles.dateDay}>{formatDate(event.date)}</span>
                      <span className={styles.daysUntil}>{getDaysUntil(event.date)}</span>
                    </div>
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.eventIcon}>{getEventIcon(event.type)}</div>
                    <div className={styles.eventDetails}>
                      <h3>{event.title}</h3>
                      <span className={styles.eventCourse}>{event.course}</span>
                      <p className={styles.eventDescription}>{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noEvents}>
              <p>No events found for the selected filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Timeline

