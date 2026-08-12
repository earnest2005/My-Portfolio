import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Award, ExternalLink, Calendar, FileText } from "lucide-react";
import certCTraining from "@assets/0_C_program_online_1783965316785.pdf";
import certIEEE from "@assets/1_Certificate_IEEE_Xplore_1783965316787.pdf";
import certDigitalProductivity from "@assets/2_Digital_Productivity_1783965316789.pdf";
import certDreamKK from "@assets/3_Dream_KK_1783965316790.pdf";
import certGermanA1 from "@assets/4_German_A1_1783965316792.pdf";
import certHackfest from "@assets/5_Hackfest_1783965316795.pdf";
import certAkInternship from "@assets/6_Internship_3rd_sem_1783965316797.pdf";
import certNeurax from "@assets/7_Neurax_1783965316799.pdf";
import certWhiteAuraXInternship from "@assets/8_White_AuraX_Internship_1783965316801.pdf";

const certifications = [
  {
    title: "Completion of C Training",
    issuer: "Spoken Tutorial (IIT Bombay) & EduPyramids",
    date: "2026",
    file: certCTraining,
  },
  {
    title: "Participation — IEEE Xplore Webinar",
    issuer: "EBSCO Information Services India & St. Xavier's Catholic College of Engineering",
    date: "2026",
    file: certIEEE,
  },
  {
    title: "Digital Productivity with AI",
    issuer: "Passport to Earning (P2E) Skills, with UNICEF & YuWaah!",
    date: "2025",
    file: certDigitalProductivity,
  },
  {
    title: "Idea/Poster Presentation — Dream Kanyakumari 2026",
    issuer: "StartupTN & Nocrul Islam Centre For Higher Education (NICHE)",
    date: "2026",
    file: certDreamKK,
  },
  {
    title: "German Language Course — Level A1",
    issuer: "Bryan's Academy, Nagercoil & St. Xavier's Catholic College of Engineering",
    date: "2025",
    file: certGermanA1,
  },
  {
    title: "HackFest'2026 — Intra-College Hackathon",
    issuer: "Hackathon Cell, St. Xavier's Catholic College of Engineering",
    date: "2026",
    file: certHackfest,
  },
  {
    title: "Internship — Mobile App Development",
    issuer: "AK Infopark",
    date: "2025",
    file: certAkInternship,
  },
  {
    title: "NeuraX'26 — 8-Hour Intra-College Hackathon",
    issuer: "Hackathon Cell, St. Xavier's Catholic College of Engineering",
    date: "2026",
    file: certNeurax,
  },
  {
    title: "Internship — Java Development",
    issuer: "White AuraX OPC PVT LTD",
    date: "2026",
    file: certWhiteAuraXInternship,
  },
  {
    title: "AI for Beginners",
    issuer: "HP LIFE",
    date: "2026",
    file: null,
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative scroll-mt-24 py-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col items-start gap-1">
          <span className="text-orange-400 text-xs font-bold tracking-wider uppercase">
            Qualifications & Credentials
          </span>
          <motion.h2 variants={fadeIn} className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            My <span className="text-orange-500">Certifications</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-[#0F1524] border border-slate-800/90 rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#141B2D] border border-slate-700/60 flex items-center justify-center shrink-0 text-orange-400 group-hover:scale-105 transition-transform">
                <Award size={20} />
              </div>
              
              <div className="flex flex-col flex-1 min-w-0">
                <h3 className="text-white text-base font-bold mb-1 truncate group-hover:text-orange-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-300 font-medium text-xs mb-3 line-clamp-2">
                  {cert.issuer}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800/60 mt-auto">
                  <div className="flex items-center gap-1 text-[11px] text-slate-300 font-medium">
                    <Calendar size={13} className="text-amber-400" />
                    <span>{cert.date}</span>
                  </div>

                  {cert.file ? (
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold hover:bg-orange-500/20 hover:text-white transition-all"
                    >
                      <FileText size={13} />
                      <span>View Certificate</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="text-[11px] text-slate-400 italic">Certificate Verified</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


