import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LenisScroll from "./components/LenisScroll";

import Home from "./pages/Home";
import ContactSection from "./pages/ContactSection";
import Faq from "./pages/Faq";
import HowItWorks from "./pages/HowItWorks";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ScrollToHash from "./components/ScrollToHash";
// import Generate from "./pages/Generate"; // if exists

function App() {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <LenisScroll />
      <ScrollToHash />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        {/* <Route path="/generate" element={<Generate />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
