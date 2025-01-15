"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { LuCircleCheckBig } from "react-icons/lu";

const Approach = () => {
  // const dummy = [
  //   "Lorem ipsum dolor sit amet",
  //   "Lorem ipsum dolor sit amet",
  //   "Lorem ipsum dolor sit amet",
  //   "Lorem ipsum dolor sit amet",
  // ];

  return (
    <section
      id="foundation"
      className="w-full py-20 bg-backgroundColor space-y-64 max-w-screen-lg"
    >
      <motion.div
        className="container flex flex-col items-center mx-auto px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="h-10" />
        {/* Section Heading */}
        <h2 className="text-primaryColorLight uppercase tracking-wide text-sm mb-2">
          Foundation
        </h2>
        {/* <h2 className="text-4xl font-extrabold text-white mb-2">
          Lorem ipsum dolor sit amet!
        </h2> */}
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className=" text-white/80 mb-12"
        >
          Three protocols as a system foundation
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center text-center sm:text-start gap-12"
          key={1}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 1 * 0.3 }}
        >
          <Image
            src="/assets/images/soccer.png"
            alt="Bethive AI"
            width={500}
            height={500}
          />
          <div className="flex flex-col text-gray-400">
            <h1 className="text-2xl font-bold text-white">
              Live Match Prediction Based on Past Statistics, Live Statistics,
              and Odds (Pre-Match & In-Play)
            </h1>
            Predict match outcomes in real-time with AI-powered insights, using
            historical trends, live stats, and odds to offer dynamic pre-match
            and in-play forecasts.
            {/* <div className="mt-2">
              {dummy.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row gap-2 justify-center sm:justify-start items-center mb-1"
                  >
                    <LuCircleCheckBig className="text-primaryColorLight" />
                    {item}
                  </div>
                );
              })}
            </div> */}
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col-reverse sm:flex-row items-center text-center sm:text-start gap-12 mt-24"
          key={2}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 2 * 0.3 }}
        >
          <div className="flex flex-col text-gray-400">
            <h1 className="text-2xl font-bold text-white">
              Historical Performance Analysis & Market Data Integration
            </h1>
            Our AI leverages five years of football data, analyzing match
            results, league standings, and detailed statistics like possession,
            xG, and passing accuracy. Combined with real-time market data, we
            ensure comprehensive and accurate insights.
            {/* <div className="mt-2">
              {dummy.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row gap-2 justify-center sm:justify-start items-center mb-1"
                  >
                    <LuCircleCheckBig className="text-primaryColorLight" />
                    {item}
                  </div>
                );
              })}
            </div> */}
          </div>
          <Image
            src="/assets/images/timer.png"
            alt="Bethive AI"
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row items-center text-center sm:text-start gap-12 mt-24"
          key={3}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 3 * 0.3 }}
        >
          <Image
            src="/assets/images/circle.png"
            alt="Bethive AI"
            width={500}
            height={500}
          />
          <div className="flex flex-col text-gray-400">
            <h1 className="text-2xl font-bold text-white">
              Fine-Tuned AI with Llama 3.1 405B Model
            </h1>
            At the core of our prediction engine lies the Llama 3.1 405B model,
            a state-of-the-art AI fine-tuned specifically for football
            analytics. By training on extensive historical data and leveraging
            advanced machine learning techniques, our AI not only identifies
            complex patterns and correlations but also adapts to the dynamic
            nature of live matches.
            {/* <div className="mt-2">
              {dummy.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row gap-2 justify-center sm:justify-start items-center mb-1"
                  >
                    <LuCircleCheckBig className="text-primaryColorLight" />
                    {item}
                  </div>
                );
              })}
            </div> */}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Approach;
