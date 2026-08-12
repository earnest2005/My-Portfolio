import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Code2, Globe, BarChart3, Brain, Smartphone, Database } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-6 h-6 text-orange-400" />,
    title: "Software Development",
    description: "Building robust console & desktop applications using object-oriented Java and Python programming with clean CRUD logic.",
  },
  {
    icon: <Globe className="w-6 h-6 text-amber-400" />,
    title: "Web Development",
    description: "Creating modern, responsive frontend web applications with React.js, TypeScript, Tailwind CSS, and interactive UI frameworks.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-orange-400" />,
    title: "Data Analytics",
    description: "Analyzing data trends, visualizing key metrics, and handling structured datasets using Pandas, NumPy, Power BI, and Excel.",
  },
  {
    icon: <Brain className="w-6 h-6 text-amber-400" />,
    title: "AI & Machine Learning",
    description: "Exploring core Artificial Intelligence algorithms, predictive models, and smart automation concepts as an AI & DS undergraduate.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-orange-400" />,
    title: "Mobile App Development",
    description: "Designing cross-platform mobile app interfaces with React Native, JSX, state management, and backend REST API integration.",
  },
  {
    icon: <Database className="w-6 h-6 text-amber-400" />,
    title: "Database & Backend",
    description: "Managing structured databases with SQL, Firebase cloud storage, Node.js endpoints, and backend API integration.",
  },
];

export default function WhatIDo() {
  return (
    <section id="services" className="relative scroll-mt-24 py-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col items-start gap-1">
          <span className="text-orange-400 text-xs font-bold tracking-wider uppercase">
            Services & Expertise
          </span>
          <motion.h2 variants={fadeIn} className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            What I <span className="text-orange-500">Do</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-[#0F1524] border border-slate-800/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-orange-500/20">
                  {service.icon}
                </div>
                <h3 className="text-white text-base font-bold mb-2 group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
