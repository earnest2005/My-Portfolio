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
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="w-full max-w-xs px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between mb-2"
        >
          <span className="text-sm font-display font-medium text-muted-foreground tracking-wider uppercase">Loading</span>
          <span className="text-sm font-mono text-primary">{Math.min(progress, 100)}%</span>
        </motion.div>
        
        <div className="h-1 w-full bg-secondary/20 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "circOut", duration: 0.2 }}
          />
        </div>
      </div>
    </div>
  );
}
