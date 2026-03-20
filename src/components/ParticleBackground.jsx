import { Box } from "@mui/material";

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
      {/* Orb 1 — large violet, upper-left */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 500, md: 900 },
          height: { xs: 500, md: 900 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,92,252,0.12) 0%, transparent 60%)",
          top: "-25%",
          left: "-10%",
          animation: "orbFloat1 26s ease-in-out infinite",
          "@keyframes orbFloat1": {
            "0%, 100%": { transform: "translate(0px, 0px)" },
            "33%": { transform: "translate(60px, 45px)" },
            "66%": { transform: "translate(-30px, 80px)" },
          },
        }}
      />

      {/* Orb 2 — lavender, lower-right */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 400, md: 700 },
          height: { xs: 400, md: 700 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,123,247,0.09) 0%, transparent 60%)",
          bottom: "-5%",
          right: "5%",
          animation: "orbFloat2 32s ease-in-out infinite",
          "@keyframes orbFloat2": {
            "0%, 100%": { transform: "translate(0px, 0px)" },
            "50%": { transform: "translate(-70px, -55px)" },
          },
        }}
      />

      {/* Orb 3 — cyan accent, center-right */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 300, md: 500 },
          height: { xs: 300, md: 500 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(110,198,216,0.07) 0%, transparent 60%)",
          top: "40%",
          right: "20%",
          animation: "orbFloat3 20s ease-in-out infinite",
          "@keyframes orbFloat3": {
            "0%, 100%": { transform: "translate(0px, 0px)" },
            "50%": { transform: "translate(45px, -65px)" },
          },
        }}
      />

      {/* Dot grid overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(139,123,247,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
    </Box>
  );
}
