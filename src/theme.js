import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00e5ff",
    },
    secondary: {
      main: "#7c4dff",
    },
    background: {
      default: "#0a0e17",
      paper: "rgba(15, 23, 42, 0.8)",
    },
    text: {
      primary: "#e2e8f0",
      secondary: "#94a3b8",
    },
    divider: "rgba(0, 229, 255, 0.12)",
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h5: {
      fontWeight: 700,
      letterSpacing: "0.02em",
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 600,
    },
    body2: {
      lineHeight: 1.7,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0a0e17",
          backgroundImage:
            "radial-gradient(ellipse at 20% 50%, rgba(0, 229, 255, 0.04) 0%, transparent 50%), " +
            "radial-gradient(ellipse at 80% 20%, rgba(124, 77, 255, 0.04) 0%, transparent 50%)",
          backgroundAttachment: "fixed",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba(15, 23, 42, 0.6)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(0, 229, 255, 0.1)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            borderColor: "rgba(0, 229, 255, 0.25)",
            boxShadow: "0 0 30px rgba(0, 229, 255, 0.06)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        outlined: {
          borderColor: "rgba(0, 229, 255, 0.3)",
          color: "#00e5ff",
          background: "rgba(0, 229, 255, 0.05)",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "rgba(0, 229, 255, 0.15)",
            borderColor: "#00e5ff",
            boxShadow: "0 0 12px rgba(0, 229, 255, 0.2)",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "rgba(10, 14, 23, 0.95)",
          backdropFilter: "blur(20px)",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#00e5ff",
          transition: "text-shadow 0.3s ease",
          "&:hover": {
            textShadow: "0 0 8px rgba(0, 229, 255, 0.5)",
          },
        },
      },
    },
  },
});

export default theme;
