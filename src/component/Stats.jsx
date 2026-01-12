const Stats = () => {
  return (
    <section className="w-full bg-black/30 pb-12">
      <div
        className="
          mx-auto
          max-w-7xl
          flex flex-col
          gap-12
          lg:flex-row
          lg:items-start
          lg:gap-16
          px-4 sm:px-6 lg:px-0
        "
      >
        {/* Stat 1 */}
        <div className="flex flex-col sm:flex-row flex-1 gap-4 sm:gap-6">
          <div className="text-5xl sm:text-6xl lg:text-7xl font-light text-neutral-300 leading-none glow-text">
            03
          </div>
          <div>
            <h4 className="mb-3 text-base sm:text-lg font-medium text-white glow-text text-left">
              Internships Completed
            </h4>
            <p className="text-sm leading-relaxed text-neutral-400 text-left">
              Gained hands-on industry experience by contributing to real-world
              development workflows, collaborating with teams, and working on
              production-ready codebases while learning professional engineering
              practices.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-white/10" />

        {/* Stat 2 */}
        <div className="flex flex-col sm:flex-row flex-1 gap-4 sm:gap-6">
          <div className="text-5xl sm:text-6xl lg:text-7xl font-light text-neutral-300 leading-none glow-text">
            05+
          </div>
          <div>
            <h4 className="mb-3 text-base sm:text-lg font-medium text-white glow-text text-left">
              Projects Built
            </h4>
            <p className="text-sm leading-relaxed text-neutral-400 text-left">
              Designed and developed multiple full-stack projects from concept
              to deployment, focusing on usability, performance, clean
              architecture, and writing maintainable code for real use cases.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-white/10" />

        {/* Stat 3 */}
        <div className="flex flex-col sm:flex-row flex-1 gap-4 sm:gap-6">
          <div className="text-5xl sm:text-6xl lg:text-7xl font-light text-neutral-300 leading-none glow-text">
            04
          </div>
          <div>
            <h4 className="mb-3 text-base sm:text-lg font-medium text-white glow-text text-left">
              Projects Deployed & Adopted
            </h4>
            <p className="text-sm leading-relaxed text-neutral-400 text-left">
              Successfully delivered projects adopted by IIIT Bhagalpur and
              deployed on official college servers, actively supporting academic
              processes through reliable, production-grade software systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
