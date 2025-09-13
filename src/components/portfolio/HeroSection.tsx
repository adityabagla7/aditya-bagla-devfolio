import adityaProfile from "@/assets/image.png";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Github, Linkedin, Trophy } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-glow animate-pulse"></div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-6 py-3 rounded-full glass border border-portfolio-accent/30 text-portfolio-accent text-sm font-medium hover:scale-105 transition-transform duration-300">
                ✨ Software Engineer
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-portfolio-text">Aditya</span>
                <br />
                <span className="gradient-text">Bagla</span>
              </h1>
              
              <div className="space-y-3">
                <p className="text-xl text-portfolio-accent font-medium">
                  Software Developer | Open to work
                </p>
                
                <p className="text-lg text-portfolio-text-muted max-w-2xl leading-relaxed">
                  I am Aditya Bagla, a Computer Science undergraduate passionate about building scalable applications and solving real-world problems using C++, Golang, Java, Python, and AWS technologies.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection("projects")}
                className="btn-modern bg-gradient-primary text-portfolio-accent-foreground hover:shadow-portfolio-glow hover:scale-105 transition-all duration-300 px-8 py-3 text-lg rounded-xl"
              >
                View My Work
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="glass border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-accent-foreground hover:scale-105 transition-all duration-300 px-8 py-3 text-lg rounded-xl"
              >
                Get in Touch
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-6">
              {[
                { href: "https://www.linkedin.com/in/aditya-bagla-a4b4b9252/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/adityabagla7", icon: Github, label: "GitHub" },
                { href: "https://leetcode.com/u/adityab0497/", icon: Code, label: "LeetCode" },
                { href: "https://codeforces.com/profile/bagla", icon: Trophy, label: "Codeforces" }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-xl text-portfolio-text-muted hover:text-portfolio-accent hover:scale-110 hover:shadow-portfolio-md transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative float">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 pulse-glow"></div>
              <div className="relative modern-card p-3 rounded-3xl hover:shadow-portfolio-glow-lg transition-all duration-500">
                <img 
                  src={adityaProfile} 
                  alt="Aditya Bagla - Professional Profile" 
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-bg/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection("about")}
            className="glass p-3 rounded-full text-portfolio-text-muted hover:text-portfolio-accent hover:scale-110 transition-all duration-300 animate-bounce"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;