import { Box, Chip, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const projects = [
  {
    title: "Newton AI",
    subtitle: "Autonomous Marketing Platform",
    year: "2025",
    description:
      "Architected production multi-agent system on Strands Agents SDK and Amazon Bedrock AgentCore, running Claude Sonnet 4 across 6 specialized agents. Enables fully autonomous signal-to-experiment pipelines across 90+ WW Prime locations with 95%+ reduction in marketer effort.",
    tags: ["Strands Agents SDK", "Bedrock AgentCore", "Claude Sonnet 4", "Python", "TypeScript", "RAG", "AWS"],
    accent: "#5B5FC7",
    bg: "#F0F0FA",
    border: "#D4D4F7",
    highlight: "95%+ effort reduction",
  },
  {
    title: "Multi-Agent Orchestration",
    subtitle: "Autonomous Coordination System",
    year: "2025",
    description:
      "Built autonomous coordination system using multiple Claude Code instances with a custom file-based message queue and MCP messaging tools, enabling multi-step autonomous workflows: PM Agent → Architect → Reviewer → Programmer → QA → automated GitHub deployment.",
    tags: ["Claude Code", "MCP", "Multi-Agent", "TypeScript"],
    accent: "#0891B2",
    bg: "#F0FAFB",
    border: "#A5D8E0",
    highlight: "Full dev pipeline automation",
  },
  {
    title: "Mobile AI Learning App",
    subtitle: "Daily Technical Learning Tool",
    year: "2025",
    description:
      "Built Flutter app using Anthropic API to automate daily technical learning for software engineers, featuring structured content generation and progress tracking.",
    tags: ["Flutter", "Dart", "Anthropic API", "Mobile"],
    accent: "#E07A5F",
    bg: "#FDF3F0",
    border: "#F2C4B4",
    highlight: "Daily structured content",
  },
  {
    title: "Fake Review Prediction",
    subtitle: "Kaggle Competition · 16th / 105",
    year: "2021",
    description:
      "Built an RNN with LSTM neurons in PyTorch to classify fake product reviews. Used CountVectorizer for text preprocessing and tuned hyperparameters across multiple model configurations.",
    tags: ["PyTorch", "LSTM", "Python", "NLP"],
    accent: "#059669",
    bg: "#F0FAF6",
    border: "#A5D8C0",
    highlight: "96.5% validation accuracy",
  },
  {
    title: "Micro-Bartending Unit",
    subtitle: "Hardware + Software Integration",
    year: "2021",
    description:
      "Built an automated drink-mixing device with a team. Created an animated UI in Java and wrote Python scripts to interface with hardware and the Venmo API on a Raspberry Pi.",
    tags: ["Python", "Java", "Raspberry Pi", "Hardware"],
    accent: "#7C3AED",
    bg: "#F5F0FD",
    border: "#D4B8F5",
    highlight: "Venmo API integration",
  },
];

export default function Projects() {
  return (
    <Box>
      {/* Page header */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="caption"
          sx={{
            color: "#5B5FC7",
            display: "block",
            mb: 2,
            fontSize: "0.7rem",
            letterSpacing: "0.12em",
          }}
        >
          SELECTED WORK
        </Typography>
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: "2.75rem", md: "4rem" },
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            color: "#111111",
          }}
        >
          Projects
        </Typography>
      </Box>

      {/* Project list */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {projects.map((project, i) => (
          <Box
            key={i}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "80px 1fr" },
              gap: { xs: 2, md: 4 },
              p: { xs: 3, md: 4 },
              bgcolor: project.bg,
              border: `1px solid ${project.border}`,
              borderRadius: 3,
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
              },
            }}
          >
            {/* Index number */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                alignItems: { xs: "center", md: "flex-start" },
                gap: { xs: 2, md: 0 },
                justifyContent: { xs: "space-between", md: "flex-start" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                  color: project.accent,
                  opacity: 0.25,
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "0.75rem",
                  color: project.accent,
                  opacity: 0.6,
                  display: { xs: "block", md: "none" },
                }}
              >
                {project.year}
              </Typography>
            </Box>

            {/* Content */}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 2,
                  mb: 0.5,
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    sx={{
                      letterSpacing: "-0.02em",
                      color: "#111111",
                      fontSize: { xs: "1.15rem", md: "1.3rem" },
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: project.accent, fontWeight: 500, mt: 0.25 }}
                  >
                    {project.subtitle}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    flexShrink: 0,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "0.78rem",
                      color: "#9CA3AF",
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    {project.year}
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1.5, lineHeight: 1.7, maxWidth: 620 }}
              >
                {project.description}
              </Typography>

              {/* Highlight badge */}
              <Box sx={{ mt: 2, mb: 2 }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.75,
                    bgcolor: "rgba(255,255,255,0.8)",
                    border: `1px solid ${project.border}`,
                    borderRadius: "6px",
                    px: 1.5,
                    py: 0.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      bgcolor: project.accent,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: "0.72rem",
                      color: project.accent,
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {project.highlight}
                  </Typography>
                </Box>
              </Box>

              {/* Tags */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {project.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.7)",
                      border: `1px solid ${project.border}`,
                      color: "#374151",
                      fontSize: "0.72rem",
                      borderRadius: "6px",
                      height: 24,
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
