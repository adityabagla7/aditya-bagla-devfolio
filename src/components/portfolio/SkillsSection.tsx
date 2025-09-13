import { Card } from "@/components/ui/card";
import { BookOpen, Cloud, Code, Database, Wrench, Zap } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C++", "Golang", "Python", "Java", "C", "SQL"],
      color: "text-blue-400"
    },
    {
      title: "Frameworks & Technologies",
      icon: Zap,
      skills: ["gRPC", "Streamlit", "React.js", "Node.js"],
      color: "text-green-400"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL"],
      color: "text-purple-400"
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["AWS (S3, Lambda)"],
      color: "text-cyan-400"
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Git", "SMTP Mailing Systems"],
      color: "text-orange-400"
    },
    {
      title: "Software Concepts",
      icon: BookOpen,
      skills: ["OOP", "Data Structures", "Operating Systems", "Computer Networks"],
      color: "text-pink-400"
    }
  ];

  const methodologies = [
    "Web Development",
    "Software Development", 
    "Problem Solving",
    "Team Collaboration",
    "Data Analysis",
    "Machine Learning",
    "AI"
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-portfolio-text">Technical</span>{" "}
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full shadow-portfolio-glow"></div>
          <p className="text-portfolio-text-muted max-w-2xl mx-auto mt-6 text-lg">
            Technologies and methodologies I use to build amazing solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="modern-card p-8 hover:shadow-portfolio-xl group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="glass p-4 rounded-2xl group-hover:scale-110 group-hover:shadow-portfolio-glow transition-all duration-300">
                    <IconComponent className="text-portfolio-accent" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-portfolio-text">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 glass text-portfolio-text rounded-xl text-sm border border-portfolio-surface-hover hover:border-portfolio-accent/40 hover:scale-105 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Methodologies */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-portfolio-text text-center mb-12">Areas of Focus</h3>
          
          <Card className="modern-card p-10 hover:shadow-portfolio-xl">
            <div className="flex flex-wrap justify-center gap-6">
              {methodologies.map((methodology, index) => (
                <div 
                  key={index}
                  className="group cursor-default"
                >
                  <div className="px-8 py-4 bg-gradient-primary text-portfolio-accent-foreground rounded-2xl font-semibold hover:shadow-portfolio-glow hover:scale-105 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative z-10">{methodology}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;