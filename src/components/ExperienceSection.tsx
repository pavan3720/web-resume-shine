
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollAnimation from "./ScrollAnimation";

type ExperienceProps = {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceProps[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: [
      "Led the development of a React-based dashboard used by over 500 enterprise customers",
      "Implemented CI/CD pipelines that reduced deployment time by 70%",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions LLC",
    period: "2019 - 2021",
    description: [
      "Developed responsive web applications using React and TypeScript",
      "Optimized website performance, improving load times by 40%",
      "Collaborated with UX designers to implement pixel-perfect interfaces"
    ]
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Studios",
    period: "2017 - 2019",
    description: [
      "Built and maintained client websites using HTML, CSS, and JavaScript",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Participated in agile development cycles and sprint planning"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-2 text-center">Work Experience</h2>
        <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
          My professional journey in software development across different companies and roles.
        </p>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ScrollAnimation 
              key={index} 
              className="opacity-0 transform translate-y-4 transition-all duration-700"
              threshold={0.2}
            >
              <Card className="border border-primary/10 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <span className="text-sm text-foreground/60 mt-2 md:mt-0">{exp.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
