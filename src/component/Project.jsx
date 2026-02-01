import React from "react";

const projects = [
 {
  id: "(01)",
  title: "Fitness & Gym Web App",
  subtitle: "Full-Stack Developer & UI/UX Designer ",
  description:
    "Designed and engineered a production-ready fitness and gym management web application, delivering a seamless experience for users, instructors, and administrators. Built a scalable full-stack architecture with secure authentication, real-time engagement features, and performance optimizations to support live fitness programs and high user traffic.",
  tech: [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB Atlas",
    "JWT Authentication",   
    "REST APIs",
    "Figma",
    "GitHub Actions",
    "Vercel"
  ],
 
  image: "/Gym.png",
  live: "https://niceasy.netlify.app/"
}
,
 {
  id: "(02)",
  title: "Full-Stack Food Delivery Platform",
  subtitle: "Full-Stack Developer & UI/UX Designer ",
  description:
    "Designed and engineered a scalable, full-stack food delivery platform enabling seamless interactions between customers, restaurants, and delivery personnel. The application emphasizes real-time order management, role-based workflows, and a performance-optimized, mobile-first user experience.",
  tech: [
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Socket.io",
    "RESTful APIs",
    "MongoDB",
    "Figma",
    "Role-Based Access Control",
    "Real-Time Systems"
  ],
  
  image: "/Restt.png",
  live: "https://quick-martfrontendfrontend.onrender.com/"
}
,
  
  {
    id: "(03)",
    title: "Enyugma Website",
    subtitle: "Official techno-cultural fest website of IIIT Bhagalpur.",
    description:
      "Designed and developed the official website for IIIT Bhagalpur’s annual techno-cultural fest using ReactJS and TailwindCSS, delivering a responsive interface and scalable backend services to support high traffic during the event.",
    tech: ["ReactJS", "TailwindCSS", "Node.js", "Express","Figma ","Role-Based Access Control"],
    image: "/enyugma.png",
    live: "https://enyugma.iiitbh.ac.in",
  },
 {
  id: "(04)",
  title: "Hospital Management System",
  subtitle: "Full-stack MERN application for hospital operations",
  description:
    "Built a full-stack Hospital Management System with role-based access control (Admin, Doctor, Patient), secure authentication, and responsive UI. Features include real-time doctor revenue dashboards, centralized admin management, dynamic slot booking by specialization, and Razorpay payment integration.",
  tech: [
    "MongoDB",
    "Express.js",
    "ReactJS",
    "Node.js",
    "TailwindCSS",
    "RBAC",
    "Razorpay",
  ],
  image: "/doctor.png",
  live: "https://doctor-appointment-frontend-ashen.vercel.app/",
}

];

const Project = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-8 lg:px-20 pt-20 sm:pt-24 lg:pt-28">
      {/* Header */}
      <div className="text-center mb-14 sm:mb-20">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl italic font-light mb-4 glow-text">
          Projects
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base glow-text">
          A curated selection of projects showcasing my approach to
          problem-solving, design, and development.
        </p>
      </div>

      {projects.map((project, index) => (
        <div key={project.id}>
          {/* PROJECT ROW */}
          <div
            className="
              group
              grid
              grid-cols-1
              lg:grid-cols-[1.4fr_1.4fr_1fr]
              gap-10 lg:gap-16
              py-16 lg:py-20
              items-start
            "
          >
            {/* Image – FIRST on mobile */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                order-1 lg:order-3
                w-full
                max-w-md
                lg:w-96
                mx-auto
                rounded-xl
                overflow-hidden
                transition-transform duration-700
                ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover:scale-105
                group-hover:-translate-y-1
                group-hover:shadow-2xl
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </a>

            {/* Left – Text */}
            <div className="order-2 lg:order-1">
              <span className="text-gray-500 block mb-3 text-sm">
                {project.id}
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-2 transition-colors duration-300 group-hover:text-white glow-text">
                {project.title}
              </h2>

              <p className="text-gray-400 text-sm mb-4 lg:mb-6">
                {project.subtitle}
              </p>

              <p className="text-gray-400 text-sm leading-relaxed max-w-lg transition-colors duration-300 group-hover:text-gray-300">
                {project.description}
              </p>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 mt-6 text-sm text-white
                  border-b border-transparent
                  transition-all duration-300
                  hover:border-white
                "
              >
                View Live
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* Middle – Tech Stack */}
            <div className="order-3 lg:order-2 lg:pt-12">
              <h4 className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-4">
                Tech Stack
              </h4>

              <ul className="flex flex-wrap gap-2 sm:gap-3">
                {project.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="
                      px-3 py-1
                      border border-neutral-700
                      rounded-full
                      text-xs text-gray-300
                      transition-colors duration-300
                      group-hover:border-neutral-500
                    "
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          {index !== projects.length - 1 && (
            <div className="h-px bg-neutral-800" />
          )}
        </div>
      ))}
    </section>
  );
};

export default Project;
