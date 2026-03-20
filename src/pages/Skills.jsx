import { Card, CardContent, Typography, Chip, Box } from "@mui/material";

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
          <Typography variant="h5">Skills</Typography>
        </Box>

        {skillCategories.map((cat) => (
          <Box key={cat.label} sx={{ mb: 3, "&:last-child": { mb: 0 } }}>
            <Typography
              variant="subtitle2"
              sx={{
                mb: 1.5,
                color: "#9898A6",
                fontFamily: "'Fira Code', monospace",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {cat.label}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {cat.skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  variant="outlined"
                  sx={{ fontWeight: 500 }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
