"use client";

import * as React from "react";
import { motion } from "motion/react";

interface ShiningTextProps {
  text: string;
  className?: string;
}

export function ShiningText({ text, className = "" }: ShiningTextProps) {
  return (
    <motion.h1
      className={`bg-[linear-gradient(110deg,#64748B,35%,#0F172A,50%,#64748B,75%,#64748B)] bg-[length:200%_100%] bg-clip-text text-base font-medium text-transparent inline-block select-none ${className}`}
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "linear",
      }}
    >
      {text}
    </motion.h1>
  );
}
