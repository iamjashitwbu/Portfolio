import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className }) => {
  return (
    <section id={id} className={cn("py-16 md:py-24 border-b border-rule", className)}>
      <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title pt-2"
        >
          {title}
        </motion.div>
        <div className="max-w-[832px]">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
