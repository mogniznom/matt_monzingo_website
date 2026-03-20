import { Typography, Box, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const contacts = [
  {
    label: "Email",
    value: "matthew.monzingo@gmail.com",
    href: "mailto:matthew.monzingo@gmail.com",
    icon: EmailIcon,
    color: "#E91E63",
    bg: "#FCE4EC",
    gradient: "linear-gradient(135deg, #E91E63, #FF6B6B)",
  },
  {
    label: "GitHub",
    value: "github.com/mogniznom",
    href: "https://github.com/mogniznom",
    icon: GitHubIcon,
    color: "#1A1A2E",
    bg: "#F3F4F6",
    gradient: "linear-gradient(135deg, #1A1A2E, #4169E1)",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/matthewmonzingo",
    href: "https://www.linkedin.com/in/matthewmonzingo/",
    icon: LinkedInIcon,
    color: "#0077B5",
    bg: "#E8F4FD",
    gradient: "linear-gradient(135deg, #0077B5, #00BCD4)",
  },
];

export default function Contact() {
  return (
    <Box sx={{ maxWidth: 860 }}>
      {/* Page header */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="overline"
          sx={{ color: "#E91E63", fontWeight: 700, letterSpacing: "0.12em" }}
        >
          Get in touch
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
          Contact
        </Typography>
      </Box>

      {/* Hero CTA */}
      <Box
        sx={{
          borderRadius: "24px",
          background: "linear-gradient(135deg, #8A4AF3 0%, #E81E63 100%)",
          p: { xs: 3, sm: 4 },
          mb: 3,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: -40,
            right: -40,
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            color: "#FFFFFF",
            mb: 1,
            position: "relative",
            zIndex: 1,
          }}
        >
          Let's build something together
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.8)",
            maxWidth: 480,
            lineHeight: 1.7,
            position: "relative",
            zIndex: 1,
          }}
        >
          Whether it's agentic AI, production systems, or something entirely new —
          I'd love to connect and explore what we can create.
        </Typography>
      </Box>

      {/* Contact cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
          gap: 2,
        }}
      >
        {contacts.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{ display: "block" }}
          >
            <Box
              sx={{
                borderRadius: "20px",
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 4px 24px rgba(138, 74, 243, 0.08)",
                overflow: "hidden",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
                cursor: "pointer",
                "&:hover": {
                  boxShadow: `0px 12px 40px ${c.color}20`,
                  transform: "translateY(-3px)",
                  "& .arrow-icon": {
                    opacity: 1,
                    transform: "translate(2px, -2px)",
                  },
                },
              }}
            >
              {/* Top gradient bar */}
              <Box sx={{ height: 4, background: c.gradient }} />

              <Box sx={{ p: 2.5 }}>
                {/* Icon */}
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "12px",
                    background: c.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <c.icon sx={{ color: "#FFFFFF", fontSize: 22 }} />
                </Box>

                {/* Label + arrow */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 0.5,
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{
                      color: "#9CA3AF",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      fontWeight: 700,
                    }}
                  >
                    {c.label}
                  </Typography>
                  <ArrowOutwardIcon
                    className="arrow-icon"
                    sx={{
                      fontSize: 16,
                      color: c.color,
                      opacity: 0,
                      transition: "all 0.2s ease",
                    }}
                  />
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#1A1A2E",
                    fontWeight: 600,
                    wordBreak: "break-all",
                    lineHeight: 1.4,
                  }}
                >
                  {c.value}
                </Typography>
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
