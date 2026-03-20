import { Box, Chip, Typography } from "@mui/material";

const skillCategories = [
  {
    label: "Agentic AI",
    accent: "#5B5FC7",
    bg: "#F0F0FA",
    border: "#D4D4F7",
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
    accent: "#E07A5F",
    bg: "#FDF3F0",
    border: "#F2C4B4",
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
    accent: "#0891B2",
    bg: "#F0FAFB",
    border: "#A5D8E0",
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
    accent: "#059669",
    bg: "#F0FAF6",
    border: "#A5D8C0",
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
          EXPERTISE
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
          Skills
        </Typography>
      </Box>

      {/* Bento grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 2,
        }}
      >
        {skillCategories.map((cat, i) => (
          <Box
            key={cat.label}
            sx={{
              p: { xs: 3, md: 4 },
              bgcolor: cat.bg,
              border: `1px solid ${cat.border}`,
              borderRadius: 3,
              /* First card spans full width on desktop */
              gridColumn: i === 0 ? { md: "1 / -1" } : "auto",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
              },
            }}
          >
            {/* Category header */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
                pb: 2,
                borderBottom: `1px solid ${cat.border}`,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  color: cat.accent,
                  fontWeight: 600,
                }}
              >
                {cat.label.toUpperCase()}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: cat.accent,
                  letterSpacing: "-0.03em",
                  opacity: 0.3,
                  lineHeight: 1,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </Typography>
            </Box>

            {/* Skills */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {cat.skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  size="small"
                  sx={{
                    bgcolor: "rgba(255,255,255,0.7)",
                    border: `1px solid ${cat.border}`,
                    color: "#374151",
                    fontWeight: 500,
                    fontSize: "0.78rem",
                    borderRadius: "8px",
                    height: 28,
                    transition: "all 0.15s ease",
                    "&:hover": {
                      bgcolor: "#FFFFFF",
                      color: cat.accent,
                      borderColor: cat.accent,
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Model callout */}
      <Box
        sx={{
          mt: 4,
          p: { xs: 3, md: 4 },
          bgcolor: "#111111",
          borderRadius: 3,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 2,
        }}
      >
        <Box>
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255,255,255,0.4)",
              display: "block",
              mb: 0.5,
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
            }}
          >
            CURRENTLY RUNNING ON
          </Typography>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ color: "#FFFFFF", letterSpacing: "-0.02em" }}
          >
            Claude Sonnet 4 · Amazon Bedrock
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {["Bedrock AgentCore", "Strands SDK", "6 Agents"].map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                bgcolor: "rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.15)",
                fontSize: "0.75rem",
                borderRadius: "8px",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
