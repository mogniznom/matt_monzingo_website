import { Card, CardContent, Typography, Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const education = [
  {
    degree: "Bachelor of Science in Computer Science and Data Science",
    detail: "Concentration: Machine Intelligence | GPA: 3.5",
    school: "Purdue University \u2014 West Lafayette, IN",
    dates: "December 2022",
  },
];

export default function Education() {
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
          <Typography variant="h5">Education</Typography>
        </Box>

        {education.map((edu, i) => (
          <Box key={i} sx={{ display: "flex", gap: 2 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                bgcolor: "rgba(124, 77, 255, 0.08)",
                border: "1px solid rgba(124, 77, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <SchoolIcon sx={{ color: "#7c4dff" }} />
            </Box>
            <Box>
              <Typography variant="subtitle1">{edu.degree}</Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#7c4dff",
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "0.75rem",
                }}
              >
                {edu.detail}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {edu.school}
              </Typography>
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
