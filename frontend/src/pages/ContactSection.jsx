import SectionTitle from "../components/SectionTitle";
import { ArrowRightIcon, MailIcon, UserIcon } from "lucide-react";
import { motion } from "motion/react";

const ContactSection = () => {
  return (
    <div className="px-4 md:px-16 lg:px-24 xl:px-32 py-24 bg-black">
      <SectionTitle
        text1="Contact"
        text2="Reach out to us"
        text3="Ready to grow your brand? Let’s connect and build something exceptional together."
      />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto text-gray-300 mt-16 w-full"
      >
        {/* Name */}
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
          <p className="mb-2 font-medium text-gray-400">Your name</p>
          <div className="flex items-center gap-2 px-4 rounded-xl border border-white/10 bg-white/5 focus-within:border-rose-500 transition">
            <UserIcon className="size-5 text-gray-400" />
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full py-3 bg-transparent outline-none placeholder:text-gray-500 text-gray-200"
            />
          </div>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
        >
          <p className="mb-2 font-medium text-gray-400">Email address</p>
          <div className="flex items-center gap-2 px-4 rounded-xl border border-white/10 bg-white/5 focus-within:border-rose-500 transition">
            <MailIcon className="size-5 text-gray-400" />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full py-3 bg-transparent outline-none placeholder:text-gray-500 text-gray-200"
            />
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          className="sm:col-span-2"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
        >
          <p className="mb-2 font-medium text-gray-400">Message</p>
          <textarea
            name="message"
            rows={7}
            placeholder="Tell us about your project..."
            className="resize-none w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 outline-none focus:border-rose-500 placeholder:text-gray-500 text-gray-200 transition"
          />
        </motion.div>

        {/* Submit */}
        <motion.button
          type="submit"
          className="mt-4 w-max flex items-center gap-2 bg-rose-600 hover:bg-red-700 active:scale-95 transition text-white px-10 py-3 rounded-full shadow-lg shadow-rose-600/20"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
        >
          Submit
          <ArrowRightIcon className="size-5" />
        </motion.button>
      </form>
    </div>
  );
};

export default ContactSection;
