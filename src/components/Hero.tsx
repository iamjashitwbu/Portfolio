import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profileImg from "../assets/jashit.jpg";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="pt-24 md:pt-40 pb-20 md:pb-32 border-b border-rule relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-12 md:gap-24 items-start">
        <motion.div
          style={{ y: y1, opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="eyebrow mb-4">
            National-Level Boxer | 98.21 Percentile | Finance & Operations
          </div>
          <h1 className="text-7xl md:text-9xl uppercase mb-6 drop-shadow-sm">
            Jashit
          </h1>
          <p className="font-sans text-2xl md:text-3xl text-text mb-6 font-medium">
            Finance. Performance. Systems.
          </p>
          <p className="text-accent text-lg md:text-xl font-medium mb-8">
            Incoming MBA | IMT Ghaziabad
          </p>
          <div className="max-w-xl text-muted text-lg leading-relaxed">
            Built on an 8-year boxing career at national level, then extended through Sports Science, 
            family business finance and operations, and self-directed technical work toward equity 
            research and long-horizon sports consulting.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group justify-self-center md:justify-self-end w-full max-w-[280px]"
        >
          <div className="aspect-square relative overflow-hidden border-2 border-accent">
            <img
              src={profileImg}
              alt="Jashit"
              className="w-full h-full object-cover grayscale-[0.2] saturate-[0.82] brightness-[0.82] contrast-[1.04] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40 pointer-events-none" />
          </div>
          
          {/* Key Facts Overlay (Simulating the Aside from original mobile or integrated in tablet) */}
          <div className="mt-8 space-y-6">
            {[
              { label: "Current Work", text: "Finance & operations in electro-medical business" },
              { label: "Background", text: "2 national medals, 4 state medals, BS Sports Science" },
              { label: "Operating Belief", text: "Performance failures are design failures." },
            ].map((fact, i) => (
              <div key={i} className="pt-4 border-t border-rule">
                <div className="eyebrow text-[0.7rem] mb-1">{fact.label}</div>
                <div className="font-sans text-sm font-medium">{fact.text}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
