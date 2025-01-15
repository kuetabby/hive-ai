import React from "react";
import LogoPurple from "@/src/assets/bethive_logo_purple.png";
import Image from "next/image";

const PulsingCircle: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]">
        {/* Main item in the center */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <Image
            src={LogoPurple}
            alt="Tereon Logo"
            className="w-[80px] h-[80px] sm:w-[80px] sm:h-[80px] md:w-[80px] md:h-[80px] lg:w-[80px] lg:h-[80px]"
          />
        </div>

        {/* Pulsing circles */}
        <div
          className="absolute inset-0 rounded-full bg-[#4D19A0] animate-pulse-circle opacity-0"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute inset-0 rounded-full bg-[#4D19A0] animate-pulse-circle opacity-0"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute inset-0 rounded-full bg-[#4D19A0] animate-pulse-circle opacity-0"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute inset-0 rounded-full bg-[#4D19A0] animate-pulse-circle opacity-0"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute inset-0 rounded-full bg-[#4D19A0] animate-pulse-circle opacity-0"
          style={{ animationDelay: "4s" }}
        />
      </div>
    </div>
  );
};

export default PulsingCircle;
