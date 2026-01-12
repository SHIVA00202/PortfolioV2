// import { motion, useScroll, useTransform } from "framer-motion";

// const text =
//   "I’m Tushar Patel an aspiring full-stack software developer learning to build scalable web applications and intuitive UI/UX experiences, with a strong focus on fundamentals, clarity, and continuous growth.";

// export default function ScrollLitHeading({ sectionRef }) {
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <motion.h1
//       className="
//         max-w-6xl
//         mx-auto
//         text-center
//         text-2xl
//         sm:text-3xl
//         md:text-4xl
//         lg:text-5xl
//         xl:text-6xl
//         italic
//         tracking-normal
//         leading-snug
//         md:leading-tight
//         flex
//         flex-wrap
//         justify-center
//         whitespace-normal
//         break-normal
//         hyphens-none
//         pb-16
//         pt-20
//       "
//     >
//       {text.split("").map((char, i, arr) => {
//         const color = useTransform(
//           scrollYProgress,
//           [i / arr.length, (i + 1) / arr.length],
//           ["#484745", "#DDDAD4"]
//         );

//         return (
//           <motion.span key={i} style={{ color }}>
//             {char === " " ? "\u00A0" : char}
//           </motion.span>
//         );
//       })}
//     </motion.h1>
//   );
// }


import { motion, useScroll, useTransform } from "framer-motion";

const text =
  "I’m Shiva Yadav an aspiring full-stack software developer learning to build scalable web applications and intuitive UI/UX experiences, with a strong focus on fundamentals, clarity, and continuous growth.";

export default function ScrollLitHeading({ sectionRef }) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <motion.h1
      className="
        max-w-6xl
        mx-auto
        text-center
        text-2xl
        sm:text-3xl
        md:text-4xl
        lg:text-5xl
        xl:text-6xl
        italic
        tracking-normal
        leading-snug
        md:leading-tight
        flex
        flex-wrap
        justify-center
        pb-16
        pt-20
      "
    >
      {text.split(" ").map((word, wordIndex, words) => (
        <span
          key={wordIndex}
          className="whitespace-nowrap inline-flex"
        >
          {word.split("").map((char, charIndex) => {
            const globalIndex =
              words.slice(0, wordIndex).join(" ").length +
              (wordIndex > 0 ? 1 : 0) +
              charIndex;

            const color = useTransform(
              scrollYProgress,
              [
                globalIndex / text.length,
                (globalIndex + 1) / text.length,
              ],
              ["#484745", "#DDDAD4"]
            );

            return (
              <motion.span key={charIndex} style={{ color }}>
                {char}
              </motion.span>
            );
          })}

          {/* Space after each word except last */}
          {wordIndex !== words.length - 1 && (
            <span>&nbsp;</span>
          )}
        </span>
      ))}
    </motion.h1>
  );
}
