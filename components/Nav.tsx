const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-10 border-b border-border bg-canvas/80 px-6 py-4 backdrop-blur md:px-12">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <a href="#" className="font-display text-sm font-bold text-ink">
          Praveen<span className="text-indigo">.</span>
        </a>
        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-inkMuted transition-colors hover:text-indigo"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
