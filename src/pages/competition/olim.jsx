import React from "react";
import Navbar from "@/components/Navbar";
import Competition from "@/components/Halaman-Competition";
import Footer from "@/components/Footer";
import { CompetitionData } from "@/components/CompetitionData";
import { DataTimelineProxy } from "@/components/DataTimelineProxy";
import { SeoOlimp } from "@/components/Seo";
import { dataProxy } from "@/components/DataFAQ";
export default function competition() {
  return (
    <>
      <SeoOlimp />
      <Navbar />
      <Competition
        gambar={CompetitionData[3].image}
        judulCompe={CompetitionData[3].title}
        deskripsiLomba={CompetitionData[3].data}
        deskripsiKategori={CompetitionData[3].kategori}
        contactPerson={CompetitionData[3].kontak}
        timeLinePercobaan={DataTimelineProxy}
        guidebook={CompetitionData[3].guidebook}
        faq={dataProxy}
      />
      <Footer />
    </>
  );
}
