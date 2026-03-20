import { Box, Link, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const contacts = [
  {
    label: "Email",
    value: "matthew.monzingo@gmail.com",
    href: "mailto:matthew.monzingo@gmail.com",
    icon: EmailIcon,
    accent: "#9D4EDD",
    bg: "rgba(157,78,221,0.08)",
    border: "rgba(157,78,221,0.22)",
    glow: "rgba(157,78,221,0.30)",
  },
  {
    label: "GitHub",
    value: "github.com/mogniznom",
    href: "https://github.com/mogniznom",
    icon: GitHubIcon,
    accent: "#00D4FF",
    bg: "rgba(0,212,255,0.08)",
    border: "rgba(0,212,255,0.22)",
    glow: "rgba(0,212,255,0.28)",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/matthewmonzingo",
    href: "https://www.linkedin.com/in/matthewmonzingo/",
    icon: LinkedInIcon,
    accent: "#4361EE",
    bg: "rgba(67,97,238,0.08)",
    border: "rgba(67,97,238,0.22)",
    glow: "rgba(67,97,238,0.28)",
  },
];

export default function Contact() {
  return (
    <Box>
      {/* Section heading */}
      <Box sx={{ mb: 2 }}>
        <Typography
          variant="overline"
          sx={{ color: "#9D4EDD", letterSpacing: "0.15em", fontSize: "0.7rem" }}
        >
          Get In Touch
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
          Contact
        </Typography>
      </Box>

      <Typography
        variant="body1"
        sx={{ color: "rgba(241,245,249,0.60)", mb: 4, maxWidth: 520 }}
      >
        Open to interesting conversations about agentic AI, multi-agent systems,
        or anything at the frontier of autonomous software.
      </Typography>

      {/* Contact cards */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {contacts.map((c) => {
          const Icon = c.icon;
          return (
            <Link
              key={c.label}
              href={c.href}
              target={c.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              underline="none"
              sx={{
                display: "block",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 4px 30px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.07)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px) scale(1.005)",
                  borderColor: c.border,
                  boxShadow: `0 12px 48px rgba(0,0,0,0.28), 0 0 24px ${c.glow}`,
                  "& .contact-icon-box": {
                    boxShadow: `0 0 24px ${c.glow}`,
                  },
                },
              }}
            >
              {/* Gradient strip */}
              <Box
                sx={{
                  height: 2,
                  background: `linear-gradient(90deg, ${c.accent}, transparent)`,
                }}
              />

              <Box
                sx={{
                  p: { xs: 2.5, md: 3 },
                  display: "flex",
                  alignItems: "center",
                  gap: 2.5,
                }}
              >
                {/* Icon */}
                <Box
                  className="contact-icon-box"
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: "14px",
                    background: c.bg,
                    border: `1px solid ${c.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "box-shadow 0.3s ease",
                  }}
                >
                  <Icon sx={{ color: c.accent, fontSize: 24 }} />
                </Box>

                {/* Text */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: c.accent,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      mb: 0.25,
                    }}
                  >
                    {c.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      color: "#F1F5F9",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {c.value}
                  </Typography>
                </Box>

                {/* Arrow */}
                <Box sx={{ ml: "auto", color: "rgba(241,245,249,0.25)", fontSize: "1.2rem" }}>
                  →
                </Box>
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}
