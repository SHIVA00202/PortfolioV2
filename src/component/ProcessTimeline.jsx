import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaSearch, FaPencilRuler, FaKeyboard, FaRocket } from "react-icons/fa";

const steps = [
  { id: 1, title: "Research", description: "Deep diving into data to find the 'why' behind user behavior.", icon: <FaSearch />, accent: "#F3E6CF" },
  { id: 2, title: "Design", description: "Crafting pixel-perfect interfaces with a focus on usability.", icon: <FaPencilRuler />, accent: "#B5DDD5" },
  { id: 3, title: "Code", description: "Turning static frames into high-performance digital products.", icon: <FaKeyboard />, accent: "#FFFFFF" },
  { id: 4, title: "Launch", description: "Testing, deploying, and scaling for the real world.", icon: <FaRocket />, accent: "#CFE7CF" },
];

const ProcessCard = ({ step, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[350px] w-full rounded-3xl bg-neutral-900 border border-white/10 p-1 cursor-none group"
    >
      <div 
        style={{ transform: "translateZ(75px)" }}
        className="relative h-full w-full rounded-[22px] bg-neutral-950 p-8 flex flex-col justify-between overflow-hidden"
      >
        {/* Animated Background Gradient */}
        <div 
           className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
           style={{
             background: `radial-gradient(circle at center, ${step.accent} 0%, transparent 70%)`,
             filter: 'blur(40px)'
           }}
        />

        <div className="z-10">
          <div 
            className="text-4xl mb-6 inline-block p-4 rounded-2xl bg-white/5 border border-white/10"
            style={{ color: step.accent }}
          >
            {step.icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight italic">
            {step.id}. {step.title}
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed font-medium">
            {step.description}
          </p>
        </div>

        <div className="z-10 self-end">
          <span className="text-6xl font-black text-white/5 select-none tracking-tighter">
            0{step.id}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const ProcessTimeline = () => {
  return (
    <section className="bg-black py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-extrabold uppercase italic leading-[0.9] tracking-tight">
  <span className="block text-white drop-shadow-[6px_6px_0_rgba(0,0,0,0.6)]">
    The <span className="text-neutral-500">Way</span>
  </span>

  <span className="block mt-1  text-white relative">
    I{" "}
    <span className="relative inline-block px-5 py-1 ml-4  bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
      Work
    </span>
  </span>
</h2>

          </div>
          <p className="text-neutral-500 uppercase tracking-widest text-xs font-bold md:mb-4">
            [ My Methodology — 2026 ]
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {steps.map((step, index) => (
            <ProcessCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;