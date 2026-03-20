import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5B5FC7",
      light: "#7B7FD4",
      dark: "#3D40A0",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#E07A5F",
      light: "#E89A87",
      dark: "#C05A3F",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FAFAF8",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#111111",
      secondary: "#6B7280",
      disabled: "#9CA3AF",
    },
    divider: "#E5E7EB",
    error: {
      main: "#EF4444",
    },
    success: {
      main: "#22C55E",
    },
    warning: {
      main: "#F59E0B",
    },
    info: {
      main: "#3B82F6",
    },
  },
  typography: {
    fontFamily: "'Inter', -apple-system, sans-serif",
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.04em",
      lineHeight: 1.0,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.03em",
      lineHeight: 1.1,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
    },
    h4: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h5: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
      letterSpacing: "0.01em",
    },
    body1: {
      lineHeight: 1.75,
      letterSpacing: "0.01em",
    },
    body2: {
      lineHeight: 1.65,
      letterSpacing: "0.01em",
    },
    caption: {
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      fontWeight: 500,
    },
    button: {
      fontWeight: 600,
      letterSpacing: "0.01em",
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    "none",
    "0 1px 2px rgba(0,0,0,0.05)",
    "0 1px 4px rgba(0,0,0,0.07)",
    "0 2px 8px rgba(0,0,0,0.08)",
    "0 4px 12px rgba(0,0,0,0.08)",
    "0 8px 24px rgba(0,0,0,0.08)",
    "0 12px 32px rgba(0,0,0,0.08)",
    "0 16px 40px rgba(0,0,0,0.08)",
    "0 20px 48px rgba(0,0,0,0.08)",
    "0 24px 56px rgba(0,0,0,0.08)",
    "0 28px 64px rgba(0,0,0,0.08)",
    "0 32px 72px rgba(0,0,0,0.08)",
    "0 36px 80px rgba(0,0,0,0.08)",
    "0 40px 88px rgba(0,0,0,0.08)",
    "0 44px 96px rgba(0,0,0,0.08)",
    "0 48px 104px rgba(0,0,0,0.08)",
    "0 52px 112px rgba(0,0,0,0.08)",
    "0 56px 120px rgba(0,0,0,0.08)",
    "0 60px 128px rgba(0,0,0,0.08)",
    "0 64px 136px rgba(0,0,0,0.08)",
    "0 68px 144px rgba(0,0,0,0.08)",
    "0 72px 152px rgba(0,0,0,0.08)",
    "0 76px 160px rgba(0,0,0,0.08)",
    "0 80px 168px rgba(0,0,0,0.08)",
    "0 84px 176px rgba(0,0,0,0.08)",
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before, *::after": {
          boxSizing: "border-box",
        },
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          backgroundColor: "#FAFAF8",
          backgroundImage:
            "radial-gradient(circle, #D1D5DB 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        },
        "::selection": {
          background: "rgba(91, 95, 199, 0.15)",
          color: "#111111",
        },
        "::-webkit-scrollbar": {
          width: "6px",
        },
        "::-webkit-scrollbar-track": {
          background: "#F5F5F5",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#D1D5DB",
          borderRadius: "3px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(250, 250, 248, 0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #E5E7EB",
          boxShadow: "none",
          color: "#111111",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #E5E7EB",
          borderRadius: 16,
          background: "#FFFFFF",
          boxShadow: "none",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            borderColor: "#D1D5DB",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: "0.75rem",
          letterSpacing: "0.01em",
        },
        outlined: {
          borderColor: "#E5E7EB",
          color: "#374151",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "#F3F4F6",
            borderColor: "#D1D5DB",
          },
        },
        filled: {
          backgroundColor: "#F3F4F6",
          color: "#374151",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.875rem",
          padding: "10px 24px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        contained: {
          backgroundColor: "#5B5FC7",
          "&:hover": {
            backgroundColor: "#4A4EB6",
          },
        },
        outlined: {
          borderColor: "#E5E7EB",
          color: "#374151",
          "&:hover": {
            borderColor: "#D1D5DB",
            backgroundColor: "#F3F4F6",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#6B7280",
          "&:hover": {
            backgroundColor: "#F3F4F6",
            color: "#111111",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#E5E7EB",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#5B5FC7",
          textDecorationColor: "rgba(91, 95, 199, 0.3)",
          "&:hover": {
            textDecorationColor: "#5B5FC7",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#FFFFFF",
          border: "none",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          "&.Mui-selected": {
            backgroundColor: "rgba(91, 95, 199, 0.08)",
            color: "#5B5FC7",
            "&:hover": {
              backgroundColor: "rgba(91, 95, 199, 0.12)",
            },
          },
          "&:hover": {
            backgroundColor: "#F3F4F6",
          },
        },
      },
    },
  },
});

export default theme;
