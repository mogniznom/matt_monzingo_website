import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#8A4AF3",
      light: "#A06AF8",
      dark: "#6B2FD4",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FF6B6B",
      light: "#FF8E8E",
      dark: "#E84848",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F8F7FC",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A1A2E",
      secondary: "#6B7280",
      disabled: "#9CA3AF",
    },
    success: {
      main: "#22C55E",
    },
    warning: {
      main: "#FFB800",
    },
    error: {
      main: "#EF4444",
    },
    info: {
      main: "#4169E1",
    },
    divider: "rgba(138, 74, 243, 0.12)",
    // Custom category tints for bento cards
    violet: { main: "#EDE7FF", contrastText: "#8A4AF3" },
    peach: { main: "#FFF3E0", contrastText: "#FF6B6B" },
    teal: { main: "#E0F7FA", contrastText: "#00BCD4" },
    rose: { main: "#FCE4EC", contrastText: "#E91E63" },
    lime: { main: "#F0FDF4", contrastText: "#22C55E" },
    amber: { main: "#FFFBEB", contrastText: "#FFB800" },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },
    h2: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h5: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h6: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 600,
      fontFamily: "'Space Grotesk', sans-serif",
    },
    button: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
    body1: {
      lineHeight: 1.7,
    },
    body2: {
      lineHeight: 1.7,
    },
    overline: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
      letterSpacing: "0.12em",
      fontSize: "0.7rem",
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    "none",
    "0px 2px 8px rgba(138, 74, 243, 0.06)",
    "0px 4px 16px rgba(138, 74, 243, 0.08)",
    "0px 6px 24px rgba(138, 74, 243, 0.1)",
    "0px 8px 32px rgba(138, 74, 243, 0.12)",
    "0px 10px 40px rgba(138, 74, 243, 0.14)",
    "0px 12px 48px rgba(138, 74, 243, 0.16)",
    "0px 14px 56px rgba(138, 74, 243, 0.18)",
    "0px 16px 64px rgba(138, 74, 243, 0.2)",
    "0px 18px 72px rgba(138, 74, 243, 0.22)",
    "0px 20px 80px rgba(138, 74, 243, 0.24)",
    "0px 22px 88px rgba(138, 74, 243, 0.26)",
    "0px 24px 96px rgba(138, 74, 243, 0.28)",
    "0px 26px 104px rgba(138, 74, 243, 0.3)",
    "0px 28px 112px rgba(138, 74, 243, 0.32)",
    "0px 30px 120px rgba(138, 74, 243, 0.34)",
    "0px 32px 128px rgba(138, 74, 243, 0.36)",
    "0px 34px 136px rgba(138, 74, 243, 0.38)",
    "0px 36px 144px rgba(138, 74, 243, 0.4)",
    "0px 38px 152px rgba(138, 74, 243, 0.42)",
    "0px 40px 160px rgba(138, 74, 243, 0.44)",
    "0px 42px 168px rgba(138, 74, 243, 0.46)",
    "0px 44px 176px rgba(138, 74, 243, 0.48)",
    "0px 46px 184px rgba(138, 74, 243, 0.5)",
    "0px 48px 192px rgba(138, 74, 243, 0.52)",
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#F8F7FC",
          backgroundImage:
            "radial-gradient(ellipse at 10% 20%, rgba(138, 74, 243, 0.06) 0%, transparent 50%), " +
            "radial-gradient(ellipse at 90% 80%, rgba(255, 107, 107, 0.06) 0%, transparent 50%)",
          backgroundAttachment: "fixed",
        },
        "*": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(138, 74, 243, 0.3) transparent",
        },
        "*::-webkit-scrollbar": {
          width: "6px",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(138, 74, 243, 0.3)",
          borderRadius: "3px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#FFFFFF",
          border: "none",
          borderRadius: 20,
          boxShadow: "0px 4px 24px rgba(138, 74, 243, 0.08)",
          transition: "box-shadow 0.3s ease, transform 0.2s ease",
          "&:hover": {
            boxShadow: "0px 8px 40px rgba(138, 74, 243, 0.14)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          borderRadius: "8px",
        },
        filled: {
          "&.violet": {
            backgroundColor: "#EDE7FF",
            color: "#8A4AF3",
          },
          "&.coral": {
            backgroundColor: "#FFF0F0",
            color: "#FF6B6B",
          },
        },
        outlined: {
          borderColor: "rgba(138, 74, 243, 0.3)",
          color: "#8A4AF3",
          backgroundColor: "rgba(138, 74, 243, 0.04)",
          "&:hover": {
            backgroundColor: "rgba(138, 74, 243, 0.1)",
            borderColor: "#8A4AF3",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#FFFFFF",
          borderRight: "none",
          boxShadow: "4px 0 24px rgba(138, 74, 243, 0.08)",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#8A4AF3",
          fontWeight: 500,
          "&:hover": {
            color: "#6B2FD4",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: "12px",
          padding: "10px 24px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0px 4px 16px rgba(138, 74, 243, 0.35)",
          },
        },
        outlined: {
          borderRadius: "12px",
          padding: "10px 24px",
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#1A1A2E",
          boxShadow: "0px 2px 16px rgba(138, 74, 243, 0.08)",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(138, 74, 243, 0.1)",
        },
      },
    },
  },
});

export default theme;
