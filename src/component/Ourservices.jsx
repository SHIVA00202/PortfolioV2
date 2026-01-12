import React from "react";
import { motion } from "framer-motion";

const services = [
 {
  title: "Smart India Hackathon (SIH)",
  desc:
    "Secured 3rd position among 60 teams in internal college rounds by developing an innovative, problem-solving prototype.",
  theme: "light",
},
{
  title: "Hacktoberfest 2025 Supercontributor",
  desc:
    "Earned Supercontributor badge by merging 8+ PRs across 7 global open-source projects, raising issues, reviewing CI/CD pipelines, and collaborating with maintainers.",
  theme: "red",
},
{
  title: "DSA & Problem Solving",
  desc:
    "Solved 350+ problems on LeetCode across Easy, Medium, and Hard categories, demonstrating strong consistency and algorithmic thinking. Also a CodeChef 3-Star coder with a peak rating of 1769 in Division 2.",
  theme: "dark",
},

];

const themeStyles = {
  light: {
    background: "rgba(240,240,240,0.95)",
    title: "text-black",
    text: "text-gray-700",
  },
  red: {
    background: "rgba(180,25,25,0.95)",
    title: "text-white",
    text: "text-gray-100",
  },
  dark: {
    background: "rgba(20,20,20,0.9)",
    title: "text-white",
    text: "text-gray-300",
  },
};

const OurServices = () => {
  return (
    <section className="bg-black text-white pb-20 pt-24 sm:py-28 overflow-hidden">
      {/* ================= HEADING (ALWAYS ON TOP) ================= */}
      <div className="text-center mb-14 sm:mb-20 px-4 relative z-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl italic font-light">
        Achievements &  <span className="italic">Recognition</span>
        </h2>
        <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-xl mx-auto">
          Recognized for excellence through innovation, impact, and consistent performance.
        </p>
      </div>

      {/* ================= CARDS ================= */}
      <div className="relative z-10 max-w-xl mx-auto px-4 flex flex-col gap-6 sm:gap-8">
        {services.map((service, i) => {
          const theme = themeStyles[service.theme];

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.4, 0, 0.2, 1],
              }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 sm:p-8"
              style={{
                background: theme.background,
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow:
                  "rgba(0,0,0,0.6) 0px 25px 50px, rgba(255,255,255,0.08) 0px 1px 2px inset",
              }}
            >
              <h3
                className={`text-xl sm:text-2xl font-semibold mb-3 glow-text ${theme.title}`}
              >
                {service.title}
              </h3>

              <p
                className={`text-sm sm:text-base leading-relaxed ${theme.text}`}
              >
                {service.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default OurServices;
