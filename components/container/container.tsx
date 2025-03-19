import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Optional: If using a utility function for class merging

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({ children, className, style }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("w-[90%] md:w-[70%] mx-auto mt-10", className)}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default Container;
