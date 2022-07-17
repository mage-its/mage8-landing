import React from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/Halaman-About/About";
import Footer from "@/components/Footer";
import { SeoAbout } from "@/components/Seo";
export default function about() {
  return (
    <>
      <SeoAbout />
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
