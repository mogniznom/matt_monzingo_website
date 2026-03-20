import { Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const contacts = [
  {
    label: "Email",
    value: "matthew.monzingo@gmail.com",
    href: "mailto:matthew.monzingo@gmail.com",
    icon: <EmailIcon />,
    accent: "#8B7BF7",
  },
  {
    label: "GitHub",
    value: "github.com/mogniznom",
    href: "https://github.com/mogniznom",
    icon: <GitHubIcon />,
    accent: "#6EC6D8",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/matthewmonzingo",
    href: "https://www.linkedin.com/in/matthewmonzingo/",
    icon: <LinkedInIcon />,
    accent: "#60A5FA",
  },
];

export default function Contact() {
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
        <Typography variant="h5">Contact</Typography>
      </Box>

      {/* Intro */}
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4, lineHeight: 1.85, maxWidth: 480 }}
      >
        Open to conversations about agentic AI, interesting engineering
        challenges, or anything in between.
      </Typography>

      {/* Link buttons */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {contacts.map((c) => (
          <Box
            key={c.label}
            component="a"
            href={c.href}
            target={c.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2.5,
              p: 3,
              borderRadius: 2,
              bgcolor: "#1C1C28",
              border: "1px solid rgba(42,42,60,0.8)",
              textDecoration: "none",
              transition: "all 0.2s ease",
              cursor: "pointer",
              "&:hover": {
                borderColor: `${c.accent}55`,
                bgcolor: "#222230",
                boxShadow: `0 4px 28px rgba(0,0,0,0.3), 0 0 0 1px ${c.accent}22`,
                transform: "translateX(5px)",
                "& .contact-icon": { color: c.accent },
                "& .contact-arrow": {
                  opacity: 1,
                  transform: "translateX(0px)",
                },
              },
            }}
          >
            {/* Icon */}
            <Box
              className="contact-icon"
              sx={{
                color: "#5A5A6E",
                transition: "color 0.2s ease",
                display: "flex",
                flexShrink: 0,
              }}
            >
              {c.icon}
            </Box>

            {/* Text */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                sx={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "0.65rem",
                  color: "#5A5A6E",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  mb: 0.3,
                }}
              >
                {c.label}
              </Typography>
              <Typography
                sx={{
                  color: "#E8E8ED",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {c.value}
              </Typography>
            </Box>

            {/* Arrow */}
            <Box
              className="contact-arrow"
              sx={{
                color: "#5A5A6E",
                opacity: 0,
                transform: "translateX(-6px)",
                transition: "all 0.2s ease",
                display: "flex",
                flexShrink: 0,
              }}
            >
              <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
