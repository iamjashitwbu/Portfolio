import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <Section id="about" title="About">
      <div className="space-y-8">
        <p className="font-sans text-2xl md:text-3xl leading-snug font-medium">
          Boxing was not a side chapter. For 8 years, it was the primary identity and the foundation everything else was built on.
        </p>
        
        <div className="space-y-6 text-muted text-lg leading-relaxed">
          <p>
            For 8 years I trained and competed as a boxer, with the National Boxing Academy in Rohtak as a major base, 
            and won 2 national medals and 4 state medals. That period shaped how I think more than any classroom could. 
            In boxing, bad outcomes rarely stay mysterious for long. Missed weight, poor recovery, weak round management, 
            broken conditioning, all of it can usually be traced back to flawed preparation, flawed structure, or flawed decision-making.
          </p>
          <p>
            That lens carried into Sports Science, then into the operating core of my family business, and now into 
            finance self-study. I currently manage finance and operations inside an electro-medical equipment business 
            in India. The work is practical: bookkeeping, P&L visibility, quotations, invoicing, cash tracking, and 
            making sure the business runs without friction. I am now building deliberately toward equity research 
            and, over the longer arc, sports consulting grounded in evidence rather than slogans.
          </p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/80 italic font-medium pt-4"
          >
            Core thesis: performance failures are usually design failures. Fix the structure, and performance follows.
          </motion.p>
        </div>
      </div>
    </Section>
  );
};

export default About;
