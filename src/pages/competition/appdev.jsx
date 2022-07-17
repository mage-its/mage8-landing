import React from "react";
import Navbar from "@/components/Navbar";
import Competition from "@/components/Halaman-Competition";
import Footer from "@/components/Footer";
import { CompetitionData } from "@/components/CompetitionData";
import { DevcomTimeline } from "@/components/DataTimelineDevcom";
import { SeoAppDev } from "@/components/Seo";
export default function competition() {
  return (
    <>
      <SeoAppDev/>
      <Navbar />
      <Competition
        gambar={CompetitionData[0].image}
        judulCompe={CompetitionData[0].title}
        deskripsiLomba={CompetitionData[0].data}
        deskripsiKategori={CompetitionData[0].kategori}
        contactPerson={CompetitionData[0].kontak}
        timeLinePercobaan={DevcomTimeline}
      />
      <Footer />
    </>
  );
}
