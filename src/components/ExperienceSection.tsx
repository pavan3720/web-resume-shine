
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
    title: "Construction Site supervisor",
    company: "Darshan Constructions",
    period: "2023 - Present",
    description: [
      "Led the execution of multistory residential buildings",
      "Interior works"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-2 text-center">Work Experience</h2>
        <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
          My professional journey in civil construction field.
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
