import { Box, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const contacts = [
  {
    label: "Email",
    value: "matthew.monzingo@gmail.com",
    href: "mailto:matthew.monzingo@gmail.com",
    description: "Best for serious inquiries",
  },
  {
    label: "GitHub",
    value: "github.com/mogniznom",
    href: "https://github.com/mogniznom",
    description: "Code, projects & contributions",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/matthewmonzingo",
    href: "https://www.linkedin.com/in/matthewmonzingo/",
    description: "Professional network",
  },
];

export default function Contact() {
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
          GET IN TOUCH
        </Typography>
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: "2.75rem", md: "4rem" },
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            color: "#111111",
            mb: 3,
          }}
        >
          Contact
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 480, fontSize: "1.05rem", lineHeight: 1.75 }}
        >
          Interested in working together or discussing agentic AI? I'm always
          open to thoughtful conversations.
        </Typography>
      </Box>

      {/* Contact links */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {contacts.map((contact, i) => (
          <Box
            key={contact.label}
            component="a"
            href={contact.href}
            target={contact.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: { xs: 3, md: 4 },
              bgcolor: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 3,
              textDecoration: "none",
              color: "inherit",
              transition: "all 0.15s ease",
              "&:hover": {
                borderColor: "#5B5FC7",
                bgcolor: "#F8F8FD",
                transform: "translateX(4px)",
                "& .arrow-icon": {
                  color: "#5B5FC7",
                  transform: "translate(2px, -2px)",
                },
              },
              cursor: "pointer",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              {/* Index number */}
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "#E5E7EB",
                  lineHeight: 1,
                  minWidth: 32,
                  userSelect: "none",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </Typography>

              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    color: "#9CA3AF",
                    mb: 0.25,
                  }}
                >
                  {contact.label.toUpperCase()}
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{
                    fontSize: { xs: "0.95rem", md: "1.1rem" },
                    letterSpacing: "-0.01em",
                    color: "#111111",
                  }}
                >
                  {contact.value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "0.8rem", color: "#9CA3AF", mt: 0.25 }}
                >
                  {contact.description}
                </Typography>
              </Box>
            </Box>

            <Box
              className="arrow-icon"
              sx={{
                color: "#D1D5DB",
                transition: "all 0.15s ease",
                flexShrink: 0,
              }}
            >
              <ArrowOutwardIcon sx={{ fontSize: 20 }} />
            </Box>
          </Box>
        ))}
      </Box>

      {/* Availability note */}
      <Box
        sx={{
          mt: 6,
          p: 3,
          bgcolor: "#F9F8F5",
          border: "1px solid #E5E7EB",
          borderRadius: 3,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            bgcolor: "#22C55E",
            boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.15)",
            flexShrink: 0,
          }}
        />
        <Box>
          <Typography variant="body2" fontWeight={600} sx={{ color: "#111111" }}>
            Currently employed at Amazon
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.85rem" }}>
            Open to networking and discussing interesting ideas in agentic AI.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
