import StackLayers from "./StackLayers";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-20 md:px-12 md:pt-28 md:pb-28">
      {/* background color blobs */}
      <div className="blob absolute -left-24 top-10 h-72 w-72 rounded-full bg-indigo" />
      <div className="blob absolute -right-16 top-40 h-72 w-72 rounded-full bg-coral" />

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-block rounded-full border border-border bg-panel px-4 py-1.5 font-mono text-xs text-inkMuted animate-fadeUp opacity-0 [animation-fill-mode:forwards]">
          Open to mid to senior full stack &amp; backend roles
        </span>

        <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] text-ink md:text-7xl animate-fadeUp [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]">
          Praveen Raj
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-body text-lg text-inkMuted md:text-xl animate-fadeUp [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          Full stack engineer. Seven years turning product ideas into APIs,
          pipelines, and interfaces that hold up under real traffic.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-xs text-inkFaint animate-fadeUp [animation-delay:280ms] opacity-0 [animation-fill-mode:forwards]">
          <span>Ottawa, ON</span>
          <span>·</span>
          <a href="mailto:praveenraj.swe@gmail.com" className="hover:text-indigo transition-colors">
            praveenraj.swe@gmail.com
          </a>
          <span>·</span>
          <span>+1 (437) 254-8126</span>
        </div>

        <div className="mt-16 animate-fadeUp [animation-delay:360ms] opacity-0 [animation-fill-mode:forwards]">
          <StackLayers />
        </div>
      </div>
    </section>
  );
}
