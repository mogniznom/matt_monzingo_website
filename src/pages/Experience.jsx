import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

const jobs = [
  {
    title: "Software Engineer",
    company: "Company Name",
    dates: "Jan 2023 – Present",
    bullets: [
      "Developed and maintained web applications using modern frameworks.",
      "Collaborated with cross-functional teams to deliver high-quality software.",
    ],
  },
  {
    title: "Junior Developer",
    company: "Previous Company",
    dates: "Jun 2021 – Dec 2022",
    bullets: [
      "Built RESTful APIs and contributed to front-end development.",
      "Participated in code reviews and agile development practices.",
    ],
  },
];

export default function Experience() {
  return (
    <Card elevation={1}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Experience
        </Typography>

        {jobs.map((job, i) => (
          <Box key={i}>
            {i > 0 && <Divider sx={{ my: 3 }} />}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  bgcolor: "grey.100",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <WorkIcon color="primary" />
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  {job.title}
                </Typography>
                <Typography variant="body2">{job.company}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {job.dates}
                </Typography>
                <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                  {job.bullets.map((b, j) => (
                    <Typography
                      key={j}
                      component="li"
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 0.5 }}
                    >
                      {b}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
