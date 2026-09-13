import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Product from "./pages/Product";
import HowItWorks from "./pages/HowItWorks";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <BrowserRouter>
     <div className={darkMode ? "theme-dark" : "theme-light"}>
     <ScrollToTop />
      <Navbar
       darkMode={darkMode}
        setDarkMode={setDarkMode}
      
      />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/how-it-works" element={<HowItWorks/>} />
          <Route path="/solutions" element={<Solutions/>} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;