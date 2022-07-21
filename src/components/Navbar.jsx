import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import useScroll from "@/hooks/useScroll";
import { Dropdown } from "@nextui-org/react";
import { IconChevronDown } from "@tabler/icons";
const Competition = [
  {
    compe: "App Dev",
    link: "/competition/appdev",
  },
  {
    compe: "Game Dev",
    link: "/competition/gamedev",
  },
  {
    compe: "IOT Dev",
    link: "/competition/iotdev",
  },
  {
    compe: "Olimpiade",
    link: "/competition/olim",
  },
];

const Listevent = [
  {
    event: "Workshop",
    link: "/workshop",
  },
  {
    event: "Webinar",
    link: "/webinar",
  },
];

export default function Navbar() {
  const [dropDown, setdropDown] = useState();
  const [dropDownEvent, setdropdownEvent] = useState();
  const [menu, setMenu] = useState();
  const [compemenu, setcompeMenu] = useState();
  const [eventmenu, seteventMenu] = useState();
  const scrollPos = useScroll();
  const [blurNavbar, setBlurNavbar] = useState(false);
  const [isHoverCompe, toggleHoverCompe] = useState(false);
  const [isHoverEvent, toggleHoverEvent] = useState(false);

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
      <div className=" flex lg:hidden mb-4 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu-2"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => setMenu((state) => !state)}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>
      {menu && (
        <div
          className={`overflow-hidden  bg-black lg:hidden w-full h-[90rem] lg:bg-none fixed  top-0 p-7 px-5 lg:p-0   transition-all duration-500 ease-in  ${
            menu ? "left-0 duration-100 " : "-left-[500px] duration-100"
          }`}
        >
          <button
            className="absolute top-5 right-5 lg:hidden"
            onClick={() => setMenu((state) => !state)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <ul className="lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
            <li>
              <div className="flex ">
                <div className="link-underline link-underline-black">
                  <Link href="/" className="text-2xl font-semibold leading-7 ">
                    Home
                  </Link>
                </div>
              </div>
            </li>
            <li className="mt-4">
              <div className="flex mt-4">
                <div className="link-underline link-underline-black">
                  <Link
                    href="/about"
                    className="text-2xl font-semibold leading-7 "
                  >
                    About
                  </Link>
                </div>
              </div>
            </li>
            <li className="relative flex flex-col mt-4">
              <div className="flex mt-4">
                <div className=" flex link-underline link-underline-black">
                  <div className="flex w-9/12">
                    <a
                      className="text-2xl font-semibold leading-7 "
                      onClick={() => setcompeMenu((state) => !state)}
                    >
                      Competition
                    </a>
                  </div>
                  <div
                    onClick={() => setcompeMenu((state) => !state)}
                    className={`flex w-3/12 items-center ml-10 ${
                      compemenu
                        ? "rotate-180 duration-100 "
                        : "rotate-0 duration-100  "
                    }`}
                  >
                    <IconChevronDown />
                  </div>
                </div>
              </div>

              {compemenu &&
                Competition.map((data, i) => (
                  <Link
                    href={data.link}
                    className="text-md font-normal leading-7"
                    key={i}
                  >
                    {data.compe}
                  </Link>
                ))}
            </li>
            <li className="relative flex flex-col mt-4">
              <div className="flex mt-4">
                <div className=" flex link-underline link-underline-black">
                  <div className="flex w-8/12">
                    <a
                      className="text-2xl font-semibold leading-7 "
                      onClick={() => seteventMenu((state) => !state)}
                    >
                      Event
                    </a>
                  </div>
                  <div
                    onClick={() => seteventMenu((state) => !state)}
                    className={`flex w-4/12 items-center ml-6 ${
                      eventmenu
                        ? "rotate-180 duration-100"
                        : "rotate-0 duration-100 "
                    }`}
                  >
                    <IconChevronDown />
                  </div>
                </div>
              </div>
              {eventmenu &&
                Listevent.map((data, i) => (
                  <Link
                    href={data.link}
                    className="text-md font-normal leading-7"
                    key={i}
                  >
                    {data.event}
                  </Link>
                ))}
            </li>
            <li>
              <div className="flex mt-4 ">
                <div className="flex mt-4 link-underline link-underline-black">
                  <Link
                    href="/auth/login"
                    className="text-2xl font-semibold leading-7 "
                  >
                    Login
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
