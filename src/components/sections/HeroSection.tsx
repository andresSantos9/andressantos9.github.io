import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <Avatar className="w-48 h-48 md:w-56 md:h-56 border-4 border-border shadow-lg">
                <AvatarImage
                  src="/placeholder.svg"
                  alt="Dr. Jane Smith"
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl font-serif bg-secondary text-secondary-foreground">
                  JS
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Bio Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                Dr. Jane Smith
              </h1>
              <p className="text-xl text-accent font-medium mb-4">
                Associate Professor of Computer Science
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                University of Technology • Department of Computer Science
              </p>
              <div className="w-16 h-1 bg-accent mx-auto md:mx-0 mb-6" />
              <p className="text-foreground/90 leading-relaxed max-w-2xl">
                I am an Associate Professor specializing in artificial intelligence and machine learning,
                with a focus on natural language processing and human-computer interaction. My research
                aims to develop intelligent systems that can understand and generate human language,
                making technology more accessible and intuitive for everyone. I have published over 50
                peer-reviewed papers and received multiple grants from leading research foundations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
