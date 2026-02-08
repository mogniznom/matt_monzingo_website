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
              background: "linear-gradient(180deg, #00e5ff, #7c4dff)",
            }}
          />
          <Typography variant="h5">About</Typography>
        </Box>
        <Typography variant="body1" color="text.secondary" paragraph>
          AI/ML Engineer specializing in autonomous agent systems at enterprise
          scale. Delivered AI-first marketing platform from scratch using Python
          and LangChain, enabling 10,000+ autonomous experiments across 90+
          locations and 20+ marketplaces globally.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Experienced in agentic decision-making, distributed systems, and
          cost-optimized AI architectures.
        </Typography>
      </CardContent>
    </Card>
  );
}
