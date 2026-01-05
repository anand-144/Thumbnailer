import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { navlinks } from "../data/navlinks";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className="fixed top-0 z-50 w-full
        bg-black/60 backdrop-blur-md border-b border-white/10"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="flex items-center justify-between
        px-4 py-4 sm:px-6 md:px-16 lg:px-24 xl:px-32">

          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src="/assets/logo.svg"
              alt="Thumbailer logo"
              className="h-9 w-auto"
            />
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-gray-300 font-semibold">
            {navlinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-500"
                    : "hover:text-pink-400 transition"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => navigate("/login")}
            className="hidden md:block px-6 py-2.5 rounded-full
            bg-pink-600 hover:bg-pink-700
            text-white font-medium transition"
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white"
          >
            <MenuIcon size={28} />
          </button>
        </div>
      </motion.nav>

      {/* ===== Mobile Menu ===== */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-[90] bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed right-0 top-0 z-[100]
              h-full w-[80%] max-w-sm
              bg-black/80 border-l border-white/10
              px-6 py-8 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-10">
                <img
                  src="/assets/logo.svg"
                  alt="logo"
                  className="h-8"
                />
                <button onClick={() => setIsOpen(false)}>
                  <XIcon size={26} className="text-white" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-6 text-lg font-medium">
                {navlinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-pink-400 transition"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* Mobile CTA */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/login");
                }}
                className="mt-auto w-full py-3 rounded-full
                bg-pink-600 hover:bg-pink-700
                text-white font-semibold"
              >
                Get Started
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
