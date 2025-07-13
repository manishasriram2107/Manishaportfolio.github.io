import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: "#0d0d0d" } },
        particles: {
          number: {
            value: 50,
            density: { enable: true, area: 800 },
          },
          color: { value: ["#ff6ec4", "#7873f5", "#64f4ac", "#fcb045"] },
          shape: {
            type: ["circle", "star", "polygon"],
          },
          opacity: {
            value: 0.7,
          },
          size: {
            value: { min: 4, max: 10 },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: "bounce",
          },
          links: {
            enable: false,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
