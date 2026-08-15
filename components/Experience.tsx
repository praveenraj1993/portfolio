const roles = [
  {
    title: "Senior Full Stack Engineer",
    org: "FullStackDevs",
    note: "client: Intuit Mailchimp",
    location: "Canada",
    period: "Mar 2023 – Jul 2023",
    points: [
      "Built React.js features and maintained PHP API endpoints in a legacy monolith, improving delivery speed.",
      "Integrated a generative AI feature into the Campaign Editor with AI scientists — prompt calls, dynamic content rendering.",
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
    points: [
      "Architected RESTful APIs (NestJS, Laravel) and integrated Stripe, Avalara, Wowza, Shippo — cut response times 35%, automated billing to cut manual work 60%.",
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
    points: [
      "Built full-stack features across 3 client projects — logistics management, search rank tracking, airport booking — on PHP/Laravel + React/Vue.js.",
      "Developed reusable components and backend modules, improving development speed 20% while onboarding across multiple stacks.",
    ],
  },
  {
    title: "PHP Developer",
    org: "Igenuine Soft Solutions",
    note: null,
    location: "India",
    period: "Sep 2016 – May 2019",
    points: [
      "Built backend modules in PHP for CRM-style platforms — page creation and content publishing for movie, school, and real estate listings.",
      "Built foundational Git/GitHub-based collaborative development workflows.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-blueprint-line px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs tracking-[0.2em] text-copper">
          FIG. 02 — SERVICE HISTORY
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold text-blueprint-text md:text-3xl">
          Experience
        </h2>

        <div className="mt-10 space-y-10">
          {roles.map((role) => (
            <div
              key={role.title + role.period}
              className="corner-bracket grid gap-3 border border-blueprint-line bg-blueprint-panel/40 p-5 md:grid-cols-[220px_1fr] md:gap-8 md:p-6"
            >
              <div>
                <p className="font-display text-base font-bold text-blueprint-text">
                  {role.title}
                </p>
                <p className="mt-1 text-sm text-blueprint-muted">
                  {role.org}
                  {role.note && (
                    <span className="text-blueprint-mutedDim"> · {role.note}</span>
                  )}
                </p>
                <p className="mt-3 font-mono text-[11px] text-teal">
                  {role.period}
                </p>
                <p className="font-mono text-[11px] text-blueprint-mutedDim">
                  {role.location}
                </p>
              </div>
              <ul className="space-y-2">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-blueprint-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper" />
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
