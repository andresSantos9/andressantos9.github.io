import { Briefcase } from "lucide-react";

const employmentHistory = [
  {
    role: "Associate Professor",
    institution: "University of Technology",
    department: "Department of Computer Science",
    period: "2019 – Present",
    description:
      "Leading research in AI and NLP. Teaching graduate and undergraduate courses. Supervising PhD students.",
  },
  {
    role: "Assistant Professor",
    institution: "State University",
    department: "School of Computing",
    period: "2014 – 2019",
    description:
      "Established the Language Technology Lab. Secured over $1.2M in research funding. Published 25+ papers.",
  },
  {
    role: "Postdoctoral Researcher",
    institution: "MIT Computer Science and Artificial Intelligence Laboratory",
    department: "Language Technologies Group",
    period: "2012 – 2014",
    description:
      "Conducted research on neural machine translation and sentiment analysis systems.",
  },
  {
    role: "Ph.D. in Computer Science",
    institution: "Stanford University",
    department: "Natural Language Processing Lab",
    period: "2007 – 2012",
    description:
      "Dissertation: 'Deep Learning Approaches for Semantic Understanding in Natural Language'",
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

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {employmentHistory.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background -translate-x-1/2 mt-6 z-10" />

                {/* Content card */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-8" : "md:pr-8 md:text-right"
                  }`}
                >
                  <div className="bg-card rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        index % 2 === 0 ? "" : "md:justify-end"
                      }`}
                    >
                      <Briefcase className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium text-accent">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-primary mb-1">
                      {item.role}
                    </h3>
                    <p className="text-foreground font-medium mb-1">{item.institution}</p>
                    <p className="text-sm text-muted-foreground mb-3">{item.department}</p>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
