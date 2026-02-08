import { Card, CardContent, Typography, Chip, Box } from "@mui/material";

const skills = [
  "JavaScript",
  "Python",
  "HTML & CSS",
  "React",
  "Node.js",
  "Git",
  "SQL",
  "REST APIs",
];

export default function Skills() {
  return (
    <Card elevation={1}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Skills
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              color="primary"
              variant="outlined"
              sx={{ fontWeight: 500 }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
