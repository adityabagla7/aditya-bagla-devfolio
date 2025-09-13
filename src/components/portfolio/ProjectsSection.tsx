import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3, Github, Newspaper } from "lucide-react";

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
      githubUrl: "https://github.com/adityabagla7/mess-food-waste-Predictor",
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
      githubUrl: "https://github.com/adityabagla7/Campus-news-",
      category: "Web Development"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-portfolio-text">Featured</span>{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full shadow-portfolio-glow"></div>
          <p className="text-portfolio-text-muted max-w-2xl mx-auto mt-6 text-lg">
            Showcasing innovative solutions that solve real-world problems and demonstrate technical expertise.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index}
                className={`modern-card hover:shadow-portfolio-glow-lg overflow-hidden group transition-all duration-500 hover:-translate-y-1 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:flex">
                  {/* Project Info */}
                  <div className="lg:w-2/3 p-12 lg:p-16">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="glass p-4 rounded-2xl group-hover:scale-110 group-hover:shadow-portfolio-glow transition-all duration-300">
                        <IconComponent className="text-portfolio-accent" size={32} />
                      </div>
                      <div>
                        <span className="text-portfolio-accent text-sm font-semibold px-4 py-2 glass rounded-full border border-portfolio-accent/20">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-4xl font-bold text-portfolio-text mb-6">{project.title}</h3>
                    
                    <p className="text-xl text-portfolio-text-muted mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    <p className="text-portfolio-text-muted mb-10 leading-relaxed text-lg">
                      {project.longDescription}
                    </p>

                    {/* Key Features */}
                    <div className="mb-10">
                      <h4 className="text-portfolio-accent font-bold mb-6 text-xl">Key Features:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${i * 100}ms` }}>
                            <div className="w-2.5 h-2.5 bg-portfolio-accent rounded-full flex-shrink-0 pulse-glow"></div>
                            <span className="text-portfolio-text-muted">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-10">
                      <h4 className="text-portfolio-accent font-bold mb-6 text-xl">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-4 py-2 glass text-portfolio-accent rounded-xl border border-portfolio-accent/20 hover:scale-105 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>


                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <Button 
                        asChild
                        className="btn-modern bg-gradient-primary text-portfolio-accent-foreground hover:shadow-portfolio-glow hover:scale-105 transition-all duration-300"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2" size={18} />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Project Visual */}
                  <div className="lg:w-1/3 bg-gradient-mesh p-12 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center relative z-10">
                      <div className="glass p-12 rounded-3xl mb-8 float group-hover:shadow-portfolio-glow-lg transition-all duration-500">
                        <IconComponent className="text-portfolio-accent mx-auto" size={100} />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <Card className="glass-dark border-portfolio-accent/30 p-12 max-w-3xl mx-auto hover:shadow-portfolio-glow-lg transition-all duration-500">
            <h3 className="text-3xl font-bold text-portfolio-text mb-6">
              Interested in my work?
            </h3>
            <p className="text-portfolio-text-muted mb-8 text-lg leading-relaxed">
              Explore more projects on my GitHub or get in touch to discuss collaboration opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button 
                asChild
                className="btn-modern bg-gradient-primary text-portfolio-accent-foreground hover:shadow-portfolio-glow hover:scale-105 transition-all duration-300"
              >
                <a href="https://github.com/adityabagla7" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={18} />
                  View All Projects
                </a>
              </Button>
              <Button 
                onClick={() => {
                  const section = document.getElementById("contact");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
                className="glass border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-accent-foreground hover:scale-105 transition-all duration-300"
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