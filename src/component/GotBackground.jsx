import Stats from "./Stats";

const GotBackground = ({ children }) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Tiled background */}
      <div
        className="absolute inset-0 bg-top bg-repeat"
        style={{
          backgroundImage: "url('/gotbackground.png')",
          backgroundSize: "220px 220px",
        }}
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-black/80 sm:bg-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_35%,rgba(0,0,0,0.85)_100%)]" />

      {/* Content */}
      <div
        className="
          relative z-10
          flex flex-col
          items-center
          justify-center
          min-h-screen
          px-4 sm:px-6 lg:px-8
          text-center
        "
      >
        {/* Hero Content */}
        <div className="w-full max-w-6xl">
          {children}
        </div>

        {/* Stats (NO margin-top) */}
        <div className="w-full">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default GotBackground;
