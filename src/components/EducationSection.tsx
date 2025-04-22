
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type EducationProps = {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

const educations: EducationProps[] = [
  {
    degree: "Master of Computer Science",
    institution: "University of Technology",
    period: "2015 - 2017",
    details: "Focused on advanced algorithms and software architecture. Graduated with honors."
  },
  {
    degree: "Bachelor of Science in Computer Engineering",
    institution: "State University",
    period: "2011 - 2015",
    details: "Gained strong fundamentals in programming, data structures, and system design."
  },
  {
    degree: "Web Development Bootcamp",
    institution: "Code Academy",
    period: "Summer 2014",
    details: "Intensive 12-week program covering full-stack web development technologies."
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-2 text-center">Education</h2>
        <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
          My academic background and learning journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educations.map((edu, index) => (
            <Card key={index} className="animate-fade-in border border-primary/10 hover:border-primary/30 transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="text-xl">{edu.degree}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary font-medium mb-2">{edu.institution}</p>
                <p className="text-sm text-foreground/60 mb-4">{edu.period}</p>
                <p className="text-foreground/80">{edu.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-serif font-semibold mb-6 text-center">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
              { title: "Professional Scrum Master I", issuer: "Scrum.org", year: "2022" },
              { title: "React Advanced Concepts", issuer: "Frontend Masters", year: "2021" },
              { title: "Advanced JavaScript", issuer: "Udemy", year: "2020" }
            ].map((cert, index) => (
              <div key={index} className="p-4 bg-white rounded-md shadow-sm animate-fade-in flex justify-between items-center" style={{ animationDelay: `${index * 0.05 + 0.3}s` }}>
                <div>
                  <p className="font-medium">{cert.title}</p>
                  <p className="text-sm text-foreground/60">{cert.issuer}</p>
                </div>
                <span className="text-sm text-primary font-medium">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
