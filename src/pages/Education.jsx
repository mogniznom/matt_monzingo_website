import { Box, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const education = [
  {
    degree: "Bachelor of Science in Computer Science and Data Science",
    detail: "Concentration: Machine Intelligence",
    gpa: "3.5 GPA",
    school: "Purdue University",
    location: "West Lafayette, IN",
    dates: "December 2022",
  },
];

export default function Education() {
  return (
    <Box>
      {/* Section heading */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="overline"
          sx={{ color: "#00D4FF", letterSpacing: "0.15em", fontSize: "0.7rem" }}
        >
          Academic Background
        </Typography>
        <Typography
          variant="h4"
          sx={{
            background: "linear-gradient(135deg, #F1F5F9 30%, rgba(241,245,249,0.5))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Education
        </Typography>
      </Box>

      {education.map((edu, i) => (
        <Box
          key={i}
          sx={{
            background: "rgba(255, 255, 255, 0.04)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255, 255, 255, 0.09)",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 4px 30px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.07)",
          }}
        >
          {/* Cyan top strip */}
          <Box
            sx={{
              height: 3,
              background: "linear-gradient(90deg, #00D4FF, #9D4EDD, transparent)",
            }}
          />

          <Box sx={{ p: { xs: 3, md: 5 } }}>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "flex-start",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "16px",
                  background: "rgba(0, 212, 255, 0.10)",
                  border: "1px solid rgba(0, 212, 255, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 0 24px rgba(0, 212, 255, 0.15)",
                }}
              >
                <SchoolIcon sx={{ color: "#00D4FF", fontSize: 32 }} />
              </Box>

              {/* Content */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#F1F5F9",
                    mb: 1,
                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                  }}
                >
                  {edu.degree}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#00D4FF",
                    fontWeight: 500,
                    mb: 0.5,
                  }}
                >
                  {edu.detail}
                </Typography>

                <Box
                  sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.75,
                      px: 1.75,
                      py: 0.5,
                      borderRadius: "40px",
                      background: "rgba(0, 212, 255, 0.10)",
                      border: "1px solid rgba(0, 212, 255, 0.25)",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#67E8F9",
                        fontWeight: 600,
                        fontSize: "0.78rem",
                      }}
                    >
                      {edu.gpa}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.75,
                      px: 1.75,
                      py: 0.5,
                      borderRadius: "40px",
                      background: "rgba(157, 78, 221, 0.10)",
                      border: "1px solid rgba(157, 78, 221, 0.25)",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#C77DFF",
                        fontWeight: 600,
                        fontSize: "0.78rem",
                      }}
                    >
                      {edu.dates}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(241,245,249,0.65)",
                    fontSize: "0.95rem",
                  }}
                >
                  {edu.school} · {edu.location}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
