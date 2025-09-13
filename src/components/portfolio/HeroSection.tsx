import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Code, Trophy } from "lucide-react";
import adityaProfile from "@/assets/aditya-profile.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-portfolio-accent/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-portfolio-surface border border-portfolio-accent/20 text-portfolio-accent text-sm font-medium">
                Software Engineer
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-portfolio-text">Aditya</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">Bagla</span>
              </h1>
              
              <p className="text-xl text-portfolio-text-muted leading-relaxed">
                API Developer | Cloud Solutions Specialist
              </p>
              
              <p className="text-lg text-portfolio-text-muted max-w-2xl leading-relaxed">
                I am Aditya Bagla, a Computer Science undergraduate passionate about building scalable applications and solving real-world problems using C++, Golang, Python, and AWS technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-primary text-portfolio-accent-foreground hover:shadow-portfolio-glow transition-all duration-300 px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-accent-foreground transition-all duration-300 px-8 py-3 text-lg"
              >
                Get in Touch
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a 
                href="https://www.linkedin.com/in/aditya-bagla-a4b4b9252/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/adityabagla7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://leetcode.com/u/adityab0497/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300"
              >
                <Code size={24} />
              </a>
              <a 
                href="https://codeforces.com/profile/bagla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300"
              >
                <Trophy size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-surface p-2 rounded-2xl">
                <img 
                  src={adityaProfile} 
                  alt="Aditya Bagla - Professional Profile" 
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-xl shadow-portfolio-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;