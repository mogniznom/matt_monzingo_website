import { Avatar, Box, Chip, Typography } from "@mui/material";

const highlights = [
  "Strands Agents SDK",
  "Bedrock AgentCore",
  "Claude Sonnet 4",
  "Multi-Agent Systems",
  "RAG Pipelines",
  "MCP Servers",
  "AWS",
  "TypeScript",
  "Python",
];

export default function About() {
  return (
    <Box>
      {/* ── Hero section ── */}
      <Box
        sx={{
          textAlign: "center",
          mb: { xs: 5, md: 7 },
          pt: { xs: 1, md: 2 },
        }}
      >
        {/* Glowing avatar */}
        <Box
          sx={{
            position: "relative",
            display: "inline-block",
            mb: 3,
          }}
        >
          {/* Outer glow ring */}
          <Box
            sx={{
              position: "absolute",
              inset: -8,
              borderRadius: "50%",
              background:
                "conic-gradient(from 0deg, #9D4EDD, #00D4FF, #F72585, #9D4EDD)",
              filter: "blur(12px)",
              opacity: 0.55,
            }}
          />
          <Avatar
            src="/profile.jpg"
            alt="Matt Monzingo"
            sx={{
              width: 120,
              height: 120,
              position: "relative",
              border: "2px solid rgba(255,255,255,0.15)",
              boxShadow: "0 0 40px rgba(157, 78, 221, 0.40)",
            }}
          />
        </Box>

        {/* Name — gradient text */}
        <Typography
          variant="h2"
          sx={{
            background: "linear-gradient(135deg, #C77DFF 0%, #00D4FF 50%, #F472B6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            mb: 1,
            fontSize: { xs: "2.2rem", md: "3rem" },
          }}
        >
          Matt Monzingo
        </Typography>

        {/* Role badge */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            px: 2.5,
            py: 0.75,
            borderRadius: "40px",
            background: "rgba(157, 78, 221, 0.12)",
            border: "1px solid rgba(157, 78, 221, 0.30)",
            backdropFilter: "blur(12px)",
            mb: 3,
          }}
        >
          <Box
            sx={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              bgcolor: "#9D4EDD",
              boxShadow: "0 0 10px #9D4EDD",
              animation: "pulse 2s ease-in-out infinite",
              "@keyframes pulse": {
                "0%, 100%": { opacity: 1, transform: "scale(1)" },
                "50%": { opacity: 0.6, transform: "scale(0.85)" },
              },
            }}
          />
          <Typography
            sx={{
              fontSize: "0.85rem",
              fontWeight: 500,
              color: "rgba(241,245,249,0.80)",
              letterSpacing: "0.04em",
            }}
          >
            SDE-2 · Amazon · AI/ML Engineer
          </Typography>
        </Box>

        {/* Highlight chips */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 1,
          }}
        >
          {highlights.map((h) => (
            <Chip
              key={h}
              label={h}
              size="small"
              sx={{
                fontSize: "0.75rem",
                height: 26,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "rgba(241,245,249,0.65)",
                backdropFilter: "blur(8px)",
                "&:hover": {
                  background: "rgba(0, 212, 255, 0.12)",
                  borderColor: "rgba(0, 212, 255, 0.35)",
                  color: "#67E8F9",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* ── Bio panels ── */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* Panel 1 */}
        <Box
          sx={{
            background: "rgba(255, 255, 255, 0.04)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.09)",
            borderRadius: "20px",
            p: { xs: 3, md: 4 },
            boxShadow: "0 4px 30px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.07)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: "linear-gradient(90deg, #9D4EDD, #00D4FF, #F72585)",
              borderRadius: "20px 20px 0 0",
            },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "#9D4EDD",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              mb: 1.5,
              display: "block",
            }}
          >
            What I Build
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "rgba(241,245,249,0.80)", lineHeight: 1.8 }}
          >
            AI/ML Engineer specializing in production agentic systems at
            enterprise scale. I architected Newton AI — a fully autonomous
            marketing platform built on the Strands Agents SDK and Amazon
            Bedrock AgentCore, running Claude Sonnet 4 across 6 specialized
            agents. The system drives 10,000+ annual experiments across 90+ WW
            Prime locations, coordinating everything from creative generation to
            performance analysis without human intervention.
          </Typography>
        </Box>

        {/* Panel 2 */}
        <Box
          sx={{
            background: "rgba(255, 255, 255, 0.04)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.09)",
            borderRadius: "20px",
            p: { xs: 3, md: 4 },
            boxShadow: "0 4px 30px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.07)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: "linear-gradient(90deg, #00D4FF, #F72585, #9D4EDD)",
              borderRadius: "20px 20px 0 0",
            },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "#00D4FF",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              mb: 1.5,
              display: "block",
            }}
          >
            What I Care About
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "rgba(241,245,249,0.80)", lineHeight: 1.8 }}
          >
            My focus is on the hard problems in agentic AI: reliable
            multi-agent orchestration, RAG pipelines that hold up under
            production load, and multi-level testing infrastructure that catches
            regressions before they reach live traffic. I care deeply about
            building systems that are not just technically sound but
            operationally trustworthy — agents that do what they promise at
            scale.
          </Typography>
        </Box>

        {/* Panel 3 */}
        <Box
          sx={{
            background: "rgba(255, 255, 255, 0.04)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.09)",
            borderRadius: "20px",
            p: { xs: 3, md: 4 },
            boxShadow: "0 4px 30px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.07)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: "linear-gradient(90deg, #F72585, #9D4EDD, #00D4FF)",
              borderRadius: "20px 20px 0 0",
            },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "#F472B6",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              mb: 1.5,
              display: "block",
            }}
          >
            What's Next
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "rgba(241,245,249,0.80)", lineHeight: 1.8 }}
          >
            When I&apos;m not wiring up agent toolchains or tuning evaluation
            frameworks, I&apos;m exploring what comes next in the agentic stack
            — MCP servers, structured output parsing, and the emerging patterns
            that will define how autonomous systems are built in the years ahead.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
