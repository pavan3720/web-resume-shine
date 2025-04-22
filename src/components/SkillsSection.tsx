
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollAnimation from "./ScrollAnimation";
import SkillsProgress from "./SkillsProgress";

const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js", "Redux", "Tailwind CSS", "SASS"],
  backend: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL"],
  tools: ["Git", "Docker", "AWS", "CI/CD", "Webpack", "Jest", "Agile/Scrum", "Figma"]
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-2 text-center">Skills & Expertise</h2>
        <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
          Technologies and tools I've worked with throughout my career.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollAnimation className="opacity-0 transform translate-y-4 transition-all duration-700">
            <Card className="border border-primary/10 hover:border-primary/30 transition-all duration-300 h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary"><path d="M2 12.5h20"/><path d="M7 19v-14"/><path d="M12 3v18"/><path d="M17 19v-14"/></svg>
                  Frontend Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-secondary hover:bg-secondary/80">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
          
          <ScrollAnimation className="opacity-0 transform translate-y-4 transition-all duration-700" threshold={0.1}>
            <Card className="border border-primary/10 hover:border-primary/30 transition-all duration-300 h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary"><path d="M18 12H6"/><path d="M2 12a10 10 0 0 1 10-10"/><path d="M12 22a10 10 0 0 1-10-10"/><path d="M22 12a10 10 0 0 0-10-10"/><path d="M12 22a10 10 0 0 0 10-10"/></svg>
                  Backend Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-secondary hover:bg-secondary/80">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
          
          <ScrollAnimation className="opacity-0 transform translate-y-4 transition-all duration-700" threshold={0.1}>
            <Card className="border border-primary/10 hover:border-primary/30 transition-all duration-300 h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-secondary hover:bg-secondary/80">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
        
        <ScrollAnimation className="opacity-0 transform translate-y-4 transition-all duration-700" threshold={0.2}>
          <SkillsProgress />
        </ScrollAnimation>
        
        <ScrollAnimation className="opacity-0 transform translate-y-4 transition-all duration-700" threshold={0.2}>
          <div className="mt-12 p-6 bg-accent rounded-lg">
            <h3 className="text-xl font-serif font-semibold mb-4 text-center">Professional Strengths</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {["Problem Solving", "Team Leadership", "Technical Documentation", "Code Optimization"].map((strength, index) => (
                <div key={index} className="p-3 rounded-md bg-white shadow-sm">
                  <span className="font-medium">{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default SkillsSection;
