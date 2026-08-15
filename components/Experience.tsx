const roles = [
  {
    title: "Senior Full Stack Engineer",
    org: "FullStackDevs",
    note: "client: Intuit Mailchimp",
    location: "Canada",
    period: "Mar 2023 – Jul 2023",
    accent: "indigo",
    points: [
      "Built React.js features and maintained PHP API endpoints in a legacy monolith, improving delivery speed.",
      "Integrated a generative AI feature into the Campaign Editor with AI scientists, prompt calls, dynamic content rendering.",
      "Implemented Jest and Playwright test coverage; ran on-call rotation via PagerDuty for production reliability.",
      "Built a Go microservice for a core backend workload, improving throughput by 40% over the prior implementation.",
    ],
  },
  {
    title: "Senior Software Developer",
    org: "IBIL Software Solutions",
    note: null,
    location: "India",
    period: "Jul 2020 – Oct 2022",
    accent: "violet",
    points: [
      "Architected RESTful APIs (NestJS, Laravel) and integrated Stripe, Avalara, Wowza, Shippo cut response times 35%, automated billing to cut manual work 60%.",
      "Implemented JWT auth and RBAC; built Kafka/Redis async pipelines handling 50k+ events/day.",
      "Mentored junior engineers and defined API contracts, boosting delivery velocity 25% and cutting integration defects 30%.",
      "Led technical design and API validation across 4 services, reducing deployment failures by 30%.",
    ],
  },
  {
    title: "Application Developer",
    org: "Logidots Technologies",
    note: null,
    location: "India",
    period: "May 2019 – Jun 2020",
    accent: "teal",
    points: [
      "Built full-stack features across 3 client projects - logistics management, search rank tracking, airport booking on PHP/Laravel + React/Vue.js.",
      "Developed reusable components and backend modules, improving development speed 20% while onboarding across multiple stacks.",
    ],
  },
  {
    title: "PHP Developer",
    org: "Igenuine Soft Solutions",
    note: null,
    location: "India",
    period: "Sep 2016 – May 2019",
    accent: "coral",
    points: [
      "Built backend modules in PHP/WordPress for CRM-style platforms - page creation and content publishing for movie, school, and real estate listings.",
      "Built foundational Git/GitHub-based collaborative development workflows.",
    ],
  },
];

const accentBar: Record<string, string> = {
  indigo: "bg-indigo",
  violet: "bg-violet",
  teal: "bg-teal",
  coral: "bg-coral",
};
const accentText: Record<string, string> = {
  indigo: "text-indigo",
  violet: "text-violet",
  teal: "text-teal",
  coral: "text-coral",
};

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-widest text-indigo">
          Experience
        </p>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-ink md:text-4xl">
          Where I&apos;ve built things
        </h2>

        <div className="mt-12 space-y-6">
          {roles.map((role) => (
            <div
              key={role.title + role.period}
              className="relative overflow-hidden rounded-2xl border border-border bg-panel p-6 shadow-sm md:p-8"
            >
              <span
                className={`absolute left-0 top-0 h-full w-1.5 ${accentBar[role.accent]}`}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="font-display text-lg font-bold text-ink">
                    {role.title}
                  </p>
                  <p className="mt-1 text-sm text-inkMuted">
                    {role.org}
                    {role.note && (
                      <span className="text-inkFaint"> · {role.note}</span>
                    )}
                  </p>
                </div>
                <div className="text-right">
                  <p className={`font-mono text-xs font-medium ${accentText[role.accent]}`}>
                    {role.period}
                  </p>
                  <p className="font-mono text-xs text-inkFaint">{role.location}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-inkMuted">
                    <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accentBar[role.accent]}`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
