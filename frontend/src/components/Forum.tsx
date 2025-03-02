import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import styles from "./Forum.module.css";
import { courseData } from "../data/courseData";

interface ForumProps {
  onLogout: () => void;
}

const sampleDiscussions = {
  "1": [
    { id: "101", title: "Best resources for learning Python?", author: "Alice", replies: 5 },
    { id: "102", title: "How to debug JavaScript effectively?", author: "Bob", replies: 3 }
  ],
  "2": [
    { id: "201", title: "Understanding Linked Lists", author: "Charlie", replies: 7 },
    { id: "202", title: "Is recursion better than iteration?", author: "David", replies: 4 }
  ],
  "3": [
    { id: "301", title: "CSS Grid vs Flexbox", author: "Eve", replies: 6 },
    { id: "302", title: "How do APIs work in full-stack development?", author: "Frank", replies: 8 }
  ]
};

const Forum = ({ onLogout }: ForumProps) => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  return (
    <div>
      <Header isAuthenticated onLogout={onLogout} />
      <div className="container page-container">
        <div className={styles.forumHeader}>
          <h1>Course Discussions</h1>
          <p>View and participate in discussions for each course module</p>
          <div className={styles.headerUnderline}></div>
        </div>

        {/* Sidebar with modules */}
        <div className={styles.forumLayout}>
          <aside className={styles.modulesSidebar}>
            <h2>Modules</h2>
            {courseData.map((course) => (
              <button
                key={course.id}
                className={`${styles.moduleButton} ${selectedModule === course.id ? styles.active : ""}`}
                onClick={() => setSelectedModule(course.id)}
              >
                {course.title}
              </button>
            ))}
          </aside>

          {/* Display Discussions */}
          <div className={styles.discussionsContainer}>
            {selectedModule ? (
              <>
                <h2 className={styles.moduleTitle}>Discussions for {courseData.find((c) => c.id === selectedModule)?.title}</h2>
                {sampleDiscussions[selectedModule] ? (
                  sampleDiscussions[selectedModule].map((discussion) => (
                    <div key={discussion.id} className={styles.discussionCard}>
                      <h3>{discussion.title}</h3>
                      <p className={styles.discussionMeta}>
                        Started by <strong>{discussion.author}</strong> | {discussion.replies} replies
                      </p>
                      <Link to={`/forum/${selectedModule}/${discussion.id}`} className={styles.viewDiscussion}>
                        View Discussion
                      </Link>
                    </div>
                  ))
                ) : (
                  <p>No discussions yet for this module.</p>
                )}
              </>
            ) : (
              <p>Select a module to view discussions.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
