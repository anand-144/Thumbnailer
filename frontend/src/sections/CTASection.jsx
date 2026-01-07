import { motion } from "motion/react";
import { ArrowRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="
        max-w-5xl mt-40 md:w-full max-md:mx-4 md:mx-auto
        flex flex-col md:flex-row gap-10 items-center justify-between
        rounded-2xl p-8 md:p-12
        bg-gradient-to-b from-white/5 to-white/0
        border border-white/10
        backdrop-blur-xl
        text-white
      "
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 320, damping: 70 }}
    >
      {/* Left */}
      <div>
        <motion.h1
          className="
            text-3xl md:text-[44px] md:leading-[1.3]
            font-semibold
            bg-gradient-to-r from-red-200 to-rose-700
            text-transparent bg-clip-text
          "
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70 }}
        >
          Create better thumbnails, faster
        </motion.h1>

        <motion.p
          className="mt-3 text-gray-400 text-lg max-w-md"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 70 }}
        >
          AI-powered thumbnails that get more clicks.
        </motion.p>
      </div>

      {/* Button */}
      <motion.button
        onClick={() => navigate("/generate")}
        className="
          group px-10 py-3 rounded-full text-sm font-medium
          bg-rose-600 hover:bg-red-700
          text-white
          shadow-lg shadow-red-600/30
          active:scale-95 transition
          flex items-center gap-2 whitespace-nowrap
        "
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 70 }}
      >
        Generate Thumbnail
        <ArrowRightIcon className="size-4 transition group-hover:translate-x-1" />
      </motion.button>
    </motion.div>
  );
};

export default CTASection;
