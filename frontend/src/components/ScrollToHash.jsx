import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const element = document.getElementById(id);
    if (!element) return;

    setTimeout(() => {
      if (window.lenis) {
        window.lenis.scrollTo(element, {
          offset: -80,
          duration: 1.2,
        });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;
