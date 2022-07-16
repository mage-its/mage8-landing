import Head from "next/head";
import Image from "next/image";
import CompetitionCarrousel from "../components/CompetitionCarrousel";
import { CompetitionData } from "../data/CompetitionData";
import TitleSubbab from "../components/Title";
import { Button, Collapse, Text, Grid } from "@nextui-org/react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-black h-[100vh]">
      <Grid.Container direction="column">
        <CompetitionCarrousel compe={CompetitionData} />
      </Grid.Container>
    </div>
  );
}
