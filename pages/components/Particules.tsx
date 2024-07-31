import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            // color: {
            //   value: "#0d47a1",
            // },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 6,
              },
              bubble: {
                distance: 200,
                size: 5, // Shrink size to almost a grain of sand
                duration: 2,
                opacity: 0.8,
                speed: 3,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 20,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "images",
              images: [
                {
                  src: "images/icon1.png",
                  width: 200,
                  height: 200,
                },
                {
                  src: "images/icon2.png",
                  width: 200,
                  height: 200,
                },
                {
                  src: "images/icon3.png",
                  width: 200,
                  height: 200,
                },
                {
                  src: "images/icon4.png",
                  width: 200,
                  height: 200,
                },
                {
                  src: "images/icon5.png",
                  width: 200,
                  height: 200,
                },
                {
                  src: "images/icon6.png",
                  width: 200,
                  height: 200,
                },
                {
                  src: "images/icon7.png",
                  width: 200,
                  height: 200,
                },
                {
                  src: "images/icon8.png",
                  width: 200,
                  height: 200,
                },
                {
                  src: "images/icon9.png",
                  width: 200,
                  height: 200,
                },
                {
                  src: "images/icon10.png",
                  width: 200,
                  height: 200,
                },
              ],
            },
            size: {
              value: { min: 10, max: 15 },
            },
            rotate: {
              value: 0,
              random: true,
              direction: "random",
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Particle;
