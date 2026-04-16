import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedCards from "@/components/FeaturedCards";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <FeaturedCards />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
