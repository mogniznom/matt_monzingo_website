import { Typography, Box, Chip } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

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
    <Box sx={{ maxWidth: 860 }}>
      {/* Page header */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="overline"
          sx={{ color: "#00BCD4", fontWeight: 700, letterSpacing: "0.12em" }}
        >
          Background
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            color: "#1A1A2E",
            lineHeight: 1.2,
          }}
        >
          Education
        </Typography>
      </Box>

      {education.map((edu, i) => (
        <Box key={i}>
          {/* Main education card */}
          <Box
            sx={{
              borderRadius: "24px",
              overflow: "hidden",
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 4px 24px rgba(0, 188, 212, 0.12)",
              transition: "box-shadow 0.2s ease, transform 0.2s ease",
              mb: 2,
              "&:hover": {
                boxShadow: "0px 12px 40px rgba(0, 188, 212, 0.2)",
                transform: "translateY(-2px)",
              },
            }}
          >
            {/* Teal gradient header */}
            <Box
              sx={{
                background: "linear-gradient(135deg, #00BCD4 0%, #4169E1 100%)",
                px: 3,
                py: 3,
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -30,
                  right: -30,
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                },
              }}
            >
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: "14px",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <SchoolIcon sx={{ color: "#FFFFFF", fontSize: 26 }} />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  mb: 0.5,
                  lineHeight: 1.3,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {edu.school}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.75)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {edu.location} · Graduated {edu.dates}
              </Typography>
            </Box>

            {/* Card body */}
            <Box sx={{ p: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  color: "#1A1A2E",
                  mb: 0.5,
                }}
              >
                {edu.degree}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#6B7280", mb: 2 }}
              >
                {edu.detail}
              </Typography>

              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Chip
                  icon={<EmojiEventsIcon sx={{ fontSize: "14px !important" }} />}
                  label={edu.gpa}
                  size="small"
                  sx={{
                    backgroundColor: "#FFFBEB",
                    color: "#B45309",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    borderRadius: "8px",
                    border: "1px solid #FFB80028",
                  }}
                />
                <Chip
                  icon={<AutoAwesomeIcon sx={{ fontSize: "14px !important" }} />}
                  label="Machine Intelligence"
                  size="small"
                  sx={{
                    backgroundColor: "#E0F7FA",
                    color: "#00838F",
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    borderRadius: "8px",
                    border: "1px solid #00BCD428",
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Bento mini-cards row */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
            }}
          >
            <Box
              sx={{
                borderRadius: "20px",
                backgroundColor: "#E0F7FA",
                p: 2.5,
                transition: "transform 0.2s ease",
                "&:hover": { transform: "translateY(-2px)" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  color: "#00BCD4",
                  lineHeight: 1,
                  mb: 0.5,
                }}
              >
                CS + DS
              </Typography>
              <Typography variant="body2" sx={{ color: "#6B7280" }}>
                Dual major — Computer Science & Data Science
              </Typography>
            </Box>
            <Box
              sx={{
                borderRadius: "20px",
                backgroundColor: "#EEF2FF",
                p: 2.5,
                transition: "transform 0.2s ease",
                "&:hover": { transform: "translateY(-2px)" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  color: "#4169E1",
                  lineHeight: 1,
                  mb: 0.5,
                }}
              >
                3.5
              </Typography>
              <Typography variant="body2" sx={{ color: "#6B7280" }}>
                GPA — top academic performance
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
