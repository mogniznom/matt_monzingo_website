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
    title: "Software Development Engineer (SDE-2 Level)",
    company: "Amazon \u2014 Prime Member Growth Customer Experience Engineering",
    location: "Seattle, WA",
    dates: "August 2023 \u2013 Present",
    sections: [
      {
        heading: "AI-First Marketing System (Q4 2025 \u2013 Present)",
        bullets: [
          "Architected and built autonomous AI agent system from scratch using Python and LangChain, with cost-optimized multi-tiered autonomous decision engine that analyzes past experiments and marketplace data to select optimal configurations \u2014 enabling 10,000+ annual experiments across 90+ Prime locations (10x experiment increase over past year)",
          "Reduced marketer effort by 95%+ by automating entire experiment lifecycle \u2014 marketers now only approve/reject autonomous proposals instead of manual experiment creation and management",
          "Drove production validation by collaborating with customers on live testing, deep-diving into subsystem performance metrics, and coordinating rapid bug fixes and feature enhancements",
          "Created AI tooling eliminating 1-hour manual workflow required during production validation via automated data collection, Gen-AI insight generation, and experiment construction",
        ],
      },
      {
        heading: "AI-Assisted Marketing System (Q1\u2013Q4 2025)",
        bullets: [
          "Built conversational AI agent using Python and LangChain with custom tools for experiment generation, automatic string asset creation with translation support, and database querying via specialized sub-agent",
        ],
      },
      {
        heading: "Additional Impact",
        bullets: [
          "Led enterprise-scale migration automation across 22 marketplaces generating thousands of content assets through comprehensive framework integrating multiple rate-limited enterprise APIs \u2014 saved months of manual effort",
          "Spearheaded Gen-AI upskilling initiative resulting in 11 SDEs completing Gen-AI courses, establishing team expertise in agentic systems and modern AI/ML frameworks",
        ],
      },
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company: "Amazon \u2014 Ripple Experiment Queue (REQ)",
    location: "Seattle, WA",
    dates: "May \u2013 August 2022",
    sections: [
      {
        heading: null,
        bullets: [
          "Built a service (REQ) using AWS that automated the end-to-end workflow of the team\u2019s experiment pipeline",
          "Integrated REQ with multiple internal services across teams",
          "Developed a React-based UI for users to interact with the REQ backend",
          "Wrote unit tests using Mockito and performed manual testing to validate functionality",
        ],
      },
    ],
  },
  {
    title: "Undergraduate Research Assistant",
    company: "Purdue University",
    location: "West Lafayette, IN",
    dates: "January \u2013 May 2022",
    sections: [
      {
        heading: null,
        bullets: [
          "Worked on improving training time for the SEAL link prediction method on graph datasets",
          "Achieved a 12% runtime reduction by implementing a producer-consumer queue to optimize GPU data transfer",
          "Researched dataset characteristics to improve the subgraph generation used during model training",
        ],
      },
    ],
  },
  {
    title: "Software Verification Engineer",
    company: "Aptiv",
    location: "West Lafayette, IN",
    dates: "March \u2013 December 2021",
    sections: [
      {
        heading: null,
        bullets: [
          "Developed test scripts for TCP and UDP message validation within a level 2 autonomous driving system",
          "Wrote and optimized CAPL scripts to reduce execution time for Ethernet test sequences",
          "Restructured legacy test scripts to improve maintainability and reduce execution time between releases",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <Card elevation={0}>
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
          <Box
            sx={{
              width: 4,
              height: 28,
              borderRadius: 1,
              background: "linear-gradient(180deg, #00e5ff, #7c4dff)",
            }}
          />
          <Typography variant="h5">Experience</Typography>
        </Box>

        {jobs.map((job, i) => (
          <Box key={i}>
            {i > 0 && <Divider sx={{ my: 3 }} />}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  bgcolor: "rgba(0, 229, 255, 0.08)",
                  border: "1px solid rgba(0, 229, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <WorkIcon sx={{ color: "#00e5ff" }} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1">{job.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {job.company}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#00e5ff",
                    fontFamily: "'Fira Code', monospace",
                    fontSize: "0.75rem",
                    mt: 0.5,
                  }}
                >
                  {job.location} &middot; {job.dates}
                </Typography>

                {job.sections.map((section, s) => (
                  <Box key={s} sx={{ mt: 2 }}>
                    {section.heading && (
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        sx={{ mb: 0.5, color: "#e2e8f0" }}
                      >
                        {section.heading}
                      </Typography>
                    )}
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                      {section.bullets.map((b, j) => (
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
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
