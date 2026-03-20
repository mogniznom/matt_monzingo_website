import { Box, Typography, Chip } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

// Stat card for bento grid
function StatCard({ value, label, color, bg, icon }) {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        backgroundColor: bg,
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: `0 12px 32px ${color}22`,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: -16,
          right: -16,
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: `${color}18`,
        },
      }}
    >
      <Box sx={{ color, mb: 0.5, position: "relative", zIndex: 1 }}>{icon}</Box>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          color,
          lineHeight: 1,
          position: "relative",
          zIndex: 1,
        }}
      >
        {value}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#6B7280", fontWeight: 500, position: "relative", zIndex: 1 }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default function About() {
  return (
    <Box sx={{ maxWidth: 860 }}>
      {/* Hero banner */}
      <Box
        sx={{
          borderRadius: "24px",
          background: "linear-gradient(135deg, #8A4AF3 0%, #E81E63 100%)",
          p: { xs: 3, sm: 4 },
          mb: 3,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: -60,
            right: -60,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: -40,
            left: "30%",
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
          <AutoAwesomeIcon sx={{ color: "rgba(255,255,255,0.8)", fontSize: 18 }} />
          <Typography
            variant="overline"
            sx={{ color: "rgba(255,255,255,0.7)", letterSpacing: "0.12em" }}
          >
            AI/ML Engineer
          </Typography>
        </Box>
        <Typography
          variant="h3"
          sx={{
            color: "#FFFFFF",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            mb: 1,
            position: "relative",
            zIndex: 1,
            lineHeight: 1.2,
          }}
        >
          Building the future of{" "}
          <Box
            component="span"
            sx={{
              color: "rgba(255,255,255,0.75)",
              fontStyle: "italic",
            }}
          >
            autonomous AI
          </Box>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.8)",
            maxWidth: 560,
            position: "relative",
            zIndex: 1,
            lineHeight: 1.7,
          }}
        >
          Specializing in production agentic systems at enterprise scale —
          multi-agent orchestration, RAG pipelines, and autonomous workflows
          that just work.
        </Typography>
      </Box>

      {/* Bento stats grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 1fr 1fr" },
          gap: 2,
          mb: 3,
        }}
      >
        <StatCard
          value="6"
          label="Specialized AI Agents"
          color="#8A4AF3"
          bg="#EDE7FF"
          icon={<PsychologyIcon />}
        />
        <StatCard
          value="90+"
          label="WW Prime Locations"
          color="#FF6B6B"
          bg="#FFF0F0"
          icon={<RocketLaunchIcon />}
        />
        <StatCard
          value="95%"
          label="Marketer Effort Reduced"
          color="#22C55E"
          bg="#F0FDF4"
          icon={<TrendingUpIcon />}
        />
        <StatCard
          value="10K+"
          label="Annual Experiments"
          color="#4169E1"
          bg="#EEF2FF"
          icon={<AutoAwesomeIcon />}
        />
      </Box>

      {/* About text cards — bento layout */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 2,
          mb: 2,
        }}
      >
        {/* Main bio — wide */}
        <Box
          sx={{
            gridColumn: { xs: "1", sm: "1 / -1" },
            borderRadius: "20px",
            backgroundColor: "#FFFFFF",
            p: 3,
            boxShadow: "0px 4px 24px rgba(138, 74, 243, 0.08)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: "10px",
                background: "linear-gradient(135deg, #8A4AF3, #E81E63)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PsychologyIcon sx={{ color: "#FFFFFF", fontSize: 18 }} />
            </Box>
            <Typography
              variant="h6"
              sx={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
            >
              What I Build
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary">
            I architected Newton AI — a fully autonomous marketing platform built on
            the Strands Agents SDK and Amazon Bedrock AgentCore, running Claude Sonnet 4
            across 6 specialized agents. The system drives 10,000+ annual experiments
            across 90+ WW Prime locations, coordinating everything from creative
            generation to performance analysis without human intervention.
          </Typography>
        </Box>

        {/* Engineering focus card */}
        <Box
          sx={{
            borderRadius: "20px",
            backgroundColor: "#EDE7FF",
            p: 3,
            transition: "transform 0.2s ease",
            "&:hover": { transform: "translateY(-2px)" },
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "12px",
              backgroundColor: "#8A4AF3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <RocketLaunchIcon sx={{ color: "#FFFFFF", fontSize: 20 }} />
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              color: "#8A4AF3",
              mb: 1,
            }}
          >
            Hard Problems
          </Typography>
          <Typography variant="body2" sx={{ color: "#6B7280", lineHeight: 1.7 }}>
            Reliable multi-agent orchestration, RAG pipelines that hold up under
            production load, and multi-level testing infrastructure that catches
            regressions before they reach live traffic.
          </Typography>
        </Box>

        {/* What's next card */}
        <Box
          sx={{
            borderRadius: "20px",
            backgroundColor: "#FFF3E0",
            p: 3,
            transition: "transform 0.2s ease",
            "&:hover": { transform: "translateY(-2px)" },
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "12px",
              backgroundColor: "#FFB800",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <AutoAwesomeIcon sx={{ color: "#FFFFFF", fontSize: 20 }} />
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              color: "#B45309",
              mb: 1,
            }}
          >
            What's Next
          </Typography>
          <Typography variant="body2" sx={{ color: "#6B7280", lineHeight: 1.7 }}>
            Exploring MCP servers, structured output parsing, and the emerging
            patterns that will define how autonomous systems are built in the
            years ahead.
          </Typography>
        </Box>
      </Box>

      {/* Tags row */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {["Strands Agents SDK", "Amazon Bedrock", "Claude Sonnet 4", "Multi-Agent", "RAG", "LangChain", "MCP Servers"].map((tag) => (
          <Chip
            key={tag}
            label={tag}
            variant="outlined"
            size="small"
            sx={{ fontWeight: 600, borderRadius: "8px" }}
          />
        ))}
      </Box>
    </Box>
  );
}
