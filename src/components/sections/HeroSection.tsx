import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, GraduationCap } from "lucide-react";
import profilePhoto from "@/assets/asantos.jpg";
import orcidLogo from "@/assets/orcid-logo.png";
import githubLogo from "@/assets/github-logo.png";
import linkedinLogo from "@/assets/linkedin-logo.png";
import googleScholarLogo from "@/assets/google-scholar-logo.png";

const awards = [
  
  { year: "2022", title: "Ph.D. Outstanding Thesis Award", org: "Ph.D. in Computer Science and Technology - University Carlos III of Madrid", url: "https://www.uc3m.es/phdprogram/outstanding-thesis-awards/recipients-21-22" },
  { year: "2018", title: "Special Mention – Accessit Jesús Lorés", org: "13ª edición: Interacción 2018, septiembre de 2018 en Palma de Mallorca, España", url: "https://aipo.es/en/activities/awards/awards-jesus-lores/?pagina=3" },
];

const profileLinks = [
  { name: "ORCID", logo: orcidLogo, url: "https://orcid.org/0000-0003-2679-2440" },
  { name: "GitHub", logo: githubLogo, url: "https://github.com/andresSantos9" },
  { name: "LinkedIn", logo: linkedinLogo, url: "https://www.linkedin.com/in/andres-santos-torres/" },
  { name: "Google Scholar", logo: googleScholarLogo, url: "https://scholar.google.es/citations?user=wLFCis0AAAAJ&hl=es&oi=ao" },
];

const scholarships = [
  { year: "2023", title: "Mobility Grant for Young Researchers", org: "University Carlos III of Madrid – Research visit to Embodied Visualisation Lab, Monash University" },
  { year: "2017", title: "Ph.D. Scholarship", org: "University Carlos III of Madrid" },
  { year: "2016", title: "M.Sc. Scholarship for Outstanding Ibero-American Students", org: "Fundación Carolina" },
];

export function HeroSection() {
  return (
    <section id="about" className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <Avatar className="w-48 h-48 md:w-56 md:h-56 border-4 border-border shadow-lg">
                <AvatarImage
                  src={profilePhoto}
                  alt="Andrés Santos Torres"
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl font-serif bg-secondary text-secondary-foreground">
                  AS
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Bio Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                Dr. Andrés Santos Torres
              </h1>
              <p className="text-xl text-accent font-medium mb-4">
                Researcher & Adjunct Lecturer
              </p>
              {/* Profile Links */}
              <div className="flex justify-center md:justify-start gap-3 mb-6">
                {profileLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-lg hover:bg-secondary transition-colors"
                    title={link.name}
                  >
                    <img src={link.logo} alt={link.name} className="w-5 h-5 object-contain" />
                  </a>
                ))}
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Vicomtech, Digital Media & Communications • Deusto University
                <br />
                Donostia – San Sebastián, Basque Country, Spain
              </p>
              <div className="w-16 h-1 bg-accent mx-auto md:mx-0 mb-6" />
              <p className="text-foreground/90 leading-relaxed max-w-2xl">
                My research focuses on designing, prototyping, and evaluating meaningful experiences
                in immersive environments that can be applied to various industry applications,
                including commensality, culture, and creativity. My research interests span
                Human-Computer Interaction, Computer-Supported Collaborative Work, and Social XR.
              </p>
            </div>
          </div>

          {/* Awards & Scholarships */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Awards */}
            <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-serif font-semibold text-primary">Awards</h3>
              </div>
              <ul className="space-y-3">
                {awards.map((award, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-sm font-medium text-accent whitespace-nowrap">{award.year}</span>
                    <div>
                      {award.url ? (
                        <a
                          href={award.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {award.title}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{award.title}</p>
                      )}
                      <p className="text-sm text-muted-foreground">{award.org}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scholarships */}
            <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-serif font-semibold text-primary">Scholarships</h3>
              </div>
              <ul className="space-y-3">
                {scholarships.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-sm font-medium text-accent whitespace-nowrap">{item.year}</span>
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.org}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
