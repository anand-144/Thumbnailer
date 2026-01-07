import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { pricingData } from "../data/pricing";
import { CheckIcon } from "lucide-react";
import { motion } from "motion/react";

const PricingSection = () => {
  const [billing, setBilling] = useState("monthly");

  const getPrice = (monthly) => {
    if (billing === "monthly") return monthly;
    return Math.round(monthly * 12 * 0.8); // 20% OFF yearly
  };

  return (
    <div
      id="pricing"
      className="px-4 md:px-16 lg:px-24 xl:px-32 py-24 bg-black"
    >
      <SectionTitle
        text1="Pricing"
        text2="Simple, Transparent Pricing"
        text3="Choose monthly or yearly billing. Save 20% when you go yearly."
      />

      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <span className={billing === "monthly" ? "text-white" : "text-gray-400"}>
          Monthly
        </span>

        <button
          onClick={() =>
            setBilling(billing === "monthly" ? "yearly" : "monthly")
          }
          className="relative w-14 h-7 bg-white/10 rounded-full transition"
        >
          <span
            className={`
      absolute top-1
      size-5 rounded-full bg-rose-600 transition-all duration-300
      ${billing === "yearly" ? "left-[calc(100%-24px)]" : "left-1"}
    `}
          />
        </button>


        <span className={billing === "yearly" ? "text-white" : "text-gray-400"}>
          Yearly
          <span className="ml-1 text-rose-500 text-sm">(Save 20%)</span>
        </span>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap items-center justify-center gap-8 mt-20">
        {pricingData.map((plan, index) => (
          <motion.div
            key={index}
            className={`
              w-72 p-6 pb-14 rounded-2xl text-center
              border border-white/10 bg-white/5 backdrop-blur
              ${plan.mostPopular
                ? "relative border-rose-500/40"
                : "hover:border-rose-500/20"
              }
            `}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 320,
              damping: 70
            }}
          >
            {plan.mostPopular && (
              <p className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1
                text-xs bg-rose-600 text-white rounded-full shadow-lg">
                Most Popular
              </p>
            )}

            <p className="font-semibold text-white mt-4">{plan.name}</p>

            <h1 className="text-3xl font-semibold text-white mt-2">
              ₹{getPrice(plan.monthlyPrice)}
              <span className="text-gray-400 text-sm font-normal">
                /{billing}
              </span>
            </h1>

            <p className="text-xs text-gray-500 mt-1">incl. GST</p>

            <ul className="mt-6 space-y-3 text-left text-gray-400">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckIcon className="size-4.5 text-rose-500" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full mt-8 py-2.5 rounded-full font-medium transition
                ${plan.mostPopular
                  ? "bg-rose-600 hover:bg-rose-700 text-white shadow-lg"
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
