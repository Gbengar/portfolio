// components/ParticleBackground.tsx
import React from "react";
import Particle from "./Particules";

const ParticleBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="relative bg-[#0f172a] ">
      <Particle />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParticleBackground;
