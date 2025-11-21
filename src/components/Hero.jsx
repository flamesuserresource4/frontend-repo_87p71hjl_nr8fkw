import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_50%)]" />
        <div className="absolute -top-40 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/30 via-fuchsia-400/20 to-amber-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-10 md:grid-cols-2 md:pt-16 lg:gap-16 lg:pt-24">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-300 animate-pulse" />
            Introducing the AI Staff Assistant
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Elevate your customer support with a tireless AI team member
          </h1>
          <p className="mt-4 text-lg leading-7 text-white/70">
            A voice-native agent that understands context, handles routine work, and hands off seamlessly to humans. Faster resolutions, happier customers, lower costs.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#demo" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-slate-900 font-semibold shadow-[0_10px_40px_rgba(255,255,255,0.15)] hover:shadow-[0_12px_50px_rgba(255,255,255,0.25)] transition-shadow">
              Book a live demo
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90">
              See how it works
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6 text-white/70">
            <div>
              <div className="text-3xl font-semibold text-white">24/7</div>
              <div className="text-xs">Availability</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-white">60%</div>
              <div className="text-xs">Cost reduction</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-white">3x</div>
              <div className="text-xs">Faster resolution</div>
            </div>
          </div>
        </div>

        <div className="relative h-[460px] w-full md:h-[560px]">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_50px_rgba(99,102,241,0.15)] backdrop-blur-md" />
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent via-transparent to-slate-950/30" />
        </div>
      </div>
    </section>
  );
}
