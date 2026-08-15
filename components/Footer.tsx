export default function Footer() {
  return (
    <footer className="px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs tracking-[0.2em] text-copper">
          FIG. 05 — CONTACT
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold text-blueprint-text md:text-3xl">
          Let&apos;s talk
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-blueprint-muted">
          Open to senior full stack and backend roles. Based in Ottawa, ON —
          available remote or on-site.
        </p>

        <div className="mt-8 flex flex-col gap-3 font-mono text-sm">
          <a
            href="mailto:praveenraj.swe@gmail.com"
            className="w-fit border border-blueprint-line px-4 py-2 text-blueprint-text transition-colors hover:border-copper hover:text-copper"
          >
            praveenraj.swe@gmail.com
          </a>
          <a
            href="tel:+14372548126"
            className="w-fit text-blueprint-muted transition-colors hover:text-copper"
          >
            +1 (437) 254-8126
          </a>
          <a
            href="#"
            className="w-fit text-blueprint-muted transition-colors hover:text-copper"
          >
            LinkedIn ↗
          </a>
        </div>

        <p className="mt-16 font-mono text-[10px] text-blueprint-mutedDim">
          © {new Date().getFullYear()} PRAVEEN RAJ — OTTAWA, ON
        </p>
      </div>
    </footer>
  );
}
