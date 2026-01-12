import { useEffect, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const updateTime = () => setTime(formatter.format(new Date()));

    updateTime();
    const interval = setInterval(updateTime, 60_000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative mt-4 md:mt-6 h-[92vh] md:h-[93vh] overflow-hidden rounded-xl md:rounded-2xl text-white"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bghero1.png')" }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_45%,rgba(0,0,0,0.6)_100%)]" />

      {/* Content */}
      <main className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-8 md:px-20 text-center md:text-left md:-translate-y-6">
        <h1 className="max-w-xl mx-auto md:mx-0 text-3xl sm:text-4xl md:text-6xl leading-tight glow-text">
          Imagine a space <br />
          between vision &amp; impact
        </h1>

        <p className="mt-4 sm:mt-5 max-w-md mx-auto md:mx-0 text-sm sm:text-base md:text-lg font-medium opacity-90 glow-text">
          That’s where I thrive.
        </p>

        <p className="mt-3 max-w-lg mx-auto md:mx-0 text-sm md:text-base leading-relaxed opacity-80 glow-text">
          Aspiring software developer specializing in full-stack web development,
          focused on building scalable applications and thoughtful UI/UX
          experiences.
        </p>

        {/* Resume Button */}
        <div className="mt-5 flex justify-center md:justify-start">
          <a
            href="/SHIVA_YADAV_NEW_RESUME.pdf"
            download
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-2.5 text-sm sm:text-base font-medium text-black transition-all duration-300 hover:bg-white/90"
          >
            Download Resume
          </a>
        </div>
      </main>

      {/* Signature (desktop only) */}
      <div className="absolute bottom-20 right-8 z-10 hidden md:block text-right opacity-80">
        <p className="text-xl -mb-2 font-medium tracking-wide">Shiva Yadav</p>
        <p className="text-base opacity-70">IIITBH ’27</p>
      </div>

      {/* Footer UI */}
      <div className="absolute inset-x-4 md:inset-x-6 bottom-4 md:bottom-6 z-10 flex flex-col md:flex-row items-center md:justify-between gap-2 text-xs tracking-wide opacity-80">
        <span>{time}</span>
        <span className="uppercase tracking-[0.3em]">Scroll to explore</span>
        <span>IND</span>
      </div>
    </section>
  );
}
