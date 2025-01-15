"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import toast from "react-hot-toast";
// import { FaCopy } from "react-icons/fa";
// import { IoCopyOutline } from "react-icons/io5";

import LogoPurple from "@/src/assets/bethive_logo_purple.png";
import { socialsLink } from "../utils/constant";
import Link from "next/link";

export default function Hero() {
  const zoomIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  // const contractAddress = "0x1234...abcd";
  // const ticker = "$XXX";

  // const handleCopy = () => {
  //   navigator.clipboard.writeText(contractAddress);
  //   toast.success("Contract address copied to clipboard!");
  // };

  return (
    <motion.section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        src="/assets/videos/ballon_ai_bg.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay Color */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-backgroundColor/5 to-backgroundColor z-[-1]"></div>

      {/* Content */}
      <div className="text-center px-12 space-y-6 w-full max-w-screen-md">
        <motion.h1
          className="leading-tight flex flex-wrap justify-center gap-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="flex flex-row items-center gap-2 bg-primaryColorLight/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primaryColorLight/25 text-white">
            <Image
              src={LogoPurple}
              alt="Bethive AI"
              width={24}
              height={24}
              className="rounded-xl w-auto h-auto object-cover"
              priority={false}
            />
            Bethive AI
          </div>
        </motion.h1>
        <motion.h1
          className="text-4xl sm:text-6xl font-bold leading-tight"
          initial="hidden"
          whileInView="visible"
          variants={zoomIn} // Zoom-in effect
          viewport={{ once: false, amount: 0.2 }}
        >
          Smarter Football Betting with AI Precision.
        </motion.h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomIn} // Zoom-in effect
          viewport={{ once: false, amount: 0.2 }}
        >
          Bethive AI revolutionizes football betting with AI predictions,
          empowering users with accurate insights and smarter strategies.
        </motion.div>
        <div className="flex flex-row gap-6 items-center justify-center">
          <Link
            href={socialsLink.whitepaper}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button className="px-4 py-2 bg-gradient-to-br from-primaryColorLight via-primaryColor to-primaryColorDark hover:shadow-lg hover:shadow-primaryColorLight/70">
              Documentation
            </motion.button>
          </Link>
          <motion.button
            onClick={() => {}}
            className="px-4 py-2 bg-primaryColorLight/20 border border-primaryColor  hover:shadow-lg hover:shadow-primaryColorLight/70"
          >
            Buy $
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
