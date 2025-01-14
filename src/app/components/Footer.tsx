import Image from "next/image";
import { FaBook, FaTelegram, FaXTwitter } from "react-icons/fa6";

import LogoPurple from "@/src/assets/bethive_logo_purple.png";

export default function Footer() {
  return (
    <footer className="bg-backgroundColor text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 gap-8 items-center justify-center text-center max-w-screen-sm">
        {/* <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8"> */}
        {/* Company Info */}
        <h1 className="leading-tight flex flex-wrap justify-center gap-4">
          <div className="flex flex-row items-center gap-2 bg-primaryColorLight/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primaryColorLight/25 text-white">
            <Image
              src={LogoPurple}
              alt="Representation of Bethive AI"
              width={24}
              height={24}
              className="rounded-xl w-auto h-auto object-cover"
              priority={false}
            />
            Bethive AI
          </div>
        </h1>
        Bethive AI revolutionizes football betting with AI predictions,
        empowering users with accurate insights and smarter strategies.
        <div className="mt-4 flex space-x-4 text-lg items-center justify-center">
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-primaryColorLight"
          >
            <FaXTwitter size={24} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-primaryColorLight"
          >
            <FaTelegram size={24} />
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="hover:text-primaryColorLight"
          >
            <FaBook size={24} />
          </a>
        </div>
        {/* Quick Links */}
        {/* <div>
          <h3 className="mt-4 text-lg font-bold text-primaryColorLight">
            Quick Links
          </h3>
          <ul className="flex flex-wrap gap-8 justify-center mt-2">
            <li>
              <a href="#hero" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-blue-400">
                Events
              </a>
            </li>
            <li>
              <a href="#usecases" className="hover:text-blue-400">
                Use Cases
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div> */}
        {/* Contact & Social Media */}
        {/* <div>
          <h3 className="text-lg font-bold text-primaryColorLight">
            Contact Us
          </h3>

          
        </div> */}
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Bethive AI. All Rights Reserved. |
          Designed by{" "}
          <a href="#" className="text-primaryColorLight hover:underline">
            Bethive AI
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
