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
        gambar={CompetitionData[0].image}
        judulCompe={CompetitionData[0].title}
        deskripsiLomba={CompetitionData[0].data}
        deskripsiKategori={CompetitionData[0].kategori}
        contactPerson={CompetitionData[0].kontak}
      />
      <Footer />
    </>
  );
}
