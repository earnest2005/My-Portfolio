import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Briefcase, Calendar, Code } from "lucide-react";

const timeline = [
  {
    id: 1,
    type: "internship",
    title: "Java Developer Intern",
    company: "White AuraX OPC PVT LTD · Trivandrum",
    date: "Jul 2026",
    icon: <Briefcase size={20} />,
    description: "Learned core object-oriented programming concepts and developed a console-based Loan Management System with full CRUD operations. Implemented EMI calculation, loan payment processing, outstanding balance tracking, and automatic loan status updates using ArrayList, encapsulation, constructors, methods, and exception handling.",
    tags: ["Java", "OOP", "Exception Handling", "Collections"]
  },
  {
    id: 2,
    type: "internship",
    title: "Mobile App Development Intern",
    company: "AK Infopark · Nagercoil",
    date: "Dec 2025",
    icon: <Code size={20} />,
    description: "Developed cross-platform mobile applications using React Native. Designed reusable UI components with JavaScript and JSX, managed application state using React hooks (useState, useEffect), and integrated APIs to handle data flow between frontend and backend services.",
    tags: ["React Native", "JavaScript", "JSX", "REST APIs"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-12"
      >
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-display font-bold">
            Journey & <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.p variants={fadeIn} className="text-muted-foreground text-lg">
            A timeline of my internships and hands-on development experience.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto w-full">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-30 transform md:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  variants={fadeIn}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center transform -translate-x-1/2 z-10 text-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    {item.icon}
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? "md:pr-16" : "md:pl-16"}`}>
                    <div className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary uppercase tracking-wider">
                          {item.type}
                        </span>
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <Calendar size={14} />
                          {item.date}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                      <h4 className="text-muted-foreground font-medium mb-4">{item.company}</h4>
                      
                      <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {item.tags.map(tag => (
                          <span key={tag} className="text-xs font-medium px-2 py-1 bg-secondary/10 text-secondary rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
