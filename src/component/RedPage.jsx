import NoiseBackground from "./NoiseBackground";

export default function RedPage() {
  return (
    <section
      id="hero"
      className="w-full h-screen bg-red-600 flex items-center justify-center"
    >
      <NoiseBackground/>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          Red Page
        </h1>
        <p className="text-2xl text-red-100">
          Welcome to the Red page!
        </p>
      </div>
    </section>
  );
}
