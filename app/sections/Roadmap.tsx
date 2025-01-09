"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaBrain, FaCogs, FaChartBar } from "react-icons/fa";

interface RoadmapItem {
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
  isActive: boolean;
}

const roadmap: RoadmapItem[] = [
  {
    title: "Launch Nova AI Platform",
    description:
      "Introduce the Nova AI platform with core services: data analysis, personalization, and AI-powered tools.",
    date: "Phase 1",
    icon: <FaRobot />,
    isActive: true,
  },
  {
    title: "AI-Powered Personalization",
    description:
      "Enhance Nova AI with dynamic personalization features for businesses to deliver tailored user experiences.",
    date: "Phase 2",
    icon: <FaBrain />,
    isActive: false,
  },
  {
    title: "Workflow Automation Suite",
    description:
      "Release a comprehensive suite of smart automation tools to streamline workflows and increase productivity.",
    date: "Phase 3",
    icon: <FaCogs />,
    isActive: false,
  },
  {
    title: "Advanced Analytics & Insights",
    description:
      "Introduce predictive analytics tools to empower businesses with actionable insights and decision-making.",
    date: "Phase 4",
    icon: <FaChartBar />,
    isActive: false,
  },
];

const Roadmap: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 120,
      },
    },
    hover: {
      scale: 1.2,
      boxShadow: "0px 4px 20px rgba(59, 130, 246, 0.8)",
    },
  };

  return (
    <section
      id="roadmap"
      className="py-16 px-6 md:px-12 lg:px-24 bg-bgAstroPepe text-white"
      aria-labelledby="roadmap-title"
    >
      {/* Section Header */}
      <div className="text-center mb-16 justify-center items-center flex flex-col">
        <motion.h2
          id="roadmap-title"
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Roadmap
        </motion.h2>
        <motion.p
          className="text-white/50 max-w-xl items-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          Follow Nova AI&apos;s journey as we innovate to transform businesses
          with cutting-edge artificial intelligence and intelligent solutions.
        </motion.p>
      </div>

      {/* Timeline */}
      <motion.div
        className="relative grid gap-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Vertical Line */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-[4px] bg-gradient-to-b from-primaryColorDark to-primaryColorLight shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          aria-hidden="true"
        ></div>

        {roadmap.map((item, index) => (
          <motion.div
            key={index}
            className={`relative flex ${
              index % 2 === 0
                ? "items-center justify-center"
                : "items-center justify-center"
            }`}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Dot with Icon */}
            <motion.div
              className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full border-4 ${
                item.isActive
                  ? "bg-primaryColorLight border-white shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                  : "bg-gray-500 border-gray-400"
              }`}
              variants={dotVariants}
              whileHover="hover"
              viewport={{ once: false, amount: 0.3 }}
              aria-hidden="true"
            >
              <span
                className={`text-xl ${
                  item.isActive ? "text-white" : "text-gray-200"
                }`}
              >
                {item.icon}
              </span>
            </motion.div>

            {/* Card */}
            <motion.div
              className={`relative z-10 max-w-md p-4 shadow-md rounded-lg transition-transform transform ${
                item.isActive
                  ? "bg-[#141236] border border-primaryColorLight shadow-[0_0_15px_rgba(88,147,240,0.8)]"
                  : "bg-backgroundColor border border-gray-500"
              } ${
                index % 2 === 0 ? "ml-0 lg:ml-[550px]" : "mr-0 lg:mr-[550px]"
              }`}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3
                className={`text-lg font-semibold mb-2 ${
                  item.isActive ? "text-primaryColorLight" : "text-gray-400"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`font-light text-sm ${
                  item.isActive ? "text-white" : "text-gray-500"
                }`}
              >
                {item.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Roadmap;
