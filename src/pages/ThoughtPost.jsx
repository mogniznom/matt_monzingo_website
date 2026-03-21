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
      sx={{ lineHeight: 1.85, color: "rgba(241,245,249,0.75)" }}
    >
      {children}
    </Typography>
  ),
  h1: ({ children }) => (
    <Typography
      variant="h5"
      sx={{
        mt: 3.5,
        mb: 1.5,
        color: "#F1F5F9",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography
      variant="h6"
      sx={{
        mt: 3,
        mb: 1,
        color: "#F1F5F9",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography
      variant="subtitle1"
      fontWeight={600}
      sx={{ mt: 2.5, mb: 0.75, color: "#F1F5F9" }}
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
          fontSize: "0.85em",
          bgcolor: "rgba(157,78,221,0.12)",
          border: "1px solid rgba(157,78,221,0.25)",
          px: 0.75,
          py: 0.1,
          borderRadius: 0.75,
          color: "#C77DFF",
        }}
      >
        {children}
      </Box>
    ) : (
      <Box
        component="pre"
        sx={{
          bgcolor: "rgba(0,0,0,0.30)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 2,
          p: 2.5,
          overflow: "auto",
          fontFamily: "monospace",
          fontSize: "0.85rem",
          color: "#F1F5F9",
          my: 2.5,
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
          color: "#00D4FF",
          textDecoration: "none",
          "&:hover": { textDecoration: "underline", color: "#67E8F9" },
        }}
      >
        {children}
      </Box>
    );
  },
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
    <Box>
      {/* Back navigation */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 3,
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            cursor: "pointer",
            color: "rgba(241,245,249,0.45)",
            transition: "color 0.2s",
            "&:hover": { color: "rgba(241,245,249,0.80)" },
          }}
          onClick={() => navigate("/thoughts")}
        >
          <ArrowBackIcon fontSize="small" />
          <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
            Thoughts
          </Typography>
        </Box>

        {admin && post && (
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <IconButton
              size="small"
              onClick={() => navigate(`/thoughts/${id}/edit`)}
              sx={{
                color: "rgba(241,245,249,0.40)",
                "&:hover": { color: "#9D4EDD", background: "rgba(157,78,221,0.10)" },
              }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              onClick={handleDelete}
              sx={{
                color: "rgba(241,245,249,0.40)",
                "&:hover": { color: "#F72585", background: "rgba(247,37,133,0.10)" },
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        )}
      </Box>

      {/* Loading */}
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
          <CircularProgress size={32} sx={{ color: "#9D4EDD" }} />
        </Box>
      )}

      {/* Error */}
      {error && (
        <Typography
          variant="body2"
          sx={{ color: "rgba(241,245,249,0.35)", letterSpacing: "0.06em" }}
        >
          {error}
        </Typography>
      )}

      {/* Post */}
      {post && (
        <Box
          sx={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 4px 30px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.07)",
          }}
        >
          {/* Gradient strip */}
          <Box
            sx={{
              height: 3,
              background: "linear-gradient(90deg, #9D4EDD, #00D4FF, #F72585)",
            }}
          />

          <Box sx={{ p: { xs: 3, md: 5 } }}>
            {/* Date */}
            <Typography
              variant="caption"
              sx={{ color: "#9D4EDD", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.06em" }}
            >
              {formatDate(post.createdAt)}
            </Typography>

            {/* Title */}
            <Typography
              variant="h4"
              sx={{
                color: "#F1F5F9",
                mt: 1,
                mb: 2,
                fontSize: { xs: "1.5rem", md: "1.9rem" },
              }}
            >
              {post.title}
            </Typography>

            {/* Tags */}
            {post.tags?.length > 0 && (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 3.5 }}>
                {post.tags.map((t) => (
                  <Chip
                    key={t}
                    label={t}
                    size="small"
                    sx={{
                      fontSize: "0.7rem",
                      height: 22,
                      background: "rgba(157,78,221,0.10)",
                      border: "1px solid rgba(157,78,221,0.25)",
                      color: "#C77DFF",
                    }}
                  />
                ))}
              </Box>
            )}

            {/* Divider */}
            <Box
              sx={{
                height: 1,
                background: "linear-gradient(90deg, rgba(157,78,221,0.3), transparent)",
                mb: 3.5,
              }}
            />

            {/* Content */}
            <ReactMarkdown components={mdComponents}>{post.content}</ReactMarkdown>
          </Box>
        </Box>
      )}
    </Box>
  );
}
