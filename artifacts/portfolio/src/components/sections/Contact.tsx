import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Send, MapPin, Mail, Linkedin, Github, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after showing success
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: "", email: "", message: "" });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative scroll-mt-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto"
      >
        <div className="w-full lg:w-5/12 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-display font-bold">
              Let's <span className="text-gradient">Connect</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
              Currently seeking internship opportunities and open to exciting projects. Feel free to reach out!
            </motion.p>
          </div>

          <motion.div variants={fadeIn} className="flex flex-col gap-6 mt-4">
            <a href="mailto:earnestabrah@gmail.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Email</p>
                <p className="text-lg font-bold group-hover:text-primary transition-colors">earnestabrah@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-secondary">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Location</p>
                <p className="text-lg font-bold">Kulesekaram, Tamil Nadu, India</p>
              </div>
            </div>
            
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/earnest2005" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/earnest-abraham-622b25335" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeIn} className="w-full lg:w-7/12">
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 z-10 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 rounded-3xl"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-display font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground text-lg">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="How can we work together?"
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full rounded-xl gap-2 mt-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
