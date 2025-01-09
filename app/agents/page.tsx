"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaCode, FaPenNib, FaSearch } from "react-icons/fa";
import Markdown from "react-markdown";
import Image from "next/image";

export default function AgentsPage() {
  const [isChatActive, setChatActive] = useState(false); // State to toggle chat UI
  const [userInput, setUserInput] = useState(""); // State for input field
  const [isTyping, setIsTyping] = useState(false); // State for input field
  const [chatHistory, setChatHistory] = useState([
    { sender: "Nova", message: "Hi! How can I assist you today?" },
  ]); // Chat history

  const [novaState, setNovaState] = useState("thinking");

  const agents = [
    {
      title: "Data Analyst Pro",
      description:
        "Advanced data analysis and visualization agent powered by AI.",
      icon: <FaRobot />,
    },
    {
      title: "Content Creator",
      description:
        "AI-driven tools for generating and optimizing creative content.",
      icon: <FaPenNib />,
    },
    {
      title: "Code Assistant",
      description:
        "Intelligent coding assistant with real-time suggestions and error detection.",
      icon: <FaCode />,
    },
    {
      title: "Research Navigator",
      description: "AI-powered assistant for research and academic work.",
      icon: <FaSearch />,
    },
  ];

  const startChat = () => {
    if (userInput.trim() !== "") {
      setChatActive(true); // Activate chat UI
    }
  };

  const sendMessage = async () => {
    if (userInput.trim() === "") return;

    const newMessage = { sender: "You", message: userInput.trim() };
    setChatHistory((prev) => [...prev, newMessage]);
    setUserInput(""); // Clear input field

    try {
      setIsTyping(true);
      setNovaState("thinking");

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: chatHistory
            .map((msg) => ({
              role: msg.sender === "Nova" ? "assistant" : "user",
              content: msg.message,
            }))
            .concat({
              role: "user",
              content: userInput.trim(),
            }),
        }),
      });

      if (response.ok) {
        setNovaState("typing");
        const data = await response.json();
        const botMessage = { sender: "Nova", message: data.message };
        setChatHistory((prev) => [...prev, botMessage]);
      } else {
        setChatHistory((prev) => [
          ...prev,
          { sender: "Nova", message: "Oops! Something went wrong." },
        ]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setChatHistory((prev) => [
        ...prev,
        {
          sender: "Nova",
          message: "Unable to reach the server. Please try again later.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden mt-12 sm:mt-0">
      <div className="container mx-auto px-6 text-center">
        {!isChatActive ? (
          <>
            {/* Heading */}
            <motion.h1
              className="text-2xl sm:text-4xl font-bold mb-2 text-blue-400"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Explore Nova AI Agents
            </motion.h1>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
              Discover the unique capabilities of our AI Agents, each tailored
              to revolutionize how you work.
            </p>

            {/* AI Agents Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center">
              {agents.map((agent, index) => (
                <motion.div
                  key={index}
                  className="relative bg-gradient-to-t from-gray-800 via-gray-900 to-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105 items-center justify-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  {/* Icon */}
                  <div className="text-xl sm:text-4xl text-blue-400 mb-4 items-start text-center">
                    {agent.icon}
                  </div>
                  {/* Title */}
                  <h3 className="text-md sm:text-xl font-semibold text-white">
                    {agent.title}
                  </h3>
                  {/* Description */}
                  <p className="text-xs sm:text-base text-gray-400 mt-2">
                    {agent.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Chat Input Field */}
            <div className="flex justify-center items-center gap-4">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your query to start chatting..."
                className="w-full max-w-md p-4 bg-gray-800 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={() => {
                  startChat();
                  sendMessage();
                }}
                className="px-6 py-4 bg-gradient-to-br from-primaryColorLight via-primaryColor to-primaryColorDark text-white rounded-lg shadow-md hover:scale-105 transition-transform"
              >
                Start
              </button>
            </div>
          </>
        ) : (
          <motion.div
            className="w-full max-w-screen-lg mx-auto flex flex-col h-[80vh] bg-gray-800 rounded-3xl shadow-lg border border-primaryColorLight/20 mt-0 sm:mt-24 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between bg-gradient-to-b from-primaryColorLight/80 to-primaryColorDark/80 px-6 py-4 border-b border-gray-700">
              <h2 className="text-lg font-bold text-white">Nova Agent</h2>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-white">Online</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div
              className="flex-1 overflow-y-auto px-6 py-4 bg-gradient-to-r from-primaryColorDark/10 via-black to-primaryColorDark/10 space-y-6"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#4A5568 #2D3748",
              }}
            >
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className={`flex ${
                    chat.sender === "You" ? "justify-end" : "justify-start"
                  } items-start`}
                >
                  {/* Photo for Nova Agent */}
                  {chat.sender === "Nova" && (
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-backgroundColor p-2 mr-3"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src="/assets/images/nova_favicon.png" // Path to Nova's profile picture
                        alt="Nova Agent"
                        width={40} // Ensure the width is fixed
                        height={40} // Ensure the height matches the width
                        className="object-cover"
                      />
                    </motion.div>
                  )}
                  {/* Chat Bubble */}
                  <motion.div
                    className={`px-4 py-3 rounded-lg shadow-md ${
                      chat.sender === "You"
                        ? "text-end bg-primaryColorLight text-white rounded-br-none"
                        : "text-start bg-backgroundColor/50 backdrop-blur-md border border-primaryColorLight/20 text-white rounded-bl-none"
                    } overflow-y-auto break-words`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ maxHeight: "500px" }}
                  >
                    <Markdown>{chat.message}</Markdown>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 px-6 py-2 text-sm text-gray-300">
                <div className="w-2 h-2 bg-primaryColorLight rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-primaryColorLight rounded-full animate-pulse delay-150"></div>
                <div className="w-2 h-2 bg-primaryColorLight rounded-full animate-pulse delay-300"></div>
                <span>Nova is {novaState}...</span>
              </div>
            )}

            {/* Chat Input */}
            <div className="bg-gray-900 px-6 py-4 border-t border-gray-700">
              <form
                className="flex items-center gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-primaryColorLight focus:outline-none placeholder-gray-400"
                />
                <button
                  onClick={sendMessage}
                  className="px-6 py-3 bg-gradient-to-br from-primaryColorLight via-primaryColor to-primaryColorDark border border-primaryColorLight text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                >
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
