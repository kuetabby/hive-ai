"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { LuCircleCheck } from "react-icons/lu";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// Interface untuk tipe data FAQ
interface FAQItem {
  question: string;
  answer: string;
}

// Data FAQ
const faqData: FAQItem[] = [
  {
    question: "What is Bethive AI?",
    answer:
      "Bethive AI is a predictive platform that leverages advanced artificial intelligence and deep learning algorithms to provide accurate football match predictions, player performance analysis, and game insights. It empowers users to make smarter and more informed betting decisions.",
  },
  {
    question:
      "What makes Bethive AI different from other prediction platforms?",
    answer:
      "Bethive AI combines AI-driven predictions with blockchain technology, offering unmatched accuracy, transparency, and community rewards. Our platform analyzes diverse datasets, including historical matches, player stats, weather conditions, and real-time analytics, ensuring precise and reliable insights.",
  },
  {
    question: "Who can use Bethive AI?",
    answer:
      "Bethive AI is designed for everyone, from casual bettors to seasoned experts. Whether you're betting on local football matches or international tournaments, Bethive AI provides tailored insights to elevate your betting strategies.",
  },
  {
    question: "How does Bethive AI promote responsible betting?",
    answer:
      "Bethive AI encourages users to bet responsibly by providing data-driven insights and educational resources. Our goal is to enhance the betting experience while promoting informed and thoughtful decision-making.",
  },
];

const faqVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="relative py-20 px-6">
      <div className="h-10" />
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Konten FAQ di Kiri */}

        <motion.div
          className=" flex flex-col lg:w-1/2 text-gray-400overflow-x-hidden"
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          // initial="hidden"
          // animate="visible"
          // transition={{ duration: 0.6 }}
          // variants={faqVariants}
          // viewport={{ once: false, amount: 0.3 }} // Trigger animation on view
        >
          <h1 className="text-4xl font-bold text-white mb-6 text-center sm:text-start">
            Frequently Asked Questions
          </h1>
          {/* <p className="mb-8 leading-relaxed text-lg text-center sm:text-start">
            Learn how <span className="text-primaryColorLight">Bethive AI</span>{" "}
            enhances your betting experience with advanced AI predictions.
          </p> */}

          {/* Daftar FAQ */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={faqVariants}
                transition={{ duration: 0.8, delay: index * 0.25 }}
              >
                <div
                  key={index}
                  className="bg-primaryColorLight/10 border border-primaryColorDark/50 hover:shadow-lg hover:shadow-primaryColorLight/20 rounded-lg shadow-lg overflow-hidden"
                >
                  <div
                    className="flex justify-between items-center p-4 cursor-pointer hover:bg-primaryColorLight/50 hover:shadow-lg hover:shadow-primaryColorLight/20 transition-all pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center text-base sm:text-lg md:text-xl gap-3">
                      {/* Ikon dengan ukuran responsif */}
                      <LuCircleCheck
                        className="text-primaryColorLight flex-shrink-0"
                        size={20} // Ukuran tetap pada ikon
                      />
                      {/* Pertanyaan dengan ukuran responsif */}
                      <h3 className="font-semibold text-white text-sm sm:text-base md:text-lg">
                        {item.question}
                      </h3>
                    </div>
                    {activeIndex === index ? (
                      <AiOutlineMinus
                        className="text-primaryColorLight flex-shrink-0"
                        size={20} // Ukuran tetap pada ikon
                      />
                    ) : (
                      <AiOutlinePlus
                        className="text-primaryColorLight flex-shrink-0"
                        size={20} // Ukuran tetap pada ikon
                      />
                    )}
                  </div>

                  {/* Konten Expand */}
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 text-gray-300 text-xs sm:text-sm md:text-base"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex justify-center relative"
          key={1}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 1 * 0.3 }}
        >
          <div className="relative w-[320px] h-[320px]">
            <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-30" />
            <Image
              src="/assets/images/arrow.png"
              alt="FAQ Illustration"
              width={320}
              height={320}
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
