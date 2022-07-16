import React from "react";
import Navbar from "@/components/Navbar";
import CompetitionCarrousel from "@/components/CompetitionCarrousel";
import About from "@/components/Halaman-About/About";
export default function tesComponents() {
  return (
    <div>
      {" "}
      <Navbar />
      <About />
      <div className="">
        <CompetitionCarrousel compe={CompetitionData} />
      </div>
    </div>
  );
}
