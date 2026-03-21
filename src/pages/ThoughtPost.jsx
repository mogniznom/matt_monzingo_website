import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Chip,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ReactMarkdown from "react-markdown";
import { useAuth, isAdmin } from "../contexts/AuthContext";
import { getPost, deletePost } from "../services/thoughtsService";

function formatDate(ts) {
  if (!ts) return "";
  const date = ts.toDate ? ts.toDate() : new Date(ts);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const mdComponents = {
  p: ({ children }) => (
    <Typography
      variant="body1"
      paragraph
      sx={{ lineHeight: 1.85, color: "#374151", fontSize: "1.05rem" }}
    >
      {children}
    </Typography>
  ),
  h1: ({ children }) => (
    <Typography
      variant="h4"
      fontWeight={700}
      sx={{ mt: 4, mb: 1.5, letterSpacing: "-0.02em", color: "#111111" }}
    >
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography
      variant="h5"
      fontWeight={700}
      sx={{ mt: 3.5, mb: 1.5, letterSpacing: "-0.02em", color: "#111111" }}
    >
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography
      variant="h6"
      fontWeight={600}
      sx={{ mt: 3, mb: 1, color: "#111111" }}
    >
      {children}
    </Typography>
  ),
  code: ({ inline, children }) =>
    inline ? (
      <Box
        component="code"
        sx={{
          fontFamily: "monospace",
          fontSize: "0.88em",
          bgcolor: "#F3F4F6",
          border: "1px solid #E5E7EB",
          px: 0.75,
          py: 0.25,
          borderRadius: "4px",
          color: "#5B5FC7",
        }}
      >
        {children}
      </Box>
    ) : (
      <Box
        component="pre"
        sx={{
          bgcolor: "#F9F8F5",
          border: "1px solid #E5E7EB",
          borderRadius: 2,
          p: 3,
          overflow: "auto",
          fontFamily: "monospace",
          fontSize: "0.88rem",
          color: "#374151",
          my: 3,
          lineHeight: 1.6,
        }}
      >
        <code>{children}</code>
      </Box>
    ),
  a: ({ href, children }) => {
    const safeHref =
      href &&
      (href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("/"))
        ? href
        : "#";
    return (
      <Box
        component="a"
        href={safeHref}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: "#5B5FC7",
          textDecoration: "underline",
          textDecorationColor: "rgba(91, 95, 199, 0.3)",
          "&:hover": { textDecorationColor: "#5B5FC7" },
        }}
      >
        {children}
      </Box>
    );
  },
  blockquote: ({ children }) => (
    <Box
      component="blockquote"
      sx={{
        borderLeft: "3px solid #5B5FC7",
        pl: 3,
        py: 0.5,
        my: 3,
        bgcolor: "#F0F0FA",
        borderRadius: "0 8px 8px 0",
        "& p": { mb: 0 },
      }}
    >
      {children}
    </Box>
  ),
  ul: ({ children }) => (
    <Box
      component="ul"
      sx={{ pl: 0, my: 2, listStyle: "none" }}
    >
      {children}
    </Box>
  ),
  li: ({ children }) => (
    <Box
      component="li"
      sx={{
        display: "flex",
        gap: 1.5,
        mb: 1,
        "&::before": {
          content: '"·"',
          color: "#5B5FC7",
          fontWeight: 700,
          flexShrink: 0,
          mt: "1px",
        },
      }}
    >
      <Box>{children}</Box>
    </Box>
  ),
};

export default function ThoughtPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const admin = isAdmin(currentUser);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPost(id)
      .then((data) => {
        if (!data) setError("Post not found.");
        else setPost(data);
      })
      .catch(() => setError("Failed to load post."))
      .finally(() => setLoading(false));
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Delete this post?")) return;
    await deletePost(id);
    navigate("/thoughts");
  };

  return (
    <Box sx={{ maxWidth: 720, mx: "auto" }}>
      {/* Breadcrumb */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 6,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
          }}
          onClick={() => navigate("/thoughts")}
        >
          <IconButton
            size="small"
            sx={{
              color: "#6B7280",
              bgcolor: "#F3F4F6",
              "&:hover": { bgcolor: "#E5E7EB", color: "#111111" },
              width: 32,
              height: 32,
            }}
          >
            <ArrowBackIcon fontSize="small" />
          </IconButton>
          <Typography
            variant="body2"
            sx={{
              color: "#6B7280",
              fontSize: "0.85rem",
              "&:hover": { color: "#111111" },
            }}
          >
            Thoughts
          </Typography>
        </Box>

        {admin && post && (
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <IconButton
              size="small"
              onClick={() => navigate(`/thoughts/${id}/edit`)}
              sx={{
                color: "#6B7280",
                bgcolor: "#F3F4F6",
                "&:hover": { bgcolor: "#E5E7EB", color: "#111111" },
                width: 32,
                height: 32,
              }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              onClick={handleDelete}
              sx={{
                color: "#E07A5F",
                bgcolor: "#FDF3F0",
                "&:hover": { bgcolor: "#F2C4B4" },
                width: 32,
                height: 32,
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        )}
      </Box>

      {/* Loading */}
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", py: 12 }}>
          <CircularProgress size={28} sx={{ color: "#5B5FC7" }} />
        </Box>
      )}

      {/* Error */}
      {error && (
        <Box
          sx={{
            py: 12,
            textAlign: "center",
            border: "1px dashed #E5E7EB",
            borderRadius: 3,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {error}
          </Typography>
        </Box>
      )}

      {/* Post content */}
      {post && (
        <>
          {/* Post header */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.8rem",
                color: "#9CA3AF",
                mb: 2,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {formatDate(post.createdAt)}
            </Typography>

            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "2rem", md: "2.75rem" },
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "#111111",
                mb: 2,
              }}
            >
              {post.title}
            </Typography>

            {post.tags?.length > 0 && (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                {post.tags.map((t) => (
                  <Chip
                    key={t}
                    label={t}
                    size="small"
                    variant="outlined"
                    sx={{
                      height: 24,
                      fontSize: "0.72rem",
                      borderRadius: "6px",
                      borderColor: "#E5E7EB",
                      color: "#6B7280",
                    }}
                  />
                ))}
              </Box>
            )}

            {/* Separator */}
            <Box
              sx={{
                mt: 4,
                height: 1,
                bgcolor: "#E5E7EB",
              }}
            />
          </Box>

          {/* Article body */}
          <Box>
            <ReactMarkdown components={mdComponents}>{post.content}</ReactMarkdown>
          </Box>
        </>
      )}
    </Box>
  );
}
