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
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useAuth, isAdmin } from "../contexts/AuthContext";
import { getPosts, getAllPosts } from "../services/thoughtsService";

function formatDate(ts) {
  if (!ts) return "";
  const date = ts.toDate ? ts.toDate() : new Date(ts);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function excerpt(content, max = 160) {
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
      {/* Page header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          mb: 8,
        }}
      >
        <Box>
          <Typography
            variant="caption"
            sx={{
              color: "#5B5FC7",
              display: "block",
              mb: 2,
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
            }}
          >
            WRITING
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2.75rem", md: "4rem" },
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              color: "#111111",
            }}
          >
            Thoughts
          </Typography>
        </Box>

        {/* Auth controls */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, pb: 1 }}>
          {admin && (
            <IconButton
              size="small"
              onClick={() => navigate("/thoughts/new/edit")}
              sx={{
                bgcolor: "#5B5FC7",
                color: "#FFFFFF",
                "&:hover": { bgcolor: "#4A4EB6" },
                width: 32,
                height: 32,
              }}
            >
              <AddIcon fontSize="small" />
            </IconButton>
          )}
          {currentUser ? (
            <>
              <Typography
                variant="caption"
                sx={{ color: "#9CA3AF", fontSize: "0.75rem" }}
              >
                {admin ? "admin" : currentUser.displayName}
              </Typography>
              <Button
                size="small"
                onClick={signOut}
                sx={{
                  color: "#9CA3AF",
                  fontSize: "0.72rem",
                  textTransform: "none",
                  "&:hover": { color: "#111111" },
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
                color: "#9CA3AF",
                fontSize: "0.72rem",
                textTransform: "none",
                "&:hover": { color: "#111111" },
              }}
            >
              Sign in
            </Button>
          )}
        </Box>
      </Box>

      {/* Loading */}
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", py: 12 }}>
          <CircularProgress size={28} sx={{ color: "#5B5FC7" }} />
        </Box>
      )}

      {/* Empty state */}
      {!loading && posts.length === 0 && (
        <Box
          sx={{
            py: 12,
            textAlign: "center",
            border: "1px dashed #E5E7EB",
            borderRadius: 3,
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "0.9rem" }}
          >
            No posts yet. Check back soon.
          </Typography>
        </Box>
      )}

      {/* Post list */}
      {!loading && posts.length > 0 && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {posts.map((post, i) => (
            <Box
              key={post.id}
              onClick={() => navigate(`/thoughts/${post.id}`)}
              sx={{
                p: { xs: 3, md: 4 },
                bgcolor: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: 3,
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 2,
                transition: "all 0.15s ease",
                "&:hover": {
                  borderColor: "#5B5FC7",
                  bgcolor: "#F8F8FD",
                  "& .post-arrow": {
                    color: "#5B5FC7",
                    transform: "translate(2px, -2px)",
                  },
                },
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 0.5,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "0.75rem",
                      color: "#9CA3AF",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {formatDate(post.createdAt)}
                  </Typography>
                  {!post.published && (
                    <Chip
                      label="draft"
                      size="small"
                      sx={{
                        height: 18,
                        fontSize: "0.62rem",
                        bgcolor: "rgba(224, 122, 95, 0.1)",
                        color: "#E07A5F",
                        border: "1px solid rgba(224, 122, 95, 0.3)",
                      }}
                    />
                  )}
                </Box>

                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{
                    letterSpacing: "-0.01em",
                    color: "#111111",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    mb: 1,
                  }}
                >
                  {post.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.65, fontSize: "0.875rem", mb: 1.5 }}
                >
                  {excerpt(post.content)}
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
                          height: 22,
                          fontSize: "0.7rem",
                          borderRadius: "6px",
                          borderColor: "#E5E7EB",
                          color: "#6B7280",
                        }}
                      />
                    ))}
                  </Box>
                )}
              </Box>

              <Box
                className="post-arrow"
                sx={{
                  color: "#D1D5DB",
                  transition: "all 0.15s ease",
                  flexShrink: 0,
                  mt: 0.5,
                }}
              >
                <ArrowOutwardIcon sx={{ fontSize: 18 }} />
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
