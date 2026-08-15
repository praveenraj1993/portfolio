export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-panel px-6 py-20 md:px-12 md:py-28">
      <div className="blob absolute -bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-coral">
          Contact
        </p>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-ink md:text-4xl">
          Let&apos;s build something
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-inkMuted">
          Open to mid to senior full stack and backend roles. Based in
          Ottawa, ON — available remote or on-site.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="mailto:praveenraj.swe@gmail.com"
            className="rounded-full bg-indigo px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            praveenraj.swe@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/praveen-raj-software-engineer/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-indigo hover:text-indigo"
          >
            LinkedIn ↗
          </a>
        </div>

        <p className="mt-6 font-mono text-xs text-inkFaint">
          +1 (437) 254-8126
        </p>

        <p className="mt-16 font-mono text-[10px] text-inkFaint">
          © {new Date().getFullYear()} Praveen Raj — Ottawa, ON
        </p>
      </div>
    </footer>
  );
}
