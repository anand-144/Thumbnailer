import { motion } from "motion/react";

const CTASection = () => {
  return (
    <motion.div
      className="
        max-w-5xl mt-40 md:w-full max-md:mx-4 md:mx-auto
        flex flex-col md:flex-row gap-8 items-center justify-between
        rounded-2xl p-8 md:p-12
        bg-gradient-to-b from-white/5 to-white/0
        border border-white/10
        backdrop-blur-xl
        text-white
      "
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
    >
      {/* Left */}
      <div>
        <motion.h1
          className="
            text-3xl md:text-[46px] md:leading-[1.5]
            font-semibold
            bg-gradient-to-r from-red-200 to-rose-800
            text-transparent bg-clip-text
          "
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
        >
          Ready to try out this app?
        </motion.h1>

        <motion.p
          className="mt-3 text-gray-400 text-lg max-w-md"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
        >
          Your next favourite tool is just one click away.
        </motion.p>
      </div>

      {/* Button */}
      <motion.button
        className="
          px-12 py-3 rounded-full text-sm font-medium
          bg-rose-600 hover:bg-red-700
          text-white
          shadow-lg shadow-red-600/30
          active:scale-95 transition
        "
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

export default CTASection;
