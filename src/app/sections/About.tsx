"use client";

import React from "react";
import { motion } from "framer-motion";
// import Image from 'next/image';
import { BsRobot, BsStars } from "react-icons/bs";

const About = () => {
  const cards = [
    {
      icon: <BsRobot />,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur lacus sit et mollis",
    },
    {
      icon: <BsStars />,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur lacus sit et mollis",
    },
    {
      icon: <BsStars />,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur lacus sit et mollis",
    },
  ];

  return (
    <motion.section
      id="about"
      className="relative w-full py-16 bg-backgroundColor overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Right-Side Full-Screen Background Image */}
      <div
        className="absolute w-96 h-96 right-12 top-48 sm:top-24 bg-cover bg-no-repeat bg-right pointer-events-none"
        style={{ backgroundImage: `url('/assets/images/img_1.png')` }}
      ></div>

      <motion.div
        className="relative container flex flex-col items-start justify-start mx-auto px-6 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Content Section */}
        <div className="w-full">
          <span className="text-primaryColorLight text-sm">Foundation</span>
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mt-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Three protocols as a system foundation
          </motion.h1>
          {/* <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-white/80"
          >
            Here is a selection of the latest trending online games available at
            Bethive AI.
          </motion.p> */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-primaryColorLight/10 backdrop-blur-md border border-primaryColorLight p-6 rounded-lg shadow-lg flex flex-col text-start items-start gap-4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <span className="text-primaryColorLight text-2xl">
                  {card.icon}
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
