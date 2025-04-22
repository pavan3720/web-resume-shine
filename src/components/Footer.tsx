
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-serif font-bold mb-4 md:mb-0">
          Pavan P G
          </div>
          
          <div className="text-sm text-primary-foreground/80">
            &copy; {currentYear} Pavan P G. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={cn(
                "flex items-center text-sm p-2 rounded-full",
                "bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              )}
              aria-label="Scroll to top"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
