import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
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
import ArticleIcon from "@mui/icons-material/Article";
import ParticleBackground from "./ParticleBackground";
import PageTransition from "./PageTransition";

const DRAWER_WIDTH = 260;

const navItems = [
  { label: "About", path: "/about", icon: <PersonIcon fontSize="small" /> },
  { label: "Experience", path: "/experience", icon: <WorkIcon fontSize="small" /> },
  { label: "Education", path: "/education", icon: <SchoolIcon fontSize="small" /> },
  { label: "Skills", path: "/skills", icon: <BarChartIcon fontSize="small" /> },
  { label: "Projects", path: "/projects", icon: <BuildIcon fontSize="small" /> },
  { label: "Thoughts", path: "/thoughts", icon: <ArticleIcon fontSize="small" /> },
  { label: "Contact", path: "/contact", icon: <EmailIcon fontSize="small" /> },
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
      {/* Profile */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 4,
          pb: 3.5,
          px: 2,
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "12%",
            width: "76%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
          },
        }}
      >
        {/* Gradient ring around avatar */}
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7C5CFC, #8B7BF7, #6EC6D8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
            boxShadow: "0 0 28px rgba(124,92,252,0.3)",
            flexShrink: 0,
          }}
        >
          <Avatar
            src="/profile.jpg"
            alt="Matt Monzingo"
            sx={{ width: 74, height: 74 }}
          />
        </Box>

        <Typography
          sx={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: "0.95rem",
            color: "#E8E8ED",
            letterSpacing: "-0.01em",
          }}
        >
          Matt Monzingo
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Fira Code', monospace",
            fontSize: "0.7rem",
            color: "#8B7BF7",
            mt: 0.4,
          }}
        >
          AI/ML Engineer
        </Typography>
      </Box>

      {/* Navigation */}
      <List sx={{ pt: 2, px: 1.5, flex: 1 }}>
        {navItems.map((item) => {
          const isActive =
            item.path === "/thoughts"
              ? location.pathname.startsWith("/thoughts")
              : location.pathname === item.path;
          return (
            <ListItemButton
              key={item.path}
              selected={isActive}
              onClick={() => handleNav(item.path)}
              sx={{
                borderRadius: 1.5,
                mb: 0.25,
                py: 0.9,
                px: 1.5,
                transition: "all 0.15s ease",
                "&.Mui-selected": {
                  bgcolor: "rgba(139,123,247,0.1)",
                  "&:hover": { bgcolor: "rgba(139,123,247,0.14)" },
                  "& .MuiListItemIcon-root": { color: "#8B7BF7" },
                },
                "&:hover": { bgcolor: "rgba(255,255,255,0.04)" },
              }}
            >
              <ListItemIcon sx={{ minWidth: 32, color: "#5A5A6E" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: "0.875rem",
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? "#E8E8ED" : "#9898A6",
                }}
              />
              {isActive && (
                <Box
                  sx={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    bgcolor: "#8B7BF7",
                    boxShadow: "0 0 7px #8B7BF7",
                    flexShrink: 0,
                  }}
                />
              )}
            </ListItemButton>
          );
        })}
      </List>

      {/* Status footer */}
      <Box
        sx={{
          px: 2.5,
          py: 2,
          borderTop: "1px solid rgba(255,255,255,0.04)",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            bgcolor: "#34D399",
            boxShadow: "0 0 7px rgba(52,211,153,0.8)",
            flexShrink: 0,
          }}
        />
        <Typography
          sx={{
            fontFamily: "'Fira Code', monospace",
            fontSize: "0.65rem",
            color: "#5A5A6E",
          }}
        >
          status: online
        </Typography>
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
            bgcolor: "rgba(10,10,15,0.92)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(139,123,247,0.08)",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setMobileOpen(true)}
              sx={{ mr: 2, color: "#9898A6" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              sx={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                color: "#E8E8ED",
              }}
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
                borderRight: "1px solid rgba(255,255,255,0.04)",
                boxShadow: "2px 0 24px rgba(0,0,0,0.4)",
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
          p: { xs: 2.5, sm: 5 },
          mt: { xs: 8, md: 0 },
          position: "relative",
          zIndex: 1,
          maxWidth: { md: 880 },
        }}
      >
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </Box>
    </Box>
  );
}
