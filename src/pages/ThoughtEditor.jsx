import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  FormControlLabel,
  IconButton,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useAuth, isAdmin } from "../contexts/AuthContext";
import { getPost, createPost, updatePost } from "../services/thoughtsService";

export default function ThoughtEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const admin = isAdmin(currentUser);
  const isNew = id === "new";

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [published, setPublished] = useState(true);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(!isNew);

  useEffect(() => {
    if (!admin) navigate("/thoughts");
  }, [admin, navigate]);

  useEffect(() => {
    if (!isNew && id) {
      getPost(id)
        .then((post) => {
          if (post) {
            setTitle(post.title || "");
            setContent(post.content || "");
            setTags(post.tags?.join(", ") || "");
            setPublished(post.published ?? true);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [id, isNew]);

  const handleSave = async () => {
    if (!title.trim()) return;
    setSaving(true);
    try {
      const tagList = tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      if (isNew) {
        const ref = await createPost(title.trim(), content, tagList, published);
        navigate(`/thoughts/${ref.id}`);
      } else {
        await updatePost(id, { title: title.trim(), content, tags: tagList, published });
        navigate(`/thoughts/${id}`);
      }
    } finally {
      setSaving(false);
    }
  };

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      background: "rgba(255,255,255,0.03)",
      backdropFilter: "blur(12px)",
      "& fieldset": { borderColor: "rgba(255,255,255,0.12)" },
      "&:hover fieldset": { borderColor: "rgba(157,78,221,0.40)" },
      "&.Mui-focused fieldset": { borderColor: "#9D4EDD" },
      color: "#F1F5F9",
    },
    "& .MuiInputLabel-root": { color: "rgba(241,245,249,0.45)" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#9D4EDD" },
  };

  if (loading) {
    return (
      <Box
        sx={{
          p: 4,
          display: "flex",
          justifyContent: "center",
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.09)",
          borderRadius: "20px",
        }}
      >
        <CircularProgress size={32} sx={{ color: "#9D4EDD" }} />
      </Box>
    );
  }

  return (
    <Box>
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4 }}>
        <IconButton
          size="small"
          onClick={() => navigate("/thoughts")}
          sx={{
            color: "rgba(241,245,249,0.45)",
            "&:hover": { color: "#F1F5F9", background: "rgba(255,255,255,0.06)" },
          }}
        >
          <ArrowBackIcon fontSize="small" />
        </IconButton>
        <Box>
          <Typography
            variant="overline"
            sx={{ color: "#9D4EDD", letterSpacing: "0.15em", fontSize: "0.7rem" }}
          >
            {isNew ? "New" : "Edit"}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#F1F5F9",
              lineHeight: 1.2,
            }}
          >
            {isNew ? "New Thought" : "Edit Thought"}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.09)",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 4px 30px rgba(0,0,0,0.20)",
        }}
      >
        <Box sx={{ height: 3, background: "linear-gradient(90deg, #9D4EDD, #00D4FF, transparent)" }} />
        <Box sx={{ p: { xs: 3, md: 4 } }}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            sx={{ ...inputSx, mb: 2.5 }}
          />

          <TextField
            label="Content (Markdown supported)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            fullWidth
            multiline
            minRows={14}
            sx={{
              ...inputSx,
              mb: 2.5,
              "& .MuiOutlinedInput-root": {
                ...inputSx["& .MuiOutlinedInput-root"],
                fontFamily: "monospace",
                fontSize: "0.875rem",
              },
            }}
          />

          <TextField
            label="Tags (comma-separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            fullWidth
            placeholder="react, ai, thoughts"
            sx={{ ...inputSx, mb: 3 }}
          />

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={published}
                  onChange={(e) => setPublished(e.target.checked)}
                  sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": { color: "#9D4EDD" },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      bgcolor: "#9D4EDD",
                    },
                  }}
                />
              }
              label={
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(241,245,249,0.55)", fontSize: "0.85rem" }}
                >
                  {published ? "Published" : "Draft"}
                </Typography>
              }
            />
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <Button
                variant="outlined"
                onClick={() => navigate(isNew ? "/thoughts" : `/thoughts/${id}`)}
                sx={{
                  borderColor: "rgba(255,255,255,0.14)",
                  color: "rgba(241,245,249,0.55)",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.28)",
                    color: "#F1F5F9",
                  },
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleSave}
                disabled={saving || !title.trim()}
                sx={{
                  background: "linear-gradient(135deg, #9D4EDD, #7B2FBE)",
                  boxShadow: "0 4px 20px rgba(157,78,221,0.35)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #C77DFF, #9D4EDD)",
                    boxShadow: "0 6px 28px rgba(157,78,221,0.50)",
                  },
                  "&.Mui-disabled": {
                    background: "rgba(157,78,221,0.20)",
                    color: "rgba(241,245,249,0.30)",
                  },
                }}
              >
                {saving ? "Saving…" : "Save"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
