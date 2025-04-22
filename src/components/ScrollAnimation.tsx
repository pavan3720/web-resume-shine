
import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  threshold?: number;
  className?: string;
}

const ScrollAnimation = ({ 
  children, 
  threshold = 0.1, 
  className = "opacity-0 transition-all duration-700 ease-in-out" 
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When element is visible, remove opacity-0 and add the animation class
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("opacity-100");
          
          // Optional: add any additional animation classes here
          if (entry.target.classList.contains("slide-animation")) {
            entry.target.classList.add("translate-y-0");
          }
          
          // Once the animation has been triggered, unobserve the element
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -100px 0px" // Adjust when animation triggers
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);
  
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
