"use client";

import { motion } from "framer-motion";
// import { div, pre } from "framer-motion/client";
import Image from "next/image";
import { BiBell, BiTrophy } from "react-icons/bi";
// import {
//   FaChartLine,
//   FaRobot,
//   FaUserAlt,
//   FaPlug,
//   FaBell,
// } from "react-icons/fa";

export default function Features() {
  // const sports = [
  //   {
  //     image: "/assets/images/sports/f1.png",
  //     title: "Formula 1",
  //     link: "",
  //   },
  //   {
  //     image: "/assets/images/sports/premier_league.png",
  //     title: "Premier League",
  //     link: "",
  //   },
  //   {
  //     image: "/assets/images/sports/champions_league.png",
  //     title: "Champions League",
  //     link: "",
  //   },
  //   {
  //     image: "/assets/images/sports/motogp.png",
  //     title: "MotoGP",
  //     link: "",
  //   },
  //   {
  //     image: "/assets/images/sports/afc_cup.png",
  //     title: "AFC Cup",
  //     link: "",
  //   },
  //   {
  //     image: "/assets/images/sports/olympics.png",
  //     title: "Olympics",
  //     link: "",
  //   },
  //   {
  //     image: "/assets/images/sports/nascar.png",
  //     title: "Nascar",
  //     link: "",
  //   },
  //   {
  //     image: "/assets/images/sports/f1.png",
  //     title: "Formula 1",
  //     link: "",
  //   },
  //   {
  //     image: "/assets/images/sports/f1.png",
  //     title: "Formula 1",
  //     link: "",
  //   },
  //   {
  //     image: "/assets/images/sports/f1.png",
  //     title: "Formula 1",
  //     link: "",
  //   },
  // ];

  const predictions = [
    {
      sport: {
        name: "Premier League",
        logo: "/assets/images/sports/premier_league.png",
      },
      match: {
        time: "19:00",
        date: "Today",
        teams: [
          {
            name: "MUFC",
            logo: "/assets/images/teams/mu.png",
            status: "Win",
            winProbability: "62%",
          },
          {
            name: "MCFC",
            logo: "/assets/images/teams/mc.png",
            status: "Lose",
          },
        ],
      },
    },
    {
      sport: {
        name: "Premier League",
        logo: "/assets/images/sports/premier_league.png",
      },
      match: {
        time: "19:00",
        date: "Today",
        teams: [
          {
            name: "MUFC",
            logo: "/assets/images/teams/mu.png",
            status: "Win",
            winProbability: "62%",
          },
          {
            name: "MCFC",
            logo: "/assets/images/teams/mc.png",
            status: "Lose",
          },
        ],
      },
    },
    {
      sport: {
        name: "Premier League",
        logo: "/assets/images/sports/premier_league.png",
      },
      match: {
        time: "19:00",
        date: "Today",
        teams: [
          {
            name: "MUFC",
            logo: "/assets/images/teams/mu.png",
            status: "Win",
            winProbability: "62%",
          },
          {
            name: "MCFC",
            logo: "/assets/images/teams/mc.png",
            status: "Lose",
          },
        ],
      },
    },
    {
      sport: {
        name: "Premier League",
        logo: "/assets/images/sports/premier_league.png",
      },
      match: {
        time: "19:00",
        date: "Today",
        teams: [
          {
            name: "MUFC",
            logo: "/assets/images/teams/mu.png",
            status: "Win",
            winProbability: "62%",
          },
          {
            name: "MCFC",
            logo: "/assets/images/teams/mc.png",
            status: "Lose",
          },
        ],
      },
    },
  ];

  return (
    <section id="events" className="w-full py-20 bg-backgroundColor space-y-64">
      <motion.div
        className="container flex flex-col items-center sm:items-start mx-auto px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="h-10" />
        {/* Section Heading */}
        <h2 className="text-primaryColorLight mb-2">Events</h2>
        <h2 className="text-4xl font-extrabold text-white mb-2">
          Let the games begin!
        </h2>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className=" text-white/80 mb-12"
        >
          Here is a selection of the latest trending events available at Bethive
          AI.
        </motion.p>
        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
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
          {predictions.map((predict, index) => (
            <motion.div
              className="relative w-full flex flex-col bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 shadow-lg p-6 rounded-lg text-center transform transition-transform hover:scale-105 border border-white/10 hover:border-primaryColorLight/50 gap-4 overflow-hidden"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-md flex items-center justify-center z-10">
                <p className="text-white font-bold text-xl">Coming Soon</p>
              </div>

              {/* Original Content */}
              <div className="relative z-0">
                <div className="flex flex-row w-full justify-between items-center">
                  <Image
                    src={predict.sport.logo}
                    alt={predict.sport.name}
                    className="w-[80px] h-[30px]"
                    width={80}
                    height={10}
                  />
                  <p className="flex flex-col items-center text-xs">
                    {predict.match.date}
                    <span className="font-bold text-base">
                      {predict.match.time}
                    </span>
                  </p>
                  <BiBell />
                </div>

                <div className="flex flex-row w-full justify-between items-center">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Image
                      src={predict.match.teams[0].logo}
                      alt={predict.sport.name}
                      className="w-[40px] h-[40px]"
                      width={80}
                      height={10}
                    />
                    <span className="font-bold text-sm">
                      {predict.match.teams[0].name}
                    </span>

                    {predict.match.teams[0].status === "Lose" ? (
                      <div className="bg-red-500 text-white rounded-md px-2 py-1 text-sm">
                        Lose
                      </div>
                    ) : (
                      <div className="flex flex-row bg-green-500 text-white rounded-md px-2 py-1 items-center gap-1 text-sm">
                        <BiTrophy />
                        {predict.match.teams[0].winProbability}
                        <span>Win</span>
                      </div>
                    )}
                  </div>
                  <span className="text-blue-500 font-bold">VS</span>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Image
                      src={predict.match.teams[1].logo}
                      alt={predict.sport.name}
                      className="w-[40px] h-[40px]"
                      width={80}
                      height={10}
                    />
                    <span className="font-bold text-sm">
                      {predict.match.teams[1].name}
                    </span>

                    {predict.match.teams[1].status === "Lose" ? (
                      <div className="bg-red-500 text-white rounded-md px-2 py-1 text-sm">
                        Lose
                      </div>
                    ) : (
                      <div className="flex flex-row bg-green-500 text-white rounded-md px-2 py-1 items-center gap-1 text-sm">
                        <BiTrophy />
                        {predict.match.teams[1].winProbability}
                        <span>Win</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* <motion.div
        className="container flex flex-col items-center mx-auto px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className=" text-primaryColorLight mb-2">Sports</h2>
        <h2 className="text-4xl font-extrabold text-white mb-2">
          Lorem ipsum dolor sit amet!
        </h2>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className=" text-white/80 mb-12"
        >
          Here is a selection of the latest trending online games available at
          Ballon AI.
        </motion.p>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8"
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
          {sports.map((sport, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col  bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 shadow-xl p-10 rounded-xl text-center transform  hover:from-primaryColor hover:via-primaryColorLight hover:to-primaryColor transition-transform hover:scale-105 hover:shadow-primaryColorLight/50 gap-8 justify-center items-center"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image
                src={sport.image}
                alt={sport.title}
                width={100}
                height={100}
              />
              <h3 className="text-md text-white">{sport.title}</h3>
              <div className="absolute inset-0 rounded-lg border border-transparent hover:border-primaryColorLight transition-all" />
              <button
                onClick={() => {}}
                className="border border-white/50 rounded-lg px-4 py-2 text-sm"
              >
                View predictions
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div> */}
    </section>
  );
}
