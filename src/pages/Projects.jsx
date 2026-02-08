import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";

const projects = [
  {
    title: "Multi-Agent System Orchestration",
    year: "2025",
    description: null,
  },
  {
    title: "Custom Agent with Anthropic API",
    year: "2025",
    description:
      "Developed experimental AI agent using Anthropic API to explore agent architectures and autonomous decision-making patterns.",
  },
  {
    title: "Fake Review Prediction (Kaggle Competition)",
    year: "2021",
    description:
      "Built an RNN with LSTM neurons in PyTorch to classify fake product reviews. Used CountVectorizer for text preprocessing and tuned hyperparameters across multiple model configurations. Placed 16th out of 105 competitors with 96.5% validation accuracy.",
  },
  {
    title: "Micro-Bartending Unit",
    year: "2021",
    description:
      "Built an automated drink-mixing device with a team. Created an animated UI in Java and wrote Python scripts to interface with hardware and the Venmo API on a Raspberry Pi.",
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
              background: "linear-gradient(180deg, #00e5ff, #7c4dff)",
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
                  bgcolor: "rgba(0, 229, 255, 0.08)",
                  border: "1px solid rgba(0, 229, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <BuildIcon sx={{ color: "#00e5ff" }} />
              </Box>
              <Box>
                <Typography variant="subtitle1">{project.title}</Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#00e5ff",
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
              </Box>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
