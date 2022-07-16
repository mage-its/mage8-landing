import React from "react";
import Navbar from "@/components/Navbar";
import CompetitionCarrousel from "@/components/CompetitionCarrousel";
import { CompetitionData } from "@/components/CompetitionData";
export default function tesComponents() {
  return (
    <div>
      {" "}
      <Navbar />
      <div className="mt-40 ">
        <CompetitionCarrousel compe={CompetitionData} />
      </div>
    </div>
  );
}
