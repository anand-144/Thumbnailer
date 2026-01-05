import { CheckIcon, ChevronRightIcon, VideoIcon } from "lucide-react";
import TiltedImage from "../components/TiltedImage";
import { motion } from "motion/react";

const HeroSection = () => {
  const specialFeatures = [
    "No design skills required",
    "Instant AI thumbnail generation",
    "High-CTR YouTube-ready designs",
  ];

  return (
    <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32 bg-black overflow-hidden">
      {/* Glow */}
      <div className="absolute top-32 -z-10 left-1/4 size-72 bg-pink-500/40 blur-[300px]" />

      {/* Announcement */}
      <motion.a
        href="#"
        className="
          group flex items-center gap-2
          rounded-full p-1 pr-3 mt-44
          bg-white/5 border border-white/10
          text-gray-300
          hover:border-pink-500/40 transition
        "
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 320,
          damping: 70,
          mass: 1
        }}
      >
        <span className="bg-pink-600 text-white text-xs px-3.5 py-1 rounded-full">
          NEW
        </span>
        <p className="flex items-center gap-1 text-sm">
          <span>Create AI Thumbnails for Your Videos — Free</span>
          <ChevronRightIcon
            size={16}
            className="group-hover:translate-x-0.5 transition"
          />
        </p>
      </motion.a>

      {/* Heading */}
      <motion.h1
        className="
          text-5xl md:text-6xl font-medium
          max-w-2xl text-center
          text-white
        "
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
      >
        <span className="text-rose-500">AI-Powered Thumbnail Creator</span> for{" "}
        <span className="move-gradient px-3 rounded-xl text-nowrap text-pink-500">
          Your Videos
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-base text-center text-gray-400 max-w-lg mt-6"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 320,
          damping: 70,
          mass: 1
        }}
      >
        Create scroll-stopping YouTube thumbnails in seconds using AI.
        No design skills. Just more clicks.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex items-center gap-4 mt-8"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
      >
        <button
          className="
            bg-pink-600 hover:bg-pink-700
            text-white rounded-full px-7 h-11
            shadow-lg shadow-pink-600/30
            active:scale-95 transition
          "
        >
          Generate Thumbnail
        </button>

        <button
          className="
            flex items-center gap-2
            border border-white/10
            bg-white/5 hover:bg-white/10
            rounded-full px-6 h-11
            text-gray-300 transition
          "
        >
          <VideoIcon strokeWidth={1} />
          <span>See How It Works</span>
        </button>
      </motion.div>

      {/* Feature list */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-14 mt-12">
        {specialFeatures.map((feature, index) => (
          <motion.p
            key={index}
            className="flex items-center gap-2"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.3 }}
          >
            <CheckIcon className="size-5 text-pink-500" />
            <span className="text-gray-400">{feature}</span>
          </motion.p>
        ))}
      </div>

      {/* Visual */}
      <TiltedImage />
    </div>
  );
};

export default HeroSection;
