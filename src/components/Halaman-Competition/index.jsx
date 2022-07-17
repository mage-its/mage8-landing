import React from "react";
import Image from "next/image";
import TitleSubbab from "@/components/Title";
import Guidebook from "@/components/Guidebook";
import CompetitionCarrousel from "@/components/CompetitionCarrousel";
import { CompetitionData } from "../CompetitionData";
export default function index(props) {
  return (
    <>
      <div className="  flex flex-col mt-10 flex items-center justify-center ">
        {" "}
        <h1 className=" text-center font-bold  text-xl sm:text-4xl  leading-tight">
          {" "}
          {"About " + "" + props.judulCompe + " Competition"}
        </h1>
        <Image
          src={`/${props.gambar}`}
          alt={props.judulCompe}
          height={400}
          width={400}
        />
      </div>

      <div className="flex items-center justify-center">
        <a
          className="mr-2 sm:mr-4 lg:mr-10 mt-4     text-white     sm:text-lg sm:leading-7   font-medium  primary px-2 py-2 sm:px-2 sm:py-4 rounded-full   "
          href="#"
        >
          {" "}
          Daftar Sekarang
        </a>
        <a
          className="mt-4  text-white  sm:text-lg sm:leading-7 font-medium primary px-1 py-2   sm:px-3 sm:py-4  rounded-full  "
          href="#"
        >
          {" "}
          Donwload Guidebook
        </a>
      </div>
      <div className="flex-col mt-20 container mx-auto px-10">
        <TitleSubbab subbab={`About ${props.judulCompe}`} />
        <h2 className="text-lg"> {props.deskripsiLomba}</h2>
      </div>

      <div className="flex-col mt-20 container mx-auto px-10">
        <TitleSubbab subbab="Kategori Lomba" />
        <h2 className="text-lg"> {props.deskripsiKategori}</h2>
      </div>
      <div className="flex-col mt-20 container mx-auto px-10">
        <TitleSubbab subbab="Timeline Percobaan" />
        <h1 className="text-2xl">{props.timeLinePercobaan}</h1>
      </div>
      <div className="flex-col mt-20 container mx-auto px-10">
        <h1 className="text-2xl"></h1>
        <TitleSubbab subbab="Contact Person" />
        {props.contactPerson}
      </div>
      <Guidebook />
      <CompetitionCarrousel compe={CompetitionData} />
    </>
  );
}
