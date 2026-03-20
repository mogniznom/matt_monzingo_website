import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8B7BF7",
    },
    secondary: {
      main: "#6EC6D8",
    },
    background: {
      default: "#0A0A0F",
      paper: "#1C1C28",
    },
    text: {
      primary: "#E8E8ED",
      secondary: "#9898A6",
      disabled: "#5A5A6E",
    },
    divider: "rgba(255, 255, 255, 0.08)",
    success: {
      main: "#34D399",
    },
    warning: {
      main: "#FBBF24",
    },
    error: {
      main: "#F87171",
    },
    info: {
      main: "#60A5FA",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h5: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
      letterSpacing: "-0.005em",
    },
    h6: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
      letterSpacing: "0",
    },
    subtitle1: {
      fontWeight: 500,
      letterSpacing: "0.0015em",
    },
    body1: {
      lineHeight: 1.75,
      letterSpacing: "0.005em",
    },
    body2: {
      lineHeight: 1.7,
      letterSpacing: "0.0025em",
    },
    caption: {
      letterSpacing: "0.004em",
    },
    button: {
      fontWeight: 500,
      letterSpacing: "0.001em",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0A0A0F",
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, rgba(124, 92, 252, 0.06) 0%, transparent 50%), " +
            "radial-gradient(ellipse at 80% 20%, rgba(139, 123, 247, 0.04) 0%, transparent 50%)",
          backgroundAttachment: "fixed",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#1C1C28",
          border: "1px solid rgba(42, 42, 60, 0.4)",
          boxShadow: "0 0 24px rgba(124, 92, 252, 0.05)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            borderColor: "rgba(139, 123, 247, 0.3)",
            boxShadow: "0 0 30px rgba(124, 92, 252, 0.08)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        outlined: {
          borderColor: "rgba(139, 123, 247, 0.35)",
          color: "#8B7BF7",
          background: "rgba(139, 123, 247, 0.06)",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "rgba(139, 123, 247, 0.15)",
            borderColor: "#8B7BF7",
            boxShadow: "0 0 12px rgba(139, 123, 247, 0.2)",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#14141E",
          borderRight: "1px solid rgba(255, 255, 255, 0.05)",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#8B7BF7",
          transition: "text-shadow 0.3s ease, color 0.3s ease",
          "&:hover": {
            color: "#A89BF9",
            textShadow: "0 0 8px rgba(139, 123, 247, 0.5)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          background: "#7C5CFC",
          color: "#FFFFFF",
          borderRadius: 12,
          "&:hover": {
            background: "#8B7BF7",
            boxShadow: "0 4px 24px rgba(124, 92, 252, 0.4)",
          },
        },
        outlined: {
          borderColor: "#8B7BF7",
          color: "#8B7BF7",
          borderWidth: "1.5px",
          "&:hover": {
            borderColor: "#A89BF9",
            background: "rgba(139, 123, 247, 0.08)",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(255, 255, 255, 0.08)",
        },
      },
    },
  },
});

export default theme;
