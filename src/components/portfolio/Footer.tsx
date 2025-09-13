import { Linkedin, Github, Code, Trophy, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aditya-bagla-a4b4b9252/",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/adityabagla7",
      label: "GitHub"
    },
    {
      icon: Code,
      href: "https://leetcode.com/u/adityab0497/",
      label: "LeetCode"
    },
    {
      icon: Trophy,
      href: "https://codeforces.com/profile/bagla",
      label: "Codeforces"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.replace('#', ''));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-portfolio-bg border-t border-portfolio-surface">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-portfolio-text mb-4">
              Aditya Bagla
            </h3>
            <p className="text-portfolio-text-muted mb-6 max-w-md leading-relaxed">
              Software Engineer passionate about building scalable applications and solving real-world problems through innovative technology solutions.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-portfolio-surface hover:bg-portfolio-accent/20 p-3 rounded-lg transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <IconComponent 
                      className="text-portfolio-text-muted group-hover:text-portfolio-accent transition-colors duration-300" 
                      size={20} 
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-portfolio-text mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-portfolio-text mb-6">Contact</h4>
            <div className="space-y-3">
              <p className="text-portfolio-text-muted">
                <span className="text-portfolio-accent">Email:</span>
                <br />
                <a 
                  href="mailto:adityabaglaa18@gmail.com"
                  className="hover:text-portfolio-accent transition-colors duration-300"
                >
                  adityabaglaa18@gmail.com
                </a>
              </p>
              <p className="text-portfolio-text-muted">
                <span className="text-portfolio-accent">Phone:</span>
                <br />
                <a 
                  href="tel:+918955697174"
                  className="hover:text-portfolio-accent transition-colors duration-300"
                >
                  +91 8955697174
                </a>
              </p>
              <p className="text-portfolio-text-muted">
                <span className="text-portfolio-accent">Location:</span>
                <br />
                Goa, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-portfolio-surface pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-portfolio-text-muted text-sm">
              © {currentYear} Aditya Bagla. All rights reserved.
            </p>
            <p className="text-portfolio-text-muted text-sm flex items-center gap-1">
              Made with <Heart className="text-red-500" size={16} fill="currentColor" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;