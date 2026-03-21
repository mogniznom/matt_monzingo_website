import { Typography, Box, Chip } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SportsBarIcon from "@mui/icons-material/SportsBar";

const projects = [
  {
    title: "Newton AI – Autonomous Marketing Platform",
    year: "2025",
    description:
      "Architected production multi-agent system on Strands Agents SDK and Amazon Bedrock AgentCore, running Claude Sonnet 4 across 6 specialized agents. Enables fully autonomous signal-to-experiment pipelines across 90+ WW Prime locations with 95%+ reduction in marketer effort.",
    tags: ["Strands Agents SDK", "Bedrock AgentCore", "Claude Sonnet 4", "Python", "TypeScript", "RAG", "AWS"],
    color: "#8A4AF3",
    bg: "#EDE7FF",
    gradient: "linear-gradient(135deg, #8A4AF3, #E81E63)",
    Icon: RocketLaunchIcon,
    featured: true,
  },
  {
    title: "Multi-Agent Orchestration System",
    year: "2025",
    description:
      "Built autonomous coordination system using multiple Claude Code instances with a custom file-based message queue and MCP messaging tools, enabling multi-step autonomous workflows: PM Agent → Architect → Reviewer → Programmer → QA → automated GitHub deployment.",
    tags: ["Claude Code", "MCP", "Multi-Agent", "TypeScript"],
    color: "#4169E1",
    bg: "#EEF2FF",
    gradient: "linear-gradient(135deg, #4169E1, #00BCD4)",
    Icon: GroupWorkIcon,
    featured: false,
  },
  {
    title: "Mobile AI Learning App",
    year: "2025",
    description:
      "Built Flutter app using Anthropic API to automate daily technical learning for software engineers, featuring structured content generation and progress tracking.",
    tags: ["Flutter", "Dart", "Anthropic API", "Mobile"],
    color: "#00BCD4",
    bg: "#E0F7FA",
    gradient: "linear-gradient(135deg, #00BCD4, #22C55E)",
    Icon: PhoneIphoneIcon,
    featured: false,
  },
  {
    title: "Fake Review Prediction (Kaggle Competition)",
    year: "2021",
    description:
      "Built an RNN with LSTM neurons in PyTorch to classify fake product reviews. Used CountVectorizer for text preprocessing and tuned hyperparameters across multiple model configurations. Placed 16th out of 105 competitors with 96.5% validation accuracy.",
    tags: ["PyTorch", "LSTM", "Python", "NLP"],
    color: "#FFB800",
    bg: "#FFFBEB",
    gradient: "linear-gradient(135deg, #FFB800, #FF6B6B)",
    Icon: PsychologyIcon,
    featured: false,
  },
  {
    title: "Micro-Bartending Unit",
    year: "2021",
    description:
      "Built an automated drink-mixing device with a team. Created an animated UI in Java and wrote Python scripts to interface with hardware and the Venmo API on a Raspberry Pi.",
    tags: ["Python", "Java", "Raspberry Pi", "Hardware"],
    color: "#E91E63",
    bg: "#FCE4EC",
    gradient: "linear-gradient(135deg, #E91E63, #FF6B6B)",
    Icon: SportsBarIcon,
    featured: false,
  },
];

function ProjectCard({ project }) {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 24px rgba(138, 74, 243, 0.08)",
        overflow: "hidden",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
        "&:hover": {
          boxShadow: `0px 12px 40px ${project.color}20`,
          transform: "translateY(-3px)",
        },
      }}
    >
      {/* Gradient header bar */}
      <Box
        sx={{
          height: 6,
          background: project.gradient,
        }}
      />

      {/* Card content */}
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 2 }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: "12px",
              background: project.gradient,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <project.Icon sx={{ color: "#FFFFFF", fontSize: 22 }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                color: "#1A1A2E",
                lineHeight: 1.3,
                mb: 0.25,
              }}
            >
              {project.title}
            </Typography>
            <Chip
              label={project.year}
              size="small"
              sx={{
                backgroundColor: `${project.color}18`,
                color: project.color,
                fontWeight: 700,
                fontSize: "0.7rem",
                height: 22,
                borderRadius: "6px",
              }}
            />
          </Box>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, lineHeight: 1.7 }}
        >
          {project.description}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                backgroundColor: project.bg,
                color: project.color,
                fontWeight: 600,
                fontSize: "0.7rem",
                height: 22,
                borderRadius: "6px",
                border: `1px solid ${project.color}28`,
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Box sx={{ maxWidth: 860 }}>
      {/* Page header */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="overline"
          sx={{ color: "#4169E1", fontWeight: 700, letterSpacing: "0.12em" }}
        >
          Portfolio
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            color: "#1A1A2E",
            lineHeight: 1.2,
          }}
        >
          Projects
        </Typography>
      </Box>

      {/* Featured project — full width */}
      {featured.length > 0 && (() => {
        const FeaturedIcon = featured[0].Icon;
        return (
        <Box sx={{ mb: 2 }}>
          <Box
            sx={{
              borderRadius: "24px",
              overflow: "hidden",
              background: featured[0].gradient,
              boxShadow: `0px 8px 40px ${featured[0].color}30`,
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: `0px 16px 60px ${featured[0].color}40`,
              },
            }}
          >
            {/* Featured badge */}
            <Box
              sx={{
                px: 3,
                pt: 3,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Chip
                label="⭐ FEATURED"
                size="small"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.25)",
                  color: "#FFFFFF",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  borderRadius: "8px",
                  height: 24,
                }}
              />
              <Chip
                label={featured[0].year}
                size="small"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  borderRadius: "8px",
                  height: 24,
                }}
              />
            </Box>

            <Box sx={{ p: 3, pt: 2 }}>
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: "14px",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <FeaturedIcon sx={{ color: "#FFFFFF", fontSize: 26 }} />
              </Box>

              <Typography
                variant="h5"
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  mb: 1.5,
                  lineHeight: 1.3,
                }}
              >
                {featured[0].title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255,255,255,0.85)",
                  mb: 2.5,
                  lineHeight: 1.7,
                  maxWidth: 600,
                }}
              >
                {featured[0].description}
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {featured[0].tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.2)",
                      color: "#FFFFFF",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      borderRadius: "8px",
                      border: "1px solid rgba(255,255,255,0.25)",
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        );
      })()}

      {/* Rest of projects — 2-col grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 2,
        }}
      >
        {rest.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </Box>
    </Box>
  );
}
