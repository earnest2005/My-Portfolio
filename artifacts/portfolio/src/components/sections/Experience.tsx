import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Java Developer Intern",
    company: "White AuraX OPC PVT LTD · Trivandrum",
    date: "Jul 2026",
    description: "Learned core object-oriented programming concepts and developed a console-based Loan Management System with full CRUD operations. Implemented EMI calculation, loan payment processing, outstanding balance tracking, and automatic loan status updates using ArrayList, encapsulation, constructors, methods, and exception handling.",
    tags: ["Java", "OOP", "Exception Handling", "Collections"]
  },
  {
    id: 2,
    title: "Mobile App Development Intern",
    company: "AK Infopark · Nagercoil",
    date: "Dec 2025",
    description: "Developed cross-platform mobile applications using React Native. Designed reusable UI components with JavaScript and JSX, managed application state using React hooks (useState, useEffect), and integrated APIs to handle data flow between frontend and backend services.",
    tags: ["React Native", "JavaScript", "JSX", "REST APIs"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col items-start gap-1">
          <span className="text-orange-400 text-xs font-bold tracking-wider uppercase">
            Work History
          </span>
          <motion.h2 variants={fadeIn} className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Work <span className="text-orange-500">Experience</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={fadeIn}
              className="bg-[#0F1524] border border-slate-800/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 text-orange-400 text-xs font-semibold">
                    <Briefcase size={15} />
                    <span>{exp.company}</span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#141B2D] border border-slate-700/60 text-slate-300 text-[11px] font-medium shrink-0">
                    <Calendar size={12} className="text-amber-400" />
                    <span>{exp.date}</span>
                  </div>
                </div>

                <h3 className="text-white text-lg font-bold mb-3">
                  {exp.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/60">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-[#141B2D] border border-slate-700/50 text-slate-300 text-[11px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


