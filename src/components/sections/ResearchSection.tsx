import { ExternalLink, Play, FileText, Plus, Trophy, Youtube } from "lucide-react";
import sharedWorkspace from "@/assets/shared_workspace.png";
import sharedExperience from "@/assets/shared_experience.png";
import empiricalComparison from "@/assets/empirical_comparison.png";
import vrMenus from "@/assets/vr_menus.png";
import netZeroVr from "@/assets/net_zero_vr.gif";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const researchInterests = [
  "Human-Computer Interaction",
  "Computer-Supported Collaborative Work",
  "Social XR",
  "Immersive Environments",
  "Virtual Reality",
  "Augmented Reality",
  "Commensality",
  "Immersive Analytics",
];

const researchProjects = [
  {
    period: "Sep 2024 – Dec 2026",
    title: "Flow Cut: Immersive Video Editor with Spatial Computing Interaction",
    role: "Researcher",
    funder: "Basque Government through HAZITEK grant",
    link: "https://media-attack.tv/proyectos/flowcut/",
  },
  {
    period: "Sep 2024 – Sep 2025",
    title: "Bazkaria: Eating Together Through Immersive Telepresence",
    role: "Researcher",
    funder: "European Union through SPIRIT project",
    link: "https://www.vicomtech.org/en/rdi-tangible/success-stories/story/bazkaria-eating-together-through-immersive-telepresence",
    youtubeUrl: "https://youtu.be/H4r9WMXuMZE",
  },
  {
    period: "May 2024 – Jun 2025",
    title: "6GDIFERENTE: 6G Distributed and Federated Experiments in Radio, Edge and Non-Terrestrial Networks",
    role: "Researcher",
    funder: "Centro para el Desarrollo Tecnológico y la Innovación (CDTI)",
    link: "https://6gdiferente.com/",
  },
  {
    period: "Jan 2019 – Sep 2022",
    title: "CROSSCOLLAB: Identifying the Affordances of Cross-Reality to Enhance Collaboration",
    role: "Researcher",
    funder: "Spanish Research State Agency (AEI)",
    link: "https://crosscolab.uc3m.es/",
  },
  {
    period: "Sep 2017 – Dec 2020",
    title: "PACE: Pervasive and Affordable Technologies for Civic Engagement",
    role: "Researcher",
    funder: "Spanish Ministry of Economic Affairs and Digital Transformation",
    link: "https://dei.inf.uc3m.es/portal/?page=projects&id=100&name=PACE",
  },
];

const publications = [
  {
    title: "6GTWIN: An Immersive Digital Twin Platform for 6G Network Monitoring and Experimentation",
    authors: "A. Santos-Torres, S. Cabrero Barros, and M. Zorrilla",
    venue: "Workshop on Human Factors in Immersive Analytics (HFIA), IEEE VIS 2025",
    year: "2025",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop",
    hasVideo: true,
    videoUrl: "https://doi.org/10.1109/HFIA68651.2025.00010",
    embedVideo: "https://www.youtube.com/embed/KmZAENQEzd8?si=WyK3xE8c-1RZY6Qc",
    paperUrl: "https://doi.org/10.1109/HFIA68651.2025.00010",
  },
  {
    title: "The XR Table: Envisioning the Future of Remote Dining Experiences Using Immersive Telepresence",
    authors: "A. Santos-Torres, P. de Torres Coll, T. Bukits, R. Perisé, and S. Cabrero Barros",
    venue: "ACM Designing Interactive Systems Conference 2025",
    year: "2025",
    thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=225&fit=crop",
    hasVideo: true,
    videoUrl: "https://www.youtube.com/watch?v=EjXQ2xbNNOc",
    embedVideo: "https://www.youtube.com/embed/EjXQ2xbNNOc?si=SsRA5xWU1GYpGQ8M",
    paperUrl: "#",
  },
  {
    title: "Comparing Visual Representations of Collaborative Map Interfaces for Immersive Virtual Environments",
    authors: "A. Santos-Torres, T. Zarraonandia, P. Díaz, and I. Aedo",
    venue: "IEEE Access, vol. 10, 2022",
    year: "2022",
    teaserImages: [sharedWorkspace, sharedExperience],
    hasVideo: false,
    paperUrl: "https://doi.org/10.1109/ACCESS.2022.3176949",
  },
  {
    title: "An Empirical Comparison of Interaction Styles for Map Interfaces in Immersive Virtual Environments",
    authors: "A. Santos-Torres, T. Zarraonandia, P. Díaz, T. Onorati, and I. Aedo",
    venue: "Multimedia Tools and Applications, vol. 79, 2020",
    year: "2020",
    thumbnail: empiricalComparison,
    hasVideo: false,
    paperUrl: "https://doi.org/10.1007/s11042-020-08709-9",
    award: "Honorable Mention",
  },
  {
    title: "Virtual Reality for Enhancing Engagement with Net Zero Transitions",
    authors: "A. Alshardy, S. Goodwin, A. Santos-Torres, and A. Liebman",
    venue: "Workshop on Energy Data Visualization (EnergyVis), 2023",
    year: "2023",
    thumbnail: netZeroVr,
    hasVideo: false,
    paperUrl: "https://doi.org/10.1109/EnergyVis60781.2023.00011",
  },
  {
    title: "A Comparative Study of Menus in Virtual Reality Environments",
    authors: "A. Santos, T. Zarraonandia, P. Díaz, and I. Aedo",
    venue: "ACM International Conference on Interactive Surfaces and Spaces (ISS), 2017",
    year: "2017",
    thumbnail: vrMenus,
    hasVideo: false,
    paperUrl: "https://doi.org/10.1145/3132272.3132277",
  },
];

export function ResearchSection() {
  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Research
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-8" />
          </div>

          {/* Research Interests */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-semibold text-primary mb-6 text-center">
              Research Interests
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {researchInterests.map((interest) => (
                <Badge
                  key={interest}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground border border-border"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          {/* Research Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-semibold text-primary mb-8 text-center">
              Research Projects
            </h3>
            <div className="space-y-4">
              {researchProjects.map((project, index) => (
                <div key={index} className="bg-card rounded-lg border border-border p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-accent">{project.period}</span>
                      <Badge variant="outline" className="text-xs">{project.role}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.youtubeUrl && (
                        <a
                          href={project.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 transition-colors"
                          title="Watch video"
                        >
                          <Youtube className="h-4 w-4 text-white" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent hover:bg-accent/90 transition-colors"
                          title="View project details"
                        >
                          <Plus className="h-4 w-4 text-accent-foreground" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h4 className="font-serif font-semibold text-primary mb-1">{project.title}</h4>
                  <p className="text-sm text-muted-foreground">Funded by: {project.funder}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <h3 className="text-2xl font-serif font-semibold text-primary mb-8 text-center">
              Selected Publications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {publications.map((pub, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-border hover:shadow-lg transition-shadow"
                >
                  <div className="relative group">
                    <AspectRatio ratio={16 / 9}>
                      {pub.embedVideo ? (
                        <iframe
                          src={pub.embedVideo}
                          title={pub.title}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      ) : (pub as any).teaserImages ? (
                        <div className="flex w-full h-full">
                          {(pub as any).teaserImages.map((img: string, i: number) => (
                            <img
                              key={i}
                              src={img}
                              alt={`${pub.title} - Figure ${i + 1}`}
                              className="object-cover h-full flex-1"
                            />
                          ))}
                        </div>
                      ) : (
                        <img
                          src={pub.thumbnail}
                          alt={pub.title}
                          className="object-cover w-full h-full"
                        />
                      )}
                    </AspectRatio>
                    {pub.hasVideo && !pub.embedVideo && (
                      <a
                        href={pub.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg">
                          <Play className="h-8 w-8 text-accent-foreground fill-current ml-1" />
                        </div>
                      </a>
                    )}
                    {pub.hasVideo && !pub.embedVideo && (
                      <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                        <Play className="h-3 w-3 mr-1" />
                        Video
                      </Badge>
                    )}
                  </div>

                   <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <p className="text-sm text-accent font-medium">{pub.year}</p>
                      {pub.award && (
                        <Badge className="bg-amber-500 text-white flex items-center gap-1 text-xs">
                          <Trophy className="h-3 w-3" />
                          {pub.award}
                        </Badge>
                      )}
                    </div>
                    <h4 className="font-serif font-semibold text-primary mb-2 leading-snug">
                      {pub.title}
                    </h4>
                    <p className="text-sm text-foreground/90 mb-2">{pub.authors}</p>
                    <p className="text-sm text-muted-foreground mb-4 italic">{pub.venue}</p>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <a href={pub.paperUrl} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4 mr-1" />
                          Paper
                        </a>
                      </Button>
                      {pub.hasVideo && (
                        <Button variant="outline" size="sm" asChild className="flex-1">
                          <a href={pub.videoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Video
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
