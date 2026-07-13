import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Github, ExternalLink, Activity, ShieldAlert, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectBilling from "@assets/generated_images/project_billing.jpg";
import projectLoan from "@assets/generated_images/project_loan.jpg";
import projectDashboard from "@assets/generated_images/project_dashboard.jpg";
import projectPortfolio from "@assets/generated_images/project_portfolio.jpg";

const projects = [
  {
    title: "Elite Men's Wear Billing System",
    description: "A comprehensive point-of-sale and inventory management system designed for premium retail. Handles complex GST calculations and real-time stock tracking.",
    image: projectBilling,
    tags: ["React", "Firebase", "Inventory", "Billing", "Customer Management", "GST", "User Management"],
    features: ["Real-time inventory sync", "Automated GST invoicing", "Customer loyalty tracking"],
    challenges: "Managing concurrent transactions and ensuring data consistency in Firebase.",
    learnings: "Deepened understanding of NoSQL database structuring and React context for global state.",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Loan Management System",
    description: "Enterprise-grade desktop application for processing loan applications, calculating amortizations, and managing customer financial records securely.",
    image: projectLoan,
    tags: ["Core Java", "OOP", "Collections", "Exception Handling", "Swing"],
    features: ["Amortization schedule generator", "Risk assessment logic", "Encrypted data storage"],
    challenges: "Building a responsive UI in Java Swing while running heavy financial calculations.",
    learnings: "Mastered multithreading in Java and robust exception handling architectures.",
    github: "https://github.com",
    demo: null
  },
  {
    title: "Data Analytics Dashboard",
    description: "Interactive executive dashboard synthesizing millions of rows of sales data into actionable business intelligence with predictive trending.",
    image: projectDashboard,
    tags: ["Power BI", "SQL", "Excel", "Python", "Pandas"],
    features: ["Predictive sales forecasting", "Interactive drill-down charts", "Automated ETL pipeline"],
    challenges: "Optimizing SQL queries to handle large datasets without timing out the dashboard.",
    learnings: "Advanced DAX formulas and data storytelling techniques.",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Premium Portfolio Website",
    description: "A glassmorphic, highly interactive personal portfolio designed to stand out. Features complex scroll animations and dynamic theming.",
    image: projectPortfolio,
    tags: ["React", "Tailwind", "Framer Motion", "Vite"],
    features: ["Dark/Light mode seamless toggle", "Scroll-triggered reveals", "Performance optimized"],
    challenges: "Creating smooth, jank-free animations across varying device capabilities.",
    learnings: "Advanced Framer Motion orchestration and complex CSS variable theming.",
    github: "https://github.com",
    demo: "https://demo.com"
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
                      <Button variant="default" className="gap-2 rounded-full bg-primary text-white" onClick={() => window.open(project.demo, '_blank')}>
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
