import { Box, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const education = [
  {
    degree: "Bachelor of Science in Computer Science and Data Science",
    detail: "Concentration: Machine Intelligence | GPA: 3.5",
    school: "Purdue University — West Lafayette, IN",
    dates: "December 2022",
  },
];

export default function Education() {
  return (
    <Box>
      {/* Section header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4 }}>
        <Box
          sx={{
            width: 4,
            height: 28,
            borderRadius: 1,
            background: "linear-gradient(180deg, #7C5CFC, #8B7BF7)",
          }}
        />
        <Typography variant="h5">Education</Typography>
      </Box>

      {education.map((edu, i) => (
        <Box
          key={i}
          sx={{
            p: 3,
            borderRadius: 2,
            bgcolor: "#1C1C28",
            border: "1px solid rgba(42,42,60,0.8)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: "linear-gradient(90deg, #7C5CFC, #8B7BF7, #6EC6D8)",
            },
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
            {/* Icon */}
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: 1.5,
                bgcolor: "rgba(124,92,252,0.1)",
                border: "1px solid rgba(124,92,252,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                mt: 0.25,
              }}
            >
              <SchoolIcon sx={{ color: "#7C5CFC", fontSize: 20 }} />
            </Box>

            {/* Info */}
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "#E8E8ED",
                  lineHeight: 1.3,
                  mb: 0.5,
                }}
              >
                {edu.degree}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "0.72rem",
                  color: "#7C5CFC",
                  mb: 0.75,
                }}
              >
                {edu.detail}
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#9898A6", mb: 0.5 }}
              >
                {edu.school}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, mt: 0.5 }}>
                <Box
                  sx={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    bgcolor: "#5A5A6E",
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: "0.65rem",
                    color: "#5A5A6E",
                  }}
                >
                  {edu.dates}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
