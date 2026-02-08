import { Card, CardContent, Typography } from "@mui/material";

export default function About() {
  return (
    <Card elevation={1}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          About
        </Typography>
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
