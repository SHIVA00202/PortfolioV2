import React from "react";

// Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaBootstrap,
  FaJava,
} from "react-icons/fa";

import {
  SiTypescript,
  SiRedux,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiFigma,
  SiPostman,
  SiFirebase,
  SiExpress,
  SiSocketdotio,
} from "react-icons/si";

import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { HiOutlineCode } from "react-icons/hi";

const skills = [
  {
    title: "UI/UX",
    desc: "Designing user interfaces and experiences",
    icon: MdOutlineDesignServices,
  },
  { title: "HTML", desc: "Web structure language", icon: FaHtml5 },
  { title: "CSS", desc: "Designs web appearance", icon: FaCss3Alt },
  { title: "JavaScript", desc: "Makes web interactive", icon: FaJs },

  { title: "TypeScript", desc: "JavaScript with types", icon: SiTypescript },
  { title: "React.js", desc: "UI component library", icon: FaReact },
  { title: "Redux Toolkit", desc: "State management", icon: SiRedux },
  { title: "MySQL", desc: "Relational database management", icon: SiMysql },

  { title: "MongoDB", desc: "NoSQL document database", icon: SiMongodb },
  { title: "Node.js", desc: "JavaScript server runtime", icon: FaNodeJs },
  { title: "C", desc: "Efficient system programming", icon: HiOutlineCode },
  { title: "C++", desc: "Object-oriented programming", icon: TbBrandCpp },

  { title: "Java", desc: "Object-oriented programming", icon: FaJava },
  {
    title: "DSA",
    desc: "Data Structures & Algorithms",
    icon: HiOutlineCode,
  },
  { title: "RESTful APIs", desc: "Web service design", icon: SiPostman },
  { title: "Bootstrap", desc: "CSS framework", icon: FaBootstrap },

  {
    title: "Tailwind CSS",
    desc: "Utility-first CSS framework",
    icon: SiTailwindcss,
  },
  { title: "Git", desc: "Version control tool", icon: FaGit },
  { title: "Figma", desc: "Collaborative design tool", icon: SiFigma },
  { title: "Postman", desc: "API testing tool", icon: SiPostman },

  {
    title: "Firebase",
    desc: "Authentication & Authorization",
    icon: SiFirebase,
  },
  { title: "Express.js", desc: "Defining routes", icon: SiExpress },
  {
    title: "Socket.io",
    desc: "Real-time communication",
    icon: SiSocketdotio,
  },
];

const Skills = () => {
  return (
    <section className="bg-black text-white py-24 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14 sm:mb-20 px-4">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl italic font-light glow-text">
          Skills & <span className="italic">Expertise</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base glow-text">
          Technologies and tools I use to build scalable, performant, and
          user-focused applications.
        </p>
      </div>

      {/* Skills Container */}
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="rounded-2xl p-6 sm:p-8 lg:p-10"
          style={{
            background: "rgba(15,15,15,0.6)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow:
              "rgba(255,255,255,0.1) 0px 1px 2px inset, rgba(0,0,0,0.6) 0px 30px 60px",
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="
                  group
                  text-center
                  p-4 sm:p-5
                  rounded-xl
                  bg-white/5
                  border border-white/10
                  hover:border-white/30
                  hover:bg-white/10
                  transition
                "
              >
                <skill.icon
                  className="
                    mx-auto mb-3
                    text-2xl sm:text-3xl
                    text-gray-300
                    group-hover:text-white
                    transition
                  "
                />

                <h4 className="text-sm sm:text-base font-semibold mb-1 glow-text">
                  {skill.title}
                </h4>

                <p className="text-xs sm:text-sm text-gray-400">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
