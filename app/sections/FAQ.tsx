"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Nova AI?",
      answer:
        "Nova AI is a revolutionary AI platform designed to provide cutting-edge tools for predictive analytics, intelligent automation, and AI-driven solutions powered by blockchain technology.",
    },
    {
      question: "How does Nova AI utilize blockchain technology?",
      answer:
        "Nova AI leverages blockchain for secure and transparent data handling, ensuring integrity and efficiency in AI-powered operations, while providing a decentralized infrastructure for scalability.",
    },
    {
      question: "What are the core features of Nova AI?",
      answer:
        "Nova AI offers predictive analytics, real-time decision-making tools, intelligent automation workflows, and advanced personalization features for businesses.",
    },
    {
      question: "How can I benefit from Nova AI's token?",
      answer:
        "The Nova token is your gateway to accessing premium AI features, participating in the platform's ecosystem, and unlocking advanced AI functionalities tailored to your needs.",
    },
    {
      question: "Who can use Nova AI?",
      answer:
        "Nova AI is designed for businesses and developers across industries, including finance, healthcare, retail, and more, seeking to integrate AI solutions into their operations.",
    },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)",
    },
  };

  return (
    <section
      id="faq"
      className="w-full py-16 px-6 bg-backgroundColor text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-5xl font-bold text-blue-400 mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Have questions about Nova AI and its token? Discover answers to some
          of the most common inquiries about our platform and its features.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`relative p-6 rounded-xl shadow-md bg-gradient-to-tr from-primaryColorDark/40 to-primaryColorDark-10 transition-transform ${
              activeIndex === index ? "ring-2 ring-blue-500" : ""
            }`}
            variants={faqVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            {/* Question */}
            <h3
              className="text-xl font-semibold text-blue-400 cursor-pointer flex justify-between items-center"
              onClick={() => handleToggle(index)}
            >
              {faq.question}
              <motion.span
                initial={{ rotate: activeIndex === index ? 180 : 0 }}
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-white text-lg transform"
              >
                {activeIndex === index ? "−" : "+"}
              </motion.span>
            </h3>

            {/* Answer */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="mt-4 text-gray-300"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primaryColorDark to-primaryColorLight opacity-20 blur-lg rounded-xl pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
