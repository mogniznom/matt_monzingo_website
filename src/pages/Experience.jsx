import { Box, Chip, Typography } from "@mui/material";

const jobs = [
  {
    title: "Software Development Engineer (SDE-2)",
    company: "Amazon",
    team: "Prime Member Growth CX Engineering",
    location: "Seattle, WA",
    dates: "Aug 2023 – Present",
    current: true,
    sections: [
      {
        heading: "Newton AI – Multi-Agent Autonomous Marketing Platform",
        period: "Q4 2025 – Present",
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
        heading: "AI-Assisted Marketing Agent",
        period: "Q1–Q4 2025",
        bullets: [
          "Built conversational AI agent (Python, LangChain, Amazon Bedrock) with custom tools for experiment generation, string asset creation with translation support, and database querying via a specialized sub-agent",
          "Implemented Creative Configuration Agent (Bedrock Agents, later migrated to Strands/AgentCore) with custom action groups for creative planning, content finalization, and asset generation",
        ],
      },
      {
        heading: "Additional Impact",
        period: null,
        bullets: [
          "Led enterprise-scale migration automation across 22 marketplaces, generating thousands of content assets through a framework integrating multiple rate-limited enterprise APIs — saved months of manual effort",
          "Spearheaded Gen-AI upskilling initiative resulting in 11 SDEs completing Gen-AI certifications, establishing team expertise in agentic systems and modern AI/ML frameworks",
        ],
      },
    ],
    tags: ["Strands Agents SDK", "Bedrock AgentCore", "Python", "TypeScript", "LangChain"],
  },
  {
    title: "Software Development Engineer Intern",
    company: "Amazon",
    team: "Ripple Experiment Queue (REQ)",
    location: "Seattle, WA",
    dates: "May – Aug 2022",
    current: false,
    sections: [
      {
        heading: null,
        period: null,
        bullets: [
          "Built a service (REQ) using AWS that automated the end-to-end workflow of the team's experiment pipeline",
          "Integrated REQ with multiple internal services across teams",
          "Developed a React-based UI for users to interact with the REQ backend",
          "Wrote unit tests using Mockito and performed manual testing to validate functionality",
        ],
      },
    ],
    tags: ["AWS", "React", "Java"],
  },
  {
    title: "Undergraduate Research Assistant",
    company: "Purdue University",
    team: null,
    location: "West Lafayette, IN",
    dates: "Jan – May 2022",
    current: false,
    sections: [
      {
        heading: null,
        period: null,
        bullets: [
          "Worked on improving training time for the SEAL link prediction method on graph datasets",
          "Achieved a 12% runtime reduction by implementing a producer-consumer queue to optimize GPU data transfer",
          "Researched dataset characteristics to improve subgraph generation used during model training",
        ],
      },
    ],
    tags: ["Python", "PyTorch", "Graph ML"],
  },
  {
    title: "Software Verification Engineer",
    company: "Aptiv",
    team: null,
    location: "West Lafayette, IN",
    dates: "Mar – Dec 2021",
    current: false,
    sections: [
      {
        heading: null,
        period: null,
        bullets: [
          "Developed test scripts for TCP and UDP message validation within a level 2 autonomous driving system",
          "Wrote and optimized CAPL scripts to reduce execution time for Ethernet test sequences",
          "Restructured legacy test scripts to improve maintainability and reduce execution time between releases",
        ],
      },
    ],
    tags: ["Embedded Systems", "Testing", "CAPL"],
  },
];

export default function Experience() {
  return (
    <Box>
      {/* Page header */}
      <Box sx={{ mb: 8 }}>
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
          CAREER
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
          Experience
        </Typography>
      </Box>

      {/* Timeline */}
      <Box sx={{ position: "relative" }}>
        {/* Vertical line */}
        <Box
          sx={{
            position: "absolute",
            left: { xs: 16, md: 24 },
            top: 0,
            bottom: 0,
            width: "1px",
            bgcolor: "#E5E7EB",
            zIndex: 0,
          }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {jobs.map((job, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                gap: { xs: 3, md: 5 },
                position: "relative",
                pb: i < jobs.length - 1 ? 8 : 0,
              }}
            >
              {/* Timeline dot */}
              <Box sx={{ flexShrink: 0, position: "relative", zIndex: 1 }}>
                <Box
                  sx={{
                    width: { xs: 33, md: 49 },
                    height: { xs: 33, md: 49 },
                    borderRadius: "50%",
                    bgcolor: job.current ? "#5B5FC7" : "#FFFFFF",
                    border: job.current ? "none" : "1.5px solid #E5E7EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      color: job.current ? "#FFFFFF" : "#9CA3AF",
                      letterSpacing: "0",
                    }}
                  >
                    {String(jobs.length - i).padStart(2, "0")}
                  </Typography>
                </Box>
              </Box>

              {/* Content */}
              <Box sx={{ flex: 1, pt: 0.5 }}>
                {/* Header */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 1,
                    mb: 0.5,
                  }}
                >
                  <Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        sx={{
                          fontSize: { xs: "1rem", md: "1.1rem" },
                          letterSpacing: "-0.01em",
                          color: "#111111",
                        }}
                      >
                        {job.title}
                      </Typography>
                      {job.current && (
                        <Chip
                          label="Current"
                          size="small"
                          sx={{
                            height: 20,
                            fontSize: "0.65rem",
                            fontWeight: 600,
                            bgcolor: "rgba(91, 95, 199, 0.1)",
                            color: "#5B5FC7",
                            border: "none",
                            letterSpacing: "0.02em",
                          }}
                        />
                      )}
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ color: "#374151", fontWeight: 500, mt: 0.25 }}
                    >
                      {job.company}
                      {job.team && (
                        <Box component="span" sx={{ color: "#9CA3AF", fontWeight: 400 }}>
                          {" "}· {job.team}
                        </Box>
                      )}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: { xs: "left", sm: "right" } }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.8rem",
                        color: "#6B7280",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {job.dates}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "0.78rem", color: "#9CA3AF" }}
                    >
                      {job.location}
                    </Typography>
                  </Box>
                </Box>

                {/* Sections */}
                <Box sx={{ mt: 2 }}>
                  {job.sections.map((section, s) => (
                    <Box key={s} sx={{ mb: s < job.sections.length - 1 ? 3 : 0 }}>
                      {section.heading && (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "baseline",
                            gap: 1.5,
                            mb: 1.5,
                            pb: 1,
                            borderBottom: "1px solid #F3F4F6",
                          }}
                        >
                          <Typography
                            variant="body2"
                            fontWeight={600}
                            sx={{ color: "#374151", fontSize: "0.9rem" }}
                          >
                            {section.heading}
                          </Typography>
                          {section.period && (
                            <Typography
                              variant="body2"
                              sx={{
                                fontSize: "0.75rem",
                                color: "#9CA3AF",
                                flexShrink: 0,
                              }}
                            >
                              {section.period}
                            </Typography>
                          )}
                        </Box>
                      )}
                      <Box
                        component="ul"
                        sx={{ pl: 0, m: 0, listStyle: "none" }}
                      >
                        {section.bullets.map((bullet, j) => (
                          <Box
                            key={j}
                            component="li"
                            sx={{
                              display: "flex",
                              gap: 1.5,
                              mb: 1,
                              "&:last-child": { mb: 0 },
                            }}
                          >
                            <Box
                              sx={{
                                width: 4,
                                height: 4,
                                borderRadius: "50%",
                                bgcolor: "#D1D5DB",
                                flexShrink: 0,
                                mt: "9px",
                              }}
                            />
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{ lineHeight: 1.65 }}
                            >
                              {bullet}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  ))}
                </Box>

                {/* Tags */}
                {job.tags && (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.75,
                      mt: 2.5,
                    }}
                  >
                    {job.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
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
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
