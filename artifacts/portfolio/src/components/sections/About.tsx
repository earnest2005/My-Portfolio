import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { GraduationCap, Building2, MapPin, Award, Code, Briefcase, Sparkles } from "lucide-react";

const stats = [
  {
    icon: <Briefcase className="w-5 h-5 text-orange-400" />,
    number: "2",
    label: "Internships",
    bg: "bg-orange-500/10 border-orange-500/20"
  },
  {
    icon: <Code className="w-5 h-5 text-amber-400" />,
    number: "3+",
    label: "Projects",
    bg: "bg-amber-500/10 border-amber-500/20"
  },
  {
    icon: <Award className="w-5 h-5 text-orange-400" />,
    number: "10",
    label: "Certifications",
    bg: "bg-orange-500/10 border-orange-500/20"
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-amber-400" />,
    number: "8.26",
    label: "CGPA",
    bg: "bg-amber-500/10 border-amber-500/20"
  }
];

const details = [
  { icon: <GraduationCap size={16} className="text-orange-400" />, label: "Degree", value: "B.Tech AI & Data Science" },
  { icon: <Building2 size={16} className="text-amber-400" />, label: "College", value: "St. Xavier's Catholic College of Engineering" },
  { icon: <MapPin size={16} className="text-orange-400" />, label: "Location", value: "India" },
];

const interests = [
  "Software Development",
  "Data Analytics",
  "Machine Learning",
  "Web Technologies"
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col items-start gap-1">
          <span className="text-orange-400 text-xs font-bold tracking-wider uppercase">
            Personal Profile
          </span>
          <motion.h2 variants={fadeIn} className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-orange-500">Me</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Bio & Personal Details (approx 55% width) */}
          <motion.div variants={fadeIn} className="lg:col-span-7 flex flex-col gap-6 justify-center">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              I'm an Artificial Intelligence & Data Science undergraduate passionate about software development, data analytics, and building practical technology solutions. I enjoy transforming ideas into useful applications through programming, problem-solving, and continuous learning.
            </p>

            {/* Key Personal Details List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {details.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#141B2D] border border-slate-800 shrink-0 mt-0.5 text-orange-400">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="text-slate-400 text-xs font-medium block mb-0.5">{item.label}</span>
                    <span className="text-white font-bold text-sm sm:text-base leading-snug break-words">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Areas of Interest Chips */}
            <div className="pt-2">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold mb-2.5">
                <Sparkles size={14} className="text-orange-400" />
                <span>Areas of Interest</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-lg bg-[#141B2D] border border-slate-700/60 text-slate-200 text-xs font-medium hover:border-orange-500/50 hover:text-white transition-all cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Stat Grid Card (approx 45% width) */}
          <motion.div variants={fadeIn} className="lg:col-span-5 flex items-center">
            <div className="bg-[#0F1524] border border-slate-800/90 rounded-2xl p-6 sm:p-8 w-full transition-all duration-300 hover:border-orange-500/50 shadow-[0_0_25px_rgba(0,0,0,0.3)]">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">
                {stats.map((stat) => (
                  <div 
                    key={stat.label} 
                    className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-[#080C14]/80 border border-slate-800/80 transition-all duration-300 hover:scale-105 hover:border-orange-500/40"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${stat.bg} mb-2.5 shadow-md`}>
                      {stat.icon}
                    </div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white mb-0.5 tracking-tight">
                      {stat.number}
                    </span>
                    <span className="text-slate-400 text-xs font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}



