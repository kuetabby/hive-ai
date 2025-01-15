import React from "react";
import { FC } from "react";
import PulsingCircle from "./PulseCircle";

const FeaturePulseSection: FC = () => {
  return (
    <div className="flex justify-end items-end my-10">
      {/* Central Pulse Circle */}
      <PulsingCircle /> {/* Assuming this renders the pulse effect */}
    </div>
  );
};

export default FeaturePulseSection;
