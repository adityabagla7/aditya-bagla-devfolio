import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Globe, Cloud, BarChart3, Zap, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: "API Development & Integration",
      description: "Build robust and scalable APIs using modern technologies like gRPC, REST, and GraphQL. Expert in designing efficient service communication patterns.",
      technologies: ["gRPC", "REST APIs", "Golang", "Python"],
      features: [
        "High-performance API design",
        "Microservices architecture",
        "API documentation & testing",
        "Third-party integrations"
      ]
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Create modern, responsive web applications with cutting-edge frameworks and technologies. Focus on user experience and performance optimization.",
      technologies: ["React.js", "Node.js", "JavaScript", "TypeScript"],
      features: [
        "Responsive web design",
        "Progressive web apps",
        "Real-time applications",
        "Cross-browser compatibility"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions & Automation",
      description: "Deploy and manage scalable cloud infrastructure using AWS services. Automate workflows and implement CI/CD pipelines for efficient development.",
      technologies: ["AWS", "Lambda", "S3", "Automation"],
      features: [
        "Cloud architecture design",
        "Serverless applications",
        "Infrastructure automation",
        "Cost optimization"
      ]
    },
    {
      icon: BarChart3,
      title: "Data Processing & Predictive Analytics",
      description: "Transform raw data into actionable insights using machine learning and statistical analysis. Build predictive models for business intelligence.",
      technologies: ["Python", "Streamlit", "Data Science", "AI"],
      features: [
        "Data visualization",
        "Predictive modeling",
        "Statistical analysis",
        "Interactive dashboards"
      ]
    },
    {
      icon: Zap,
      title: "Software Automation Solutions",
      description: "Streamline business processes through intelligent automation. Reduce manual effort and increase efficiency with custom automation tools.",
      technologies: ["Python", "SMTP", "Scheduling", "Integration"],
      features: [
        "Process automation",
        "Email automation",
        "Task scheduling",
        "System integration"
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-portfolio-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-portfolio-text">My</span>{" "}
            <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full shadow-portfolio-glow"></div>
          <p className="text-portfolio-text-muted max-w-2xl mx-auto mt-6 text-lg">
            Comprehensive technology solutions tailored to solve real-world problems and drive business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="modern-card p-10 hover:shadow-portfolio-xl group h-full hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <div className="glass p-5 rounded-2xl w-fit group-hover:scale-110 group-hover:shadow-portfolio-glow transition-all duration-300 mb-6">
                      <IconComponent className="text-portfolio-accent" size={36} />
                    </div>
                    <h3 className="text-2xl font-bold text-portfolio-text mb-4">{service.title}</h3>
                    <p className="text-portfolio-text-muted leading-relaxed text-lg">{service.description}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-portfolio-accent font-semibold mb-4 text-lg">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-portfolio-text-muted flex items-center gap-3">
                          <div className="w-2 h-2 bg-portfolio-accent rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-3 mb-8">
                      {service.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-4 py-2 glass text-portfolio-accent text-sm rounded-xl border border-portfolio-accent/20 hover:scale-105 transition-transform duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button 
                      onClick={() => scrollToSection("contact")}
                      className="btn-modern w-full bg-gradient-primary text-portfolio-accent-foreground hover:shadow-portfolio-glow hover:scale-105 transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Card className="glass-dark border-portfolio-accent/30 p-12 max-w-4xl mx-auto hover:shadow-portfolio-glow-lg transition-all duration-500">
            <h3 className="text-3xl font-bold text-portfolio-text mb-6">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-portfolio-text-muted mb-8 text-lg leading-relaxed">
              Let's collaborate to build something amazing together. From concept to deployment, I'll help you create scalable, efficient solutions.
            </p>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="btn-modern bg-gradient-primary text-portfolio-accent-foreground hover:shadow-portfolio-glow hover:scale-105 transition-all duration-300 px-10 py-4 text-lg"
            >
              Start Your Project
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;