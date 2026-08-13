import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function InitialLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080C14]">
      <div className="w-full max-w-xs px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between mb-2"
        >
          <span className="text-xs font-display font-bold text-orange-400/80 tracking-widest uppercase">Loading</span>
          <span className="text-xs font-mono font-bold text-amber-400">{Math.min(progress, 100)}%</span>
        </motion.div>
        
        <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden border border-orange-500/20 shadow-[0_0_10px_rgba(249,115,22,0.1)]">
          <motion.div 
            className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.8)] rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "circOut", duration: 0.2 }}
          />
        </div>
      </div>
    </div>
  );
}

