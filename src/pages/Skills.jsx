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
    <Card elevation={1}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Skills
        </Typography>

        {skillCategories.map((cat) => (
          <Box key={cat.label} sx={{ mb: 3, "&:last-child": { mb: 0 } }}>
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{ mb: 1 }}
            >
              {cat.label}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {cat.skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  color="primary"
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
