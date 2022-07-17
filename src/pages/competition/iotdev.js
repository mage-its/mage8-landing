import React from "react";
import Navbar from "@/components/Navbar";
import Competition from "@/components/Halaman-Competition";
import Footer from "@/components/Footer";
import { CompetitionData } from "@/components/CompetitionData";
export default function competition() {
  return (
    <>
      <Navbar />
      <Competition
        gambar={CompetitionData[2].image}
        judulCompe={CompetitionData[2].title}
        deskripsiLomba={CompetitionData[2].data}
        deskripsiKategori={CompetitionData[2].kategori}
        contactPerson={CompetitionData[2].kontak}
      />
      <Footer />
    </>
  );
}
