import Image from "next/image";
import {
  IconBrandGmail,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTiktok,
} from "@tabler/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-10 sm:p-10 bg-[#111111] rounded-t-[28px] border-zinc-700 border-1 shadow-[0_35px_60px_5px_rgba(0,0,0,0.3)] shadow-green-900 z-50">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/static/logo/mage-whiteshade-title.png"
              alt="Logo MAGE 8"
              width="305"
              height="80"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Competition
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link href="/competition/appdev" className="hover:underline">
                  Application Development
                </Link>
              </li>
              <li>
                <Link href="/competition/gamedev" className="hover:underline">
                  Game Development
                </Link>
              </li>
              <li>
                <Link href="/competition/iotdev" className="hover:underline">
                  IoT Development
                </Link>
              </li>
              <li>
                <Link href="/competition/olim" className="hover:underline">
                  Olimpiade
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Event
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link href="/event/workshop" className="hover:underline ">
                  Workshop
                </Link>
              </li>
              <li>
                <Link href="/event/webinar" className="hover:underline">
                  Webinar
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Past Event
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="https://mage-its.github.io/archive/4/"
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  MAGE 4
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://mage-its.github.io/archive/5/"
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  MAGE 5
                </a>
              </li>
              <li>
                <a
                  href="https://mage-its.github.io/archive/6/"
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  MAGE 6
                </a>
              </li>
              <li>
                <a
                  href="https://mage-its.github.io/archive/7/"
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  MAGE 7
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <Link href="/" className="hover:underline">
            Multimedia and Game Event 8
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a target="_blank" rel="noreferrer" href="mailto:admin@mage-its.id">
            <IconBrandGmail className="text-gray-500 hover:text-gray-900 dark:hover:text-white" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCO1SuldERZu0jgBBDzzOkoQ"
          >
            <IconBrandYoutube className="text-gray-500 hover:text-gray-900 dark:hover:text-white" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/mageits"
          >
            <IconBrandFacebook className="text-gray-500 hover:text-gray-900 dark:hover:text-white" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/mage_its/?hl=en"
          >
            <IconBrandInstagram className="text-gray-500 hover:text-gray-900 dark:hover:text-white" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.tiktok.com/@mage.its"
          >
            <IconBrandTiktok className="text-gray-500 hover:text-gray-900 dark:hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
