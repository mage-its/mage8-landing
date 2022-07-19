/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import CompetitionCarrousel from "../components/CompetitionCarrousel";
import { CompetitionData } from "../components/CompetitionData";
import TitleSubbab from "../components/Title";
import { Button, Collapse, Text, Grid, Card } from "@nextui-org/react";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { SeoMain } from "@/components/Seo";
// import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <SeoMain />
      <Layout>
        {/* <BackToTop /> */}
        <div className="h-screen flex justify-center items-center relative overflow-x-clip">
          <div className="grid gap-4 grid-row-2 md:grid-cols-2 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl w-10/12 h-min place-items-center">
            <img src="/static/logo/mage-glow.svg" alt="Logo Mage" />
            <div className="grid grid-row-2 place-content-center h-min gap-2">
              <img src="/static/logo/mage-text.svg" alt="Text logo" />
              <Text
                css={{
                  textGradient: "45deg, #00D8FF -20%, #6FDAE4 50%",
                }}
                weight="bold"
                className="animate-text md:text-lg lg:text-xl"
              >
                &quot;Propelling human capabilities through inventive,
                innovative and creative usage of technology&quot;
              </Text>
            </div>
          </div>
          <img
            src="/static/background/left-blob-background.svg"
            className="absolute w-9/12 left-[calc(-30vw)] top-[20vh]"
            alt="left-blob-background"
          />
          <img
            src="/static/background/main-right-blob-background.svg"
            className="absolute w-9/12 right-[calc(-20vw)] top-[-50vh] "
            alt="right-blob-background"
          />
          <img
            src="/static/background/main-gradient-rectangle.svg"
            className="w-11/12 h-[calc(100vh+3rem)] absolute top-28 hidden lg:block"
            style={{
              objectFit: "fill",
            }}
            alt="gradient-border"
          />
        </div>
        <div className="h-screen flex justify-center items-center relative">
          <motion.div
            animate={{ y: -100 }}
            className="absolute top-0 w-10/12 lg:w-1/2 h-[calc(100vh/1.8)] rounded-xl overflow-hidden duration-500 hover:shadow-2xl hover:shadow-green-400/20 "
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/oU46IT7UFvI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             />
          </motion.div>
          <div className="absolute bottom-28 max-w-[1213px] max-h-[210px] h-full w-10/12">
            <Text
              css={{
                textGradient: "45deg, #546FDD -20%, #6FCC93 50%",
              }}
              span
              className="absolute text-9xl font-bold top-5 right-0 animate-text"
            >
              Rp. 33.500.000,-
            </Text>
            <div className="absolute text-6xl font-bold">Total Hadiah</div>
            <div className="absolute text-3xl font-medium bottom-8 right-0">
              + Freepass Teknik Komputer*
            </div>
          </div>
        </div>
        <div className="h-[calc(10vh)] flex justify-center items-center relative bg-footer-b-background bg-fill" />
        <div className="h-screen flex flex-col justify-start relative mx-32">
          <div className="relative h-min w-min start">
            <Text
              css={{
                textGradient: "45deg, #546FDD -20%, #6FCC93 50%",
              }}
              span
              className="text-8xl font-bold animate-text"
            >
              MAGE
            </Text>
            <div className="text-3xl absolute font-semibold right-[-60px] bottom-0">
              Competition
            </div>
          </div>
          <div className="relative grid grid-cols-4 self-center gap-10 mt-16">
            <Card variant="bordered" className="backdrop-blur opacity-80 w-80">
              <Card.Body>
                <div className="flex flex-col justify-center items-center gap-10">
                  <div className="text-xl font-semibold">IoT Development</div>
                  <img
                    className="w-1/2"
                    src="/static/logo/IoTDev.png"
                    alt="IoTDev"
                  />
                  <div className="flex flex-row gap-2">
                    <Button
                      flat
                      auto
                      size="xs"
                      className="bg-green-500/20 w-min"
                    >
                      Umum
                    </Button>
                    <Button
                      flat
                      auto
                      size="xs"
                      className="bg-green-500/20 w-min"
                    >
                      Rp. 110.000,-
                    </Button>
                  </div>
                  <Button flat auto className="bg-green-500/20 w-min">
                    Selengkapnya
                  </Button>
                </div>
              </Card.Body>
            </Card>
            <Card variant="bordered" className="backdrop-blur opacity-80 w-80">
              <Card.Body>
                <div className="flex flex-col justify-center items-center gap-10">
                  <div className="text-xl font-semibold">App Development</div>
                  <img
                    className="w-1/3"
                    src="/static/logo/AppDev.png"
                    alt="AppDev"
                  />
                  <div className="flex flex-row gap-2">
                    <Button
                      flat
                      auto
                      size="xs"
                      className="bg-green-500/20 w-min"
                    >
                      Mahasiswa/Siswa
                    </Button>
                    <Button
                      flat
                      auto
                      size="xs"
                      className="bg-green-500/20 w-min"
                    >
                      Rp. 100.000,-
                    </Button>
                  </div>
                  <Button flat auto className="bg-green-500/20 w-min">
                    Selengkapnya
                  </Button>
                </div>
              </Card.Body>
            </Card>
            <Card variant="bordered" className="backdrop-blur opacity-80 w-80">
              <Card.Body>
                <div className="flex flex-col justify-center items-center gap-10">
                  <div className="text-xl font-semibold">Game Development</div>
                  <img
                    className="w-3/4 flex-auto"
                    src="/static/logo/GameDev.png"
                    alt="GameDev"
                  />
                  <div className="flex flex-row gap-2">
                    <Button
                      flat
                      auto
                      size="xs"
                      className="bg-green-500/20 w-min"
                    >
                      Mahasiswa/Siswa
                    </Button>
                    <Button
                      flat
                      auto
                      size="xs"
                      className="bg-green-500/20 w-min"
                    >
                      Rp. 100.000,-
                    </Button>
                  </div>
                  <Button
                    flat
                    auto
                    className="bg-green-500/20 justify-end w-min"
                  >
                    Selengkapnya
                  </Button>
                </div>
              </Card.Body>
            </Card>
            <Card variant="bordered" className="backdrop-blur opacity-80 w-80">
              <Card.Body>
                <div className="flex flex-col justify-center items-center gap-10">
                  <div className="text-xl font-semibold">Olimpiade</div>
                  <img
                    className="w-1/2 flex-auto"
                    src="/static/logo/Olim.png"
                    alt="GameDev"
                  />
                  <div className="flex flex-row gap-2">
                    <Button
                      flat
                      auto
                      size="xs"
                      className="bg-green-500/20 w-min"
                    >
                      Siswa
                    </Button>
                    <Button
                      flat
                      auto
                      size="xs"
                      className="bg-green-500/20 w-min"
                    >
                      Rp. 60.000,-
                    </Button>
                  </div>
                  <Button
                    flat
                    auto
                    className="bg-green-500/20 justify-end w-min"
                  >
                    Selengkapnya
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Layout>
    </>
  );
}
