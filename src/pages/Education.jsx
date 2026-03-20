import { Box, Chip, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const education = [
  {
    degree: "Bachelor of Science",
    fields: "Computer Science & Data Science",
    concentration: "Machine Intelligence",
    school: "Purdue University",
    location: "West Lafayette, IN",
    gpa: "3.5",
    dates: "December 2022",
    highlights: [
      "Concentration in Machine Intelligence",
      "Undergraduate Research in Graph ML",
      "Focus on AI/ML coursework",
    ],
  },
];

export default function Education() {
  return (
    <Box>
      {/* Page header */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="caption"
          sx={{
            color: "#5B5FC7",
            display: "block",
            mb: 2,
            fontSize: "0.7rem",
            letterSpacing: "0.12em",
          }}
        >
          ACADEMIC BACKGROUND
        </Typography>
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: "2.75rem", md: "4rem" },
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            color: "#111111",
          }}
        >
          Education
        </Typography>
      </Box>

      {education.map((edu, i) => (
        <Box
          key={i}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
          }}
        >
          {/* Main card */}
          <Box
            sx={{
              p: { xs: 3, md: 4 },
              bgcolor: "#F0F0FA",
              border: "1px solid #D4D4F7",
              borderRadius: 3,
              gridColumn: { md: "1 / -1" },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "auto 1fr" },
              gap: 3,
              alignItems: "start",
            }}
          >
            {/* School icon */}
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: 2,
                bgcolor: "#5B5FC7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <SchoolIcon sx={{ color: "#FFFFFF", fontSize: 28 }} />
            </Box>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 1,
                  mb: 1,
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    sx={{
                      letterSpacing: "-0.02em",
                      color: "#111111",
                      fontSize: { xs: "1.15rem", md: "1.3rem" },
                    }}
                  >
                    {edu.school}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#6B7280", mt: 0.25 }}
                  >
                    {edu.location}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: { xs: "left", sm: "right" } }}>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "0.82rem", color: "#6B7280" }}
                  >
                    {edu.dates}
                  </Typography>
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.75,
                      bgcolor: "rgba(255,255,255,0.7)",
                      border: "1px solid #D4D4F7",
                      borderRadius: "6px",
                      px: 1.5,
                      py: 0.4,
                      mt: 0.5,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: "0.7rem",
                        color: "#5B5FC7",
                        fontWeight: 600,
                        letterSpacing: "0.02em",
                      }}
                    >
                      GPA {edu.gpa}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#374151",
                  mb: 0.25,
                }}
              >
                {edu.degree} in {edu.fields}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#5B5FC7", fontWeight: 500, mb: 2 }}
              >
                Concentration: {edu.concentration}
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {edu.highlights.map((h) => (
                  <Chip
                    key={h}
                    label={h}
                    size="small"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.7)",
                      border: "1px solid #D4D4F7",
                      color: "#374151",
                      fontSize: "0.75rem",
                      borderRadius: "8px",
                      height: 26,
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      ))}

      {/* Research callout */}
      <Box
        sx={{
          mt: 3,
          p: { xs: 3, md: 4 },
          bgcolor: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: 3,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            display: "block",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            color: "#9CA3AF",
            mb: 1.5,
          }}
        >
          UNDERGRADUATE RESEARCH
        </Typography>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ letterSpacing: "-0.01em", color: "#111111", mb: 1 }}
        >
          Graph ML Research — SEAL Link Prediction
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
          Worked on improving training time for the SEAL link prediction method on graph
          datasets. Achieved a 12% runtime reduction by implementing a producer-consumer
          queue to optimize GPU data transfer.
        </Typography>
      </Box>
    </Box>
  );
}
