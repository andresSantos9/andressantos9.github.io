import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { EmploymentSection } from "@/components/sections/EmploymentSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { TeachingSection } from "@/components/sections/TeachingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <EmploymentSection />
        <ResearchSection />
        <TeachingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
