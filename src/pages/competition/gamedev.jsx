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
        gambar={CompetitionData[1].image}
        judulCompe={CompetitionData[1].title}
        deskripsiLomba={CompetitionData[1].data}
        deskripsiKategori={CompetitionData[1].kategori}
        contactPerson={CompetitionData[1].kontak}
      />
      <Footer />
    </>
  );
}
