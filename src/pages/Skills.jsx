import { Card, CardContent, Typography, Chip, Box } from "@mui/material";

const skillCategories = [
  {
    label: "AI/ML & Development",
    skills: [
      "LangChain",
      "LangGraph",
      "AWS Bedrock",
      "Multi-Agent Orchestration",
      "PyTorch",
      "Python",
      "TypeScript",
      "JavaScript",
      "Java",
      "System Architecture",
    ],
  },
  {
    label: "Infrastructure & Data",
    skills: [
      "AWS Lambda",
      "Step Functions",
      "DynamoDB",
      "SNS/SQS",
      "ECS",
      "CDK",
      "Distributed Systems",
      "Producer-Consumer Patterns",
      "NumPy",
      "Pandas",
      "SQL",
      "NoSQL",
      "A/B Testing",
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
              background: "linear-gradient(180deg, #00e5ff, #7c4dff)",
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
                color: "#94a3b8",
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
