import { Box, Chip, Typography } from "@mui/material";

const JOB_COLORS = [
  { accent: "#9D4EDD", light: "rgba(157, 78, 221, 0.15)", border: "rgba(157, 78, 221, 0.30)" },
  { accent: "#00D4FF", light: "rgba(0, 212, 255, 0.12)", border: "rgba(0, 212, 255, 0.28)" },
  { accent: "#F72585", light: "rgba(247, 37, 133, 0.12)", border: "rgba(247, 37, 133, 0.28)" },
  { accent: "#4361EE", light: "rgba(67, 97, 238, 0.12)", border: "rgba(67, 97, 238, 0.28)" },
];

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
      {/* Section heading */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="overline"
          sx={{ color: "#9D4EDD", letterSpacing: "0.15em", fontSize: "0.7rem" }}
        >
          Career
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
          Experience
        </Typography>
      </Box>

      {/* Timeline */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {jobs.map((job, i) => {
          const colors = JOB_COLORS[i % JOB_COLORS.length];
          return (
            <Box
              key={i}
              sx={{
                background: "rgba(255, 255, 255, 0.04)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.09)",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 4px 30px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.07)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 48px rgba(0,0,0,0.30)",
                },
              }}
            >
              {/* Colored top strip */}
              <Box
                sx={{
                  height: 3,
                  background: `linear-gradient(90deg, ${colors.accent}, transparent)`,
                }}
              />

              <Box sx={{ p: { xs: 3, md: 4 } }}>
                {/* Job header */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: { xs: 1, sm: 2 },
                    alignItems: { xs: "flex-start", sm: "center" },
                    justifyContent: "space-between",
                    mb: 2.5,
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#F1F5F9",
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        mb: 0.5,
                      }}
                    >
                      {job.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(241,245,249,0.55)" }}
                    >
                      {job.company}
                    </Typography>
                  </Box>
                  <Chip
                    label={job.dates}
                    size="small"
                    sx={{
                      fontSize: "0.72rem",
                      height: 24,
                      background: colors.light,
                      border: `1px solid ${colors.border}`,
                      color: colors.accent,
                      flexShrink: 0,
                      fontWeight: 500,
                    }}
                  />
                </Box>

                {/* Sections */}
                {job.sections.map((section, s) => (
                  <Box key={s} sx={{ mt: s > 0 ? 2.5 : 0 }}>
                    {section.heading && (
                      <Box
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 1,
                          mb: 1.5,
                          px: 2,
                          py: 0.6,
                          borderRadius: "8px",
                          background: colors.light,
                          border: `1px solid ${colors.border}`,
                        }}
                      >
                        <Box
                          sx={{
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            bgcolor: colors.accent,
                            boxShadow: `0 0 6px ${colors.accent}`,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 600,
                            color: colors.accent,
                            fontSize: "0.8rem",
                          }}
                        >
                          {section.heading}
                        </Typography>
                      </Box>
                    )}
                    <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
                      {section.bullets.map((b, j) => (
                        <Typography
                          key={j}
                          component="li"
                          variant="body2"
                          sx={{
                            mb: 0.75,
                            color: "rgba(241,245,249,0.70)",
                            lineHeight: 1.75,
                            "&::marker": { color: colors.accent },
                          }}
                        >
                          {b}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
