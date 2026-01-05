import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import LenisScroll from "./components/LenisScroll";
import ContactSection from "./pages/ContactSection";

function App() {
  return (
      <div className="bg-black min-h-screen">
        <LenisScroll />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>

        <Footer />
      </div>
  );
}

export default App;
