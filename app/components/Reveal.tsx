"use client"
import { motion, Variants } from "framer-motion";

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export const Reveal = ({
  children,
  delay = 0,
  duration = 1,
  y = 24,
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-120px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // "expo-out" — softer landing than your current curve
      }}
    >
      {children}
    </motion.div>
  );
};