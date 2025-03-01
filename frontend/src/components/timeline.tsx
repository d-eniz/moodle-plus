import { Link } from "react-router-dom"
import {
  Bell,
  BookOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

// Placeholder data
const events = [
  {
    id: "1",
    title: "CS101 Assignment #3 Due",
    course: "Introduction to Computer Science",
    date: "2023-11-15",
    time: "11:59 PM",
    type: "assignment",
  },
  {
    id: "2",
    title: "HIST201 Lecture",
    course: "World History",
    date: "2023-11-15",
    time: "1:30 PM",
    type: "lecture",
  },
  {
    id: "3",
    title: "MATH301 Office Hours",
    course: "Advanced Mathematics",
    date: "2023-11-15",
    time: "3:00 PM",
    type: "office_hours",
  },
  {
    id: "4",
    title: "CHEM202 Lab Session",
    course: "Organic Chemistry",
    date: "2023-11-16",
    time: "10:00 AM",
    type: "lab",
  },
  {
    id: "5",
    title: "CS101 Lecture",
    course: "Introduction to Computer Science",
    date: "2023-11-16",
    time: "2:00 PM",
    type: "lecture",
  },
  {
    id: "6",
    title: "HIST201 Essay Due",
    course: "World History",
    date: "2023-11-17",
    time: "5:00 PM",
    type: "assignment",
  },
  {
    id: "7",
    title: "MATH301 Midterm Exam",
    course: "Advanced Mathematics",
    date: "2023-11-20",
    time: "9:00 AM",
    type: "exam",
  },
]

const upcomingEvents = [
  {
    id: "1",
    title: "CS101 Assignment #3",
    course: "Introduction to Computer Science",
    dueDate: "Tomorrow, 11:59 PM",
    type: "assignment",
  },
  {
    id: "2",
    title: "HIST201 Essay",
    course: "World History",
    dueDate: "Friday, 5:00 PM",
    type: "assignment",
  },
  {
    id: "3",
    title: "MATH301 Midterm Exam",
    course: "Advanced Mathematics",
    dueDate: "Next Monday, 9:00 AM",
    type: "exam",
  },
]

// Generate days for the calendar
const generateCalendarDays = () => {
  const days = []
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()

  // Get the first day of the month
  const firstDay = new Date(currentYear, currentMonth, 1)
  const lastDay = new Date(currentYear, currentMonth + 1, 0)

  // Get the day of the week for the first day (0 = Sunday, 6 = Saturday)
  const firstDayOfWeek = firstDay.getDay()

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push({ day: "", date: null, events: [] })
  }

  // Add days of the month
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = new Date(currentYear, currentMonth, i)
    const dateString = date.toISOString().split("T")[0]

    // Find events for this day
    const dayEvents = events.filter((event) => event.date === dateString)

    days.push({
      day: i,
      date: date,
      isToday: i === today.getDate(),
      events: dayEvents,
    })
  }

  return days
}

const calendarDays = generateCalendarDays()

export function Timeline() {
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
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-orange-100 hover:text-orange-900 dark:hover:bg-blue-900 dark:hover:text-blue-50"
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
              className="flex items-center gap-3 rounded-lg bg-orange-100 px-3 py-2 text-orange-900 transition-all dark:bg-blue-900 dark:text-blue-50"
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
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Timeline</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous month</span>
              </Button>
              <div className="text-sm font-medium">
                {new Date().toLocaleString("default", { month: "long", year: "numeric" })}
              </div>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next month</span>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>View your schedule and upcoming events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-sm font-medium">
                      {day}
                    </div>
                  ))}
                  {calendarDays.map((day, index) => (
                    <div
                      key={index}
                      className={`aspect-square rounded-md p-1 text-sm ${
                        day.isToday
                          ? "bg-orange-100 font-bold text-orange-900 dark:bg-blue-900 dark:text-blue-50"
                          : day.day
                            ? "hover:bg-muted"
                            : ""
                      }`}
                    >
                      {day.day && (
                        <>
                          <div className="text-center">{day.day}</div>
                          {day.events.length > 0 && (
                            <div className="mt-1 flex justify-center gap-0.5">
                              {day.events.slice(0, 3).map((event, i) => (
                                <div
                                  key={i}
                                  className={`h-1.5 w-1.5 rounded-full ${
                                    event.type === "assignment"
                                      ? "bg-orange-500 dark:bg-blue-400"
                                      : event.type === "exam"
                                        ? "bg-red-500"
                                        : event.type === "lecture"
                                          ? "bg-green-500"
                                          : "bg-purple-500"
                                  }`}
                                />
                              ))}
                              {day.events.length > 3 && <div className="h-1.5 w-1.5 rounded-full bg-gray-400" />}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
                <CardDescription>Assignments and exams due soon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-center gap-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          event.type === "assignment"
                            ? "bg-orange-100 text-orange-500 dark:bg-blue-900 dark:text-blue-400"
                            : "bg-red-100 text-red-500 dark:bg-red-900 dark:text-red-400"
                        }`}
                      >
                        {event.type === "assignment" ? (
                          <FileText className="h-5 w-5" />
                        ) : (
                          <GraduationCap className="h-5 w-5" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{event.title}</p>
                        <p className="text-xs text-muted-foreground">{event.course}</p>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{event.dueDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>Your classes and events for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events
                  .filter((event) => event.date === new Date().toISOString().split("T")[0])
                  .sort((a, b) => a.time.localeCompare(b.time))
                  .map((event) => (
                    <div key={event.id} className="flex items-center gap-4 rounded-lg border p-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          event.type === "lecture"
                            ? "bg-green-100 text-green-500 dark:bg-green-900 dark:text-green-400"
                            : event.type === "assignment"
                              ? "bg-orange-100 text-orange-500 dark:bg-blue-900 dark:text-blue-400"
                              : event.type === "office_hours"
                                ? "bg-purple-100 text-purple-500 dark:bg-purple-900 dark:text-purple-400"
                                : "bg-red-100 text-red-500 dark:bg-red-900 dark:text-red-400"
                        }`}
                      >
                        {event.type === "lecture" ? (
                          <BookOpen className="h-5 w-5" />
                        ) : event.type === "assignment" ? (
                          <FileText className="h-5 w-5" />
                        ) : event.type === "office_hours" ? (
                          <User className="h-5 w-5" />
                        ) : (
                          <GraduationCap className="h-5 w-5" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{event.title}</p>
                        <p className="text-xs text-muted-foreground">{event.course}</p>
                      </div>
                      <div className="text-sm">{event.time}</div>
                    </div>
                  ))}
                {events.filter((event) => event.date === new Date().toISOString().split("T")[0]).length === 0 && (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <Calendar className="h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">No events today</h3>
                    <p className="text-sm text-muted-foreground">
                      Enjoy your free day or get ahead on your assignments!
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

