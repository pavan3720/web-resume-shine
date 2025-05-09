
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "./ScrollAnimation";

const HeroSection = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Typing animation for the role text
    const text = "Civil Engineer";
    const roleElement = document.getElementById("role-text");
    
    if (roleElement) {
      roleElement.textContent = "";
      let i = 0;
      
      const typeWriter = () => {
        if (i < text.length) {
          roleElement.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      
      setTimeout(() => {
        typeWriter();
      }, 500);
    }
  }, []);
  
  const downloadResume = () => {
    // In a real implementation, this would download a PDF resume
    alert("Resume download functionality would be implemented here");
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <ScrollAnimation className="md:w-1/2 opacity-0 transform transition-all duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              <span className="text-primary">Pavan P G</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-foreground/80 mb-6">
              <span id="role-text" className="inline-block"></span>
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-foreground/70 mb-8 max-w-xl">
              A passionate civil engineer with 2 years of experience building residential flats,
              modern technologies. I specialize in building budget friendly and comfortable homes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={downloadResume} className="bg-primary hover:bg-primary/90">
                Download Resume
              </Button>
              <Button variant="outline" onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Contact Me
              </Button>
            </div>
          </ScrollAnimation>
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <div 
              ref={profileRef}
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 animate-border-pulse"
            >
              <img 
                src="https://i.postimg.cc/mr49hQmv/Whats-App-Image-2025-04-22-at-6-16-14-PM.jpg" 
                alt="Pavan P G" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
