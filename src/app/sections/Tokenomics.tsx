"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BiCopy } from "react-icons/bi";
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
  const [isCopied, setIsCopied] = useState(false);
  const ticker = "$MOZART";
  const showCA = true;
  const launchDate = new Date(Date.UTC(2025, 0, 5, 12, 0, 0)).toISOString();

  const handleCopy = () => {
    navigator.clipboard.writeText(showCA ? contractAddress : "-");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  return (
    <motion.div
      id="tokenomics"
      className="relative w-full py-0 lg:py-24"
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <section>
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

              {/* Statistik */}
              <div className="grid grid-cols-2 gap-8 mt-10 lg:mt-3 text-center lg:text-left">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <h3 className="text-lg lg:text-4xl font-bold">
                      {stat.value}
                    </h3>
                    <p className="text-gray-400">{stat.description}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-800/80 rounded-full px-4 py-2 shadow-lg flex items-center lg:items-left gap-4 w-full max-w-sm lg:max-w-lg mt-10">
                <p className="text-gray-300 text-sm truncate">
                  {contractAddress}
                </p>
                <button
                  onClick={handleCopy}
                  className="bg-primaryColor hover:bg-primaryColorLight text-white py-2 px-4 rounded-full flex items-center gap-2 transition focus:outline-none focus:ring-2 focus:ring-primaryColor"
                >
                  <BiCopy />
                  {isCopied ? "Copied!" : "Copy"}
                </button>
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
    </motion.div>
  );
}
