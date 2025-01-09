"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AppBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "hero", label: "Home", external: false },
    { id: "features", label: "Features", external: false },
    { id: "tokenomics", label: "Tokenomics", external: false },
    { id: "roadmap", label: "Roadmap", external: false },
    // { id: "agents", label: "AI Agents", external: true },
  ];

  const handleNavigation = (id: string, external: boolean) => {
    if (external) {
      window.location.href = `/${id}`;
    } else {
      const baseUrl = window.location.origin;
      const targetUrl = `${baseUrl}/#${id}`;
      if (window.location.pathname !== "/") {
        window.location.href = targetUrl;
      } else {
        window.history.pushState(null, "", targetUrl);
        const targetElement = document.getElementById(id);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setMobileMenuOpen(false); // Tutup menu mobile
  };

  return (
    <header className="fixed top-0 left-0 w-full text-white z-50 p-4">
      <nav className="container mx-auto flex items-center max-w-screen-lg justify-between py-4 px-6 bg-backgroundColor/45 backdrop-blur-md border border-primaryColorLight/25 rounded-full m-2">
        {/* Logo */}
        <h1 className="text-lg font-bold tracking-wide">
          <Link className="flex flex-row gap-2 items-center" href="/">
            <Image
              src="/assets/images/ballon_icon.png"
              alt="Representation of Nova AI Engine"
              width={24}
              height={24}
              className="rounded-xl w-auto h-auto object-cover"
              priority={false}
            />
            Ballon AI
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 items-center">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigation(item.id, item.external)}
                className="hover:underline"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right-Aligned Button */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-br from-primaryColorLight via-primaryColor to-primaryColorDark border border-primaryColorLight font-semibold text-white py-2 px-4 rounded-full">
            $BALLON
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          className="md:hidden focus:outline-none"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-backgroundColor/45 border border-primaryColorLight/25 backdrop-blur-sm rounded-xl"
        >
          <ul className="flex flex-col items-center gap-6 py-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigation(item.id, item.external)}
                  className="hover:underline text-white"
                >
                  {item.label}
                </button>
              </li>
            ))}
            {/* Mobile "Get Started" Button */}
            <li>
              <button className="bg-gradient-to-br from-primaryColorLight via-primaryColor to-primaryColorDark border border-primaryColorLight font-semibold text-white py-2 px-4 rounded-full">
                $BALLON
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
