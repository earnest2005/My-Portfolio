import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { ArrowRight, ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import projectBilling from "@assets/generated_images/project_billing.jpg";
import projectLoan from "@assets/generated_images/project_loan.jpg";
import projectPortfolio from "@assets/generated_images/project_portfolio.jpg";

const projectsList = [
  {
    title: "Elite Men's Wear Billing System",
    description: "A full-stack billing and inventory management system with admin & staff roles, invoice management, low stock alerts, and reports.",
    image: projectBilling,
    tags: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/earnest2005"
  },
  {
    title: "Loan Management System",
    description: "Java console application to manage loan applications with file handling, customer validation, and auto-generated IDs.",
    image: projectLoan,
    tags: ["Java", "OOP", "File Handling"],
    github: "https://github.com/earnest2005"
  },
  {
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio built with React, Vite, Tailwind CSS and Framer Motion with smooth animations.",
    image: projectPortfolio,
    tags: ["React", "Vite", "Framer Motion"],
    github: "https://github.com/earnest2005"
  }
];

export default function Projects() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handlePrev = () => {
    setScrollIndex((prev) => (prev > 0 ? prev - 1 : projectsList.length - 1));
  };

  const handleNext = () => {
    setScrollIndex((prev) => (prev < projectsList.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="projects" className="relative scroll-mt-24 py-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-6"
      >
        {/* Header row */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col items-start gap-1">
            <span className="text-orange-400 text-xs font-bold tracking-wider uppercase">
              Portfolio Showcase
            </span>
            <motion.h2 variants={fadeIn} className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Featured <span className="text-orange-500">Projects</span>
            </motion.h2>
          </div>

          <motion.a 
            variants={fadeIn}
            href="https://github.com/earnest2005" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-orange-400 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            View All Projects
            <ArrowRight size={15} />
          </motion.a>
        </div>

        {/* Carousel Grid Area */}
        <div className="relative group">
          
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-[-14px] sm:left-[-18px] top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#12182B]/90 border border-slate-700/80 text-slate-300 hover:text-white hover:border-orange-500/60 flex items-center justify-center shadow-lg transition-all"
            aria-label="Previous Project"
          >
            <ChevronLeft size={17} />
          </button>

          <button 
            onClick={handleNext}
            className="absolute right-[-14px] sm:right-[-18px] top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#12182B]/90 border border-slate-700/80 text-slate-300 hover:text-white hover:border-orange-500/60 flex items-center justify-center shadow-lg transition-all"
            aria-label="Next Project"
          >
            <ChevronRight size={17} />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projectsList.map((project, idx) => (
              <motion.div
                key={project.title}
                variants={fadeIn}
                className="bg-[#0F1524] border border-slate-800/90 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.18)] group/card"
              >
                <div>
                  {/* Image Container */}
                  <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-[#080C14] relative border border-slate-800/60">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-white text-base font-bold mb-2 group-hover/card:text-orange-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags Row */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-800/60 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2.5 py-1 rounded-md bg-[#141B2D] border border-slate-700/50 text-slate-300 text-[11px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-[#141B2D] text-slate-300 hover:text-white hover:bg-orange-500/20 hover:border-orange-500/40 border border-slate-700/60 transition-all shrink-0"
                    aria-label="View Code"
                  >
                    <Github size={15} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}


