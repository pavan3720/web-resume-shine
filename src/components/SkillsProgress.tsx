
import { useEffect, useRef } from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

const SkillBar = ({ skill, percentage, delay = 0 }: SkillBarProps) => {
  const progressRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && progressRef.current) {
          // When element becomes visible, animate the width
          setTimeout(() => {
            if (progressRef.current) {
              progressRef.current.style.width = `${percentage}%`;
              progressRef.current.style.opacity = "1";
            }
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    
    if (progressRef.current) {
      observer.observe(progressRef.current);
    }
    
    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [percentage, delay]);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-sm">{skill}</span>
        <span className="text-xs text-foreground/70">{percentage}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-primary transition-all duration-1000 ease-out rounded-full opacity-0"
          style={{ width: "0%" }}
        ></div>
      </div>
    </div>
  );
};

const SkillsProgress = () => {
  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "UI/UX Design", level: 75 }
  ];
  
  return (
    <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-xl font-serif font-semibold mb-6 text-center">Technical Proficiency</h3>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <SkillBar
            key={index}
            skill={skill.name}
            percentage={skill.level}
            delay={index * 200}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsProgress;
