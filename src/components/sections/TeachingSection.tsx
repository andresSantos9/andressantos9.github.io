import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const courses = [
  {
    code: "CS 501",
    name: "Advanced Machine Learning",
    semester: "Fall 2024",
    level: "Graduate",
    institution: "University of Technology",
  },
  {
    code: "CS 401",
    name: "Natural Language Processing",
    semester: "Spring 2024",
    level: "Graduate",
    institution: "University of Technology",
  },
  {
    code: "CS 201",
    name: "Introduction to Artificial Intelligence",
    semester: "Fall 2023",
    level: "Undergraduate",
    institution: "University of Technology",
  },
  {
    code: "CS 502",
    name: "Deep Learning for NLP",
    semester: "Spring 2023",
    level: "Graduate",
    institution: "University of Technology",
  },
  {
    code: "CS 101",
    name: "Programming Fundamentals",
    semester: "Fall 2022",
    level: "Undergraduate",
    institution: "University of Technology",
  },
  {
    code: "CS 401",
    name: "Natural Language Processing",
    semester: "Spring 2022",
    level: "Graduate",
    institution: "University of Technology",
  },
];

export function TeachingSection() {
  return (
    <section id="teaching" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Teaching
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-8" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I am passionate about teaching and mentoring the next generation of computer
              scientists. Below is a selection of courses I have taught.
            </p>
          </div>

          <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-serif font-semibold text-primary">Code</TableHead>
                  <TableHead className="font-serif font-semibold text-primary">Course Name</TableHead>
                  <TableHead className="font-serif font-semibold text-primary hidden md:table-cell">
                    Level
                  </TableHead>
                  <TableHead className="font-serif font-semibold text-primary">Semester</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course, index) => (
                  <TableRow key={index} className="hover:bg-muted/30">
                    <TableCell className="font-mono text-sm text-accent font-medium">
                      {course.code}
                    </TableCell>
                    <TableCell className="font-medium">{course.name}</TableCell>
                    <TableCell className="text-muted-foreground hidden md:table-cell">
                      {course.level}
                    </TableCell>
                    <TableCell className="text-muted-foreground">{course.semester}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}
