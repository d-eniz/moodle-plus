import { useParams, Link } from "react-router-dom"
import {
  ArrowLeft,
  Bell,
  BookOpen,
  Calendar,
  Check,
  ChevronRight,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Play,
  Settings,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"

// Placeholder data for a specific module
const moduleData = {
  id: "1",
  title: "Introduction to Computer Science",
  code: "CS101",
  instructor: "Dr. Alan Turing",
  description:
    "This course provides a broad introduction to computer science and programming. Students will learn fundamental concepts of computing and develop basic programming skills.",
  progress: 65,
  sections: [
    {
      id: "1",
      title: "Getting Started with Programming",
      lessons: [
        {
          id: "1",
          title: "Introduction to Programming Concepts",
          type: "video",
          duration: "45 min",
          completed: true,
        },
        {
          id: "2",
          title: "Setting Up Your Development Environment",
          type: "reading",
          duration: "20 min",
          completed: true,
        },
        {
          id: "3",
          title: "Your First Program",
          type: "interactive",
          duration: "30 min",
          completed: false,
        },
      ],
    },
    {
      id: "2",
      title: "Basic Programming Constructs",
      lessons: [
        {
          id: "4",
          title: "Variables and Data Types",
          type: "video",
          duration: "40 min",
          completed: true,
        },
        {
          id: "5",
          title: "Control Structures",
          type: "reading",
          duration: "35 min",
          completed: false,
        },
        {
          id: "6",
          title: "Functions and Methods",
          type: "video",
          duration: "50 min",
          completed: false,
        },
      ],
    },
    {
      id: "3",
      title: "Algorithm Basics",
      lessons: [
        {
          id: "7",
          title: "Introduction to Algorithms",
          type: "video",
          duration: "55 min",
          completed: false,
        },
        {
          id: "8",
          title: "Sorting Algorithms",
          type: "interactive",
          duration: "45 min",
          completed: false,
        },
        {
          id: "9",
          title: "Search Algorithms",
          type: "reading",
          duration: "30 min",
          completed: false,
        },
      ],
    },
  ],
  assignments: [
    {
      id: "1",
      title: "Assignment #1: Programming Basics",
      dueDate: "Completed on Oct 15",
      grade: "92/100",
      status: "completed",
    },
    {
      id: "2",
      title: "Assignment #2: Control Structures",
      dueDate: "Completed on Nov 5",
      grade: "88/100",
      status: "completed",
    },
    {
      id: "3",
      title: "Assignment #3: Functions and Methods",
      dueDate: "Due Tomorrow, 11:59 PM",
      status: "pending",
    },
  ],
}

export function ModulePage() {
  const { id } = useParams<{ id: string }>()
  // In a real app, you would fetch the module data based on the id
  const module = moduleData

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
              className="flex items-center gap-3 rounded-lg bg-orange-100 px-3 py-2 text-orange-900 transition-all dark:bg-blue-900 dark:text-blue-50"
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
          <Link to="/dashboard" className="flex items-center gap-2 md:hidden">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to Dashboard</span>
          </Link>
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
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Link to="/dashboard" className="hidden md:block">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                  <span className="sr-only">Back to Dashboard</span>
                </Button>
              </Link>
              <h1 className="text-2xl font-bold tracking-tight">{module.title}</h1>
              <span className="text-sm text-muted-foreground">({module.code})</span>
            </div>
            <p className="text-sm text-muted-foreground">Instructor: {module.instructor}</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Course Progress</CardTitle>
              <CardDescription>Track your progress through the course materials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Progress value={module.progress} className="h-2 flex-1" />
                <span className="text-sm font-medium">{module.progress}% Complete</span>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="content">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="content">Course Content</TabsTrigger>
              <TabsTrigger value="assignments">Assignments</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            <TabsContent value="content" className="space-y-4">
              {module.sections.map((section) => (
                <Card key={section.id}>
                  <CardHeader>
                    <CardTitle>{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {section.lessons.map((lesson) => (
                        <div key={lesson.id} className="flex items-center gap-4 rounded-lg border p-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-blue-900 dark:text-blue-400">
                            {lesson.type === "video" ? (
                              <Play className="h-5 w-5" />
                            ) : lesson.type === "reading" ? (
                              <FileText className="h-5 w-5" />
                            ) : (
                              <BookOpen className="h-5 w-5" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-medium">{lesson.title}</p>
                              {lesson.completed && (
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                                  <Check className="h-3 w-3" />
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground capitalize">{lesson.type}</span>
                              <span className="text-xs text-muted-foreground">•</span>
                              <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon">
                            <ChevronRight className="h-4 w-4" />
                            <span className="sr-only">View lesson</span>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="assignments" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Course Assignments</CardTitle>
                  <CardDescription>View and submit your assignments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {module.assignments.map((assignment) => (
                      <div key={assignment.id} className="flex items-center gap-4 rounded-lg border p-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-blue-900 dark:text-blue-400">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{assignment.title}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">{assignment.dueDate}</span>
                            {assignment.grade && (
                              <>
                                <span className="text-xs text-muted-foreground">•</span>
                                <span className="text-xs text-muted-foreground">Grade: {assignment.grade}</span>
                              </>
                            )}
                          </div>
                        </div>
                        <Button
                          variant={assignment.status === "pending" ? "default" : "outline"}
                          className={
                            assignment.status === "pending"
                              ? "bg-orange-500 hover:bg-orange-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                              : ""
                          }
                        >
                          {assignment.status === "pending" ? "Submit" : "View"}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="resources" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Course Resources</CardTitle>
                  <CardDescription>Additional materials to support your learning</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 rounded-lg border p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-blue-900 dark:text-blue-400">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Course Syllabus</p>
                        <p className="text-xs text-muted-foreground">PDF, 256KB</p>
                      </div>
                      <Button variant="outline">Download</Button>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-blue-900 dark:text-blue-400">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Textbook Reference</p>
                        <p className="text-xs text-muted-foreground">PDF, 1.2MB</p>
                      </div>
                      <Button variant="outline">Download</Button>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-blue-900 dark:text-blue-400">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Lecture Slides</p>
                        <p className="text-xs text-muted-foreground">ZIP, 4.5MB</p>
                      </div>
                      <Button variant="outline">Download</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

