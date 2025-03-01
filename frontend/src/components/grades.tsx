import { Link } from "react-router-dom"
import {
  Bell,
  BookOpen,
  Calendar,
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Settings,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ThemeToggle } from "@/components/theme-toggle"

// Placeholder data
const courses = [
  {
    id: "1",
    title: "Introduction to Computer Science",
    code: "CS101",
    instructor: "Dr. Alan Turing",
    grades: [
      { id: "1", title: "Assignment #1", score: 92, total: 100, weight: 10 },
      { id: "2", title: "Assignment #2", score: 88, total: 100, weight: 10 },
      { id: "3", title: "Midterm Exam", score: 85, total: 100, weight: 30 },
      { id: "4", title: "Assignment #3", score: null, total: 100, weight: 10 },
      { id: "5", title: "Final Project", score: null, total: 100, weight: 20 },
      { id: "6", title: "Final Exam", score: null, total: 100, weight: 20 },
    ],
  },
  {
    id: "2",
    title: "Advanced Mathematics",
    code: "MATH301",
    instructor: "Dr. Katherine Johnson",
    grades: [
      { id: "1", title: "Problem Set #1", score: 78, total: 100, weight: 10 },
      { id: "2", title: "Problem Set #2", score: 82, total: 100, weight: 10 },
      { id: "3", title: "Midterm Exam", score: 76, total: 100, weight: 30 },
      { id: "4", title: "Problem Set #3", score: null, total: 100, weight: 10 },
      { id: "5", title: "Final Exam", score: null, total: 100, weight: 40 },
    ],
  },
  {
    id: "3",
    title: "World History",
    code: "HIST201",
    instructor: "Prof. Howard Zinn",
    grades: [
      { id: "1", title: "Essay #1", score: 90, total: 100, weight: 15 },
      { id: "2", title: "Midterm Exam", score: 88, total: 100, weight: 25 },
      { id: "3", title: "Essay #2", score: 92, total: 100, weight: 15 },
      { id: "4", title: "Research Paper", score: null, total: 100, weight: 20 },
      { id: "5", title: "Final Exam", score: null, total: 100, weight: 25 },
    ],
  },
  {
    id: "4",
    title: "Organic Chemistry",
    code: "CHEM202",
    instructor: "Dr. Marie Curie",
    grades: [
      { id: "1", title: "Lab Report #1", score: 85, total: 100, weight: 10 },
      { id: "2", title: "Quiz #1", score: 78, total: 100, weight: 5 },
      { id: "3", title: "Lab Report #2", score: 88, total: 100, weight: 10 },
      { id: "4", title: "Midterm Exam", score: 72, total: 100, weight: 25 },
      { id: "5", title: "Lab Report #3", score: null, total: 100, weight: 10 },
      { id: "6", title: "Quiz #2", score: null, total: 100, weight: 5 },
      { id: "7", title: "Final Exam", score: null, total: 100, weight: 35 },
    ],
  },
]

// Calculate current grade for a course
const calculateCurrentGrade = (grades: any[]) => {
  let totalWeightedScore = 0
  let totalWeight = 0

  grades.forEach((grade) => {
    if (grade.score !== null) {
      totalWeightedScore += (grade.score / grade.total) * grade.weight
      totalWeight += grade.weight
    }
  })

  if (totalWeight === 0) return 0
  return (totalWeightedScore / totalWeight) * 100
}

// Calculate potential final grade
const calculatePotentialGrade = (grades: any[]) => {
  const totalWeightedScore = 0
  const totalWeight = 0

  grades.forEach(grade => {\
    if (grade.score  => {
  let totalWeightedScore = 0
  let totalWeight = 0

  grades.forEach(grade => {
    if (grade.score !== null) {
      totalWeightedScore += (grade.score / grade.total) * grade.weight
      totalWeight += grade.weight
    } else {
      // Assume 85% for remaining assignments
      totalWeightedScore += 0.85 * grade.weight
      totalWeight += grade.weight
    }
  })

  if (totalWeight === 0) return 0
  return (totalWeightedScore / totalWeight) * 100
}

export function Grades() {
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
              className="flex items-center gap-3 rounded-lg bg-orange-100 px-3 py-2 text-orange-900 transition-all dark:bg-blue-900 dark:text-blue-50"
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
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Grades</h1>
            <div className="flex items-center gap-2">
              <Select defaultValue="current">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current">Current Term</SelectItem>
                  <SelectItem value="previous">Previous Term</SelectItem>
                  <SelectItem value="all">All Terms</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Overall GPA</CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.7</div>
                <p className="text-xs text-muted-foreground">
                  +0.2 from last term
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Current Term Average</CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <p className="text-xs text-muted-foreground">
                  Based on completed assessments
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Completed Assessments</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12/24</div>
                <p className="text-xs text-muted-foreground">
                  50% completion rate
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Highest Grade</CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92%</div>
                <p className="text-xs text-muted-foreground">
                  HIST201 Essay #2
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4">
            {courses.map((course) => {
              const currentGrade = calculateCurrentGrade(course.grades)
              const potentialGrade = calculatePotentialGrade(course.grades)
              
              return (
                <Card key={course.id} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription>{course.code} • {course.instructor}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{currentGrade.toFixed(1)}%</div>
                        <p className="text-xs text-muted-foreground">Current Grade</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Current Grade</span>
                        <span className="text-sm font-medium">{currentGrade.toFixed(1)}%</span>
                      </div>
                      <Progress value={currentGrade} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Potential Final Grade</span>
                        <span className="text-sm font-medium">{potentialGrade.toFixed(1)}%</span>
                      </div>
                      <Progress value={potentialGrade} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <h4 className="text-sm font-medium">Assessments</h4>
                        <Button variant="ghost" size="sm" className="ml-auto h-8 gap-1">
                          <span className="text-xs">Details</span>
                          <ChevronDown className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="space-y-2">
                        {course.grades.slice(0, 3).map((grade) => (
                          <div key={grade.id} className="flex items-center justify-between text-sm">
                            <span>{grade.title}</span>
                            <span className="font-medium">
                              {grade.score !== null ? `${grade.score}/${grade.total}` : "Not graded"}
                            </span>
                          </div>
                        ))}
                        {course.grades.length > 3 && (
                          <div className="text-center text-xs text-muted-foreground">
                            + {course.grades.length - 3} more assessments
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </main>
      </div>
    </div>
  )
}

