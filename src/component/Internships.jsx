import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const internships = [
  {
    company: "Li-mat Soft Solutions",
    role: "Software Development Engineer Intern",
    duration: "Feb 2025- Apr 2025",
    description:
      "Engineered a comprehensive health and wellness platform by developing role-based interfaces for clients and administrators using React.js, TypeScript, and Tailwind CSS. By authoring reusable components and e-commerce modules, I accelerated development cycles and ensured cross-platform design consistency. Furthermore, I streamlined data management and the design-to-development workflow by integrating REST APIs and GraphQL using Axios and React Query.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6rUbbkfFpBSx0lcVoPNuU7aiQhaBP99zdgw&s",
  },
  {
    company: "TIP2TRIP",
    role: "Web Developer Intern and UI/UX Designer",
    duration: "May 2025 – Aug 2025",
    description:
      "Led the end-to-end UI/UX lifecycle by leveraging user research from Google Analytics and Hotjar to design over 10 high-fidelity Figma prototypes, ultimately reducing user drop-off by 25%. I translated these designs into responsive, accessible frontend components while partnering closely with Product Managers to maintain design integrity. This collaborative approach ensured a consistent user experience and a streamlined workflow from initial concept to final launch.",
    image:
      "/TriptoTrip.png",
  },
  
];

const CARD_OFFSET = 32;
const SCALE_STEP = 0.05;
const SWIPE_THRESHOLD = 100;
const AUTO_SLIDE_DELAY = 6000; // Increased to 6 seconds for better readability

const Internships = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const paginate = (dir) => {
    setIndex((prev) => (prev + dir + internships.length) % internships.length);
  };

  // ⏱ Auto slide - Resets when index changes or user hovers
  useEffect(() => {
    if (isHovered) return; // Pause timer if user is hovering

    const interval = setInterval(() => {
      paginate(1);
    }, AUTO_SLIDE_DELAY);

    return () => clearInterval(interval);
  }, [index, isHovered]); 

  // ⌨ Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="bg-black text-white py-20 sm:py-20 relative overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12 sm:mb-20 px-4">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl italic font-light glow-text">
          Internship <span className="italic">Experience</span>
        </h2>
        <p className="text-gray-400 mt-3 text-sm sm:text-base">
          Hands-on industry experience building real-world products
        </p>
      </div>

      {/* Cards Container */}
      <div
        className="relative h-[520px] sm:h-[460px] lg:h-[420px] flex justify-center items-center px-4"
        style={{ perspective: 1200 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[0, 1, 2].map((stackIndex) => {
          const internship =
            internships[(index + stackIndex) % internships.length];

          return (
            <motion.div
              key={`${index}-${stackIndex}`}
              drag={stackIndex === 0 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(e, info) => {
                if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
                if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
              }}
              animate={{
                scale: 1 - stackIndex * SCALE_STEP,
                y: stackIndex * CARD_OFFSET,
                rotateY: stackIndex === 0 ? 0 : -6,
                opacity: stackIndex === 0 ? 1 : 0.8,
              }}
              transition={{
                duration: 0.45,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="absolute w-full max-w-4xl cursor-grab active:cursor-grabbing"
              style={{ zIndex: 10 - stackIndex }}
            >
              {/* Card Content */}
              <div
                className="flex flex-col md:flex-row gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl border border-white/10"
                style={{
                  background: "rgba(15,15,15,0.6)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow:
                    "rgba(255,255,255,0.05) 0px 1px 2px inset, rgba(0,0,0,0.8) 0px 20px 40px",
                  userSelect: "none",
                }}
              >
                {/* Image */}
                <div className="w-full md:w-1/3">
                  <img
                    src={internship.image}
                    alt={internship.company}
                    className="rounded-xl object-cover w-full h-[200px] sm:h-[240px] md:h-[280px]"
                    draggable={false}
                  />
                </div>

                {/* Text */}
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-1 text-white">
                    {internship.role}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4 font-medium">
                    {internship.company} • {internship.duration}
                  </p>

                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {internship.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ⬅ Desktop Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="hidden sm:flex absolute left-3 sm:left-6 lg:left-10 top-[60%] -translate-y-1/2 z-50 items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/15 active:scale-90 transition-all duration-300"
      >
        ←
      </button>

      <button
        onClick={() => paginate(1)}
        className="hidden sm:flex absolute right-3 sm:right-6 lg:right-10 top-[60%] -translate-y-1/2 z-50 items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/15 active:scale-90 transition-all duration-300"
      >
        →
      </button>

      {/* 📱 Mobile Swipe Hint */}
      <div className="sm:hidden text-center mt-10 text-xs text-gray-500 tracking-widest uppercase">
        — Swipe to navigate —
      </div>
    </section>
  );
};

export default Internships;