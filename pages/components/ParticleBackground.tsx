// components/ParticleBackground.tsx
import React from "react";
import Particle from "./Particules";

const ParticleBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="relative bg-black min-h-screen">
      <Particle />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParticleBackground;
