import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Github, ExternalLink, Activity, ShieldAlert, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectBilling from "@assets/generated_images/project_billing.jpg";
import projectLoan from "@assets/generated_images/project_loan.jpg";

const projects = [
  {
    title: "Loan Management System",
    description: "A Loan Management System built with Core Java using a layered architecture to manage customers, process loans, calculate EMI, track repayments, and generate loan reports. Demonstrates strong Object-Oriented Programming concepts and clean code organization.",
    image: projectLoan,
    tags: ["Core Java", "OOP", "Collections", "Exception Handling"],
    features: ["EMI calculation engine", "Repayment & outstanding balance tracking", "Automatic loan status updates", "Loan report generation"],
    challenges: "Structuring a layered architecture in Core Java that keeps customer, loan, and repayment logic cleanly separated and maintainable.",
    learnings: "Deepened understanding of OOP fundamentals, ArrayList and Collections usage, encapsulation, and robust exception handling.",
    github: "https://github.com/earnest2005",
    demo: null
  },
  {
    title: "Elite Men's Wear Billing System",
    description: "A comprehensive Point of Sale (POS) and inventory management web application built for a premium men's fashion retail store, featuring real-time inventory tracking, seamless billing operations, and role-based staff access control.",
    image: projectBilling,
    tags: ["React", "Tailwind CSS", "Firebase"],
    features: ["Real-time inventory tracking", "Seamless billing operations", "Role-based staff access control", "Responsive UI with dark mode support"],
    challenges: "Designing a responsive, usable interface that streamlines daily retail operations while keeping inventory and billing data in sync in real time.",
    learnings: "Hands-on experience with Firebase (Firestore & Authentication), React state management, and building production-ready retail UIs.",
    github: "https://github.com/earnest2005",
    demo: null
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-12"
      >
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-display font-bold">
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
            Selected works showcasing my ability to build complex applications from concept to deployment.
          </motion.p>
        </div>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={project.title}
                variants={fadeIn}
                className={`flex flex-col gap-8 lg:gap-16 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500 rounded-3xl" />
                  <div className="relative rounded-3xl overflow-hidden glass-card border-white/10 shadow-2xl aspect-[16/10]">
                    <div className="absolute inset-0 bg-background/20" />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.classList.add('bg-muted', 'flex', 'items-center', 'justify-center');
                      }}
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                  <div>
                    <h3 className="text-3xl font-display font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <div className="glass p-4 rounded-xl">
                      <div className="flex items-center gap-2 text-primary font-medium mb-2">
                        <Activity size={16} /> Key Features
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        {project.features.map(f => <li key={f}>{f}</li>)}
                      </ul>
                    </div>
                    <div className="glass p-4 rounded-xl">
                      <div className="flex items-center gap-2 text-accent font-medium mb-2">
                        <ShieldAlert size={16} /> Challenges
                      </div>
                      <p className="text-sm text-muted-foreground">{project.challenges}</p>
                    </div>
                  </div>

                  <div className="glass p-4 rounded-xl mb-2">
                    <div className="flex items-center gap-2 text-secondary font-medium mb-2">
                      <Cpu size={16} /> Key Learnings
                    </div>
                    <p className="text-sm text-muted-foreground">{project.learnings}</p>
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <Button variant="outline" className="gap-2 rounded-full" onClick={() => window.open(project.github, '_blank')}>
                        <Github size={18} /> Source Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="default" className="gap-2 rounded-full bg-primary text-white" onClick={() => window.open(project.demo ?? undefined, '_blank')}>
                        <ExternalLink size={18} /> Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
