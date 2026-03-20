import { Typography, Chip, Box } from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";
import BugReportIcon from "@mui/icons-material/BugReport";

const skillCategories = [
  {
    label: "Agentic AI",
    color: "#8A4AF3",
    bg: "#EDE7FF",
    Icon: PsychologyIcon,
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
    color: "#FF6B6B",
    bg: "#FFF0F0",
    Icon: CodeIcon,
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
    color: "#4169E1",
    bg: "#EEF2FF",
    Icon: CloudIcon,
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
    color: "#22C55E",
    bg: "#F0FDF4",
    Icon: BugReportIcon,
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
    <Box sx={{ maxWidth: 860 }}>
      {/* Page header */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="overline"
          sx={{ color: "#22C55E", fontWeight: 700, letterSpacing: "0.12em" }}
        >
          Expertise
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
          Skills
        </Typography>
      </Box>

      {/* Skills bento grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 2,
        }}
      >
        {skillCategories.map((cat) => (
          <Box
            key={cat.label}
            sx={{
              borderRadius: "20px",
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 4px 24px rgba(138, 74, 243, 0.08)",
              overflow: "hidden",
              transition: "box-shadow 0.2s ease, transform 0.2s ease",
              "&:hover": {
                boxShadow: `0px 8px 40px ${cat.color}1A`,
                transform: "translateY(-2px)",
              },
            }}
          >
            {/* Category header */}
            <Box
              sx={{
                backgroundColor: cat.bg,
                px: 3,
                py: 2,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  backgroundColor: cat.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <cat.Icon sx={{ color: "#FFFFFF", fontSize: 18 }} />
              </Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  color: cat.color,
                }}
              >
                {cat.label}
              </Typography>
            </Box>

            {/* Skills chips */}
            <Box
              sx={{
                px: 2.5,
                py: 2,
                display: "flex",
                flexWrap: "wrap",
                gap: 0.75,
              }}
            >
              {cat.skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  size="small"
                  sx={{
                    backgroundColor: `${cat.color}12`,
                    color: cat.color,
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    borderRadius: "8px",
                    border: `1px solid ${cat.color}28`,
                    "&:hover": {
                      backgroundColor: `${cat.color}22`,
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
