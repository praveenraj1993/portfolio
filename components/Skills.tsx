const groups = [
  {
    label: "LANGUAGES & FRAMEWORKS",
    items: [
      "TypeScript", "JavaScript (ES6+)", "PHP", "Go", "React.js", "Vue.js",
      "HTML/CSS", "Node.js", "NestJS", "Express.js", "Laravel", "Blade", "RESTful APIs",
    ],
  },
  {
    label: "DATA & MESSAGING",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Kafka", "DynamoDB"],
  },
  {
    label: "CLOUD & DEVOPS",
    items: [
      "AWS (ECS, EC2, Lambda, S3, API Gateway, CloudFront, IAM)",
      "Docker", "GitHub Actions", "Jenkins", "CI/CD",
    ],
  },
  {
    label: "TESTING & AI-ASSISTED DEV",
    items: ["Jest", "Playwright", "Vitest", "Mocha", "Cursor", "Claude", "Codex"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-blueprint-line px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs tracking-[0.2em] text-copper">
          FIG. 04 — COMPONENT LIBRARY
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold text-blueprint-text md:text-3xl">
          Skills
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-[11px] tracking-[0.15em] text-blueprint-mutedDim">
                {group.label}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-blueprint-line bg-blueprint-panel/40 px-2.5 py-1 text-xs text-blueprint-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-blueprint-line bg-blueprint-panel/40 p-5">
          <p className="font-mono text-[11px] tracking-[0.15em] text-blueprint-mutedDim">
            EDUCATION
          </p>
          <p className="mt-2 text-sm text-blueprint-text">
            B.Eng., Electronics &amp; Communication Engineering — Anna
            University, India, 2015{" "}
            <span className="text-blueprint-mutedDim">(WES evaluated)</span>
          </p>
        </div>
      </div>
    </section>
  );
}
