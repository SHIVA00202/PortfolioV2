import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left content */}
          <div className="text-center md:text-left">
            <p className="text-sm text-neutral-400">
            <span>Shiva Yadav</span> <span className="italic">| Aspiring Software Engineer</span>
            </p>

            <p className="mt-1 text-xs text-neutral-500">
              A celebration of collaboration and innovation.
            </p>

            <p className="mt-2 text-xs text-neutral-500">
              For queries:&nbsp;
              <a
                href="mailto:working.tusharpatel@gmail.com"
                className="hover:text-white transition"
              >
                workingshivayadav@gmail.com
              </a>
            </p>

          </div>

          {/* Right content */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/SHIVA00202"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/shiva-yadav-476660349/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Bottom branding */}
         <div className="mt-8 pt-8 border-t border-neutral-800 text-center">
          <p className="text-7xl sm:text-8xl md:text-9xl font-semibold tracking-wider 
                        bg-gradient-to-b from-neutral-400 to-black bg-clip-text text-transparent italic">
          Shiva.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
