import SystemDiagram from "./SystemDiagram";

export default function Hero() {
  return (
    <section className="relative border-b border-blueprint-line px-6 pt-20 pb-16 md:px-12 md:pt-28 md:pb-20">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs tracking-[0.2em] text-copper animate-fadeUp">
          FIG. 01 — ENGINEER PROFILE
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-blueprint-text md:text-6xl animate-fadeUp [animation-delay:80ms] opacity-0 [animation-fill-mode:forwards]">
          Praveen Raj
        </h1>
        <p className="mt-3 max-w-xl font-body text-lg text-blueprint-muted md:text-xl animate-fadeUp [animation-delay:160ms] opacity-0 [animation-fill-mode:forwards]">
          Senior Full Stack Engineer. Seven years shipping APIs, event
          pipelines, and interfaces that hold up under real load.
        </p>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-blueprint-mutedDim animate-fadeUp [animation-delay:220ms] opacity-0 [animation-fill-mode:forwards]">
          <span>OTTAWA, ON</span>
          <span className="text-blueprint-line">/</span>
          <a
            href="mailto:praveenraj.swe@gmail.com"
            className="hover:text-copper transition-colors"
          >
            praveenraj.swe@gmail.com
          </a>
          <span className="text-blueprint-line">/</span>
          <span>+1 (437) 254-8126</span>
        </div>

        <div className="mt-12 animate-fadeUp [animation-delay:320ms] opacity-0 [animation-fill-mode:forwards]">
          <p className="mb-2 font-mono text-[10px] tracking-[0.2em] text-blueprint-mutedDim">
            REQUEST PATH — TYPICAL SERVICE I BUILD
          </p>
          <SystemDiagram />
        </div>
      </div>
    </section>
  );
}
