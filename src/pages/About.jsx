import { Avatar, Box, Chip, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const stats = [
  { value: "6", label: "Specialized AI Agents" },
  { value: "90+", label: "WW Prime Locations" },
  { value: "95%+", label: "Effort Reduction" },
  { value: "10K+", label: "Annual Experiments" },
];

export default function About() {
  return (
    <Box>
      {/* Hero section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr auto" },
          gap: { xs: 4, md: 6 },
          alignItems: "start",
          mb: 8,
          pt: { xs: 2, md: 4 },
        }}
      >
        {/* Left: Text content */}
        <Box>
          <Typography
            variant="caption"
            sx={{
              color: "#5B5FC7",
              mb: 2,
              display: "block",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
            }}
          >
            AI/ML ENGINEER · SEATTLE, WA
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "3rem", sm: "4.5rem", md: "5.5rem" },
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              color: "#111111",
              mb: 3,
            }}
          >
            Building
            <br />
            <Box
              component="span"
              sx={{
                color: "#5B5FC7",
                display: "inline",
              }}
            >
              autonomous
            </Box>
            <br />
            systems.
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 520,
              fontSize: "1.05rem",
              lineHeight: 1.75,
              mb: 3,
            }}
          >
            I architected Newton AI — a fully autonomous marketing platform
            running Claude Sonnet 4 across 6 specialized agents. It drives
            10,000+ annual experiments across 90+ WW Prime locations without
            human intervention.
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 520,
              fontSize: "1.05rem",
              lineHeight: 1.75,
              mb: 4,
            }}
          >
            My focus is on the hard problems: reliable multi-agent
            orchestration, RAG pipelines that hold up under production load,
            and testing infrastructure that catches regressions before they
            reach live traffic.
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {[
              "Agentic AI",
              "Multi-Agent Systems",
              "RAG Pipelines",
              "AWS Bedrock",
              "Python",
              "TypeScript",
            ].map((tag) => (
              <Chip
                key={tag}
                label={tag}
                variant="outlined"
                size="small"
                sx={{ borderRadius: "6px" }}
              />
            ))}
          </Box>
        </Box>

        {/* Right: Profile photo */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box
            sx={{
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: -6,
                borderRadius: "50%",
                border: "1.5px dashed #D1D5DB",
                zIndex: 0,
              },
            }}
          >
            <Avatar
              src="/profile.jpg"
              alt="Matt Monzingo"
              sx={{
                width: 180,
                height: 180,
                position: "relative",
                zIndex: 1,
                border: "3px solid #FFFFFF",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              }}
            />
          </Box>

          {/* Currently label */}
          <Box
            sx={{
              bgcolor: "#F0F0FA",
              border: "1px solid #D4D4F7",
              borderRadius: 2,
              px: 2,
              py: 1.5,
              textAlign: "center",
              maxWidth: 180,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.75,
                mb: 0.5,
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  bgcolor: "#22C55E",
                  boxShadow: "0 0 0 2px rgba(34, 197, 94, 0.2)",
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: "#6B7280",
                }}
              >
                CURRENTLY
              </Typography>
            </Box>
            <Typography
              variant="body2"
              fontWeight={600}
              sx={{ fontSize: "0.8rem", color: "#111111" }}
            >
              SDE-2 @ Amazon
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "0.72rem", color: "#6B7280" }}
            >
              Newton AI
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Stats row */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 1fr",
            sm: "repeat(4, 1fr)",
          },
          gap: 2,
          mb: 8,
          p: { xs: 3, md: 4 },
          bgcolor: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: 3,
        }}
      >
        {stats.map((stat) => (
          <Box
            key={stat.label}
            sx={{
              textAlign: "center",
              py: 1,
              "&:not(:last-child)": {
                borderRight: { sm: "1px solid #E5E7EB" },
              },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "#5B5FC7",
                lineHeight: 1,
                mb: 0.5,
              }}
            >
              {stat.value}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "0.78rem" }}
            >
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Currently exploring section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 2,
        }}
      >
        <Box
          sx={{
            p: 3,
            bgcolor: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 3,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "#9CA3AF",
              display: "block",
              mb: 2,
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
            }}
          >
            CURRENTLY EXPLORING
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {[
              "MCP servers & toolchain integration",
              "Structured output parsing at scale",
              "Emerging agentic stack patterns",
            ].map((item) => (
              <Box
                key={item}
                sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
              >
                <Box
                  sx={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    bgcolor: "#5B5FC7",
                    flexShrink: 0,
                  }}
                />
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.875rem" }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            p: 3,
            bgcolor: "#5B5FC7",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            cursor: "pointer",
            transition: "transform 0.15s ease",
            "&:hover": { transform: "translateY(-2px)" },
          }}
          onClick={() => window.open("https://github.com/mogniznom", "_blank")}
        >
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255,255,255,0.6)",
              display: "block",
              mb: 2,
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
            }}
          >
            OPEN SOURCE
          </Typography>
          <Box>
            <Typography
              variant="h5"
              fontWeight={700}
              sx={{ color: "#FFFFFF", letterSpacing: "-0.02em", mb: 1 }}
            >
              View my work
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem" }}
            >
              Projects, experiments, and contributions on GitHub.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowOutwardIcon sx={{ color: "#FFFFFF", fontSize: 18 }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
