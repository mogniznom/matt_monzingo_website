import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  CircularProgress,
  Fab,
  Divider,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useAuth, isAdmin } from "../contexts/AuthContext";
import { getPosts, getAllPosts } from "../services/thoughtsService";

function formatDate(ts) {
  if (!ts) return "";
  const date = ts.toDate ? ts.toDate() : new Date(ts);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function excerpt(content, max = 200) {
  if (!content) return "";
  return content.length > max ? content.slice(0, max).trimEnd() + "…" : content;
}

export default function Thoughts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser, signInWithGoogle, signOut } = useAuth();
  const admin = isAdmin(currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = admin ? await getAllPosts() : await getPosts();
        setPosts(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [admin]);

  return (
    <Card elevation={0}>
      <CardContent sx={{ p: 4 }}>
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                width: 4,
                height: 28,
                borderRadius: 1,
                background: "linear-gradient(180deg, #00e5ff, #7c4dff)",
              }}
            />
            <Typography variant="h5">Thoughts</Typography>
          </Box>

          {/* Auth control */}
          <Box>
            {currentUser ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="caption" sx={{ color: "#64748b" }}>
                  {admin ? "admin" : currentUser.displayName}
                </Typography>
                <Button size="small" onClick={signOut} sx={{ color: "#64748b", fontSize: "0.7rem" }}>
                  Sign out
                </Button>
              </Box>
            ) : (
              <Button size="small" onClick={signInWithGoogle} sx={{ color: "#64748b", fontSize: "0.7rem" }}>
                Sign in
              </Button>
            )}
          </Box>
        </Box>

        {/* Loading */}
        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
            <CircularProgress size={32} sx={{ color: "#00e5ff" }} />
          </Box>
        )}

        {/* Empty state */}
        {!loading && posts.length === 0 && (
          <Box sx={{ py: 6, textAlign: "center" }}>
            <Typography
              variant="body2"
              sx={{ color: "#475569", fontFamily: "'Fira Code', monospace" }}
            >
              // no posts yet
            </Typography>
          </Box>
        )}

        {/* Post list */}
        {!loading && posts.map((post, i) => (
          <Box key={post.id}>
            {i > 0 && <Divider sx={{ my: 2.5 }} />}
            <Box
              onClick={() => navigate(`/thoughts/${post.id}`)}
              sx={{
                cursor: "pointer",
                borderRadius: 2,
                p: 1.5,
                mx: -1.5,
                transition: "background 0.15s",
                "&:hover": { bgcolor: "rgba(0, 229, 255, 0.04)" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 2 }}>
                <Typography variant="subtitle1" fontWeight={600} sx={{ color: "#e2e8f0" }}>
                  {post.title}
                </Typography>
                {!post.published && (
                  <Chip label="draft" size="small" sx={{ fontSize: "0.65rem", height: 18, bgcolor: "rgba(124, 77, 255, 0.15)", color: "#7c4dff", border: "1px solid rgba(124, 77, 255, 0.3)" }} />
                )}
              </Box>
              <Typography
                variant="caption"
                sx={{ color: "#00e5ff", fontFamily: "'Fira Code', monospace", fontSize: "0.7rem" }}
              >
                {formatDate(post.createdAt)}
              </Typography>
              {post.tags?.length > 0 && (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: 0.75 }}>
                  {post.tags.map((t) => (
                    <Chip key={t} label={t} size="small" variant="outlined" sx={{ fontSize: "0.65rem", height: 18 }} />
                  ))}
                </Box>
              )}
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {excerpt(post.content)}
              </Typography>
            </Box>
          </Box>
        ))}
      </CardContent>

      {/* Admin FAB */}
      {admin && (
        <Fab
          size="medium"
          onClick={() => navigate("/thoughts/new")}
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            bgcolor: "#00e5ff",
            color: "#0a0e17",
            "&:hover": { bgcolor: "#00b8cc" },
          }}
        >
          <AddIcon />
        </Fab>
      )}
    </Card>
  );
}
