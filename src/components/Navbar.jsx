import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { TbTriangleInverted } from "react-icons/tb";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
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
  // func to change bg when scroll
  const [changeBg, setchangeBg] = useState();
  const [y, setY] = useState(500);

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      setchangeBg(true);
    } else if (y < window.scrollY) {
      setchangeBg(false);
    }
    setY(window.scrollY);
    return y;
  };

  useEffect(() => {
    setY(window.scrollY);

    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, []);
  return (
    <div
      className={`flex mx-auto px-10 fixed w-full left-0 top-0 py-4  z-50 rounded-b-[28px] ${
        !changeBg
          ? "backdrop-blur-sm bg-white/5 duration-100"
          : "bg-transparent  backdrop-blur-sm duration-100"
      }`}
    >
      <div className="flex w-4/12  lg:w-3/12">
        <Image
          alt="Logo-Mage"
          width={60}
          height={60}
          src="/static/logo/mage-whiteshade.png"
          className="pb-4"
        />
      </div>
      <div className="flex lg:w-9/12 w-8/12 justify-end items-center self-center mt-5 ">
        <ul className="flex-row hidden lg:flex ">
          <li className="ml-20 link-underline link-underline-black">
            <Link
              className="text-white text-md font-normal leading-7   "
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="ml-20 link-underline link-underline-black">
            <Link
              className="text-white text-md font-normal leading-7   "
              href="/about"
            >
              About
            </Link>
          </li>
          <li className="ml-20 relative ">
            <a
              className="text-white text-md font-normal leading-7 "
              onClick={() => setdropDown((state) => !state)}
            >
              <div className="flex link-underline link-underline-black">
                <div className="flex w-10/12">Competiton</div>
                <div
                  className={`flex w-2/12 items-center ml-4  mt-0.5 ${
                    dropDown
                      ? "rotate-180 duration-100"
                      : "rotate-0 duration-100 "
                  }`}
                >
                  <TbTriangleInverted />
                </div>
              </div>
            </a>
            {dropDown && (
              <motion.ul
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                className="absolute top-16 "
              >
                {Competition.map((data, i) => (
                  <li
                    key={i}
                    className="w-[200px] bg-gray-800 rounded shadow-2xl  "
                  >
                    <Link href={data.link}>
                      <a className="flex py-3 px-6 hover:bg-gray-700/60 text-white">
                        {data.compe}
                      </a>
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </li>
          <li className="ml-20 relative">
            <a
              className="text-white text-md font-normal leading-7"
              onClick={() => setdropdownEvent((state) => !state)}
            >
              <div className="flex link-underline link-underline-black">
                <div className="flex w-9/12">Event</div>
                <div
                  className={`flex w-3/12 items-center ml-4 mt-0.5 ${
                    dropDownEvent
                      ? "rotate-180 duration-100"
                      : "rotate-0 duration-100 "
                  }`}
                >
                  <TbTriangleInverted />
                </div>
              </div>
            </a>
            {dropDownEvent && (
              <ul className="absolute  top-16 delay-100">
                {Listevent.map((data, i) => (
                  <li
                    key={i}
                    className=" w-[150px] bg-gray-800  rounded shadow-2xl "
                  >
                    <Link href={data.link}>
                      <a className="flex py-3 px-6 hover:bg-gray-700/60 text-white ">
                        {data.event}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
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
          className={`  overflow-hidden  bg-black lg:hidden w-full h-[90rem] lg:bg-none fixed  top-0 p-7 px-5 lg:p-0   transition-all duration-500 ease-in  ${
            setMenu ? "left-0 duration-100 " : "-left-[500px] duration-100"
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
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <ul className="lg:space-x-14 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
            <li>
              <div className="flex ">
                <div className="link-underline link-underline-black">
                  <Link href="/">
                    {" "}
                    <a className="text-2xl font-semibold leading-7 "> HOME</a>
                  </Link>
                </div>
              </div>
            </li>
            <li className="mt-4">
              <div className="flex mt-4">
                <div className="link-underline link-underline-black">
                  <Link href="/about">
                    <a className="text-2xl font-semibold leading-7 "> ABOUT</a>
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
                      COMPETITION
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
                    <TbTriangleInverted />
                  </div>
                </div>
              </div>

              {compemenu &&
                Competition.map((data, i) => (
                  <a
                    href={data.link}
                    className="text-md font-normal leading-7"
                    key={i}
                  >
                    {data.compe}
                  </a>
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
                      EVENT
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
                    <TbTriangleInverted />
                  </div>
                </div>
              </div>
              {eventmenu &&
                Listevent.map((data, i) => (
                  <a
                    href={data.link}
                    className="text-md font-normal leading-7"
                    key={i}
                  >
                    {data.event}
                  </a>
                ))}
            </li>
            <li>
              <div className="flex mt-4 ">
                <div className="flex mt-4 link-underline link-underline-black">
                  <Link href="/auth/login">
                    <a className="text-2xl font-semibold leading-7 ">LOGIN</a>
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
