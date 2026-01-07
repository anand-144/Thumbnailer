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
import About from "./pages/About";
import Genrate from "./pages/Genrate";
import MyGeneartion from "./pages/MyGeneartion";
import Preview from "./pages/Preview";
import Login from "./components/Login";



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
        <Route path="/about" element={<About />} />
        <Route path="/generate/:id" element={<Genrate />} />
        <Route path="/my-generation" element={<MyGeneartion />} />
        <Route path="/preview" element={<Preview/>} />

        <Route path="/login" element={<Login/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
