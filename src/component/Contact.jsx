import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully 🚀");
        formRef.current.reset();
      })
      .catch((error) => {
        alert("Failed to send message ❌");
        console.error(error);
      });
  };

  return (
    <section className="bg-black text-white py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14 sm:mb-20 px-4">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl italic font-light glow-text">
          Get in <span className="italic">touch</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base glow-text">
          Whether you have a project in mind, a question, or are looking to hire a
          developer, I’d love to hear from you.
        </p>
      </div>

      {/* Content Wrapper */}
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="
            grid grid-cols-1 md:grid-cols-2
            gap-10 lg:gap-12
            rounded-2xl
            p-6 sm:p-8 lg:p-10
          "
          style={{
            background: "rgba(15,15,15,0.6)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow:
              "rgba(255,255,255,0.1) 0px 1px 2px inset, rgba(0,0,0,0.6) 0px 30px 60px",
          }}
        >
          {/* Left: Info */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 glow-text">
              Let’s build something meaningful
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              We partner with founders, creators, and teams who care about quality,
              clarity, and long-term impact. Tell us about your idea and we’ll take it
              from there.
            </p>

            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <p>
                <span className="text-white font-medium">Email:</span>{" "}
                <a
                  href="mailto:workingshivayadav@gmail.com"
                  className="hover:text-white transition"
                >
                  workingshivayadav@gmail.com
                </a>
              </p>
              <p>
                <span className="text-white font-medium">Location:</span>{" "}
                India (Remote-friendly)
              </p>
              <p>
                <span className="text-white font-medium">Availability:</span>{" "}
                Monday – Friday, 10am – 7pm IST
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-5 sm:space-y-6"
          >
            <div>
              <label className="block text-xs sm:text-sm text-gray-400 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="from_name"
                placeholder="Enter Your Name"
                required
                className="
                  w-full rounded-lg
                  bg-white/5 border border-white/10
                  px-4 py-3
                  text-white placeholder-gray-500
                  focus:outline-none focus:border-white/30
                  text-sm sm:text-base
                "
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm text-gray-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="from_email"
                placeholder="Enter Your Email"
                required
                className="
                  w-full rounded-lg
                  bg-white/5 border border-white/10
                  px-4 py-3
                  text-white placeholder-gray-500
                  focus:outline-none focus:border-white/30
                  text-sm sm:text-base
                "
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                required
                className="
                  w-full rounded-lg
                  bg-white/5 border border-white/10
                  px-4 py-3
                  text-white placeholder-gray-500
                  focus:outline-none focus:border-white/30
                  resize-none
                  text-sm sm:text-base
                "
              />
            </div>

            <button
              type="submit"
              className="
                w-full sm:w-auto
                bg-white text-black
                text-sm sm:text-base
                px-6 py-3
                rounded-lg
                transition hover:bg-gray-200
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
