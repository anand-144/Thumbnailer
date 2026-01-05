import SectionTitle from "../components/SectionTitle";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { featuresData } from "../data/feature";

const FeaturesSection = () => {
  return (
    <div
      id="features"
      className="px-4 md:px-16 lg:px-24 xl:px-32 py-24 bg-black"
    >
      <SectionTitle
        text1="Features"
        text2="What you get"
        text3="Components, patterns and pages — everything you need to ship."
      />

      {/* Feature cards */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-16 px-4">
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            className={
              index === 1
                ? "p-px rounded-2xl bg-gradient-to-br from-pink-500/60 to-transparent"
                : ""
            }
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1
            }}
          >
            <div className="
              p-6 rounded-2xl space-y-4
              border border-white/10
              bg-white/5 backdrop-blur
              max-w-80 w-full
              hover:border-pink-500/40 transition
            ">
              {feature.icon}

              <h3 className="text-base font-medium text-white">
                {feature.title}
              </h3>

              <p className="text-gray-400 line-clamp-2">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Showcase section */}
      <div className="mt-40 relative mx-auto max-w-5xl">
        {/* Glow */}
        <div className="absolute -z-50 size-96 -top-20 -left-32 rounded-full bg-pink-500/20 blur-3xl" />

        <motion.p
          className="text-gray-300 text-lg max-w-3xl"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
          PrebuiltUI helps you build faster by transforming your design vision
          into fully functional, production-ready UI components.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10">
          {/* Large image */}
          <motion.div
            className="md:col-span-2 rounded-2xl overflow-hidden border border-white/10 bg-white/5"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
          >
            <img
              className="h-full w-full object-cover"
              src="/assets/features-showcase-1.png"
              alt="features showcase"
            />
          </motion.div>

          {/* Text + small image */}
          <motion.div
            className="md:col-span-1"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.15,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1
            }}
          >
            <img
              src="/assets/features-showcase-2.png"
              alt="features showcase"
              className="
                rounded-xl
                border border-white/10
                bg-white/5
                hover:-translate-y-1 transition
              "
            />

            <h3 className="text-[24px] leading-tight text-white font-medium mt-6">
              Better design with higher revenue and profits
            </h3>

            <p className="text-gray-400 mt-3">
              PrebuiltUI empowers you to build beautifully and scale effortlessly.
            </p>

            <a
              href="https://prebuiltui.com"
              className="
                group inline-flex items-center gap-2 mt-5
                text-pink-500 hover:text-pink-400 transition
              "
            >
              Learn more about the product
              <ArrowUpRight className="size-5 group-hover:translate-x-0.5 transition" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
