import { Card, CardContent, Typography, Box, Chip } from "@mui/material";

const projects = [
  {
    title: "Newton AI – Autonomous Marketing Platform",
    year: "2025",
    description:
      "Architected production multi-agent system on Strands Agents SDK and Amazon Bedrock AgentCore, running Claude Sonnet 4 across 6 specialized agents. Enables fully autonomous signal-to-experiment pipelines across 90+ WW Prime locations with 95%+ reduction in marketer effort.",
    tags: ["Strands Agents SDK", "Bedrock AgentCore", "Claude Sonnet 4", "Python", "TypeScript", "RAG", "AWS"],
    accent: { from: "#7C5CFC", to: "#8B7BF7" },
  },
  {
    title: "Multi-Agent Orchestration System",
    year: "2025",
    description:
      "Built autonomous coordination system using multiple Claude Code instances with a custom file-based message queue and MCP messaging tools, enabling multi-step autonomous workflows: PM Agent → Architect → Reviewer → Programmer → QA → automated GitHub deployment.",
    tags: ["Claude Code", "MCP", "Multi-Agent", "TypeScript"],
    accent: { from: "#4169E1", to: "#6EC6D8" },
  },
  {
    title: "Mobile AI Learning App",
    year: "2025",
    description:
      "Built Flutter app using Anthropic API to automate daily technical learning for software engineers, featuring structured content generation and progress tracking.",
    tags: ["Flutter", "Dart", "Anthropic API", "Mobile"],
    accent: { from: "#6EC6D8", to: "#34D399" },
  },
  {
    title: "Fake Review Prediction (Kaggle Competition)",
    year: "2021",
    description:
      "Built an RNN with LSTM neurons in PyTorch to classify fake product reviews. Used CountVectorizer for text preprocessing and tuned hyperparameters across multiple model configurations. Placed 16th out of 105 competitors with 96.5% validation accuracy.",
    tags: ["PyTorch", "LSTM", "Python", "NLP"],
    accent: { from: "#FBBF24", to: "#F87171" },
  },
  {
    title: "Micro-Bartending Unit",
    year: "2021",
    description:
      "Built an automated drink-mixing device with a team. Created an animated UI in Java and wrote Python scripts to interface with hardware and the Venmo API on a Raspberry Pi.",
    tags: ["Python", "Java", "Raspberry Pi", "Hardware"],
    accent: { from: "#F87171", to: "#FBBF24" },
  },
];

export default function Projects() {
  return (
    <Box>
      {/* Section header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4 }}>
        <Box
          sx={{
            width: 4,
            height: 28,
            borderRadius: 1,
            background: "linear-gradient(180deg, #7C5CFC, #8B7BF7)",
          }}
        />
        <Typography variant="h5">Projects</Typography>
      </Box>

      {/* 2-column grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
          gap: 2,
        }}
      >
        {projects.map((project, i) => (
          <Card
            key={i}
            elevation={0}
            sx={{
              position: "relative",
              overflow: "hidden",
              transition: "border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                borderColor: "rgba(139,123,247,0.3)",
                transform: "translateY(-2px)",
                boxShadow: "0 10px 36px rgba(0,0,0,0.35)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: `linear-gradient(90deg, ${project.accent.from}, ${project.accent.to})`,
              },
            }}
          >
            <CardContent sx={{ p: 3, pt: 2.5 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  mb: 1,
                  gap: 1,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "#E8E8ED",
                    lineHeight: 1.3,
                    flex: 1,
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: "0.65rem",
                    color: "#5A5A6E",
                    flexShrink: 0,
                    mt: 0.2,
                  }}
                >
                  {project.year}
                </Typography>
              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1.75, lineHeight: 1.7 }}
              >
                {project.description}
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {project.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    variant="outlined"
                    sx={{ fontSize: "0.65rem", height: 20 }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
