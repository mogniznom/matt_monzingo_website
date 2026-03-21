import { Box, Chip, Typography } from "@mui/material";

const CATEGORY_STYLES = [
  {
    accent: "#9D4EDD",
    light: "rgba(157, 78, 221, 0.10)",
    border: "rgba(157, 78, 221, 0.25)",
    chipBg: "rgba(157, 78, 221, 0.12)",
    chipBorder: "rgba(157, 78, 221, 0.35)",
    chipColor: "#C77DFF",
    strip: "linear-gradient(90deg, #9D4EDD, transparent)",
  },
  {
    accent: "#00D4FF",
    light: "rgba(0, 212, 255, 0.08)",
    border: "rgba(0, 212, 255, 0.22)",
    chipBg: "rgba(0, 212, 255, 0.10)",
    chipBorder: "rgba(0, 212, 255, 0.32)",
    chipColor: "#67E8F9",
    strip: "linear-gradient(90deg, #00D4FF, transparent)",
  },
  {
    accent: "#4361EE",
    light: "rgba(67, 97, 238, 0.08)",
    border: "rgba(67, 97, 238, 0.22)",
    chipBg: "rgba(67, 97, 238, 0.10)",
    chipBorder: "rgba(67, 97, 238, 0.32)",
    chipColor: "#93A8F4",
    strip: "linear-gradient(90deg, #4361EE, transparent)",
  },
  {
    accent: "#F72585",
    light: "rgba(247, 37, 133, 0.08)",
    border: "rgba(247, 37, 133, 0.22)",
    chipBg: "rgba(247, 37, 133, 0.10)",
    chipBorder: "rgba(247, 37, 133, 0.32)",
    chipColor: "#F9A8D4",
    strip: "linear-gradient(90deg, #F72585, transparent)",
  },
];

const skillCategories = [
  {
    label: "Agentic AI",
    skills: [
      "Strands Agents SDK",
      "Bedrock AgentCore",
      "Multi-Agent Orchestration",
      "LangChain",
      "LangGraph",
      "RAG Pipelines",
      "Custom Tool Development",
      "Structured Output Parsing",
      "Streaming (SSE)",
      "MCP Servers",
    ],
  },
  {
    label: "Languages & Frameworks",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Java",
      "React",
      "Zod",
    ],
  },
  {
    label: "Infrastructure & Cloud",
    skills: [
      "AWS Bedrock",
      "Lambda",
      "Step Functions",
      "DynamoDB",
      "API Gateway",
      "ECS",
      "CDK",
      "SNS/SQS",
      "Kubernetes",
      "Distributed Systems",
      "Event-Driven Architecture",
    ],
  },
  {
    label: "Testing & Quality",
    skills: [
      "Integration Test Harnesses",
      "Mocked LLM Testing",
      "Pipeline Approval Gates",
      "Agent Evaluation Frameworks",
    ],
  },
];

export default function Skills() {
  return (
    <Box>
      {/* Section heading */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="overline"
          sx={{ color: "#F72585", letterSpacing: "0.15em", fontSize: "0.7rem" }}
        >
          Toolkit
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
          Skills
        </Typography>
      </Box>

      {/* Bento grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 2.5,
        }}
      >
        {skillCategories.map((cat, i) => {
          const s = CATEGORY_STYLES[i % CATEGORY_STYLES.length];
          return (
            <Box
              key={cat.label}
              sx={{
                background: "rgba(255, 255, 255, 0.04)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.09)",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 4px 30px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.07)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: `0 12px 48px rgba(0,0,0,0.30), 0 0 0 1px ${s.border}`,
                },
              }}
            >
              {/* Accent top strip */}
              <Box sx={{ height: 3, background: s.strip }} />

              <Box sx={{ p: 3 }}>
                {/* Category label */}
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 2,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "8px",
                    background: s.light,
                    border: `1px solid ${s.border}`,
                  }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      bgcolor: s.accent,
                      boxShadow: `0 0 8px ${s.accent}`,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: s.accent,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {cat.label}
                  </Typography>
                </Box>

                {/* Skill chips */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.875 }}>
                  {cat.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{
                        fontSize: "0.78rem",
                        height: 28,
                        background: s.chipBg,
                        border: `1px solid ${s.chipBorder}`,
                        color: s.chipColor,
                        fontWeight: 500,
                        backdropFilter: "blur(8px)",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          background: s.light,
                          boxShadow: `0 0 12px ${s.accent}40`,
                          transform: "translateY(-1px)",
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
