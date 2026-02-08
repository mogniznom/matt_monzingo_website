import { Card, CardContent, Typography } from "@mui/material";

export default function About() {
  return (
    <Card elevation={1}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          About
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Passionate software engineer with experience building modern web
          applications and scalable systems. Committed to writing clean,
          maintainable code and continuously learning new technologies.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Focused on delivering high-quality solutions that make a real impact.
          Enjoys collaborating with cross-functional teams and tackling complex
          technical challenges.
        </Typography>
      </CardContent>
    </Card>
  );
}
