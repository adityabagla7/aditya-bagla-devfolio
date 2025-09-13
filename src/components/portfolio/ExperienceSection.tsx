import { Card } from "@/components/ui/card";
import { Building2, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Coinbase",
      location: "Remote",
      period: "May 2025 – August 2025",
      description: [
        "Collaborated with the Internationalization team for transitioning from AWS Lambda to paved road solutions.",
        "Developed and modified gRPC APIs for efficient service communication.",
        "Implemented background job services as scheduled cron jobs using Go and AWS Lambda."
      ],
      skills: ["Golang", "gRPC", "AWS Lambda", "Microservices"]
    },
    {
      title: "Member of Technical Staff",
      company: "AUGSD, BITS Pilani Goa Campus",
      location: "Goa, India",
      period: "Aug 2024 – April 2025",
      description: [
        "Automated exam invigilator assignment across 300+ sections.",
        "Integrated SMTP mailing system for automated professor communication.",
        "Developed efficient algorithms to optimize resource allocation and scheduling."
      ],
      skills: ["Python", "SMTP", "Automation", "Algorithm Design"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-portfolio-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-portfolio-text">Work</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-portfolio-surface border-portfolio-surface-hover hover:border-portfolio-accent/30 hover:shadow-portfolio-lg transition-all duration-300 p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-2 text-portfolio-accent mb-2">
                    <Building2 size={18} />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-portfolio-text-muted text-sm mb-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-portfolio-text-muted text-sm">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <h3 className="text-2xl font-bold text-portfolio-text mb-4">{exp.title}</h3>
                  
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-portfolio-text-muted flex items-start gap-3">
                        <div className="w-2 h-2 bg-portfolio-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent rounded-full text-sm border border-portfolio-accent/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;