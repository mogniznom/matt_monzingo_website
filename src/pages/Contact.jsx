import {
  Card,
  CardContent,
  Typography,
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
    value: "matt@example.com",
    href: "mailto:matt@example.com",
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
    value: "linkedin.com/in/matt-monzingo",
    href: "https://linkedin.com/in/",
    icon: <LinkedInIcon />,
  },
];

export default function Contact() {
  return (
    <Card elevation={1}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Contact
        </Typography>
        <List disablePadding>
          {contacts.map((c) => (
            <ListItem key={c.label} disableGutters>
              <ListItemIcon sx={{ minWidth: 40 }}>{c.icon}</ListItemIcon>
              <ListItemText
                primary={c.label}
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
