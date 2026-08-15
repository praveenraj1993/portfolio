const projects = [
  {
    name: "Intuit Mailchimp",
    subtitle: "Campaign Editor & SMS Marketing Platform",
    period: "Mar 2023 – Jul 2023",
    description:
      "Marketers build and launch SMS and email campaigns, including AI-assisted content generation inside the Campaign Editor.",
    contribution:
      "Built and maintained React.js frontend features and PHP API endpoints on a legacy monolith. Integrated a generative AI feature and a standalone Go microservice, backed by full Jest/Playwright test coverage and on-call monitoring.",
    stack: ["React", "PHP", "TypeScript", "Go", "MySQL", "Jest", "Playwright", "Docker", "GCP"],
    metric: "+40% throughput",
    accent: "indigo",
  },
  {
    name: "Liiighthouse",
    subtitle: "Unified Video Social Marketplace Platform",
    period: "Jun 2020 – Oct 2022",
    description:
      "High-scale video upload, live-streaming, and social sharing on a unified video social marketplace.",
    contribution:
      "Orchestrated backend infrastructure end to end, high-performance upload and live-streaming APIs, plus an event-driven job pipeline processing 50k+ background jobs daily at 99.9% completion.",
    stack: ["Laravel", "Node.js", "FFmpeg", "Wowza", "Kafka", "Redis", "AWS S3", "AWS RDS", "MongoDB", "Elasticsearch"],
    metric: "-50% transcoding time",
    accent: "teal",
  },
];

const accentSoft: Record<string, string> = {
  indigo: "bg-indigo-soft text-indigo",
  teal: "bg-teal-soft text-teal",
};

export default function Projects() {
  return (
    <section id="projects" className="bg-panel px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-widest text-violet">
          Projects
        </p>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-ink md:text-4xl">
          Things worth showing
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex flex-col rounded-2xl border border-border bg-canvas p-7 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-xl font-bold text-ink">{project.name}</p>
                  <p className="mt-1 text-sm text-inkMuted">{project.subtitle}</p>
                </div>
                <span className="shrink-0 font-mono text-[10px] text-inkFaint">
                  {project.period}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-inkMuted">{project.description}</p>
              <p className="mt-3 text-sm leading-relaxed text-inkMuted">{project.contribution}</p>

              <div
                className={`mt-4 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs font-medium ${accentSoft[project.accent]}`}
              >
                {project.metric}
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-panel px-2.5 py-1 font-mono text-[10px] text-inkMuted"
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
