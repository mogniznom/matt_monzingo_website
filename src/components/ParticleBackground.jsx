import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Box } from "@mui/material";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          fpsLimit: 60,
          particles: {
            number: {
              value: 50,
              density: { enable: true, width: 1920, height: 1080 },
            },
            color: { value: ["#00e5ff", "#7c4dff"] },
            shape: { type: "circle" },
            opacity: {
              value: { min: 0.1, max: 0.3 },
              animation: {
                enable: true,
                speed: 0.5,
                startValue: "random",
                sync: false,
              },
            },
            size: {
              value: { min: 1, max: 2.5 },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#00e5ff",
              opacity: 0.08,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.6,
              direction: "none",
              outModes: { default: "out" },
            },
          },
          detectRetina: true,
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
}
