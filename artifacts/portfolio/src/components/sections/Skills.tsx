import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { FaJava } from "react-icons/fa";
import { SiPython, SiJavascript, SiTypescript, SiMysql, SiHtml5, SiReact, SiTailwindcss, SiVite, SiFirebase, SiNodedotjs, SiGithub, SiPostman, SiPandas, SiNumpy } from "react-icons/si";
import { FileSpreadsheet, BarChart3, Database, Code, Wrench } from "lucide-react";

const categories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava className="text-orange-400" /> },
      { name: "Python", icon: <SiPython className="text-amber-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-orange-400" /> },
      { name: "SQL", icon: <SiMysql className="text-amber-400" /> },
      { name: "HTML/CSS", icon: <SiHtml5 className="text-orange-500" /> },
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <SiReact className="text-amber-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-orange-400" /> },
      { name: "Vite", icon: <SiVite className="text-amber-400" /> },
      { name: "Wouter", icon: <Code className="text-orange-400 w-3.5 h-3.5" /> },
      { name: "shadcn/ui", icon: <Wrench className="text-amber-400 w-3.5 h-3.5" /> },
    ]
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Firebase", icon: <SiFirebase className="text-amber-400" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-orange-400" /> },
      { name: "Git & GitHub", icon: <SiGithub className="text-amber-400" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    ]
  },
  {
    title: "Data & Analytics",
    skills: [
      { name: "Pandas", icon: <SiPandas className="text-amber-400" /> },
      { name: "NumPy", icon: <SiNumpy className="text-orange-400" /> },
      { name: "Power BI", icon: <BarChart3 className="text-yellow-400 w-3.5 h-3.5" /> },
      { name: "Excel", icon: <FileSpreadsheet className="text-amber-400 w-3.5 h-3.5" /> },
      { name: "Data Visualization", icon: <Database className="text-orange-400 w-3.5 h-3.5" /> },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col items-start gap-1">
          <span className="text-orange-400 text-xs font-bold tracking-wider uppercase">
            Technical Proficiency
          </span>
          <motion.h2 variants={fadeIn} className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            My Technical <span className="text-orange-500">Skills</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={fadeIn}
              className="bg-[#0F1524] border border-slate-800/90 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]"
            >
              <div>
                <h3 className="text-orange-400 text-xs font-extrabold mb-4 tracking-wider uppercase">
                  {cat.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141B2D] border border-slate-700/60 text-slate-200 text-xs font-medium hover:border-orange-500/50 hover:bg-[#1A243C] transition-all cursor-default"
                    >
                      <span className="text-sm shrink-0">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


