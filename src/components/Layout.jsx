import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import BarChartIcon from "@mui/icons-material/BarChart";
import EmailIcon from "@mui/icons-material/Email";
import BuildIcon from "@mui/icons-material/Build";
import ParticleBackground from "./ParticleBackground";
import PageTransition from "./PageTransition";

const DRAWER_WIDTH = 280;

const navItems = [
  { label: "About", path: "/about", icon: <PersonIcon /> },
  { label: "Experience", path: "/experience", icon: <WorkIcon /> },
  { label: "Education", path: "/education", icon: <SchoolIcon /> },
  { label: "Skills", path: "/skills", icon: <BarChartIcon /> },
  { label: "Projects", path: "/projects", icon: <BuildIcon /> },
  { label: "Contact", path: "/contact", icon: <EmailIcon /> },
];

export default function Layout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (path) => {
    navigate(path);
    if (isMobile) setMobileOpen(false);
  };

  const drawerContent = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Profile summary */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 4,
          px: 2,
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "10%",
            width: "80%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.3), transparent)",
          },
        }}
      >
        <Avatar
          src="/profile.jpg"
          alt="Matt Monzingo"
          sx={{
            width: 90,
            height: 90,
            mb: 2,
            border: "2px solid rgba(0, 229, 255, 0.4)",
            boxShadow: "0 0 20px rgba(0, 229, 255, 0.15)",
            transition: "box-shadow 0.3s ease",
            "&:hover": {
              boxShadow: "0 0 30px rgba(0, 229, 255, 0.3)",
            },
          }}
        />
        <Typography variant="h6" fontWeight={700} sx={{ color: "#e2e8f0" }}>
          Matt Monzingo
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#00e5ff",
            fontFamily: "'Fira Code', monospace",
            fontSize: "0.75rem",
            mt: 0.5,
          }}
        >
          {"// AI/ML Engineer"}
        </Typography>
      </Box>

      {/* Navigation */}
      <List sx={{ pt: 2, px: 1, flex: 1 }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItemButton
              key={item.path}
              selected={isActive}
              onClick={() => handleNav(item.path)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                px: 2,
                transition: "all 0.2s ease",
                border: "1px solid transparent",
                "&.Mui-selected": {
                  bgcolor: "rgba(0, 229, 255, 0.08)",
                  borderColor: "rgba(0, 229, 255, 0.2)",
                  color: "#00e5ff",
                  "&:hover": {
                    bgcolor: "rgba(0, 229, 255, 0.12)",
                  },
                  "& .MuiListItemIcon-root": { color: "#00e5ff" },
                },
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.04)",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36, color: "#64748b" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: "0.9rem",
                  fontWeight: isActive ? 600 : 400,
                }}
              />
              {isActive && (
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: "#00e5ff",
                    boxShadow: "0 0 8px #00e5ff",
                  }}
                />
              )}
            </ListItemButton>
          );
        })}
      </List>

      {/* Bottom terminal-style decoration */}
      <Box
        sx={{
          px: 2,
          py: 2,
          fontFamily: "'Fira Code', monospace",
          fontSize: "0.7rem",
          color: "#475569",
          borderTop: "1px solid rgba(0, 229, 255, 0.06)",
        }}
      >
        <span style={{ color: "#00e5ff" }}>$</span> status --online
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", position: "relative" }}>
      <ParticleBackground />

      {/* Mobile app bar */}
      {isMobile && (
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            bgcolor: "rgba(10, 14, 23, 0.9)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(0, 229, 255, 0.1)",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setMobileOpen(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              fontWeight={700}
              sx={{ color: "#e2e8f0" }}
            >
              Matt Monzingo
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Sidebar */}
      <Box
        component="nav"
        sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}
      >
        {isMobile ? (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            ModalProps={{ keepMounted: true }}
            sx={{
              "& .MuiDrawer-paper": {
                width: DRAWER_WIDTH,
                boxSizing: "border-box",
              },
            }}
          >
            {drawerContent}
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            sx={{
              "& .MuiDrawer-paper": {
                width: DRAWER_WIDTH,
                boxSizing: "border-box",
                borderRight: "1px solid rgba(0, 229, 255, 0.08)",
              },
            }}
            open
          >
            {drawerContent}
          </Drawer>
        )}
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 4 },
          mt: { xs: 8, md: 0 },
          maxWidth: 900,
          position: "relative",
          zIndex: 1,
        }}
      >
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </Box>
    </Box>
  );
}
