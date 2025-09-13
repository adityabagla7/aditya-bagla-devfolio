import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Users, BarChart3, Newspaper, Calendar } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Mess Food Waste Predictor",
      description: "A comprehensive system managing food waste prediction for a mess serving 1000+ students daily. Uses advanced AI and data visualization to optimize food preparation and reduce waste significantly.",
      longDescription: "Built with Streamlit and Python, this system leverages Google Gemini AI to analyze historical consumption patterns, weather data, and campus events to predict daily food requirements. Features interactive dashboards for mess managers and real-time analytics.",
      icon: BarChart3,
      technologies: ["Python", "Streamlit", "Google Gemini AI", "Data Visualization", "Machine Learning"],
      features: [
        "AI-powered waste prediction",
        "Real-time analytics dashboard",
        "Historical data analysis",
        "Cost optimization insights",
        "Interactive visualization"
      ],
      impact: "1000+ students served daily",
      status: "Production",
      category: "Data Science & AI"
    },
    {
      title: "Campus Chronicle",
      description: "A modern platform connecting students with campus news and events. Features a dynamic news feed, interactive comment system, and comprehensive admin dashboard for content management.",
      longDescription: "Full-stack web application built with React.js frontend and Node.js backend, powered by MySQL database. Includes user authentication, real-time notifications, and responsive design for all devices.",
      icon: Newspaper,
      technologies: ["React.js", "Node.js", "MySQL", "Express.js", "JWT Authentication"],
      features: [
        "Dynamic news feed",
        "Interactive comment system",
        "User authentication",
        "Admin dashboard",
        "Responsive design",
        "Real-time notifications"
      ],
      impact: "Campus-wide news platform",
      status: "Live",
      category: "Web Development"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-portfolio-text">Featured</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-portfolio-text-muted max-w-2xl mx-auto mt-6 text-lg">
            Showcasing innovative solutions that solve real-world problems and demonstrate technical expertise.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index}
                className={`bg-portfolio-surface border-portfolio-surface-hover hover:border-portfolio-accent/30 hover:shadow-portfolio-lg transition-all duration-300 overflow-hidden ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:flex">
                  {/* Project Info */}
                  <div className="lg:w-2/3 p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-portfolio-accent/10 p-3 rounded-lg">
                        <IconComponent className="text-portfolio-accent" size={28} />
                      </div>
                      <div>
                        <span className="text-portfolio-accent text-sm font-medium px-3 py-1 bg-portfolio-accent/10 rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-portfolio-text mb-4">{project.title}</h3>
                    
                    <p className="text-lg text-portfolio-text-muted mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <p className="text-portfolio-text-muted mb-8 leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Key Features */}
                    <div className="mb-8">
                      <h4 className="text-portfolio-accent font-semibold mb-4">Key Features:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-portfolio-accent rounded-full flex-shrink-0"></div>
                            <span className="text-portfolio-text-muted text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-portfolio-accent font-semibold mb-4">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-portfolio-bg text-portfolio-accent rounded-full text-sm border border-portfolio-accent/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                        <div className="flex items-center gap-2 text-portfolio-accent mb-1">
                          <Users size={16} />
                          <span className="text-sm font-medium">Impact</span>
                        </div>
                        <p className="text-portfolio-text-muted text-sm">{project.impact}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-portfolio-accent mb-1">
                          <Calendar size={16} />
                          <span className="text-sm font-medium">Status</span>
                        </div>
                        <span className="text-sm bg-green-500/20 text-green-400 px-2 py-1 rounded">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <Button 
                        className="bg-gradient-primary text-portfolio-accent-foreground hover:shadow-portfolio-glow transition-all duration-300"
                      >
                        <Github className="mr-2" size={16} />
                        View Code
                      </Button>
                      <Button 
                        variant="outline"
                        className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-accent-foreground transition-all duration-300"
                      >
                        <ExternalLink className="mr-2" size={16} />
                        Live Demo
                      </Button>
                    </div>
                  </div>

                  {/* Project Visual */}
                  <div className="lg:w-1/3 bg-gradient-surface p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-portfolio-accent/10 p-8 rounded-2xl mb-6">
                        <IconComponent className="text-portfolio-accent mx-auto" size={80} />
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-portfolio-accent">{project.impact.split(' ')[0]}</div>
                        <div className="text-portfolio-text-muted text-sm">{project.impact.split(' ').slice(1).join(' ')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-surface border-portfolio-accent/20 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-portfolio-text mb-4">
              Interested in my work?
            </h3>
            <p className="text-portfolio-text-muted mb-6">
              Explore more projects on my GitHub or get in touch to discuss collaboration opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild
                className="bg-gradient-primary text-portfolio-accent-foreground hover:shadow-portfolio-glow transition-all duration-300"
              >
                <a href="https://github.com/adityabagla7" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={16} />
                  View All Projects
                </a>
              </Button>
              <Button 
                onClick={() => {
                  const section = document.getElementById("contact");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
                variant="outline"
                className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-accent-foreground transition-all duration-300"
              >
                Let's Collaborate
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;