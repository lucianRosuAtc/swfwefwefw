

'use client'

// import React from "react";

import { loadFull } from "tsparticles";
import { useCallback } from "react";
// import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";

// function ParticlesContainer() {
//   const particlesInit = useCallback(async (engine: any) => {
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback(async () => {}, []);

//   return (
//     <Particles
//       className="w-full h-full absolute  translate-z-0"
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={{





import dynamic from 'next/dynamic';

const Particles = dynamic(() => import('react-tsparticles'), { ssr: false });

function ParticlesContainer() {
  return (

      <Particles
        id="tsparticles"
        options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 120,
        events: {
          onclick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            // mode:'bubble'
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 90,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },

          particles: {
            color: {
              value: "#e68e2e",
            },
            links: {
              color: "#f5d393",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collision: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              // outMode:'bounce',
              outMode: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: { value: 0.5 },

            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
            detectRetina: true,
          },
        },
      }}
    />
  );
}

export default ParticlesContainer;
