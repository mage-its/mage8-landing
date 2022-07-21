import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useCycle } from "framer-motion";
import useScroll from "@/hooks/useScroll";
import {
  IconChevronDown,
  IconHome,
  IconInfoCircle,
  IconPoint,
  IconTrophy,
  IconUser,
} from "@tabler/icons";
import { NavbarBurger } from "./NavbarBurger";

export default function Navbar() {
  const [dropDown, setdropDown] = useState();
  const [dropDownEvent, setdropdownEvent] = useState();
  const scrollPos = useScroll();
  const [blurNavbar, setBlurNavbar] = useState(false);
  const [isHoverCompe, toggleHoverCompe] = useState(false);
  const [isHoverEvent, toggleHoverEvent] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const toggleHoverMenuCompe = () => {
    toggleHoverCompe(!isHoverCompe);
    setdropDown(!dropDown);
  };

  const toggleHoverMenuEvent = () => {
    toggleHoverEvent(!isHoverEvent);
    setdropdownEvent(!dropDownEvent);
  };

  useEffect(() => {
    // console.log(scrollPos);
    if (scrollPos > 0) {
      setBlurNavbar(true);
    } else {
      setBlurNavbar(false);
    }
  }, [scrollPos]);

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.2,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const sidebar = {
    open: (height = 1000) => ({
      opacity: 1,
      height,
      transition: {
        type: "easeInOut",
        duration: 0.2,
      },
    }),
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        type: "easeInOut",
        duration: 0.2,
      },
    },
  };

  return (
    <div
      className={`flex mx-auto px-10 fixed w-full left-0 top-0 py-4 z-50 rounded-b-[18px] ${
        blurNavbar
          ? "backdrop-blur-sm bg-white/5 duration-500"
          : "bg-transparent duration-500"
      }`}
    >
      <div className="flex w-4/12  lg:w-3/12">
        <Link href="/">
          <Image
            alt="Logo-Mage"
            width={60}
            height={60}
            src="/static/logo/mage-whiteshade.png"
            className="pb-4 cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex lg:w-9/12 w-8/12 justify-end items-center self-center mt-5 ">
        <ul className="flex-row hidden lg:flex ">
          <li className="ml-20 link-underline link-underline-black">
            <Link className="text-white text-md font-normal leading-7" href="/">
              Home
            </Link>
          </li>
          <li className="ml-20 link-underline link-underline-black">
            <Link
              className="text-white text-md font-normal leading-7"
              href="/about"
            >
              About
            </Link>
          </li>
          <li className="ml-20 relative">
            <motion.div
              onHoverStart={toggleHoverMenuCompe}
              onHoverEnd={toggleHoverMenuCompe}
            >
              <a className="text-white text-md font-normal leading-7">
                <div className="flex link-underline link-underline-black">
                  <div className="flex w-10/12">Competiton</div>
                  <div
                    className={`flex w-2/12 items-center ml-4  mt-0.5 ${
                      dropDown
                        ? "rotate-180 duration-100"
                        : "rotate-0 duration-100 "
                    }`}
                  >
                    <IconChevronDown />
                  </div>
                </div>
              </a>
              <motion.div
                className="absolute top-8"
                initial="exit"
                animate={isHoverCompe ? "enter" : "exit"}
                variants={subMenuAnimate}
              >
                <div className="bg-slate-800/80 backdrop-blur-sm border-w flex flex-col gap-3 py-4 px-2 rounded-xl w-max">
                  <Link href="/competition/appdev">
                    <div className="hover:bg-slate-50/5 w-full py-2 px-3 rounded-lg cursor-pointer">
                      App Development
                    </div>
                  </Link>
                  <Link href="/competition/gamedev">
                    <div className="hover:bg-slate-50/5 w-full py-2 px-3 rounded-lg cursor-pointer">
                      Game Development
                    </div>
                  </Link>

                  <Link href="/competition/iotdev">
                    <div className="hover:bg-slate-50/5 w-full py-2 px-3 rounded-lg cursor-pointer">
                      IoT Development
                    </div>
                  </Link>
                  <Link href="/competition/olim">
                    <div className="hover:bg-slate-50/5 w-full py-2 px-3 rounded-lg cursor-pointer">
                      Olimpiade
                    </div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </li>
          <li className="ml-20 relative">
            <motion.div
              onHoverStart={toggleHoverMenuEvent}
              onHoverEnd={toggleHoverMenuEvent}
            >
              <a className="text-white text-md font-normal leading-7">
                <div className="flex link-underline link-underline-black">
                  <div className="flex w-10/12">Event</div>
                  <div
                    className={`flex w-3/12 items-center ml-4 mt-0.5 ${
                      dropDownEvent
                        ? "rotate-180 duration-100"
                        : "rotate-0 duration-100 "
                    }`}
                  >
                    <IconChevronDown />
                  </div>
                </div>
              </a>
              <motion.div
                className="absolute top-8"
                initial="exit"
                animate={isHoverEvent ? "enter" : "exit"}
                variants={subMenuAnimate}
              >
                <div className="bg-slate-800/80 backdrop-blur-sm border-w flex flex-col gap-3 py-4 px-2 rounded-xl w-max">
                  <Link href="/event/webinar">
                    <div className="hover:bg-slate-50/5 w-full py-2 px-3 rounded-lg cursor-pointer">
                      Webinar
                    </div>
                  </Link>
                  <Link href="/event/workshop">
                    <div className="hover:bg-slate-50/5 w-full py-2 px-3 rounded-lg cursor-pointer">
                      Workshop
                    </div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </li>
          <li className="ml-20 link-underline link-underline-black">
            <Link
              className="text-white text-md font-normal leading-7   "
              href="/auth/login"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="flex lg:hidden cursor-pointer"
      >
        <motion.div
          className="absolute top-0 left-0 bottom-0 w-full pt-28 px-8 h-screen bg-black/90 backdrop-blur-sm -z-10"
          variants={sidebar}
        >
          <div className="flex flex-col justify-start gap-6 text-lg">
            <Link href="/">
              <div className="flex flex-row gap-2">
                <IconHome fill="#FFF" color="#111" strokeWidth={0.5} />
                Home
              </div>
            </Link>
            <Link href="/about">
              <div className="flex flex-row gap-2">
                <IconInfoCircle fill="#FFF" color="#111" />
                About
              </div>
            </Link>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <IconTrophy fill="#FFF" />
                Competition
                <IconChevronDown className="w-4" />
              </div>
              <div className="flex flex-col gap-5 text-base font-medium pl-6 text-gray-500">
                <Link href="/competition/appdev">
                  <div className="flex flex-row gap-1">
                    <IconPoint className="w-2 fill-gray-500" />
                    App Development
                  </div>
                </Link>
                <Link href="/competition/appdev">
                  <div className="flex flex-row gap-1">
                    <IconPoint className="w-2 fill-gray-500" />
                    Game Development
                  </div>
                </Link>
                <Link href="/competition/appdev">
                  <div className="flex flex-row gap-1">
                    <IconPoint className="w-2 fill-gray-500" />
                    IoT Development
                  </div>
                </Link>
                <Link href="/competition/appdev">
                  <div className="flex flex-row gap-1">
                    <IconPoint className="w-2 fill-gray-500" />
                    Olimpiade
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <IconTrophy fill="#FFF" />
                Event
                <IconChevronDown className="w-4" />
              </div>
              <div className="flex flex-col gap-5 text-base font-medium pl-6 text-gray-500">
                <Link href="/event/webinar">
                  <div className="flex flex-row gap-1">
                    <IconPoint className="w-2 fill-gray-500" />
                    Webinar
                  </div>
                </Link>
                <Link href="/event/workshop">
                  <div className="flex flex-row gap-1">
                    <IconPoint className="w-2 fill-gray-500" />
                    Workshop
                  </div>
                </Link>
              </div>
            </div>
            <Link href="/auth/login">
              <div className="flex flex-row gap-2">
                <IconUser fill="#FFF" />
                Login
              </div>
            </Link>
          </div>
        </motion.div>
        <NavbarBurger toggle={() => toggleOpen()} />
      </motion.div>
    </div>
  );
}
