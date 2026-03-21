import { Box } from "@mui/material";

const orbStyles = `
  @keyframes glassFloat1 {
    0%, 100% { transform: translate(0px, 0px) scale(1); }
    25%       { transform: translate(80px, -60px) scale(1.06); }
    50%       { transform: translate(40px, 80px) scale(0.96); }
    75%       { transform: translate(-50px, 20px) scale(1.03); }
  }
  @keyframes glassFloat2 {
    0%, 100% { transform: translate(0px, 0px) scale(1); }
    30%       { transform: translate(-90px, 70px) scale(1.08); }
    60%       { transform: translate(60px, -40px) scale(0.94); }
    80%       { transform: translate(-20px, -70px) scale(1.04); }
  }
  @keyframes glassFloat3 {
    0%, 100% { transform: translate(0px, 0px) scale(1); }
    40%       { transform: translate(70px, 60px) scale(1.10); }
    70%       { transform: translate(-60px, 30px) scale(0.95); }
  }
  @keyframes glassFloat4 {
    0%, 100% { transform: translate(0px, 0px) scale(1); }
    35%       { transform: translate(-80px, -60px) scale(1.07); }
    65%       { transform: translate(50px, 50px) scale(0.97); }
  }
  @keyframes glassFloat5 {
    0%, 100% { transform: translate(0px, 0px) scale(1); }
    45%       { transform: translate(60px, -80px) scale(1.05); }
    75%       { transform: translate(-40px, 40px) scale(0.98); }
  }
`;

export default function ParticleBackground() {
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
        overflow: "hidden",
      }}
    >
      <style>{orbStyles}</style>

      {/* Purple orb — top-left quadrant */}
      <Box
        sx={{
          position: "absolute",
          top: "-15%",
          left: "-10%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(157, 78, 221, 0.38) 0%, rgba(157, 78, 221, 0.12) 40%, transparent 70%)",
          filter: "blur(60px)",
          animation: "glassFloat1 22s ease-in-out infinite",
        }}
      />

      {/* Cyan orb — bottom-right */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-15%",
          right: "-10%",
          width: 750,
          height: 750,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0, 212, 255, 0.30) 0%, rgba(0, 212, 255, 0.10) 40%, transparent 70%)",
          filter: "blur(70px)",
          animation: "glassFloat2 28s ease-in-out infinite",
        }}
      />

      {/* Pink orb — center-right */}
      <Box
        sx={{
          position: "absolute",
          top: "35%",
          right: "20%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(247, 37, 133, 0.22) 0%, rgba(247, 37, 133, 0.07) 40%, transparent 70%)",
          filter: "blur(75px)",
          animation: "glassFloat3 32s ease-in-out infinite",
        }}
      />

      {/* Royal blue orb — top-right */}
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          right: "5%",
          width: 450,
          height: 450,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(67, 97, 238, 0.26) 0%, rgba(67, 97, 238, 0.08) 40%, transparent 70%)",
          filter: "blur(65px)",
          animation: "glassFloat4 24s ease-in-out infinite",
        }}
      />

      {/* Teal orb — bottom-left */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(20, 184, 166, 0.22) 0%, rgba(20, 184, 166, 0.07) 40%, transparent 70%)",
          filter: "blur(65px)",
          animation: "glassFloat5 26s ease-in-out infinite",
        }}
      />
    </Box>
  );
}
