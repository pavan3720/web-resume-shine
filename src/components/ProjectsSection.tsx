
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type ProjectProps = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

const projects: ProjectProps[] = [
  {
    title: "Nutrients Recovery from water",
    description: "Recovering the Nutrients like Nitrate and Phosphate from Lake water",
    technologies: ["Micro-beeds", "Nano-Technology"],
    image: "https://img.freepik.com/premium-photo/scientist-working-with-chemical-reaction-chemistry-laboratory-close-up-scientist-making-research-lab-chemical-molecular-blue-chemistry-science-laboratory-background_263512-1545.jpg?w=2000",
    link: "#"
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-2 text-center">Projects</h2>
        <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
          Showcasing some of my recent work and side projects.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} className="bg-accent text-accent-foreground hover:bg-accent/80">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                {project.link && (
                  <a 
                    href={project.link} 
                    className="text-primary hover:text-primary/80 font-medium flex items-center"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
