import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 hidden lg:block"
      animate={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.07), transparent 40%)`,
      }}
      transition={{ type: "tween", ease: "linear", duration: 0 }}
    />
  );
}
