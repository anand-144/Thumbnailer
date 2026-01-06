import { footerData } from "../data/footer";
import {
  DribbbleIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="mt-40 py-10 px-6 md:px-16 lg:px-24 xl:px-32
      bg-black border-t border-white/10
      text-[13px] text-gray-400
      flex flex-wrap justify-center md:justify-between gap-10 md:gap-20 overflow-hidden"
    >
      {/* Left Section */}
      <motion.div
        className="flex flex-wrap items-start gap-10 md:gap-32"
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
      >
        {/* Logo */}
        <a href="/">
          <img
            className="size-10 aspect-square"
            src="/assets/footer-logo.svg"
            alt="footer logo"
            width="32"
            height="32"
          />
        </a>

        {/* Footer Links */}
        {footerData.map((section, index) => (
          <div key={index}>
            <p className="text-gray-200 font-semibold">
              {section.title}
            </p>
            <ul className="mt-3 space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="hover:text-rose-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="flex flex-col items-end gap-3
        max-md:items-center max-md:text-center"
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
      >
        <p className="max-w-60 text-gray-400">
          Making every customer feel valued—no matter the size of your audience.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-3">
          <a
            href="https://dribbble.com/prebuiltui"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-400 transition"
          >
            <DribbbleIcon className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/prebuiltui"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-400 transition"
          >
            <LinkedinIcon className="size-5" />
          </a>
          <a
            href="https://x.com/prebuiltui"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-400 transition"
          >
            <TwitterIcon className="size-5" />
          </a>
          <a
            href="https://www.youtube.com/@prebuiltui"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-400 transition"
          >
            <YoutubeIcon className="size-6" />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-4 text-gray-500 text-center">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://prebuiltui.com?utm_source=pixels"
            className="hover:text-red-400 transition"
          >
            PrebuiltUI
          </a>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
