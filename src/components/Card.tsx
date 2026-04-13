import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface CardProps {
  title: string;
  subtitle?: string;
  meta?: string;
  children: React.ReactNode;
  className?: string;
  link?: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, meta, children, className, link }) => {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("left-border-card group", className)}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-3">
        <h3 className="text-2xl font-bold group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        {meta && <div className="eyebrow text-muted">{meta}</div>}
      </div>
      {subtitle && <div className="text-muted mb-4">{subtitle}</div>}
      <div className="text-text/90 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block focus:outline-none">
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

export default Card;
