import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

const TiltedImage = ({ rotateAmplitude = 3 }) => {
  const ref = useRef(null);
  const lastY = useRef(0);

  const rotateX = useSpring(0, springValues);
  const rotateY = useSpring(0, springValues);

  function handleMouseMove(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX =
      (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY =
      (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    lastY.current = offsetY;
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.figure
      ref={ref}
      className="
        relative w-full h-full mt-16
        max-w-4xl mx-auto
        flex items-center justify-center
        perspective-[1200px]
      "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 70,
        mass: 1
      }}
    >
      <motion.div
        className="relative w-full transform-style-preserve-3d"
        style={{ rotateX, rotateY }}
      >
        <motion.img
          src="/assets/hero-section-showcase.png"
          alt="hero section showcase"
          className="
            w-full rounded-[16px]
            will-change-transform
            select-none
            pointer-events-none
          "
          draggable={false}
        />
      </motion.div>
    </motion.figure>
  );
};

export default TiltedImage;
