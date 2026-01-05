import SectionTitle from "../components/SectionTitle";
import { pricingData } from "../data/pricing";
import { CheckIcon } from "lucide-react";
import { motion } from "motion/react";

const PricingSection = () => {
  return (
    <div
      id="pricing"
      className="px-4 md:px-16 lg:px-24 xl:px-32 py-24 bg-black"
    >
      <SectionTitle
        text1="Pricing"
        text2="Our Pricing Plans"
        text3="Flexible pricing options designed to meet your needs — whether you're just getting started or scaling up."
      />

      <div className="flex flex-wrap items-center justify-center gap-8 mt-20">
        {pricingData.map((plan, index) => (
          <motion.div
            key={index}
            className={`
              w-72 p-6 pb-14 rounded-2xl text-center
              border border-white/10
              bg-white/5 backdrop-blur
              transition
              ${
                plan.mostPopular
                  ? "relative border-pink-500/40"
                  : "hover:border-pink-500/20"
              }
            `}
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
            {/* Badge */}
            {plan.mostPopular && (
              <p className="
                absolute -top-3 left-1/2 -translate-x-1/2
                px-4 py-1 text-xs font-medium
                bg-pink-600 text-white
                rounded-full shadow-lg shadow-pink-600/30
              ">
                Most Popular
              </p>
            )}

            {/* Plan name */}
            <p className="font-semibold text-white mt-2">
              {plan.name}
            </p>

            {/* Price */}
            <h1 className="text-3xl font-semibold text-white mt-2">
              ${plan.price}
              <span className="text-gray-400 font-normal text-sm">
                /{plan.period}
              </span>
            </h1>

            {/* Features */}
            <ul className="list-none text-gray-400 mt-6 space-y-3 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckIcon className="size-4.5 text-pink-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              type="button"
              className={`
                w-full mt-8 py-2.5 rounded-full font-medium transition
                ${
                  plan.mostPopular
                    ? "bg-pink-600 hover:bg-pink-700 text-white shadow-lg shadow-pink-600/30"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }
              `}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
