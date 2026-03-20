import { Card, CardContent, Typography, Box } from "@mui/material";

export default function About() {
  return (
    <Card elevation={0}>
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
          <Box
            sx={{
              width: 4,
              height: 28,
              borderRadius: 1,
              background: "linear-gradient(180deg, #7C5CFC, #8B7BF7)",
            }}
          />
          <Typography variant="h5">About</Typography>
        </Box>
        <Typography variant="body1" color="text.secondary" paragraph>
          AI/ML Engineer specializing in production agentic systems at enterprise
          scale. I architected Newton AI — a fully autonomous marketing platform
          built on the Strands Agents SDK and Amazon Bedrock AgentCore, running
          Claude Sonnet 4 across 6 specialized agents. The system drives 10,000+
          annual experiments across 90+ WW Prime locations, coordinating
          everything from creative generation to performance analysis without
          human intervention.
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          My focus is on the hard problems in agentic AI: reliable multi-agent
          orchestration, RAG pipelines that hold up under production load, and
          multi-level testing infrastructure that catches regressions before they
          reach live traffic. I care deeply about building systems that are not
          just technically sound but operationally trustworthy — agents that do
          what they promise at scale.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          When I'm not wiring up agent toolchains or tuning evaluation
          frameworks, I'm exploring what comes next in the agentic stack —
          MCP servers, structured output parsing, and the emerging patterns
          that will define how autonomous systems are built in the years ahead.
        </Typography>
      </CardContent>
    </Card>
  );
}
