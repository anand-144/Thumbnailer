import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { navlinks } from "../data/navlinks";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className="fixed top-0 z-50 flex items-center justify-between w-full
        py-4 px-6 md:px-16 lg:px-24 xl:px-32
        bg-black/60 backdrop-blur-md border-b border-white/10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      >
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            className="size-10 w-auto"
            src="/assets/logo.svg"
            alt="Thumbailer logo icon"
          />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          {navlinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `transition ${isActive
                  ? "text-pink-500"
                  : "hover:text-pink-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2.5 rounded-full
        bg-pink-600 hover:bg-pink-700
        text-white font-medium
        active:scale-95 transition-all">
          Start free trial
        </button>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <MenuIcon size={26} className="text-white active:scale-90 transition" />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100]
        bg-black/80 backdrop-blur-lg
        flex flex-col items-center justify-center gap-8
        text-lg text-white
        md:hidden transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {navlinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            onClick={() => setIsOpen(false)}
            className="hover:text-pink-400 transition"
          >
            {link.name}
          </NavLink>
        ))}

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="size-10 rounded-md
          bg-pink-600 hover:bg-pink-700
          flex items-center justify-center
          active:scale-95 transition"
        >
          <XIcon />
        </button>
      </div>
    </>
  );
};

export default Navbar;
