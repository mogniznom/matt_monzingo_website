import { Typography, Chip, Box } from "@mui/material";

const skillCategories = [
  {
    label: "Agentic AI",
    color: "#8B7BF7",
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
    color: "#6EC6D8",
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
    color: "#7C5CFC",
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
    color: "#34D399",
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
        <Typography variant="h5">Skills</Typography>
      </Box>

      {/* Bento grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
          gap: 2,
        }}
      >
        {skillCategories.map((cat) => (
          <Box
            key={cat.label}
            sx={{
              p: 3,
              borderRadius: 2,
              bgcolor: "#1C1C28",
              border: "1px solid rgba(42,42,60,0.8)",
              transition: "border-color 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                borderColor: `${cat.color}44`,
                boxShadow: `0 0 24px ${cat.color}0A`,
              },
            }}
          >
            {/* Category label */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, mb: 2 }}>
              <Box
                sx={{
                  width: 3,
                  height: 14,
                  borderRadius: 0.5,
                  bgcolor: cat.color,
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "0.7rem",
                  color: cat.color,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {cat.label}
              </Typography>
            </Box>

            {/* Skills */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
              {cat.skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  size="small"
                  variant="outlined"
                  sx={{ fontWeight: 500, fontSize: "0.75rem" }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
