import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  CircularProgress,
  Button,
  IconButton,
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
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

const mdComponents = {
  p: ({ children }) => (
    <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
      {children}
    </Typography>
  ),
  h1: ({ children }) => <Typography variant="h5" sx={{ mt: 3, mb: 1, color: "#e2e8f0" }}>{children}</Typography>,
  h2: ({ children }) => <Typography variant="h6" sx={{ mt: 2.5, mb: 1, color: "#e2e8f0" }}>{children}</Typography>,
  h3: ({ children }) => <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2, mb: 0.5, color: "#e2e8f0" }}>{children}</Typography>,
  code: ({ inline, children }) =>
    inline ? (
      <Box component="code" sx={{ fontFamily: "'Fira Code', monospace", fontSize: "0.85em", bgcolor: "rgba(0,229,255,0.08)", px: 0.5, borderRadius: 0.5, color: "#00e5ff" }}>
        {children}
      </Box>
    ) : (
      <Box component="pre" sx={{ bgcolor: "rgba(0,0,0,0.3)", border: "1px solid rgba(0,229,255,0.1)", borderRadius: 1, p: 2, overflow: "auto", fontFamily: "'Fira Code', monospace", fontSize: "0.85rem", color: "#e2e8f0", my: 2 }}>
        <code>{children}</code>
      </Box>
    ),
  a: ({ href, children }) => {
    const safeHref = href && (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("/")) ? href : "#";
    return (
      <Box component="a" href={safeHref} target="_blank" rel="noopener noreferrer" sx={{ color: "#00e5ff", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
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
    <Card elevation={0}>
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
          <IconButton size="small" onClick={() => navigate("/thoughts")} sx={{ color: "#64748b" }}>
            <ArrowBackIcon fontSize="small" />
          </IconButton>
          <Typography variant="body2" sx={{ color: "#64748b" }}>
            Thoughts
          </Typography>
          {admin && post && (
            <Box sx={{ ml: "auto", display: "flex", gap: 1 }}>
              <IconButton size="small" onClick={() => navigate(`/thoughts/${id}/edit`)} sx={{ color: "#64748b" }}>
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" onClick={handleDelete} sx={{ color: "#64748b" }}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          )}
        </Box>

        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
            <CircularProgress size={32} sx={{ color: "#00e5ff" }} />
          </Box>
        )}

        {error && (
          <Typography variant="body2" sx={{ color: "#64748b", fontFamily: "'Fira Code', monospace" }}>
            // {error}
          </Typography>
        )}

        {post && (
          <>
            <Typography variant="h5" fontWeight={700} sx={{ color: "#e2e8f0", mb: 1 }}>
              {post.title}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#00e5ff", fontFamily: "'Fira Code', monospace", fontSize: "0.7rem" }}
            >
              {formatDate(post.createdAt)}
            </Typography>
            {post.tags?.length > 0 && (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: 1, mb: 3 }}>
                {post.tags.map((t) => (
                  <Chip key={t} label={t} size="small" variant="outlined" sx={{ fontSize: "0.65rem", height: 18 }} />
                ))}
              </Box>
            )}
            <Box sx={{ mt: 3 }}>
              <ReactMarkdown components={mdComponents}>{post.content}</ReactMarkdown>
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
}
