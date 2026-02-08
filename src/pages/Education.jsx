import { Card, CardContent, Typography, Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University Name",
    dates: "2017 – 2021",
  },
];

export default function Education() {
  return (
    <Card elevation={1}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Education
        </Typography>

        {education.map((edu, i) => (
          <Box key={i} sx={{ display: "flex", gap: 2 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                bgcolor: "grey.100",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <SchoolIcon color="primary" />
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight={600}>
                {edu.degree}
              </Typography>
              <Typography variant="body2">{edu.school}</Typography>
              <Typography variant="body2" color="text.secondary">
                {edu.dates}
              </Typography>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
