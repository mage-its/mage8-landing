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
        gambar={CompetitionData[3].image}
        judulCompe={CompetitionData[3].title}
        deskripsiLomba={CompetitionData[3].data}
        deskripsiKategori={CompetitionData[3].kategori}
        contactPerson={CompetitionData[3].kontak}
      />
      <Footer />
    </>
  );
}
