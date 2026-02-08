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
];

export default function Projects() {
  return (
    <Card elevation={1}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Projects
        </Typography>

        {projects.map((project, i) => (
          <Box key={i}>
            {i > 0 && <Divider sx={{ my: 2 }} />}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  bgcolor: "grey.100",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <BuildIcon color="primary" />
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.year}
                </Typography>
                {project.description && (
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
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
