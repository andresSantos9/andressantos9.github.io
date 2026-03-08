import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users } from "lucide-react";

const bachelorCourses = [
  { code: "—", name: "Programming (Lab)", semester: "Fall 2018 – Fall 2022", institution: "UC3M" },
  { code: "—", name: "Interactive Systems Design (Lab)", semester: "Spring 2018, Spring 2019", institution: "UC3M" },
  { code: "—", name: "Advanced Knowledge of Spreadsheets (Theory & Lab)", semester: "Spring 2021", institution: "UC3M" },
  { code: "—", name: "User Interfaces (Theory & Lab)", semester: "Fall 2022, Fall 2023", institution: "UC3M" },
  { code: "—", name: "Web Developing Techniques (Theory & Lab)", semester: "Fall 2023", institution: "UC3M" },
  { code: "—", name: "Ubiquitous and Interactive Systems (Teacher Manager)", semester: "Spring 2024", institution: "UC3M" },
  { code: "—", name: "Interaction and Multimedia (Theory & Lab)", semester: "Spring 2025 - Present", institution: "Deusto University" },
];

const masterCourses = [
  { code: "—", name: "Interactive Product Design and Evaluation (Lab)", semester: "Spring 2018", institution: "UC3M" },
];

const supervision = [
  { period: "2023 – 2026", student: "Amal Al Shardy (External Co-supervisor)", institution: "Monash University", topic: "Leveraging Immersive Technology to Enhance Net Zero Transition Initiatives (Ongoing).", type: "Ph.D." },
  { period: "2024", student: "Ibon Urkiza Fernandez (Supervisor)", institution: "Vicomtech Foundation", topic: "Development of Immersive Analytic interfaces for network data visualization.", type: "Internship" },
  { period: "2022 – 2023", student: "Carlos Fernandez Carchenilla", institution: "UC3M", topic: "Immersive VR visualization of heart rate in real-time using IoT sensors.", type: "B.Sc. Thesis" },
  { period: "2022 – 2023", student: "Diego Muñoz del Val", institution: "UC3M", topic: "Immersive collaborative bulletin board using augmented reality.", type: "B.Sc. Thesis" },
  { period: "2021 – 2022", student: "Daniel Anton Blazquez", institution: "UC3M", topic: "Distributed system for environmental conditions of medical batches using LoRaWAN and web services.", type: "B.Sc. Thesis" },
];

export function TeachingSection() {
  return (
    <section id="teaching" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Teaching & Supervision
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-8" />
          </div>

          {/* Bachelor Courses */}
          <h3 className="text-xl font-serif font-semibold text-primary mb-4">Bachelor Courses</h3>
          <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden mb-8">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-serif font-semibold text-primary">Course</TableHead>
                  <TableHead className="font-serif font-semibold text-primary hidden md:table-cell">Institution</TableHead>
                  <TableHead className="font-serif font-semibold text-primary">Semester(s)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bachelorCourses.map((course, index) => (
                  <TableRow key={index} className="hover:bg-muted/30">
                    <TableCell className="font-medium">{course.name}</TableCell>
                    <TableCell className="text-muted-foreground hidden md:table-cell">{course.institution}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{course.semester}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Master Courses */}
          <h3 className="text-xl font-serif font-semibold text-primary mb-4">Master Courses</h3>
          <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden mb-12">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-serif font-semibold text-primary">Course</TableHead>
                  <TableHead className="font-serif font-semibold text-primary hidden md:table-cell">Institution</TableHead>
                  <TableHead className="font-serif font-semibold text-primary">Semester(s)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {masterCourses.map((course, index) => (
                  <TableRow key={index} className="hover:bg-muted/30">
                    <TableCell className="font-medium">{course.name}</TableCell>
                    <TableCell className="text-muted-foreground hidden md:table-cell">{course.institution}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{course.semester}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Supervision */}
          <h3 className="text-xl font-serif font-semibold text-primary mb-6 flex items-center gap-2">
            <Users className="h-5 w-5 text-accent" />
            Student Supervision
          </h3>
          <div className="space-y-4">
            {supervision.map((item, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-5 shadow-sm">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-accent">{item.period}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground font-medium">{item.type}</span>
                </div>
                <p className="font-medium text-foreground mb-1">{item.student}</p>
                <p className="text-sm text-muted-foreground mb-1">{item.institution}</p>
                <p className="text-sm text-foreground/80 italic">{item.topic}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
