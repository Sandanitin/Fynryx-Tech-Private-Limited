import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import IgniteProgram from "./pages/IgniteProgram";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-black">
        {/* Navbar */}
        <Navbar />

        {/* Scroll to Top Component */}
        <ScrollToTop />

        {/* Page Content */}
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/ignite-program" element={<IgniteProgram />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
        
        {/* WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;