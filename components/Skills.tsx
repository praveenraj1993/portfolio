const groups = [
  {
    label: "Languages & frameworks",
    accent: "indigo",
    items: [
      "TypeScript", "JavaScript (ES6+)", "PHP", "Go", "React.js", "Vue.js",
      "HTML/CSS", "Node.js", "NestJS", "Express.js", "Laravel", "Blade", "RESTful APIs",
    ],
  },
  {
    label: "Data & messaging",
    accent: "violet",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Kafka", "DynamoDB"],
  },
  {
    label: "Cloud & DevOps",
    accent: "teal",
    items: [
      "AWS (ECS, EC2, Lambda, S3, API Gateway, CloudFront, IAM)",
      "Docker", "GitHub Actions", "Jenkins", "CI/CD",
    ],
  },
  {
    label: "Testing & AI-assisted dev",
    accent: "coral",
    items: ["Jest", "Playwright", "Vitest", "Mocha", "Cursor", "Claude", "Codex"],
  },
];

const accentText: Record<string, string> = {
  indigo: "text-indigo",
  violet: "text-violet",
  teal: "text-teal",
  coral: "text-coral",
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-widest text-teal">
          Skills
        </p>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-ink md:text-4xl">
          What I work with
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {groups.map((group) => (
            <div key={group.label}>
              <p className={`font-display text-sm font-bold ${accentText[group.accent]}`}>
                {group.label}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-panel px-3 py-1.5 text-xs text-inkMuted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-panel p-6">
          <p className="font-display text-sm font-bold text-coral">Education</p>
          <p className="mt-2 text-sm text-ink">
            B.Eng., Electronics &amp; Communication Engineering — Anna
            University, India, 2015{" "}
            <span className="text-inkFaint">(WES evaluated)</span>
          </p>
        </div>
      </div>
    </section>
  );
}
