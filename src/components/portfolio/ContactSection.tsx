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
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-portfolio-text">Get In</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-portfolio-text-muted max-w-2xl mx-auto mt-6 text-lg">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="bg-portfolio-surface border-portfolio-surface-hover p-8">
              <h3 className="text-2xl font-bold text-portfolio-text mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-portfolio-text font-medium mb-2 block">
                      Your Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-portfolio-bg border-portfolio-surface-hover focus:border-portfolio-accent text-portfolio-text"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-portfolio-text font-medium mb-2 block">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-portfolio-bg border-portfolio-surface-hover focus:border-portfolio-accent text-portfolio-text"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-portfolio-text font-medium mb-2 block">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion"
                    className="bg-portfolio-bg border-portfolio-surface-hover focus:border-portfolio-accent text-portfolio-text"
                    required
                  />
                </div>

                <div>
                  <label className="text-portfolio-text font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="bg-portfolio-bg border-portfolio-surface-hover focus:border-portfolio-accent text-portfolio-text resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary text-portfolio-accent-foreground hover:shadow-portfolio-glow transition-all duration-300"
                >
                  <Send className="mr-2" size={16} />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Information */}
            <Card className="bg-portfolio-surface border-portfolio-surface-hover p-8">
              <h3 className="text-2xl font-bold text-portfolio-text mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = (
                    <div className="flex items-center gap-4 group">
                      <div className="bg-portfolio-accent/10 p-3 rounded-lg group-hover:bg-portfolio-accent/20 transition-colors duration-300">
                        <IconComponent className="text-portfolio-accent" size={20} />
                      </div>
                      <div>
                        <p className="text-portfolio-text-muted text-sm">{info.label}</p>
                        <p className="text-portfolio-text font-medium">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a 
                      key={index}
                      href={info.href}
                      className="block hover:bg-portfolio-surface-hover p-2 rounded-lg transition-colors duration-300"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index} className="p-2">
                      {content}
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Availability */}
            <Card className="bg-portfolio-surface border-portfolio-surface-hover p-8">
              <h3 className="text-2xl font-bold text-portfolio-text mb-6">Availability</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-2 rounded-lg">
                    <Calendar className="text-green-400" size={16} />
                  </div>
                  <div>
                    <p className="text-portfolio-text font-medium">Currently Available</p>
                    <p className="text-portfolio-text-muted text-sm">Open for new opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-portfolio-accent/20 p-2 rounded-lg">
                    <Clock className="text-portfolio-accent" size={16} />
                  </div>
                  <div>
                    <p className="text-portfolio-text font-medium">Response Time</p>
                    <p className="text-portfolio-text-muted text-sm">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="bg-portfolio-surface border-portfolio-surface-hover p-8">
              <h3 className="text-2xl font-bold text-portfolio-text mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg bg-portfolio-bg hover:bg-portfolio-surface-hover border border-portfolio-surface-hover hover:border-portfolio-accent/30 transition-all duration-300 group"
                    >
                      <IconComponent className={`${social.color} group-hover:scale-110 transition-transform duration-300`} size={20} />
                      <span className="text-portfolio-text text-sm font-medium">{social.label}</span>
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