import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Code, Trophy, Calendar, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "adityabaglaa18@gmail.com",
      href: "mailto:adityabaglaa18@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8955697174",
      href: "tel:+918955697174"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Goa, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aditya-bagla-a4b4b9252/",
      color: "text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/adityabagla7",
      color: "text-gray-400"
    },
    {
      icon: Code,
      label: "LeetCode",
      href: "https://leetcode.com/u/adityab0497/",
      color: "text-yellow-400"
    },
    {
      icon: Trophy,
      label: "Codeforces",
      href: "https://codeforces.com/profile/bagla",
      color: "text-red-400"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-portfolio-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-portfolio-text">Get In</span>{" "}
            <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full shadow-portfolio-glow"></div>
          <p className="text-portfolio-text-muted max-w-2xl mx-auto mt-6 text-lg">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="modern-card p-10 hover:shadow-portfolio-xl">
              <h3 className="text-3xl font-bold text-portfolio-text mb-8 flex items-center gap-3">
                <div className="glass p-3 rounded-xl">
                  <Send className="text-portfolio-accent" size={24} />
                </div>
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-portfolio-text font-semibold mb-3 block text-lg">
                      Your Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="glass border-portfolio-accent/30 focus:border-portfolio-accent text-portfolio-text text-lg py-4 rounded-xl transition-all duration-300 hover:shadow-portfolio-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-portfolio-text font-semibold mb-3 block text-lg">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="glass border-portfolio-accent/30 focus:border-portfolio-accent text-portfolio-text text-lg py-4 rounded-xl transition-all duration-300 hover:shadow-portfolio-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-portfolio-text font-semibold mb-3 block text-lg">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion"
                    className="glass border-portfolio-accent/30 focus:border-portfolio-accent text-portfolio-text text-lg py-4 rounded-xl transition-all duration-300 hover:shadow-portfolio-sm"
                    required
                  />
                </div>

                <div>
                  <label className="text-portfolio-text font-semibold mb-3 block text-lg">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="glass border-portfolio-accent/30 focus:border-portfolio-accent text-portfolio-text resize-none rounded-xl transition-all duration-300 hover:shadow-portfolio-sm text-lg"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="btn-modern w-full bg-gradient-primary text-portfolio-accent-foreground hover:shadow-portfolio-glow hover:scale-105 transition-all duration-300 py-4 text-lg rounded-xl"
                >
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="lg:col-span-2 space-y-10">
            {/* Contact Information */}
            <Card className="modern-card p-10 hover:shadow-portfolio-xl">
              <h3 className="text-3xl font-bold text-portfolio-text mb-8 flex items-center gap-3">
                <div className="glass p-3 rounded-xl">
                  <Mail className="text-portfolio-accent" size={24} />
                </div>
                Contact Information
              </h3>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = (
                    <div className="flex items-center gap-6 group">
                      <div className="glass p-4 rounded-2xl group-hover:scale-110 group-hover:shadow-portfolio-glow transition-all duration-300">
                        <IconComponent className="text-portfolio-accent" size={24} />
                      </div>
                      <div>
                        <p className="text-portfolio-text-muted text-sm font-medium uppercase tracking-wider">{info.label}</p>
                        <p className="text-portfolio-text font-semibold text-lg mt-1">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a 
                      key={index}
                      href={info.href}
                      className="block hover:bg-portfolio-surface-hover p-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-portfolio-md"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index} className="p-4">
                      {content}
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Availability */}
            <Card className="modern-card p-10 hover:shadow-portfolio-xl">
              <h3 className="text-3xl font-bold text-portfolio-text mb-8 flex items-center gap-3">
                <div className="glass p-3 rounded-xl">
                  <Calendar className="text-portfolio-accent" size={24} />
                </div>
                Availability
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="glass p-3 rounded-2xl">
                    <Calendar className="text-green-400" size={20} />
                  </div>
                  <div>
                    <p className="text-portfolio-text font-semibold text-lg">Currently Available</p>
                    <p className="text-portfolio-text-muted">Open for new opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="glass p-3 rounded-2xl">
                    <Clock className="text-portfolio-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-portfolio-text font-semibold text-lg">Response Time</p>
                    <p className="text-portfolio-text-muted">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="modern-card p-10 hover:shadow-portfolio-xl">
              <h3 className="text-3xl font-bold text-portfolio-text mb-8 flex items-center gap-3">
                <div className="glass p-3 rounded-xl">
                  <Linkedin className="text-portfolio-accent" size={24} />
                </div>
                Connect With Me
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-6 rounded-2xl glass border border-portfolio-surface-hover hover:border-portfolio-accent/30 transition-all duration-300 group hover:scale-105 hover:shadow-portfolio-md"
                    >
                      <IconComponent className={`${social.color} group-hover:scale-125 transition-transform duration-300`} size={24} />
                      <span className="text-portfolio-text font-semibold">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;