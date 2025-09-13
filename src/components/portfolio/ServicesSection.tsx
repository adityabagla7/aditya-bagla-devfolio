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
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-portfolio-text">My</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-portfolio-text-muted max-w-2xl mx-auto mt-6 text-lg">
            Comprehensive technology solutions tailored to solve real-world problems and drive business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="bg-portfolio-surface border-portfolio-surface-hover hover:border-portfolio-accent/30 hover:shadow-portfolio-lg transition-all duration-300 p-8 group h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="bg-portfolio-accent/10 p-4 rounded-xl w-fit group-hover:bg-portfolio-accent/20 transition-colors duration-300 mb-4">
                      <IconComponent className="text-portfolio-accent" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-portfolio-text mb-3">{service.title}</h3>
                    <p className="text-portfolio-text-muted leading-relaxed">{service.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-portfolio-accent font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-portfolio-text-muted flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-portfolio-accent rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-portfolio-bg text-portfolio-accent text-xs rounded-full border border-portfolio-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button 
                      onClick={() => scrollToSection("contact")}
                      variant="outline"
                      className="w-full border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-accent-foreground transition-all duration-300 group-hover:shadow-portfolio-glow"
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
          <Card className="bg-gradient-surface border-portfolio-accent/20 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-portfolio-text mb-4">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-portfolio-text-muted mb-6">
              Let's collaborate to build something amazing together. From concept to deployment, I'll help you create scalable, efficient solutions.
            </p>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-primary text-portfolio-accent-foreground hover:shadow-portfolio-glow transition-all duration-300 px-8 py-3"
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