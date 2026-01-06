import { useState, useRef} from "react";
import { CheckIcon, ChevronRightIcon, VideoIcon, XIcon } from "lucide-react";
import TiltedImage from "../components/TiltedImage";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const modalRef = useRef(null);

  const navigate = useNavigate()

  const specialFeatures = [
    "No design skills required",
    "Instant AI thumbnail generation",
    "High-CTR YouTube-ready designs",
  ];

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsVideoOpen(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32 bg-black overflow-hidden">
      {/* Glow */}
      <div className="absolute top-32 -z-10 left-1/4 size-72 bg-rose-500/40 blur-[300px]" />

      {/* Announcement */}
      <motion.a
        href="#"
        className="
          group flex items-center gap-2
          rounded-full p-1 pr-3 mt-44
          bg-white/5 border border-white/10
          text-gray-300
          hover:border-rose-500/40 transition
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
        <span className="bg-red-600 text-white text-xs px-3.5 py-1 rounded-full">
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
        <span className="move-gradient px-3 rounded-xl text-nowrap text-red-600">
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
        onClick={() => navigate('/generate')}
          className="
            bg-rose-600 hover:bg-red-700
            text-white rounded-full px-7 h-11
            shadow-lg shadow-red-600/30
            active:scale-95 transition
          "
        >
          Generate Thumbnail
        </button>

        <button
          onClick={() => setIsVideoOpen(true)}
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
            <CheckIcon className="size-5 text-rose-500" />
            <span className="text-gray-400">{feature}</span>
          </motion.p>
        ))}
      </div>

      {/* Visual */}
      <TiltedImage />

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
          >
            <motion.div
              ref={modalRef}
              className="relative w-full max-w-3xl mx-4 bg-black rounded-2xl overflow-hidden border border-white/10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 text-gray-300 hover:text-white transition"
              >
                <XIcon size={22} />
              </button>

              {/* Video */}
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="How it works"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
