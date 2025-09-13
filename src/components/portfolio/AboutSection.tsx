import { Card } from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-portfolio-text">About</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg text-portfolio-text-muted leading-relaxed">
              I am Aditya Bagla, a Computer Science undergraduate at BITS Pilani, Goa, with a strong passion for software development and innovative technology solutions. My career goal is to excel in software engineering by building scalable applications, contributing to impactful projects, and leveraging my skills in C++, Golang, Python, and cloud technologies like AWS.
            </p>
            
            <p className="text-lg text-portfolio-text-muted leading-relaxed">
              I have hands-on experience through internships at Coinbase and campus projects, where I focused on automation, web development, and predictive analytics. I am eager to grow as a developer, solve real-world problems, and contribute meaningfully to the tech industry.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h4 className="text-portfolio-accent font-semibold mb-2">Location</h4>
                <p className="text-portfolio-text-muted">Goa, India</p>
              </div>
              <div>
                <h4 className="text-portfolio-accent font-semibold mb-2">Email</h4>
                <p className="text-portfolio-text-muted">adityabaglaa18@gmail.com</p>
              </div>
              <div>
                <h4 className="text-portfolio-accent font-semibold mb-2">Phone</h4>
                <p className="text-portfolio-text-muted">+91 8955697174</p>
              </div>
              <div>
                <h4 className="text-portfolio-accent font-semibold mb-2">Status</h4>
                <p className="text-portfolio-text-muted">Available for opportunities</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-portfolio-text mb-8">Education</h3>
            
            <Card className="bg-portfolio-surface border-portfolio-surface-hover hover:border-portfolio-accent/30 transition-all duration-300 p-6">
              <div className="flex items-start gap-4">
                <div className="bg-portfolio-accent/10 p-3 rounded-lg">
                  <GraduationCap className="text-portfolio-accent" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-portfolio-text mb-2">
                    B.E/B.Tech in Computer Science
                  </h4>
                  <p className="text-portfolio-accent mb-2">BITS Pilani KK Birla Goa Campus</p>
                  <p className="text-portfolio-text-muted text-sm">2022 – 2026</p>
                  <p className="text-portfolio-text-muted mt-3">
                    Pursuing Computer Science Engineering with focus on software development, algorithms, and system design.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-portfolio-surface border-portfolio-surface-hover hover:border-portfolio-accent/30 transition-all duration-300 p-6">
              <div className="flex items-start gap-4">
                <div className="bg-portfolio-accent/10 p-3 rounded-lg">
                  <School className="text-portfolio-accent" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-portfolio-text mb-2">
                    Class XII & X
                  </h4>
                  <p className="text-portfolio-accent mb-2">Green Valley Public School (CBSE)</p>
                  <p className="text-portfolio-text-muted text-sm">2020 & 2022</p>
                  <p className="text-portfolio-text-muted mt-3">
                    Completed secondary education with strong foundation in mathematics and science.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;