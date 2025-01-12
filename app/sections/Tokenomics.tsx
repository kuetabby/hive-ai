"use client";

import { motion } from "framer-motion";

interface StatItem {
  value: string;
  description: string;
}

// Data untuk Statistik
const stats: StatItem[] = [
  { value: "50m", description: "Lorem ipsum" },
  { value: "45m", description: "Dolor sit" },
  { value: "400+", description: "Amet" },
  { value: "8+", description: "Consectetur" },
];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="relative w-full py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start p-8">
        {/* Konten Kiri */}
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primaryColorLight uppercase tracking-wide text-sm mb-2">
              Tokenomics
            </h2>
            <h1 className="text-4xl font-bold mb-4">Let the games begin!</h1>
            <p className="text-gray-400 mb-8">
              Ballon AI Chains token supply is capped at 1 Billion, with a
              strategic allocation:
            </p>

            {/* Statistik */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="text-3xl font-bold">{stat.value}</h3>
                  <p className="text-gray-400">{stat.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Grafis Kanan */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center"
        >
          <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
            <div className="w-72 h-72 bg-black rounded-full flex items-center justify-center relative">
              <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-xl"></div>
              <div className="relative w-60 h-60 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
