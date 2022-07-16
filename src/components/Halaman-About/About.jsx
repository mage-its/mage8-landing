import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Image width={200} height={200} alt="logo-mage" src="/Logo-Mage8.svg" />
        <Image width={500} height={500} alt="logo-mage" src="/Mage8.svg" />
        <a
          className=" mt-4 text-white text-lg font-semibold leading-7 primary px-4 py-2 rounded-full   "
          href="#"
        >
          {" "}
          ABOUT
        </a>
      </div>

      <div className="  mt-5 h-min flex flex col items-center justify-center">
        {" "}
      </div>
      <div className="bg-black ">
        <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-4/12">
            <div className="max-w-lg">
              <Image
                className="lg:h-full"
                src="/Icon-Mage.svg"
                alt="apple watch photo"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-8/12">
            <p className="text-white">
              MAGE (Multimedia dan Game Event) adalah suatu serangkaian acara
              yang diadakan oleh Departemen Teknik Komputer Fakultas dari FTEIC
              Institut Teknologi Sepuluh Nopember Surabaya yang meliputi
              perlombaan-perlombaan serta webinar. MAGE juga adalah media untuk
              pelajar dan akademisi dalam mengeksplor kreativitas, inovasi, dan
              kemampuan di berbagai bidang IT.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="font-medium text-4xl leading-tight"> Our Teaser</h1>
          <Image
            width={500}
            height={500}
            alt="logo-mage"
            src="/Teaser-Mage.svg"
          />
        </div>
      </div>
    </>
  );
}
