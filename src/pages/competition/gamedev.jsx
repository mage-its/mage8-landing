import React from "react";
import Navbar from "@/components/Navbar";
import Competition from "@/layout/CompetitionPageLayout";
import Footer from "@/components/Footer";
import { CompetitionData } from "@/data/CompetitionData";
import { DevcomTimeline } from "@/data/DataTimelineDevcom";
import Seo from "@/components/Seo";
import { dataGameDev } from "@/data/DataFAQ";

export default function competition() {
  return (
    <>
      <Seo templateTitle="Game Development" />
      <Navbar />
      <Competition
        gambar={CompetitionData[1].image}
        judulCompe={CompetitionData[1].title}
        deskripsiLomba={CompetitionData[1].data}
        deskripsiKategori={CompetitionData[1].kategori}
        contactPerson={CompetitionData[1].kontak}
        timeLinePercobaan={DevcomTimeline}
        guidebook={CompetitionData[1].guidebook}
        faq={dataGameDev}
      />
      <Footer />
    </>
  );
}
