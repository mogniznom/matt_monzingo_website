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
  Chip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import BarChartIcon from "@mui/icons-material/BarChart";
import EmailIcon from "@mui/icons-material/Email";
import BuildIcon from "@mui/icons-material/Build";
import ArticleIcon from "@mui/icons-material/Article";
import PageTransition from "./PageTransition";

const DRAWER_WIDTH = 288;

// Color accent per nav item
const navItems = [
  { label: "About", path: "/about", icon: <PersonIcon />, color: "#8A4AF3", bg: "#EDE7FF" },
  { label: "Experience", path: "/experience", icon: <WorkIcon />, color: "#FF6B6B", bg: "#FFF0F0" },
  { label: "Education", path: "/education", icon: <SchoolIcon />, color: "#00BCD4", bg: "#E0F7FA" },
  { label: "Skills", path: "/skills", icon: <BarChartIcon />, color: "#22C55E", bg: "#F0FDF4" },
  { label: "Projects", path: "/projects", icon: <BuildIcon />, color: "#4169E1", bg: "#EEF2FF" },
  { label: "Thoughts", path: "/thoughts", icon: <ArticleIcon />, color: "#FFB800", bg: "#FFFBEB" },
  { label: "Contact", path: "/contact", icon: <EmailIcon />, color: "#E91E63", bg: "#FCE4EC" },
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
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Hero profile area */}
      <Box
        sx={{
          position: "relative",
          background: "linear-gradient(135deg, #8A4AF3 0%, #E81E63 100%)",
          py: 4,
          px: 3,
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: -40,
            right: -40,
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: -20,
            left: -20,
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
          },
        }}
      >
        <Avatar
          src="/profile.jpg"
          alt="Matt Monzingo"
          sx={{
            width: 72,
            height: 72,
            mb: 1.5,
            border: "3px solid rgba(255,255,255,0.6)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            position: "relative",
            zIndex: 1,
          }}
        />
        <Typography
          variant="h6"
          sx={{
            color: "#FFFFFF",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            lineHeight: 1.2,
            position: "relative",
            zIndex: 1,
          }}
        >
          Matt Monzingo
        </Typography>
        <Chip
          label="AI/ML Engineer"
          size="small"
          sx={{
            mt: 1,
            backgroundColor: "rgba(255,255,255,0.2)",
            color: "#FFFFFF",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: "0.7rem",
            letterSpacing: "0.05em",
            border: "1px solid rgba(255,255,255,0.3)",
            position: "relative",
            zIndex: 1,
          }}
        />
      </Box>

      {/* Navigation */}
      <List sx={{ pt: 2, px: 1.5, flex: 1 }}>
        <Typography
          variant="overline"
          sx={{
            px: 1.5,
            mb: 1,
            display: "block",
            color: "#9CA3AF",
            fontSize: "0.65rem",
          }}
        >
          Navigation
        </Typography>
        {navItems.map((item) => {
          const isActive = item.path === "/thoughts"
            ? location.pathname.startsWith("/thoughts")
            : location.pathname === item.path;
          return (
            <ListItemButton
              key={item.path}
              selected={isActive}
              onClick={() => handleNav(item.path)}
              sx={{
                borderRadius: "12px",
                mb: 0.5,
                px: 2,
                py: 1.2,
                transition: "all 0.2s ease",
                backgroundColor: isActive ? item.bg : "transparent",
                "&.Mui-selected": {
                  backgroundColor: item.bg,
                  "&:hover": {
                    backgroundColor: item.bg,
                    filter: "brightness(0.97)",
                  },
                  "& .MuiListItemIcon-root": { color: item.color },
                  "& .MuiListItemText-primary": { color: item.color },
                },
                "&:hover": {
                  backgroundColor: isActive ? item.bg : "rgba(138, 74, 243, 0.05)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 36,
                  color: isActive ? item.color : "#9CA3AF",
                  transition: "color 0.2s ease",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? item.color : "#6B7280",
                }}
              />
              {isActive && (
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: item.color,
                    boxShadow: `0 0 8px ${item.color}`,
                    flexShrink: 0,
                  }}
                />
              )}
            </ListItemButton>
          );
        })}
      </List>

      {/* Footer */}
      <Box
        sx={{
          px: 3,
          py: 2,
          borderTop: "1px solid rgba(138, 74, 243, 0.1)",
          background: "rgba(248, 247, 252, 0.5)",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "#9CA3AF",
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.7rem",
          }}
        >
          © 2025 Matt Monzingo
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", position: "relative" }}>
      {/* Mobile app bar */}
      {isMobile && (
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            bgcolor: "#FFFFFF",
            borderBottom: "1px solid rgba(138, 74, 243, 0.1)",
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              onClick={() => setMobileOpen(true)}
              sx={{
                mr: 2,
                color: "#8A4AF3",
                bgcolor: "#EDE7FF",
                borderRadius: "10px",
                "&:hover": { bgcolor: "#DDD5FF" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                background: "linear-gradient(135deg, #8A4AF3, #E81E63)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #8A4AF3, #E81E63)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Matt Monzingo
              </Typography>
            </Box>
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
                borderRight: "1px solid rgba(138, 74, 243, 0.08)",
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
          p: { xs: 2, sm: 3 },
          mt: { xs: 8, md: 0 },
          minHeight: "100vh",
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
