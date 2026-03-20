import { Card, CardContent, Typography, Box } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

const jobs = [
  {
    title: "Software Development Engineer (SDE-2)",
    company: "Amazon — Prime Member Growth Customer Experience Engineering",
    location: "Seattle, WA",
    dates: "August 2023 – Present",
    sections: [
      {
        heading: "Newton AI – Multi-Agent Autonomous Marketing Platform (Q4 2025 – Present)",
        bullets: [
          "Architected and built a production multi-agent system from scratch on Strands Agents SDK and Amazon Bedrock AgentCore, running Claude Sonnet 4 across 6 specialized agents — enabling fully autonomous signal-to-experiment pipelines across 90+ WW Prime locations",
          "Designed a typed agent framework (BaseAgent<TInput, TOutput>) with Zod-based input validation, structured output parsing, streaming SSE support, and pluggable tool integration",
          "Built the signal → opportunity pipeline end-to-end: signal ingestion, opportunity data layer, targeting criteria enrichment, and parallel agent evaluations across marketplace → location → atom dimensions",
          "Developed production RAG integration: knowledge base-driven localization, location-specific context loading, and knowledge graph action groups wired into the autonomous Creative Configuration Agent",
          "Built 3-tier testing infrastructure: unit tests with mocked Bedrock responses, integration test harness running live AgentCore agents, and pipeline integration tests with automated approval gates",
          "Reduced marketer effort by 95%+ by automating the full experiment lifecycle: signal detection → opportunity evaluation → content generation → launch → analysis → learning loop",
        ],
      },
      {
        heading: "AI-Assisted Marketing Agent (Q1–Q4 2025)",
        bullets: [
          "Built conversational AI agent (Python, LangChain, Amazon Bedrock) with custom tools for experiment generation, string asset creation with translation support, and database querying via a specialized sub-agent",
          "Implemented Creative Configuration Agent (Bedrock Agents, later migrated to Strands/AgentCore) with custom action groups for creative planning, content finalization, and asset generation",
        ],
      },
      {
        heading: "Additional Impact",
        bullets: [
          "Led enterprise-scale migration automation across 22 marketplaces, generating thousands of content assets through a framework integrating multiple rate-limited enterprise APIs — saved months of manual effort",
          "Spearheaded Gen-AI upskilling initiative resulting in 11 SDEs completing Gen-AI certifications, establishing team expertise in agentic systems and modern AI/ML frameworks",
        ],
      },
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company: "Amazon — Ripple Experiment Queue (REQ)",
    location: "Seattle, WA",
    dates: "May – August 2022",
    sections: [
      {
        heading: null,
        bullets: [
          "Built a service (REQ) using AWS that automated the end-to-end workflow of the team's experiment pipeline",
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
    dates: "January – May 2022",
    sections: [
      {
        heading: null,
        bullets: [
          "Worked on improving training time for the SEAL link prediction method on graph datasets",
          "Achieved a 12% runtime reduction by implementing a producer-consumer queue to optimize GPU data transfer",
          "Researched dataset characteristics to improve subgraph generation used during model training",
        ],
      },
    ],
  },
  {
    title: "Software Verification Engineer",
    company: "Aptiv",
    location: "West Lafayette, IN",
    dates: "March – December 2021",
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
    <Box>
      {/* Section header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 4 }}>
        <Box
          sx={{
            width: 4,
            height: 28,
            borderRadius: 1,
            background: "linear-gradient(180deg, #7C5CFC, #8B7BF7)",
          }}
        />
        <Typography variant="h5">Experience</Typography>
      </Box>

      {/* Timeline */}
      <Box sx={{ position: "relative" }}>
        {/* Vertical gradient line */}
        <Box
          sx={{
            position: "absolute",
            left: 17,
            top: 8,
            bottom: 8,
            width: 2,
            borderRadius: 1,
            background:
              "linear-gradient(180deg, #7C5CFC 0%, rgba(139,123,247,0.3) 60%, transparent 100%)",
          }}
        />

        {jobs.map((job, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 0,
              mb: i < jobs.length - 1 ? 3 : 0,
            }}
          >
            {/* Dot column */}
            <Box
              sx={{
                width: 36,
                flexShrink: 0,
                display: "flex",
                justifyContent: "center",
                pt: "22px",
                zIndex: 1,
              }}
            >
              <Box
                sx={{
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                  bgcolor: i === 0 ? "#7C5CFC" : "#1C1C28",
                  border: `2px solid ${i === 0 ? "#8B7BF7" : "#3A3A50"}`,
                  boxShadow:
                    i === 0 ? "0 0 12px rgba(124,92,252,0.6)" : "none",
                  transition: "box-shadow 0.2s",
                }}
              />
            </Box>

            {/* Card */}
            <Card
              elevation={0}
              sx={{
                flex: 1,
                transition: "border-color 0.2s ease",
                "&:hover": { borderColor: "rgba(139,123,247,0.28)" },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                {/* Job header */}
                <Box sx={{ display: "flex", gap: 1.5, mb: 2 }}>
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: 1.5,
                      bgcolor: "rgba(139,123,247,0.08)",
                      border: "1px solid rgba(139,123,247,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <WorkIcon sx={{ color: "#8B7BF7", fontSize: 18 }} />
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                      sx={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        color: "#E8E8ED",
                        lineHeight: 1.3,
                      }}
                    >
                      {job.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.2 }}
                    >
                      {job.company}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Fira Code', monospace",
                        fontSize: "0.7rem",
                        color: "#8B7BF7",
                        mt: 0.3,
                      }}
                    >
                      {job.location} · {job.dates}
                    </Typography>
                  </Box>
                </Box>

                {/* Sections */}
                {job.sections.map((section, s) => (
                  <Box key={s} sx={{ mt: s > 0 ? 2 : 0 }}>
                    {section.heading && (
                      <Typography
                        sx={{
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          color: "#E8E8ED",
                          mb: 0.75,
                          lineHeight: 1.4,
                        }}
                      >
                        {section.heading}
                      </Typography>
                    )}
                    <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
                      {section.bullets.map((b, j) => (
                        <Typography
                          key={j}
                          component="li"
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 0.5, lineHeight: 1.65 }}
                        >
                          {b}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
