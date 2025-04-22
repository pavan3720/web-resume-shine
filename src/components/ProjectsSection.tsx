
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
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, product management, cart functionality, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "#"
  },
  {
    title: "Task Management System",
    description: "A comprehensive task management application with drag-and-drop functionality, team collaboration features, and real-time updates.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that provides current conditions and forecasts for any location, with beautiful visualizations and alerts.",
    technologies: ["JavaScript", "Chart.js", "Weather API"],
    image: "https://images.unsplash.com/photo-1530563885674-66db50a1af19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    link: "#"
  },
  {
    title: "Fitness Tracker",
    description: "A mobile-first application for tracking workouts, nutrition, and fitness goals with progress visualization.",
    technologies: ["React Native", "Express", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
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
