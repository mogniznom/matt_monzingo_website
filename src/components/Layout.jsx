import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ParticleBackground from "./ParticleBackground";
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

  const isActive = (path) =>
    path === "/thoughts"
      ? location.pathname.startsWith("/thoughts")
      : location.pathname === path;

  const handleNav = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <Box sx={{ minHeight: "100vh", position: "relative" }}>
      <ParticleBackground />

      {/* ── Floating glass pill nav ── */}
      <Box
        component="nav"
        sx={{
          position: "fixed",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "calc(100% - 32px)", md: "auto" },
          maxWidth: 960,
          zIndex: 1200,
          background: "rgba(6, 6, 20, 0.65)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          border: "1px solid rgba(255, 255, 255, 0.10)",
          borderRadius: "60px",
          px: { xs: 2, md: 2.5 },
          py: 1.25,
          display: "flex",
          alignItems: "center",
          gap: { xs: 0, md: 0.5 },
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.40), inset 0 1px 0 rgba(255,255,255,0.07)",
        }}
      >
        {/* Brand / avatar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.25,
            mr: { md: 2 },
            cursor: "pointer",
            flexShrink: 0,
          }}
          onClick={() => handleNav("/about")}
        >
          <Avatar
            src="/profile.jpg"
            alt="Matt"
            sx={{
              width: 32,
              height: 32,
              border: "1.5px solid rgba(157, 78, 221, 0.5)",
              boxShadow: "0 0 12px rgba(157, 78, 221, 0.35)",
            }}
          />
          <Typography
            sx={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "-0.01em",
              color: "#F1F5F9",
              whiteSpace: "nowrap",
              display: { xs: "none", sm: "block" },
            }}
          >
            Matt Monzingo
          </Typography>
        </Box>

        {/* Desktop nav items */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.25 }}>
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Box
                  key={item.path}
                  onClick={() => handleNav(item.path)}
                  sx={{
                    px: 1.75,
                    py: 0.75,
                    borderRadius: "40px",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    fontWeight: active ? 600 : 400,
                    letterSpacing: "0.01em",
                    color: active ? "#F1F5F9" : "rgba(241,245,249,0.55)",
                    background: active
                      ? "rgba(157, 78, 221, 0.20)"
                      : "transparent",
                    border: active
                      ? "1px solid rgba(157, 78, 221, 0.35)"
                      : "1px solid transparent",
                    boxShadow: active
                      ? "0 0 16px rgba(157, 78, 221, 0.20)"
                      : "none",
                    transition: "all 0.2s ease",
                    whiteSpace: "nowrap",
                    userSelect: "none",
                    "&:hover": {
                      color: "#F1F5F9",
                      background: "rgba(255,255,255,0.06)",
                    },
                  }}
                >
                  {item.label}
                </Box>
              );
            })}
          </Box>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <Box sx={{ ml: "auto" }}>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              size="small"
              sx={{
                color: "#F1F5F9",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
                "&:hover": { background: "rgba(157, 78, 221, 0.15)" },
              }}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
          </Box>
        )}
      </Box>

      {/* ── Mobile drawer ── */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: "rgba(6, 6, 20, 0.96)",
            backdropFilter: "blur(32px)",
            WebkitBackdropFilter: "blur(32px)",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
          },
        }}
      >
        <Box sx={{ p: 2.5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 3,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Avatar
                src="/profile.jpg"
                alt="Matt"
                sx={{
                  width: 40,
                  height: 40,
                  border: "1.5px solid rgba(157, 78, 221, 0.5)",
                  boxShadow: "0 0 16px rgba(157, 78, 221, 0.3)",
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#F1F5F9",
                  }}
                >
                  Matt Monzingo
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    color: "rgba(241,245,249,0.50)",
                    letterSpacing: "0.04em",
                  }}
                >
                  AI/ML Engineer
                </Typography>
              </Box>
            </Box>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              size="small"
              sx={{ color: "rgba(241,245,249,0.5)" }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Divider */}
          <Box
            sx={{
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(157,78,221,0.4), transparent)",
              mb: 2,
            }}
          />

          <List disablePadding>
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <ListItemButton
                  key={item.path}
                  onClick={() => handleNav(item.path)}
                  sx={{
                    borderRadius: 2.5,
                    mb: 0.5,
                    px: 2,
                    py: 1.25,
                    background: active
                      ? "rgba(157, 78, 221, 0.15)"
                      : "transparent",
                    border: active
                      ? "1px solid rgba(157, 78, 221, 0.30)"
                      : "1px solid transparent",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      background: "rgba(255,255,255,0.05)",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      sx: {
                        fontSize: "0.95rem",
                        fontWeight: active ? 600 : 400,
                        color: active
                          ? "#F1F5F9"
                          : "rgba(241,245,249,0.65)",
                      },
                    }}
                  />
                  {active && (
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#9D4EDD",
                        boxShadow: "0 0 10px #9D4EDD",
                      }}
                    />
                  )}
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Drawer>

      {/* ── Main content ── */}
      <Box
        component="main"
        sx={{
          pt: { xs: 11, md: 12 },
          pb: 10,
          px: { xs: 2, sm: 3, md: 4 },
          maxWidth: 900,
          mx: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </Box>
    </Box>
  );
}
