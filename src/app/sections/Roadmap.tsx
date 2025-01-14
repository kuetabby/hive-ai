"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface RoadmapPhase {
  phase: string;
  month: string;
}

const roadmapData: RoadmapPhase[] = [
  { phase: "Phase 1", month: "September" },
  { phase: "Phase 2", month: "April" },
  { phase: "Phase 3", month: "November" },
  { phase: "Phase 4", month: "August" },
  { phase: "Phase 5", month: "June" },
];

export default function Roadmap() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === roadmapData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? roadmapData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="roadmap" className="relative px-">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primaryColor uppercase tracking-wide mb-2">
            Roadmap
          </h2>
          <h1 className="text-5xl font-bold mb-4">Lorem ipsum dolor sit</h1>
          <p className="text-lg text-gray-400">
            Here is a selection of the latest trending online games available at
            Bethive AI.
          </p>
        </motion.div>

        {/* Neon Graphic */}
        <motion.div
          className="mt-16 relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 text-[7rem] sm:text-[10rem] font-bold text-primaryColorLight opacity-10">
            {roadmapData[currentIndex].phase}
          </div>
          <div className="relative flex items-center justify-center">
            <motion.div
              className="w-40 h-40 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl"
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
            ></motion.div>
            <Image
              className="absolute"
              src={"/assets/images/roadmap.png"}
              alt="Roadmap Bethive AI"
              width={240}
              height={240}
            />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="mt-24 relative px-2">
          <div className="flex justify-between items-center border-t border-primaryColorLight/25">
            {roadmapData.map((item, index) => (
              <motion.div
                key={index}
                className={`text-center relative text-xs sm:text-lg ${
                  index === currentIndex
                    ? "text-primaryColorLight"
                    : "text-gray-400"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Dot */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div
                    className={`w-6 h-6 rounded-full ${
                      index === currentIndex
                        ? "bg-gradient-to-br from-primaryColorLight to-primaryColorDark"
                        : "bg-gray-500"
                    }`}
                  />
                </div>
                {/* Phase */}
                <p className="mt-6  font-semibold">{item.phase}</p>
                {item.month}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handlePrev}
            className="p-3 bg-primaryColor hover:bg-primaryColorLight rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="p-3 bg-primaryColor hover:bg-primaryColorLight rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
