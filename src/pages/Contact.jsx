import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const contacts = [
  {
    label: "Email",
    value: "matthew.monzingo@gmail.com",
    href: "mailto:matthew.monzingo@gmail.com",
    icon: <EmailIcon />,
  },
  {
    label: "GitHub",
    value: "github.com/mogniznom",
    href: "https://github.com/mogniznom",
    icon: <GitHubIcon />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/matthewmonzingo",
    href: "https://www.linkedin.com/in/matthewmonzingo/",
    icon: <LinkedInIcon />,
  },
];

export default function Contact() {
  return (
    <Card elevation={0}>
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
          <Box
            sx={{
              width: 4,
              height: 28,
              borderRadius: 1,
              background: "linear-gradient(180deg, #00e5ff, #7c4dff)",
            }}
          />
          <Typography variant="h5">Contact</Typography>
        </Box>
        <List disablePadding>
          {contacts.map((c) => (
            <ListItem
              key={c.label}
              disableGutters
              sx={{
                py: 1.5,
                "&:not(:last-child)": {
                  borderBottom: "1px solid rgba(0, 229, 255, 0.06)",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: "#00e5ff" }}>
                {c.icon}
              </ListItemIcon>
              <ListItemText
                primary={c.label}
                primaryTypographyProps={{
                  sx: {
                    fontFamily: "'Fira Code', monospace",
                    fontSize: "0.75rem",
                    color: "#64748b",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  },
                }}
                secondary={
                  <Link
                    href={c.href}
                    target="_blank"
                    rel="noopener"
                    underline="hover"
                  >
                    {c.value}
                  </Link>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
