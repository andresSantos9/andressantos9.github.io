import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const employment = [
  {
    role: "Researcher",
    institution: "Vicomtech, Digital Media & Communications",
    department: "Donostia – San Sebastián, Basque Country, Spain",
    period: "2024 – Present",
    description: "Research on immersive environments, commensality, and 6G network visualization.",
  },
  {
    role: "Adjunct Lecturer",
    institution: "Deusto University",
    department: "Donostia – San Sebastián, Basque Country, Spain",
    period: "2025 - Present",
    description: "Teaching Interaction and Multimedia at the School of Engineering.",
  },
  {
    role: "Teaching and Research Assistant with Ph.D.",
    institution: "University Carlos III of Madrid",
    department: "Interactive Systems Group (DEI LAB), School of Engineering",
    period: "2022 – 2024",
    description: "Teaching and research in HCI and immersive virtual environments.",
  },
  {
    role: "Visiting Researcher",
    institution: "Monash University",
    department: "Embodied Visualisation Lab, Faculty of Information Technology, Melbourne, Australia",
    period: "May 2023 – Aug 2023",
    description: "Research visit on immersive analytics and data visualization.",
  },
  {
    role: "Predoctoral Fellow",
    institution: "University Carlos III of Madrid",
    department: "Interactive Systems Group (DEI LAB), School of Engineering",
    period: "2017 – 2022",
    description: "Doctoral research on collaborative maps for immersive virtual environments.",
  },
  {
    role: "Teaching Assistant",
    institution: "Escuela Politécnica Nacional",
    department: "Escuela de Formación de Tecnólogos, Quito, Ecuador",
    period: "2015 – 2016",
    description: "Teaching Network Security, Wireless LAN, and Introduction to Calculus.",
  },
  {
    role: "Lab Technician",
    institution: "Escuela Politécnica Nacional",
    department: "Dept. of Electronics, Telecommunications, and Computer Networks, Quito, Ecuador",
    period: "2013 – 2015",
    description: "Computer Networks (LAN/WAN/WLAN) Lab management.",
  },
];

const education = [
  {
    degree: "Ph.D., Computer Science and Technology",
    institution: "University Carlos III of Madrid",
    period: "2017 – 2022",
    thesis: "The effects of interaction and visual representation of collaborative maps for immersive virtual environments.",
  },
  {
    degree: "M.Sc., Computer Science and Technology",
    institution: "University Carlos III of Madrid",
    period: "2016 – 2017",
    thesis: "A comparative study of menus in virtual reality environments.",
  },
  {
    degree: "B.Sc. Eng., Electronics and Computer Networks",
    institution: "Escuela Politécnica Nacional del Ecuador",
    period: "2009 – 2014",
    thesis: "Design and implementation of a prototype virtual shopping cart system using NFC communications and the Android system.",
  },
];

export function EmploymentSection() {
  return (
    <section id="employment" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Employment & Education
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </div>

          {/* Employment Timeline */}
          <h3 className="text-2xl font-serif font-semibold text-primary mb-8 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-accent" />
            Employment History
          </h3>

          <div className="relative mb-16">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {employment.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-10 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background -translate-x-1/2 mt-6 z-10" />

                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-8" : "md:pr-8 md:text-right"
                  }`}
                >
                  <div className="bg-card rounded-lg border border-border p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                      <Briefcase className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium text-accent">{item.period}</span>
                    </div>
                    <h4 className="text-lg font-serif font-semibold text-primary mb-1">{item.role}</h4>
                    <p className="text-foreground font-medium text-sm mb-1">{item.institution}</p>
                    <p className="text-xs text-muted-foreground mb-2">{item.department}</p>
                    <p className="text-foreground/80 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <h3 className="text-2xl font-serif font-semibold text-primary mb-8 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-accent" />
            Education
          </h3>

          <div className="space-y-6">
            {education.map((item, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-accent">{item.period}</span>
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="text-lg font-serif font-semibold text-primary">{item.degree}</h4>
                  {index === 0 && <Badge className="bg-accent text-accent-foreground">Ph.D. Outstanding Thesis Award</Badge>}
                </div>
                <p className="text-foreground font-medium text-sm mb-2">{item.institution}</p>
                <p className="text-sm text-muted-foreground italic">Thesis: {item.thesis}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
