import React from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/Halaman-About/About";
import Footer from "@/components/Footer";
export default function about() {
  return (
    <>
      <div className="h-min">
        <Navbar />
        <div className="h-min">
          <About />
        </div>
        <Footer />
      </div>
    </>
  );
}
