const nodes = [
  { label: "CLIENT", sub: "React / Vue", x: 20 },
  { label: "API", sub: "Node / PHP / Go", x: 180 },
  { label: "QUEUE", sub: "Kafka / Redis", x: 340 },
  { label: "STORE", sub: "Postgres / Mongo", x: 500 },
];

export default function SystemDiagram() {
  return (
    <div className="w-full overflow-x-auto py-4">
      <svg
        viewBox="0 0 620 120"
        className="w-full min-w-[560px] max-w-2xl"
        role="img"
        aria-label="System architecture diagram: Client connects to API, which connects to Queue, which connects to Store"
      >
        {/* connecting line with animated pulse */}
        <line
          x1="60"
          y1="60"
          x2="560"
          y2="60"
          stroke="#1C3E52"
          strokeWidth="2"
        />
        <line
          x1="60"
          y1="60"
          x2="560"
          y2="60"
          stroke="#FF8A3D"
          strokeWidth="2"
          strokeDasharray="6 10"
          className="animate-pulse-line"
        />

        {nodes.map((node, i) => (
          <g key={node.label} transform={`translate(${node.x}, 30)`}>
            <rect
              width="80"
              height="60"
              rx="2"
              fill="#0F2A3D"
              stroke={i === 1 ? "#FF8A3D" : "#1C3E52"}
              strokeWidth="1.5"
            />
            <circle
              cx="10"
              cy="10"
              r="3"
              fill={i === 1 ? "#FF8A3D" : "#4FD1C5"}
              className={i === 1 ? "animate-blink" : ""}
            />
            <text
              x="40"
              y="34"
              textAnchor="middle"
              className="font-mono"
              fontSize="11"
              fill="#E8EEF2"
              letterSpacing="1"
            >
              {node.label}
            </text>
            <text
              x="40"
              y="48"
              textAnchor="middle"
              className="font-mono"
              fontSize="8"
              fill="#8FA8B8"
            >
              {node.sub}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
