const layers = [
  { label: "Frontend", tech: "React · Vue · TypeScript", color: "bg-indigo", soft: "bg-indigo-soft", text: "text-indigo" },
  { label: "API layer", tech: "Node · PHP · Go", color: "bg-violet", soft: "bg-violet-soft", text: "text-violet" },
  { label: "Data & events", tech: "Kafka · Redis · Postgres", color: "bg-teal", soft: "bg-teal-soft", text: "text-teal" },
];

export default function StackLayers() {
  return (
    <div className="mx-auto flex max-w-lg flex-col gap-3">
      {layers.map((layer, i) => (
        <div
          key={layer.label}
          className={`animate-floaty flex items-center justify-between rounded-2xl border border-border ${layer.soft} px-6 py-4`}
          style={{ animationDelay: `${i * 0.4}s` }}
        >
          <div className="flex items-center gap-3">
            <span className={`h-2.5 w-2.5 rounded-full ${layer.color}`} />
            <span className={`font-display text-sm font-bold ${layer.text}`}>
              {layer.label}
            </span>
          </div>
          <span className="font-mono text-xs text-inkMuted">{layer.tech}</span>
        </div>
      ))}
    </div>
  );
}
