import { Box, Typography } from "@mui/material";

const stats = [
  { value: "3+", label: "Years at Amazon" },
  { value: "90+", label: "WW Prime Locations" },
  { value: "6", label: "Specialized Agents" },
  { value: "10k+", label: "Annual Experiments" },
];

export default function About() {
  return (
    <Box>
      {/* Hero headline */}
      <Box sx={{ mb: 5 }}>
        <Typography
          sx={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: { xs: "2rem", sm: "3rem" },
            fontWeight: 700,
            letterSpacing: "-0.035em",
            lineHeight: 1.08,
            mb: 2.5,
          }}
        >
          <Box component="span" sx={{ color: "#E8E8ED" }}>
            Building the future of{" "}
          </Box>
          <Box
            component="span"
            sx={{
              background:
                "linear-gradient(135deg, #7C5CFC 0%, #8B7BF7 55%, #6EC6D8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            autonomous AI.
          </Box>
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 560, lineHeight: 1.85 }}
        >
          AI/ML Engineer specializing in production agentic systems at enterprise
          scale. I architect multi-agent platforms that run fully autonomously —
          from signal detection to content generation to deployment — without
          human intervention.
        </Typography>
      </Box>

      {/* Stats bento grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" },
          gap: 1.5,
          mb: 4,
        }}
      >
        {stats.map((s) => (
          <Box
            key={s.value}
            sx={{
              p: { xs: 2, sm: 2.5 },
              borderRadius: 2,
              bgcolor: "#1C1C28",
              border: "1px solid rgba(42,42,60,0.8)",
              transition: "border-color 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                borderColor: "rgba(139,123,247,0.3)",
                boxShadow: "0 0 20px rgba(124,92,252,0.07)",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: { xs: "1.7rem", sm: "2.1rem" },
                fontWeight: 700,
                letterSpacing: "-0.025em",
                color: "#8B7BF7",
                lineHeight: 1,
                mb: 0.75,
              }}
            >
              {s.value}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.65rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#5A5A6E",
                lineHeight: 1.5,
              }}
            >
              {s.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Currently Building highlight card */}
      <Box
        sx={{
          p: { xs: 2.5, sm: 3 },
          borderRadius: 2,
          background:
            "linear-gradient(135deg, rgba(124,92,252,0.09) 0%, rgba(28,28,40,0.7) 100%)",
          border: "1px solid rgba(139,123,247,0.2)",
          mb: 5,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(139,123,247,0.6), transparent)",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              bgcolor: "#34D399",
              boxShadow: "0 0 8px rgba(52,211,153,0.8)",
            }}
          />
          <Typography
            sx={{
              fontFamily: "'Fira Code', monospace",
              fontSize: "0.65rem",
              color: "#5A5A6E",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Currently Building
          </Typography>
        </Box>
        <Typography
          sx={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: "1.05rem",
            color: "#E8E8ED",
            mb: 0.75,
            letterSpacing: "-0.01em",
          }}
        >
          Newton AI — Autonomous Marketing Platform
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
          Production multi-agent system running Claude Sonnet 4 across 6
          specialized agents on Strands SDK + Amazon Bedrock AgentCore. Drives
          10,000+ annual experiments across 90+ WW Prime locations with zero
          human intervention.
        </Typography>
      </Box>

      {/* Bio paragraphs */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85 }}>
          My focus is on the hard problems in agentic AI: reliable multi-agent
          orchestration, RAG pipelines that hold up under production load, and
          multi-level testing infrastructure that catches regressions before they
          reach live traffic. I care deeply about building systems that are not
          just technically sound but operationally trustworthy — agents that do
          what they promise at scale.
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85 }}>
          When I'm not wiring up agent toolchains or tuning evaluation
          frameworks, I'm exploring what comes next in the agentic stack —
          MCP servers, structured output parsing, and the emerging patterns
          that will define how autonomous systems are built in the years ahead.
        </Typography>
      </Box>
    </Box>
  );
}
