import Hero from "./sections/Hero";
import Features from "./sections/Features";
// import Tokenomics from "./sections/Tokenomics";
// import Roadmap from "./sections/Roadmap";
// import FAQ from "./sections/FAQ";
// import AIAgents from "./sections/AIAgents";
import About from "./sections/About";
import Approach from "./sections/Approach";
import Tokenomics from "./sections/Tokenomics";
import Roadmap from "./sections/Roadmap";
import FAQSection from "./sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Tokenomics />
      <Features />
      <Roadmap />
      <Approach />
      <FAQSection />
    </>
  );
}
