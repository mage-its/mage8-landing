import React from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/Halaman-About/About";
export default function about() {
  return (
    <>
      <div className="">
        {" "}
        <div className="h-min">
          <Navbar />
          <div className="h-min">
            {" "}
            <About />
          </div>
        </div>
      </div>
    </>
  );
}
