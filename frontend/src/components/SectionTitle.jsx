import { motion } from "motion/react";

const SectionTitle = ({ text1, text2, text3 }) => {
  return (
    <>
      {/* Badge */}
      <motion.p
        className="
          text-center font-medium text-pink-500
          mt-28 px-6 py-2 rounded-full
          bg-pink-950/60 border border-pink-800/60
          w-max mx-auto
          text-sm tracking-wide
        "
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
      >
        {text1}
      </motion.p>

      {/* Title */}
      <motion.h3
        className="
          text-3xl sm:text-4xl lg:text-5xl
          font-semibold text-center mx-auto mt-5
          text-white
        "
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
      >
        <span className="text-pink-500">{text2}</span>
      </motion.h3>

      {/* Description */}
      <motion.p
        className="
          text-gray-400 text-center mt-4
          max-w-xl mx-auto
          leading-relaxed
        "
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
      >
        {text3}
      </motion.p>
    </>
  );
};

export default SectionTitle;
