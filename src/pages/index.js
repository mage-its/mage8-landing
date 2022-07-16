import Head from "next/head";
import Image from "next/image";
import CompetitionCarrousel from "../components/CompetitionCarrousel";
import { CompetitionData } from "../components/CompetitionData";
import TitleSubbab from "../components/Title"
import { Button, Collapse, Text, Grid } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="bg-black h-[100vh]">
      <Grid.Container direction="column">
        <CompetitionCarrousel compe={CompetitionData}/>
        {/* <div className="px-8 py-32">
          <div className="grid gap-8 items-start justify-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                <span className="flex items-center space-x-5">Hello There</span>
              </button>
            </div>
          </div>
        </div>
        <div className="px-8 py-32">
          <div className="grid gap-8 items-start justify-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                <span className="flex items-center space-x-5">Hello There</span>
              </button>
            </div>
          </div>
        </div>
        <div className="px-8 py-32">
          <div className="grid gap-8 items-start justify-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                <span className="flex items-center space-x-5">Hello There</span>
              </button>
            </div>
          </div>
        </div>
        <div className="px-8 py-32">
          <div className="grid gap-8 items-start justify-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                <span className="flex items-center space-x-5">Hello There</span>
              </button>
            </div>
          </div>
        </div>
        <div className="px-8 py-32">
          <div className="grid gap-8 items-start justify-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                <span className="flex items-center space-x-5">Hello There</span>
              </button>
            </div>
          </div>
        </div> */}
      </Grid.Container>
    </div>
  );
}
