import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  IconButton,
  CircularProgress,
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

  // Redirect non-admins
  useEffect(() => {
    if (!admin) navigate("/thoughts");
  }, [admin, navigate]);

  // Load existing post for edit
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
      "& fieldset": { borderColor: "rgba(0, 229, 255, 0.2)" },
      "&:hover fieldset": { borderColor: "rgba(0, 229, 255, 0.4)" },
      "&.Mui-focused fieldset": { borderColor: "#00e5ff" },
      color: "#e2e8f0",
    },
    "& .MuiInputLabel-root": { color: "#64748b" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#00e5ff" },
  };

  if (loading) {
    return (
      <Card elevation={0}>
        <CardContent sx={{ p: 4, display: "flex", justifyContent: "center" }}>
          <CircularProgress size={32} sx={{ color: "#00e5ff" }} />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card elevation={0}>
      <CardContent sx={{ p: 4 }}>
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
          <IconButton size="small" onClick={() => navigate("/thoughts")} sx={{ color: "#64748b" }}>
            <ArrowBackIcon fontSize="small" />
          </IconButton>
          <Box sx={{ width: 4, height: 28, borderRadius: 1, background: "linear-gradient(180deg, #00e5ff, #7c4dff)" }} />
          <Typography variant="h5">{isNew ? "New Thought" : "Edit Thought"}</Typography>
        </Box>

        {/* Title */}
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          sx={{ ...inputSx, mb: 2.5 }}
        />

        {/* Content */}
        <TextField
          label="Content (Markdown supported)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          fullWidth
          multiline
          minRows={12}
          sx={{ ...inputSx, mb: 2.5, "& .MuiOutlinedInput-root": { ...inputSx["& .MuiOutlinedInput-root"], fontFamily: "'Fira Code', monospace", fontSize: "0.85rem" } }}
        />

        {/* Tags */}
        <TextField
          label="Tags (comma-separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          fullWidth
          placeholder="react, ai, thoughts"
          sx={{ ...inputSx, mb: 2.5 }}
        />

        {/* Published toggle + actions */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <FormControlLabel
            control={
              <Switch
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": { color: "#00e5ff" },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": { bgcolor: "#00e5ff" },
                }}
              />
            }
            label={<Typography variant="body2" sx={{ color: "#94a3b8" }}>{published ? "Published" : "Draft"}</Typography>}
          />
          <Box sx={{ display: "flex", gap: 1.5 }}>
            <Button
              variant="outlined"
              onClick={() => navigate(isNew ? "/thoughts" : `/thoughts/${id}`)}
              sx={{ borderColor: "rgba(0,229,255,0.2)", color: "#64748b", "&:hover": { borderColor: "rgba(0,229,255,0.4)" } }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSave}
              disabled={saving || !title.trim()}
              sx={{ bgcolor: "#00e5ff", color: "#0a0e17", "&:hover": { bgcolor: "#00b8cc" }, "&:disabled": { bgcolor: "rgba(0,229,255,0.2)" } }}
            >
              {saving ? "Saving…" : "Save"}
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
