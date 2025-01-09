"use client";

import { motion } from "framer-motion";

export default function Tokenomics() {
  const data = [
    { label: "Total Supply", value: "1 Billion NOVA" },
    { label: "Utility", value: "AI Services" },
    { label: "Network", value: "Solana" },
    { label: "Launch Date", value: "Q1 2025" },
    { label: "Circulating Supply", value: "500 Million Tokens" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.4)",
    },
  };

  return (
    <section
      id="tokenomics"
      className="w-full py-20 bg-backgroundColor text-white"
    >
      <motion.div
        className="container mx-auto px-6 lg:px-12 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Section Heading */}
        <motion.h2
          className="text-5xl font-extrabold mb-6 text-primaryColorLight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Tokenomics
        </motion.h2>
        <motion.p
          className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Nova Token is designed to empower innovation in AI and blockchain,
          providing governance, utility, and opportunities for staking.
        </motion.p>

        {/* Animated Interactive Cards */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-backgroundColor p-8 rounded-xl shadow-2xl border border-primaryColorLight hover:shadow-lg shadow-primaryColorLight/10 transition-transform"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primaryColorDark via-primaryColorLight to-primaryColorDark opacity-30 blur-lg rounded-xl"></div>

              {/* Card Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white">
                  {item.label}
                </h3>
                <p className="mt-2 text-lg text-gray-200">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
