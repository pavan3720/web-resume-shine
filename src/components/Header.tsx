
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "experience", "skills", "education", "projects", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 100;
          const bottom = top + element.offsetHeight;
          
          if (position >= top && position < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out",
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-serif font-bold">
          <span className="text-primary">Pavan</span> P G
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["Home", "Experience", "Skills", "Education", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={cn(
                    "font-medium text-sm transition-all duration-200",
                    activeSection === item.toLowerCase() 
                      ? "text-primary font-semibold" 
                      : "text-foreground/70 hover:text-primary"
                  )}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile menu */}
        <MobileMenu onNavigate={scrollToSection} />
      </div>
    </header>
  );
};

export default Header;
