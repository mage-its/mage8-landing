import React from "react";
import Navbar from "@/components/Navbar";
import Competition from "@/layout/CompetitionPageLayout";
import Footer from "@/components/Footer";
import { CompetitionData } from "@/data/CompetitionData";
import { DevcomTimeline } from "@/data/DataTimelineDevcom";
import Seo from "@/components/Seo";
import { dataIoTDev } from "@/data/DataFAQ";
export default function competition() {
  return (
    <>
      <Seo templateTitle="IoT Development" />
      <Navbar />
      <Competition
        gambar={CompetitionData[2].image}
        judulCompe={CompetitionData[2].title}
        deskripsiLomba={CompetitionData[2].data}
        deskripsiKategori={CompetitionData[2].kategori}
        contactPerson={CompetitionData[2].kontak}
        timeLinePercobaan={DevcomTimeline}
        guidebook={CompetitionData[2].guidebook}
        faq={dataIoTDev}
      />
      <Footer />
    </>
  );
}
