import { Typography, Box, Chip } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ScienceIcon from "@mui/icons-material/Science";
import BuildIcon from "@mui/icons-material/Build";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const jobs = [
  {
    title: "Software Development Engineer (SDE-2)",
    company: "Amazon",
    team: "Prime Member Growth Customer Experience Engineering",
    location: "Seattle, WA",
    dates: "Aug 2023 – Present",
    color: "#8A4AF3",
    bg: "#EDE7FF",
    Icon: RocketLaunchIcon,
    sections: [
      {
        heading: "Newton AI – Multi-Agent Autonomous Marketing Platform",
        tag: "Q4 2025 – Present",
        tagColor: "#8A4AF3",
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
        tag: "Q1–Q4 2025",
        tagColor: "#FF6B6B",
        bullets: [
          "Built conversational AI agent (Python, LangChain, Amazon Bedrock) with custom tools for experiment generation, string asset creation with translation support, and database querying via a specialized sub-agent",
          "Implemented Creative Configuration Agent (Bedrock Agents, later migrated to Strands/AgentCore) with custom action groups for creative planning, content finalization, and asset generation",
        ],
      },
      {
        heading: "Additional Impact",
        tag: null,
        bullets: [
          "Led enterprise-scale migration automation across 22 marketplaces, generating thousands of content assets through a framework integrating multiple rate-limited enterprise APIs — saved months of manual effort",
          "Spearheaded Gen-AI upskilling initiative resulting in 11 SDEs completing Gen-AI certifications, establishing team expertise in agentic systems and modern AI/ML frameworks",
        ],
      },
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company: "Amazon",
    team: "Ripple Experiment Queue (REQ)",
    location: "Seattle, WA",
    dates: "May – Aug 2022",
    color: "#FF6B6B",
    bg: "#FFF0F0",
    Icon: WorkIcon,
    sections: [
      {
        heading: null,
        tag: null,
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
    team: null,
    location: "West Lafayette, IN",
    dates: "Jan – May 2022",
    color: "#00BCD4",
    bg: "#E0F7FA",
    Icon: ScienceIcon,
    sections: [
      {
        heading: null,
        tag: null,
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
    team: null,
    location: "West Lafayette, IN",
    dates: "Mar – Dec 2021",
    color: "#4169E1",
    bg: "#EEF2FF",
    Icon: DirectionsCarIcon,
    sections: [
      {
        heading: null,
        tag: null,
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
    <Box sx={{ maxWidth: 860 }}>
      {/* Page header */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="overline"
          sx={{ color: "#FF6B6B", fontWeight: 700, letterSpacing: "0.12em" }}
        >
          Career
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            color: "#1A1A2E",
            lineHeight: 1.2,
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
            left: { xs: 20, sm: 28 },
            top: 0,
            bottom: 0,
            width: 2,
            background: "linear-gradient(180deg, #8A4AF3, #FF6B6B, #00BCD4, #4169E1)",
            borderRadius: 1,
            opacity: 0.3,
          }}
        />

        {jobs.map((job, i) => (
          <Box
            key={i}
            sx={{
              position: "relative",
              pl: { xs: 6, sm: 8 },
              mb: 3,
              "&:last-child": { mb: 0 },
            }}
          >
            {/* Timeline dot */}
            <Box
              sx={{
                position: "absolute",
                left: { xs: 12, sm: 20 },
                top: 20,
                width: 18,
                height: 18,
                borderRadius: "50%",
                backgroundColor: job.color,
                border: "3px solid #F8F7FC",
                boxShadow: `0 0 0 2px ${job.color}`,
                zIndex: 1,
              }}
            />

            {/* Job card */}
            <Box
              sx={{
                borderRadius: "20px",
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 4px 24px rgba(138, 74, 243, 0.08)",
                overflow: "hidden",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
                "&:hover": {
                  boxShadow: `0px 8px 40px ${job.color}1A`,
                  transform: "translateY(-2px)",
                },
              }}
            >
              {/* Card header */}
              <Box
                sx={{
                  backgroundColor: job.bg,
                  px: 3,
                  py: 2.5,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "12px",
                    backgroundColor: job.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <job.Icon sx={{ color: "#FFFFFF", fontSize: 22 }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      color: "#1A1A2E",
                      lineHeight: 1.3,
                    }}
                  >
                    {job.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: job.color, fontWeight: 600, mt: 0.25 }}
                  >
                    {job.company}
                    {job.team && (
                      <Box
                        component="span"
                        sx={{ color: "#6B7280", fontWeight: 400 }}
                      >
                        {" "}— {job.team}
                      </Box>
                    )}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, mt: 1, flexWrap: "wrap" }}>
                    <Chip
                      label={job.dates}
                      size="small"
                      sx={{
                        backgroundColor: `${job.color}18`,
                        color: job.color,
                        fontWeight: 600,
                        fontSize: "0.7rem",
                        height: 22,
                        borderRadius: "6px",
                      }}
                    />
                    <Chip
                      label={job.location}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(107,114,128,0.1)",
                        color: "#6B7280",
                        fontWeight: 500,
                        fontSize: "0.7rem",
                        height: 22,
                        borderRadius: "6px",
                      }}
                    />
                  </Box>
                </Box>
              </Box>

              {/* Card body */}
              <Box sx={{ px: 3, py: 2.5 }}>
                {job.sections.map((section, s) => (
                  <Box key={s} sx={{ mb: s < job.sections.length - 1 ? 2.5 : 0 }}>
                    {section.heading && (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mb: 1.5,
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 700,
                            color: "#1A1A2E",
                          }}
                        >
                          {section.heading}
                        </Typography>
                        {section.tag && (
                          <Chip
                            label={section.tag}
                            size="small"
                            sx={{
                              backgroundColor: `${section.tagColor}18`,
                              color: section.tagColor,
                              fontWeight: 600,
                              fontSize: "0.65rem",
                              height: 20,
                              borderRadius: "6px",
                            }}
                          />
                        )}
                      </Box>
                    )}
                    <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
                      {section.bullets.map((b, j) => (
                        <Typography
                          key={j}
                          component="li"
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 0.75, lineHeight: 1.65 }}
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
      </Box>
    </Box>
  );
}
