import { ExternalLink, Play, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const researchInterests = [
  "Natural Language Processing",
  "Machine Learning",
  "Deep Learning",
  "Human-Computer Interaction",
  "Computational Linguistics",
  "Sentiment Analysis",
];

const publications = [
  {
    title: "Transformer-Based Models for Cross-Lingual Understanding",
    authors: "Smith, J., Chen, W., & Rodriguez, M.",
    venue: "ACL 2023 - Annual Conference of the Association for Computational Linguistics",
    year: "2023",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=225&fit=crop",
    hasVideo: true,
    videoUrl: "https://example.com/video1",
    paperUrl: "https://example.com/paper1",
  },
  {
    title: "Multimodal Sentiment Analysis Using Attention Mechanisms",
    authors: "Smith, J., & Williams, A.",
    venue: "EMNLP 2022 - Conference on Empirical Methods in Natural Language Processing",
    year: "2022",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=225&fit=crop",
    hasVideo: true,
    videoUrl: "https://example.com/video2",
    paperUrl: "https://example.com/paper2",
  },
  {
    title: "Few-Shot Learning for Named Entity Recognition in Low-Resource Languages",
    authors: "Smith, J., Patel, R., & Nakamura, K.",
    venue: "NAACL 2022 - North American Chapter of the ACL",
    year: "2022",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=225&fit=crop",
    hasVideo: false,
    paperUrl: "https://example.com/paper3",
  },
  {
    title: "Neural Approaches to Conversational AI: A Survey",
    authors: "Smith, J.",
    venue: "Journal of Artificial Intelligence Research, Vol. 68",
    year: "2021",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=225&fit=crop",
    hasVideo: true,
    videoUrl: "https://example.com/video4",
    paperUrl: "https://example.com/paper4",
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
                  {/* Thumbnail with video overlay */}
                  <div className="relative group">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={pub.thumbnail}
                        alt={pub.title}
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                    {pub.hasVideo && (
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
                    {pub.hasVideo && (
                      <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                        <Play className="h-3 w-3 mr-1" />
                        Video
                      </Badge>
                    )}
                  </div>

                  <CardContent className="p-5">
                    <p className="text-sm text-accent font-medium mb-2">{pub.year}</p>
                    <h4 className="font-serif font-semibold text-primary mb-2 leading-snug">
                      {pub.title}
                    </h4>
                    <p className="text-sm text-foreground/90 mb-2">{pub.authors}</p>
                    <p className="text-sm text-muted-foreground mb-4 italic">{pub.venue}</p>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <a
                          href={pub.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText className="h-4 w-4 mr-1" />
                          Paper
                        </a>
                      </Button>
                      {pub.hasVideo && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="flex-1"
                        >
                          <a
                            href={pub.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
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
