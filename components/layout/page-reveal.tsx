"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type PageRevealProps = {
  children: ReactNode;
  delay?: number;
};

export function PageReveal({ children, delay = 0 }: PageRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
