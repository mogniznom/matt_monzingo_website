import { createTheme } from "@mui/material/styles";

const PURPLE = "#9D4EDD";
const CYAN = "#00D4FF";
const PINK = "#F72585";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: PURPLE,
      light: "#C77DFF",
      dark: "#7B2FBE",
    },
    secondary: {
      main: CYAN,
      light: "#67E8F9",
      dark: "#0891B2",
    },
    error: {
      main: PINK,
    },
    background: {
      default: "#060614",
      paper: "rgba(255, 255, 255, 0.04)",
    },
    text: {
      primary: "#F1F5F9",
      secondary: "rgba(241, 245, 249, 0.60)",
      disabled: "rgba(241, 245, 249, 0.35)",
    },
    divider: "rgba(255, 255, 255, 0.08)",
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
      letterSpacing: "-0.025em",
    },
    h3: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.015em",
    },
    h5: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h6: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
      letterSpacing: "-0.005em",
    },
    subtitle1: {
      fontWeight: 600,
      letterSpacing: "0.01em",
    },
    subtitle2: {
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
    body1: {
      lineHeight: 1.75,
      letterSpacing: "0.01em",
    },
    body2: {
      lineHeight: 1.7,
      letterSpacing: "0.01em",
    },
    overline: {
      letterSpacing: "0.12em",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#060614",
          backgroundImage:
            "radial-gradient(ellipse at 15% 10%, rgba(157, 78, 221, 0.18) 0%, transparent 50%), " +
            "radial-gradient(ellipse at 85% 90%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(157, 78, 221, 0.3) transparent",
          "&::-webkit-scrollbar": { width: 6 },
          "&::-webkit-scrollbar-track": { background: "transparent" },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(157, 78, 221, 0.3)",
            borderRadius: 3,
          },
        },
        "*": {
          boxSizing: "border-box",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.10)",
          boxShadow:
            "0 4px 30px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
          borderRadius: 20,
          transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow:
              "0 12px 48px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255,255,255,0.10)",
            borderColor: "rgba(255, 255, 255, 0.18)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.06)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          color: "#F1F5F9",
          fontWeight: 500,
          transition: "all 0.25s ease",
          "&:hover": {
            background: "rgba(157, 78, 221, 0.18)",
            borderColor: "rgba(157, 78, 221, 0.5)",
            boxShadow: "0 0 16px rgba(157, 78, 221, 0.25)",
          },
        },
        outlined: {
          borderColor: "rgba(255, 255, 255, 0.12)",
          "&:hover": {
            background: "rgba(157, 78, 221, 0.18)",
            borderColor: "rgba(157, 78, 221, 0.5)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: "none",
          fontWeight: 600,
          letterSpacing: "0.02em",
          transition: "all 0.25s ease",
        },
        contained: {
          background: `linear-gradient(135deg, ${PURPLE}, #7B2FBE)`,
          boxShadow: `0 4px 20px rgba(157, 78, 221, 0.35)`,
          "&:hover": {
            background: `linear-gradient(135deg, #C77DFF, ${PURPLE})`,
            boxShadow: `0 8px 30px rgba(157, 78, 221, 0.50)`,
            transform: "translateY(-1px)",
          },
        },
        outlined: {
          borderColor: "rgba(255, 255, 255, 0.20)",
          background: "rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(12px)",
          "&:hover": {
            background: "rgba(157, 78, 221, 0.12)",
            borderColor: "rgba(157, 78, 221, 0.5)",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "rgba(6, 6, 20, 0.92)",
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          borderRight: "1px solid rgba(255, 255, 255, 0.08)",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: CYAN,
          transition: "all 0.25s ease",
          "&:hover": {
            textShadow: `0 0 12px rgba(0, 212, 255, 0.6)`,
            color: "#67E8F9",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(255, 255, 255, 0.07)",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: "rgba(6, 6, 20, 0.92)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.10)",
          fontSize: "0.8rem",
        },
      },
    },
  },
});

export default theme;
