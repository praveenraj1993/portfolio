const links = [
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#skills", label: "SKILLS" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-10 border-b border-blueprint-line bg-blueprint-bg/90 px-6 py-4 backdrop-blur md:px-12">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <a
          href="#"
          className="font-mono text-xs tracking-[0.15em] text-blueprint-text"
        >
          PR<span className="text-copper">/</span>PORTFOLIO
        </a>
        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] tracking-[0.1em] text-blueprint-muted transition-colors hover:text-copper"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
