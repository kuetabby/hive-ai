"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaChartBar, FaPenNib, FaCode, FaSearch } from "react-icons/fa";

export default function AIAgents() {
  const agents = [
    {
      title: "Data Analyst Pro",
      subtitle: "Data Analysis",
      description:
        "Advanced data analysis and visualization agent powered by machine learning.",
      icon: <FaChartBar />,
      image: "/assets/images/data.jpg",
    },
    {
      title: "Content Creator",
      subtitle: "Content Creation",
      description:
        "AI-powered content generation and optimization for multiple platforms.",
      icon: <FaPenNib />,
      image: "/assets/images/content.jpg",
    },
    {
      title: "Code Assistant",
      subtitle: "Development",
      description:
        "Intelligent coding companion for developers with real-time suggestions.",
      icon: <FaCode />,
      image: "/assets/images/code.jpg",
    },
    {
      title: "Research Navigator",
      subtitle: "Research",
      description:
        "Comprehensive research assistant for academic and professional work.",
      icon: <FaSearch />,
      image: "/assets/images/research.jpeg",
    },
  ];

  return (
    <section
      id="ai-agents"
      className="w-full py-20 bg-backgroundColor text-white"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Discover Our <span className="text-primaryColorLight">AI Agents</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Explore our collection of specialized AI agents designed to enhance
          your productivity and transform your workflow.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{
                  backgroundImage: `url(${agent.image})`,
                }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

              {/* Content */}
              <div className="relative p-6 space-y-4">
                {/* Icon and Subtitle */}
                <div className="flex items-center space-x-2 text-primaryColorLight">
                  <div className="text-sm">{agent.icon}</div>
                  <span className="text-xs font-semibold uppercase">
                    {agent.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white">{agent.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm">{agent.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Link href="/agents">
          <button className="px-6 py-3 bg-gradient-to-br from-primaryColorLight via-primaryColor to-primaryColorDark border border-primaryColorLight text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition duration-300">
            Explore Nova AI Agent
          </button>
        </Link>
      </div>
    </section>
  );
}
