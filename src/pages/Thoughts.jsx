import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useAuth, isAdmin } from "../contexts/AuthContext";
import { getPosts, getAllPosts } from "../services/thoughtsService";

function formatDate(ts) {
  if (!ts) return "";
  const date = ts.toDate ? ts.toDate() : new Date(ts);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
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
    <Box>
      {/* Section heading + auth controls */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          mb: 4,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box>
          <Typography
            variant="overline"
            sx={{ color: "#9D4EDD", letterSpacing: "0.15em", fontSize: "0.7rem" }}
          >
            Writing
          </Typography>
          <Typography
            variant="h4"
            sx={{
              background: "linear-gradient(135deg, #F1F5F9 30%, rgba(241,245,249,0.5))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Thoughts
          </Typography>
        </Box>

        {/* Auth controls */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {admin && (
            <IconButton
              size="small"
              onClick={() => navigate("/thoughts/new/edit")}
              sx={{
                color: "#9D4EDD",
                background: "rgba(157,78,221,0.10)",
                border: "1px solid rgba(157,78,221,0.25)",
                "&:hover": { background: "rgba(157,78,221,0.18)" },
              }}
            >
              <AddIcon fontSize="small" />
            </IconButton>
          )}
          {currentUser ? (
            <>
              <Typography
                variant="caption"
                sx={{ color: "rgba(241,245,249,0.40)", fontSize: "0.75rem" }}
              >
                {admin ? "admin" : currentUser.displayName}
              </Typography>
              <Button
                size="small"
                onClick={signOut}
                sx={{
                  color: "rgba(241,245,249,0.40)",
                  fontSize: "0.75rem",
                  textTransform: "none",
                  "&:hover": { color: "rgba(241,245,249,0.70)" },
                }}
              >
                Sign out
              </Button>
            </>
          ) : (
            <Button
              size="small"
              onClick={signInWithGoogle}
              sx={{
                color: "rgba(241,245,249,0.40)",
                fontSize: "0.75rem",
                textTransform: "none",
                "&:hover": { color: "rgba(241,245,249,0.70)" },
              }}
            >
              Sign in
            </Button>
          )}
        </Box>
      </Box>

      {/* Loading */}
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
          <CircularProgress size={32} sx={{ color: "#9D4EDD" }} />
        </Box>
      )}

      {/* Empty state */}
      {!loading && posts.length === 0 && (
        <Box
          sx={{
            py: 8,
            textAlign: "center",
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "20px",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "rgba(241,245,249,0.30)", letterSpacing: "0.08em" }}
          >
            nothing here yet
          </Typography>
        </Box>
      )}

      {/* Post list */}
      {!loading && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {posts.map((post, i) => (
            <Box
              key={post.id}
              onClick={() => navigate(`/thoughts/${post.id}`)}
              sx={{
                cursor: "pointer",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  borderColor: "rgba(157,78,221,0.30)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.28), 0 0 20px rgba(157,78,221,0.12)",
                },
              }}
            >
              {/* Accent strip */}
              <Box
                sx={{
                  height: 2,
                  background: `linear-gradient(90deg, #9D4EDD ${i % 2 === 0 ? "" : "40%"}, #00D4FF, transparent)`,
                }}
              />
              <Box sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 2,
                    mb: 0.75,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#F1F5F9",
                      fontSize: "1rem",
                      fontWeight: 600,
                      lineHeight: 1.4,
                    }}
                  >
                    {post.title}
                  </Typography>
                  {!post.published && (
                    <Chip
                      label="draft"
                      size="small"
                      sx={{
                        fontSize: "0.65rem",
                        height: 20,
                        bgcolor: "rgba(157,78,221,0.12)",
                        color: "#C77DFF",
                        border: "1px solid rgba(157,78,221,0.30)",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </Box>

                <Typography
                  variant="caption"
                  sx={{
                    color: "#9D4EDD",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                  }}
                >
                  {formatDate(post.createdAt)}
                </Typography>

                {post.tags?.length > 0 && (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: 1 }}>
                    {post.tags.map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        sx={{
                          fontSize: "0.65rem",
                          height: 20,
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.10)",
                          color: "rgba(241,245,249,0.60)",
                        }}
                      />
                    ))}
                  </Box>
                )}

                <Typography
                  variant="body2"
                  sx={{ mt: 1.25, color: "rgba(241,245,249,0.55)", lineHeight: 1.7 }}
                >
                  {excerpt(post.content)}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
