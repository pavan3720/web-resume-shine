
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  onNavigate: (sectionId: string) => void;
}

const MobileMenu = ({ onNavigate }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('#mobile-menu') && !target.closest('#menu-toggle')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  const handleNavigate = (sectionId: string) => {
    setIsOpen(false);
    onNavigate(sectionId);
  };
  
  return (
    <>
      <button 
        id="menu-toggle"
        className="md:hidden text-primary"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {isOpen ? (
            <path d="M18 6 6 18M6 6l12 12"/>
          ) : (
            <>
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </>
          )}
        </svg>
      </button>
      
      <div 
        id="mobile-menu"
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm z-50 transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full justify-center items-center">
          <ul className="space-y-8 text-center">
            {["Home", "Experience", "Skills", "Education", "Projects", "Contact"].map((item) => (
              <li key={item} className="animate-fade-in" style={{ animationDelay: `${isOpen ? 0.1 : 0}s` }}>
                <button
                  onClick={() => handleNavigate(item.toLowerCase())}
                  className="text-xl font-medium transition-colors hover:text-primary"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
