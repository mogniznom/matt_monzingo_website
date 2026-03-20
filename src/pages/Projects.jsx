import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Chip,
} from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";

const projects = [
  {
    title: "Newton AI \u2013 Autonomous Marketing Platform",
    year: "2025",
    description:
      "Architected production multi-agent system on Strands Agents SDK and Amazon Bedrock AgentCore, running Claude Sonnet 4 across 6 specialized agents. Enables fully autonomous signal-to-experiment pipelines across 90+ WW Prime locations with 95%+ reduction in marketer effort.",
    tags: ["Strands Agents SDK", "Bedrock AgentCore", "Claude Sonnet 4", "Python", "TypeScript", "RAG", "AWS"],
  },
  {
    title: "Multi-Agent Orchestration System",
    year: "2025",
    description:
      "Built autonomous coordination system using multiple Claude Code instances with a custom file-based message queue and MCP messaging tools, enabling multi-step autonomous workflows: PM Agent \u2192 Architect \u2192 Reviewer \u2192 Programmer \u2192 QA \u2192 automated GitHub deployment.",
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
    <Card elevation={0}>
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
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

        {projects.map((project, i) => (
          <Box key={i}>
            {i > 0 && <Divider sx={{ my: 2 }} />}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  bgcolor: "rgba(139, 123, 247, 0.08)",
                  border: "1px solid rgba(139, 123, 247, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <BuildIcon sx={{ color: "#8B7BF7" }} />
              </Box>
              <Box>
                <Typography variant="subtitle1">{project.title}</Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#8B7BF7",
                    fontFamily: "'Fira Code', monospace",
                    fontSize: "0.75rem",
                  }}
                >
                  {project.year}
                </Typography>
                {project.description && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.5 }}
                  >
                    {project.description}
                  </Typography>
                )}
                {project.tags && (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: 1 }}>
                    {project.tags.map((tag) => (
                      <Chip key={tag} label={tag} size="small" variant="outlined" sx={{ fontSize: "0.7rem", height: 20 }} />
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
