import { Box, Chip, Typography } from "@mui/material";

const PROJECT_COLORS = [
  { accent: "#9D4EDD", bg: "rgba(157,78,221,0.08)", border: "rgba(157,78,221,0.22)", strip: "linear-gradient(90deg, #9D4EDD, #00D4FF)" },
  { accent: "#00D4FF", bg: "rgba(0,212,255,0.07)", border: "rgba(0,212,255,0.20)", strip: "linear-gradient(90deg, #00D4FF, #4361EE)" },
  { accent: "#F72585", bg: "rgba(247,37,133,0.07)", border: "rgba(247,37,133,0.20)", strip: "linear-gradient(90deg, #F72585, #9D4EDD)" },
  { accent: "#4361EE", bg: "rgba(67,97,238,0.07)", border: "rgba(67,97,238,0.20)", strip: "linear-gradient(90deg, #4361EE, #00D4FF)" },
  { accent: "#14B8A6", bg: "rgba(20,184,166,0.07)", border: "rgba(20,184,166,0.20)", strip: "linear-gradient(90deg, #14B8A6, #4361EE)" },
];

const projects = [
  {
    title: "Newton AI – Autonomous Marketing Platform",
    year: "2025",
    description:
      "Architected production multi-agent system on Strands Agents SDK and Amazon Bedrock AgentCore, running Claude Sonnet 4 across 6 specialized agents. Enables fully autonomous signal-to-experiment pipelines across 90+ WW Prime locations with 95%+ reduction in marketer effort.",
    tags: ["Strands Agents SDK", "Bedrock AgentCore", "Claude Sonnet 4", "Python", "TypeScript", "RAG", "AWS"],
  },
  {
    title: "Multi-Agent Orchestration System",
    year: "2025",
    description:
      "Built autonomous coordination system using multiple Claude Code instances with a custom file-based message queue and MCP messaging tools, enabling multi-step autonomous workflows: PM Agent → Architect → Reviewer → Programmer → QA → automated GitHub deployment.",
    tags: ["Claude Code", "MCP", "Multi-Agent", "TypeScript"],
  },
  {
    title: "Mobile AI Learning App",
    year: "2025",
    description:
      "Built Flutter app using Anthropic API to automate daily technical learning for software engineers, featuring structured content generation and progress tracking.",
    tags: ["Flutter", "Dart", "Anthropic API", "Mobile"],
  },
  {
    title: "Fake Review Prediction (Kaggle Competition)",
    year: "2021",
    description:
      "Built an RNN with LSTM neurons in PyTorch to classify fake product reviews. Used CountVectorizer for text preprocessing and tuned hyperparameters across multiple model configurations. Placed 16th out of 105 competitors with 96.5% validation accuracy.",
    tags: ["PyTorch", "LSTM", "Python", "NLP"],
  },
  {
    title: "Micro-Bartending Unit",
    year: "2021",
    description:
      "Built an automated drink-mixing device with a team. Created an animated UI in Java and wrote Python scripts to interface with hardware and the Venmo API on a Raspberry Pi.",
    tags: ["Python", "Java", "Raspberry Pi", "Hardware"],
  },
];

export default function Projects() {
  return (
    <Box>
      {/* Section heading */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="overline"
          sx={{ color: "#4361EE", letterSpacing: "0.15em", fontSize: "0.7rem" }}
        >
          Work
        </Typography>
        <Typography
          variant="h4"
          sx={{
            background: "linear-gradient(135deg, #F1F5F9 30%, rgba(241,245,249,0.5))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Projects
        </Typography>
      </Box>

      {/* Project grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
          gap: 2.5,
          // First card spans full width on desktop
          "& > *:first-of-type": {
            gridColumn: { md: "1 / -1" },
          },
        }}
      >
        {projects.map((project, i) => {
          const c = PROJECT_COLORS[i % PROJECT_COLORS.length];
          return (
            <Box
              key={i}
              sx={{
                background: "rgba(255, 255, 255, 0.04)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.09)",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 4px 30px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.07)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 16px 56px rgba(0,0,0,0.35)",
                  borderColor: c.border,
                },
              }}
            >
              {/* Gradient top strip */}
              <Box sx={{ height: 3, background: c.strip, flexShrink: 0 }} />

              <Box sx={{ p: { xs: 3, md: 3.5 }, flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Year badge */}
                <Box sx={{ mb: 1.5 }}>
                  <Box
                    component="span"
                    sx={{
                      px: 1.5,
                      py: 0.4,
                      borderRadius: "6px",
                      background: c.bg,
                      border: `1px solid ${c.border}`,
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: c.accent,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {project.year}
                  </Box>
                </Box>

                {/* Title */}
                <Typography
                  variant="h6"
                  sx={{
                    color: "#F1F5F9",
                    mb: 1.5,
                    fontSize: { xs: "1rem", md: "1.05rem" },
                    lineHeight: 1.4,
                  }}
                >
                  {project.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(241,245,249,0.65)",
                    lineHeight: 1.75,
                    flex: 1,
                    mb: 2,
                  }}
                >
                  {project.description}
                </Typography>

                {/* Tags */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                  {project.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        fontSize: "0.7rem",
                        height: 22,
                        background: c.bg,
                        border: `1px solid ${c.border}`,
                        color: c.accent,
                        fontWeight: 500,
                        backdropFilter: "blur(8px)",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          boxShadow: `0 0 10px ${c.accent}40`,
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
