import SectionTitle from "../components/SectionTitle";
import { ArrowRightIcon, MailIcon, UserIcon } from "lucide-react";
import { motion } from "motion/react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-4 md:px-16 lg:px-24 xl:px-32 bg-black flex items-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl mx-auto">

        {/* LEFT SIDE – SVG / VISUAL */}
        {/* LEFT SIDE – ANIMATED SVG */}
        <div className="hidden lg:flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            whileHover="hover"
            className="relative"
          >
            {/* Glow */}
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl bg-rose-600/20"
              variants={{
                hover: { scale: 1.2, opacity: 0.8 }
              }}
              transition={{ duration: 0.4 }}
            />

            <svg
              width="360"
              height="360"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative"
            >
              {/* OUTER RING */}
              <motion.circle
                cx="100"
                cy="100"
                r="90"
                stroke="#FB7185"
                strokeWidth="2"
                opacity="0.5"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear"
                }}
                style={{ transformOrigin: "50% 50%" }}
              />

              {/* MIDDLE RING */}
              <motion.circle
                cx="100"
                cy="100"
                r="65"
                stroke="#FB7185"
                strokeWidth="2"
                opacity="0.4"
                animate={{ rotate: -360 }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear"
                }}
                style={{ transformOrigin: "50% 50%" }}
              />

              {/* INNER RING */}
              <motion.circle
                cx="100"
                cy="100"
                r="40"
                stroke="#FB7185"
                strokeWidth="2"
                opacity="0.3"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 12,
                  ease: "linear"
                }}
                style={{ transformOrigin: "50% 50%" }}
              />

              {/* PLAY / THUMBNAIL ICON */}
              <motion.rect
                x="70"
                y="70"
                width="60"
                height="60"
                rx="14"
                stroke="#FB7185"
                strokeWidth="2"
                variants={{
                  hover: { scale: 1.05 }
                }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              <motion.polygon
                points="95,88 95,112 115,100"
                fill="#FB7185"
                variants={{
                  hover: { scale: 1.15 }
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ transformOrigin: "50% 50%" }}
              />

              {/* AI SPARK PARTICLES */}
              {[...Array(6)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={100 + Math.cos((i * Math.PI) / 3) * 55}
                  cy={100 + Math.sin((i * Math.PI) / 3) * 55}
                  r="2"
                  fill="#FB7185"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5]
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </svg>
          </motion.div>
        </div>


        {/* RIGHT SIDE – FORM */}
        <div className="w-full max-w-2xl justify-self-end">
          <SectionTitle
            text1="Contact"
            text2="Let’s build thumbnails that get clicks"
            text3="Have a question, feedback, or collaboration idea? Drop us a message and we’ll get back to you shortly."
          />

          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-16 text-gray-300"
          >
            {/* Name */}
            <motion.div
              initial={{ y: 120, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 60 }}
            >
              <p className="mb-2 text-gray-400">Your name</p>
              <div className="flex items-center gap-2 px-4 rounded-xl border border-white/10 bg-white/5 focus-within:border-rose-500 transition">
                <UserIcon className="size-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full py-3 bg-transparent outline-none text-gray-200 placeholder:text-gray-500"
                />
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ y: 120, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 280, damping: 60 }}
            >
              <p className="mb-2 text-gray-400">Email address</p>
              <div className="flex items-center gap-2 px-4 rounded-xl border border-white/10 bg-white/5 focus-within:border-rose-500 transition">
                <MailIcon className="size-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full py-3 bg-transparent outline-none text-gray-200 placeholder:text-gray-500"
                />
              </div>
            </motion.div>

            {/* Message */}
            <motion.div
              className="sm:col-span-2"
              initial={{ y: 120, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 240, damping: 60 }}
            >
              <p className="mb-2 text-gray-400">How can we help?</p>
              <textarea
                rows={7}
                placeholder="Tell us what you’re working on..."
                className="w-full resize-none px-4 py-3 rounded-xl border border-white/10 bg-white/5 outline-none focus:border-rose-500 text-gray-200 placeholder:text-gray-500 transition"
              />
            </motion.div>

            {/* Submit */}
            <motion.button
              type="submit"
              className="mt-4 w-max ml-auto flex items-center gap-2 bg-rose-600 hover:bg-red-700 active:scale-95 transition text-white px-10 py-3 rounded-full shadow-lg shadow-rose-600/20"
              initial={{ y: 120, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 60 }}
            >
              Send message
              <ArrowRightIcon className="size-5" />
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
