import { Link } from "react-router-dom"
import {
  Bell,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Settings,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { ThemeToggle } from "../theme-toggle";


// Placeholder data
const courses = [
  {
    id: "1",
    title: "Introduction to Computer Science",
    code: "CS101",
    instructor: "Dr. Alan Turing",
    progress: 65,
    nextLesson: "Algorithm Basics",
    nextLessonDate: "Today, 2:00 PM",
  },
  {
    id: "2",
    title: "Advanced Mathematics",
    code: "MATH301",
    instructor: "Dr. Katherine Johnson",
    progress: 42,
    nextLesson: "Differential Equations",
    nextLessonDate: "Tomorrow, 10:00 AM",
  },
  {
    id: "3",
    title: "World History",
    code: "HIST201",
    instructor: "Prof. Howard Zinn",
    progress: 78,
    nextLesson: "Industrial Revolution",
    nextLessonDate: "Wednesday, 1:30 PM",
  },
  {
    id: "4",
    title: "Organic Chemistry",
    code: "CHEM202",
    instructor: "Dr. Marie Curie",
    progress: 30,
    nextLesson: "Carbon Compounds",
    nextLessonDate: "Friday, 11:00 AM",
  },
]

const announcements = [
  {
    id: "1",
    title: "System Maintenance",
    description: "The system will be down for maintenance on Saturday from 2 AM to 4 AM.",
    date: "2 days ago",
  },
  {
    id: "2",
    title: "New Course Materials",
    description: "New materials for CS101 have been uploaded. Please review before next class.",
    date: "Yesterday",
  },
  {
    id: "3",
    title: "Upcoming Exam",
    description: "Reminder: MATH301 midterm exam is scheduled for next Monday.",
    date: "Just now",
  },
]

const upcomingDeadlines = [
  {
    id: "1",
    title: "CS101 Assignment #3",
    course: "Introduction to Computer Science",
    dueDate: "Tomorrow, 11:59 PM",
  },
  {
    id: "2",
    title: "HIST201 Essay",
    course: "World History",
    dueDate: "Friday, 5:00 PM",
  },
  {
    id: "3",
    title: "MATH301 Problem Set",
    course: "Advanced Mathematics",
    dueDate: "Next Monday, 9:00 AM",
  },
]

export function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden w-64 flex-col border-r bg-background md:flex">
        <div className="flex h-16 items-center border-b px-4">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-orange-500 dark:text-blue-400" />
            <span className="text-xl font-bold">EduLearn</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-2">
            <Link
              to="/dashboard"
              className="flex items-center gap-3 rounded-lg bg-orange-100 px-3 py-2 text-orange-900 transition-all dark:bg-blue-900 dark:text-blue-50"
            >
              <LayoutDashboard className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              to="/modules/1"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-orange-100 hover:text-orange-900 dark:hover:bg-blue-900 dark:hover:text-blue-50"
            >
              <BookOpen className="h-5 w-5" />
              Modules
            </Link>
            <Link
              to="/grades"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-orange-100 hover:text-orange-900 dark:hover:bg-blue-900 dark:hover:text-blue-50"
            >
              <GraduationCap className="h-5 w-5" />
              Grades
            </Link>
            <Link
              to="/timeline"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-orange-100 hover:text-orange-900 dark:hover:bg-blue-900 dark:hover:text-blue-50"
            >
              <Calendar className="h-5 w-5" />
              Timeline
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-orange-100 hover:text-orange-900 dark:hover:bg-blue-900 dark:hover:text-blue-50"
            >
              <FileText className="h-5 w-5" />
              Assignments
            </Link>
            <Link
              to="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-orange-100 hover:text-orange-900 dark:hover:bg-blue-900 dark:hover:text-blue-50"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </div>
        <div className="border-t p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium leading-none">John Smith</p>
              <p className="text-xs text-muted-foreground truncate">john.smith@example.com</p>
            </div>
            <Link to="/">
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
                <span className="sr-only">Log out</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="flex-1">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <div className="flex items-center md:hidden">
            <BookOpen className="h-6 w-6 text-orange-500 dark:text-blue-400" />
            <span className="ml-2 text-xl font-bold">EduLearn</span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <ThemeToggle />
            <Avatar className="md:hidden">
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="grid gap-6 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{courses.length}</div>
                <p className="text-xs text-muted-foreground">+2 courses this semester</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Assignments Due</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{upcomingDeadlines.length}</div>
                <p className="text-xs text-muted-foreground">1 due tomorrow</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Average Grade</CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <p className="text-xs text-muted-foreground">+2.5% from last semester</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Study Hours</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.5</div>
                <p className="text-xs text-muted-foreground">This week</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>My Courses</CardTitle>
                <CardDescription>Your enrolled courses and progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courses.map((course) => (
                    <div key={course.id} className="flex items-center gap-4">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium leading-none">{course.title}</p>
                          <span className="text-xs text-muted-foreground">({course.code})</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{course.instructor}</div>
                        <div className="flex items-center gap-2 pt-1">
                          <Progress value={course.progress} className="h-2" />
                          <span className="text-xs font-medium">{course.progress}%</span>
                        </div>
                      </div>
                      <Link to={`/modules/${course.id}`}>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-4 w-4" />
                          <span className="sr-only">View course</span>
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Announcements</CardTitle>
                <CardDescription>Latest updates and notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {announcements.map((announcement) => (
                    <div key={announcement.id} className="flex flex-col space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium leading-none">{announcement.title}</p>
                        <span className="text-xs text-muted-foreground">({announcement.date})</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{announcement.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
              <CardDescription>Assignments and exams due soon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingDeadlines.map((deadline) => (
                  <div key={deadline.id} className="flex items-center gap-4">
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">{deadline.title}</p>
                      <p className="text-xs text-muted-foreground">{deadline.course}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{deadline.dueDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

