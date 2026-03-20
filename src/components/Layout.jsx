import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PageTransition from "./PageTransition";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Education", path: "/education" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Thoughts", path: "/thoughts" },
  { label: "Contact", path: "/contact" },
];

export default function Layout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const isActive = (path) =>
    path === "/thoughts"
      ? location.pathname.startsWith("/thoughts")
      : location.pathname === path;

  const mobileDrawer = (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#FFFFFF",
        p: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 6,
        }}
      >
        <Typography
          variant="h6"
          fontWeight={800}
          sx={{ letterSpacing: "-0.02em", color: "#111111" }}
        >
          MM
        </Typography>
        <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "#111111" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ flex: 1 }}>
        {navItems.map((item) => (
          <ListItemButton
            key={item.path}
            onClick={() => handleNav(item.path)}
            sx={{
              borderRadius: 2,
              mb: 1,
              px: 2,
              py: 1.5,
              borderLeft: isActive(item.path)
                ? "3px solid #5B5FC7"
                : "3px solid transparent",
              bgcolor: isActive(item.path)
                ? "rgba(91, 95, 199, 0.06)"
                : "transparent",
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: "1.4rem",
                fontWeight: isActive(item.path) ? 700 : 400,
                letterSpacing: "-0.02em",
                color: isActive(item.path) ? "#5B5FC7" : "#111111",
              }}
            />
          </ListItemButton>
        ))}
      </List>

      <Box sx={{ mt: "auto", pt: 4, borderTop: "1px solid #E5E7EB" }}>
        <Typography variant="caption" color="text.secondary">
          Matt Monzingo · AI/ML Engineer
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Top navigation bar */}
      <AppBar position="sticky" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 60, md: 68 },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <Button
              onClick={() => handleNav("/about")}
              sx={{
                p: 0,
                minWidth: "auto",
                color: "#111111",
                "&:hover": { bgcolor: "transparent" },
              }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "10px",
                  bgcolor: "#111111",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#FAFAF8",
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                  }}
                >
                  MM
                </Typography>
              </Box>
            </Button>

            {/* Desktop nav */}
            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  bgcolor: "#F3F4F6",
                  borderRadius: 100,
                  px: 1,
                  py: 0.75,
                }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    onClick={() => handleNav(item.path)}
                    sx={{
                      borderRadius: 100,
                      px: 2,
                      py: 0.75,
                      fontSize: "0.8rem",
                      fontWeight: isActive(item.path) ? 600 : 400,
                      color: isActive(item.path) ? "#FFFFFF" : "#6B7280",
                      bgcolor: isActive(item.path) ? "#5B5FC7" : "transparent",
                      "&:hover": {
                        bgcolor: isActive(item.path)
                          ? "#4A4EB6"
                          : "rgba(0,0,0,0.05)",
                        color: isActive(item.path) ? "#FFFFFF" : "#111111",
                      },
                      transition: "all 0.15s ease",
                      minWidth: "auto",
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Mobile menu button */}
            {isMobile && (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ color: "#111111" }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { width: "100vw", maxWidth: "100vw" },
        }}
      >
        {mobileDrawer}
      </Drawer>

      {/* Main content */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 4, md: 6 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          borderTop: "1px solid #E5E7EB",
          py: 4,
          mt: 8,
          bgcolor: "#FFFFFF",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Matt Monzingo
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.75rem" }}>
              AI/ML Engineer · Seattle, WA
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
