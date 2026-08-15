const projects = [
  {
    name: "Intuit Mailchimp",
    subtitle: "Campaign Editor & SMS Marketing Platform",
    period: "Mar 2023 – Jul 2023",
    description:
      "Marketers build and launch SMS and email campaigns, including AI-assisted content generation inside the Campaign Editor.",
    contribution:
      "Built and maintained React.js frontend features and PHP API endpoints on a legacy monolith. Integrated a generative AI feature and a standalone Go microservice into the platform, backed by full Jest/Playwright test coverage and on-call monitoring.",
    stack: ["React", "PHP", "TypeScript", "Go", "MySQL", "Jest", "Playwright", "Docker", "GCP"],
    metric: "+40% throughput",
  },
  {
    name: "Liiighthouse",
    subtitle: "Unified Video Social Marketplace Platform",
    period: "Jun 2020 – Oct 2022",
    description:
      "High-scale video upload, live-streaming, and social sharing on a unified video social marketplace.",
    contribution:
      "Orchestrated backend infrastructure end to end — high-performance upload and live-streaming APIs, plus an event-driven job pipeline processing 50k+ background jobs daily at 99.9% completion.",
    stack: ["Laravel", "Node.js", "FFmpeg", "Wowza", "Kafka", "Redis", "AWS S3", "AWS RDS", "MongoDB", "Elasticsearch"],
    metric: "-50% transcoding time",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-b border-blueprint-line px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs tracking-[0.2em] text-copper">
          FIG. 03 — SELECTED BUILDS
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold text-blueprint-text md:text-3xl">
          Projects
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="corner-bracket flex flex-col border border-blueprint-line bg-blueprint-panel/40 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-lg font-bold text-blueprint-text">
                    {project.name}
                  </p>
                  <p className="mt-1 text-sm text-blueprint-muted">
                    {project.subtitle}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-[10px] text-blueprint-mutedDim">
                  {project.period}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-blueprint-muted">
                {project.description}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-blueprint-muted">
                {project.contribution}
              </p>

              <div className="mt-4 inline-flex w-fit items-center gap-2 border border-teal/30 bg-teal/5 px-2.5 py-1 font-mono text-[11px] text-teal">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                {project.metric}
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-blueprint-line px-2 py-1 font-mono text-[10px] text-blueprint-mutedDim"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
