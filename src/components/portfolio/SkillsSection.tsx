import { Card } from "@/components/ui/card";
import { Code, Database, Cloud, Wrench, BookOpen, Zap } from "lucide-react";

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
    "API Development",
    "Background Automation", 
    "Predictive Analytics",
    "Responsive Web Development",
    "Scalable Systems"
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-portfolio-text">Technical</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="bg-portfolio-surface border-portfolio-surface-hover hover:border-portfolio-accent/30 hover:shadow-portfolio-lg transition-all duration-300 p-6 group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-portfolio-accent/10 p-3 rounded-lg group-hover:bg-portfolio-accent/20 transition-colors duration-300">
                    <IconComponent className="text-portfolio-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-portfolio-text">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-portfolio-bg text-portfolio-text rounded-full text-sm border border-portfolio-surface-hover hover:border-portfolio-accent/30 transition-colors duration-300"
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
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-portfolio-text text-center mb-8">Methodologies & Specializations</h3>
          
          <Card className="bg-portfolio-surface border-portfolio-surface-hover p-8">
            <div className="flex flex-wrap justify-center gap-4">
              {methodologies.map((methodology, index) => (
                <div 
                  key={index}
                  className="px-6 py-3 bg-gradient-primary text-portfolio-accent-foreground rounded-full font-medium hover:shadow-portfolio-glow transition-all duration-300 cursor-default"
                >
                  {methodology}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[
            { number: "2+", label: "Years Experience" },
            { number: "15+", label: "Projects Completed" },
            { number: "5+", label: "Technologies Mastered" },
            { number: "300+", label: "Students Impacted" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-portfolio-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;