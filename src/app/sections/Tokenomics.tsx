"use client";

import { motion } from "framer-motion";
import { contractAddress } from "../utils/constant";
import FeaturePulseSection from "../components/FeaturePulseSection";

interface StatItem {
  value: string;
  description: string;
}

// Data untuk Statistik
const stats: StatItem[] = [
  { value: "BethiveAI", description: "Name" },
  { value: "100M", description: "Total Supply" },
  { value: "5%", description: "Fee Buy / Sell" },
  { value: "ETH / ERC-20", description: "Network" },
];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="relative w-full py-0 lg:py-24">
      <h2 className=" flex justify-center item-center text-primaryColorLight uppercase tracking-wide text-sm mb-2 block lg:hidden">
        Tokenomics
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row  lg:flex-row items-center lg:items-center justify-around p-20 lg:p-6">
        {/* Konten Kiri */}
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primaryColorLight uppercase tracking-wide text-sm mb-2 hidden lg:block">
              Tokenomics
            </h2>
            {/* <h1 className="text-4xl font-bold mb-4">Let the games begin!</h1> */}
            <p className="text-gray-400 mb-8">{contractAddress}</p>

            {/* Statistik */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="text-2xl lg:text-4xl font-bold">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400">{stat.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Grafis Kanan */}
        {/* <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center"
        >
          
        </motion.div> */}

        <FeaturePulseSection />
      </div>
    </section>
  );
}
