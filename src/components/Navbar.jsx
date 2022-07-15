import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TbTriangleInverted } from "react-icons/tb";
const Competition = [
  { compe: "App Dev" },
  { compe: "Game Dev" },
  { compe: "IOT Dev" },
  { compe: "Olimpiade" }
];

const Listevent = [{ event: "Workshop" }, { event: "Webinar" }];

export default function Navbar() {
  const [dropDown, setdropDown] = useState();
  const [dropDownEvent, setdropdownEvent] = useState();
  const [menu, setMenu] = useState();
  const [compemenu, setcompeMenu] = useState();
  const [eventmenu, seteventMenu] = useState();
  return (
    <div className="flex mx-auto px-10 sticky top-0 py-4 backdrop-blur-sm bg-white/5">
      <div className="flex w-4/12 ">
        <Image
          alt="Logo-Mage"
          width={60}
          height={60}
          src="/Logo-Mage.svg"
          className="pb-4"
        />
      </div>
      <div className="flex  w-8/12 justify-end items-center self-center mt-5 ">
        <ul className="flex-row hidden lg:flex ">
          <li className="ml-28">
            <a
              className="text-white text-lg font-semibold leading-7  link-underline link-underline-black "
              href="#"
            >
              {" "}
              HOME
            </a>
          </li>
          <li className="ml-28">
            <a
              className="text-white text-lg font-semibold leading-7  link-underline link-underline-black "
              href="#"
            >
              {" "}
              ABOUT
            </a>
          </li>
          <li className="ml-28 relative ">
            <a
              className="text-white text-lg font-semibold leading-7   "
              href="#"
              onClick={() => setdropDown((state) => !state)}
            >
              <div className="flex link-underline link-underline-black">
                {" "}
                <div className="flex w-10/12">COMPETITION</div>{" "}
                <div className=" flex w-2/12 items-center ml-4  mt-0.5">
                  <TbTriangleInverted />
                </div>{" "}
              </div>
            </a>
            {dropDown && (
              <ul className="absolute  top-16 delay-100 ">
                {Competition.map((data, i) => (
                  <li
                    key={i}
                    className="w-[200px] bg-gray-800 rounded shadow-2xl  "
                  >
                    <Link href="#">
                      <a className="flex py-3 px-6 hover:bg-gray-700/60 text-white">
                        {data.compe}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="ml-28 relative">
            <a
              className="text-white text-lg font-semibold leading-7   "
              href="#"
              onClick={() => setdropdownEvent((state) => !state)}
            >
              {" "}
              <div className="flex link-underline link-underline-black">
                {" "}
                <div className="flex w-9/12">EVENT</div>{" "}
                <div className=" flex w-3/12 items-center ml-4 mt-0.5">
                  <TbTriangleInverted />
                </div>{" "}
              </div>
            </a>
            {dropDownEvent && (
              <ul className="absolute  top-16 delay-100">
                {Listevent.map((data, i) => (
                  <li
                    key={i}
                    className=" w-[150px] bg-gray-800  rounded shadow-2xl "
                  >
                    <Link href="#">
                      <a className="flex py-3 px-6 hover:bg-gray-700/60 text-white ">
                        {data.event}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="ml-28">
            <a
              className="text-white text-lg font-semibold leading-7 primary px-4 py-2 rounded-full   "
              href="#"
            >
              {" "}
              LOGIN
            </a>
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
          className={`lg:hidden w-full h-screen bg-black lg:bg-none fixed lg:static top-0 p-10 lg:p-0  delay-100 ${
            setMenu ? "left-0" : "-left-full"
          }`}
        >
          <button
            className="absolute top-10 right-10 lg:hidden"
            onClick={() => setMenu(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
              <a> HOME</a>
            </li>
            <li>
              <a> ABOUT</a>
            </li>
            <li className="relative flex flex-col">
              <a onClick={() => setcompeMenu((state) => !state)}>
                {" "}
                COMPETITION
              </a>
              {compemenu &&
                Competition.map((data, i) => <a key={i}> {data.compe}</a>)}
            </li>
            <li className="relative flex flex-col">
              <a onClick={() => seteventMenu((state) => !state)}> EVENT</a>
              {eventmenu &&
                Listevent.map((data, i) => <a key={i}> {data.event}</a>)}
            </li>
            <li>
              <a> LOGIN</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
