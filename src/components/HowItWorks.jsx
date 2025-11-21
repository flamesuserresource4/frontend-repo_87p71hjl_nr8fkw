import { NumberSquareOne, NumberSquareTwo, NumberSquareThree } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Connect your stack",
      desc: "Sync your helpdesk, CRM, and knowledge base to give the agent context.",
    },
    {
      num: 2,
      title: "Design guardrails",
      desc: "Define intents, actions, and escalation rules with a visual builder.",
    },
    {
      num: 3,
      title: "Go live in days",
      desc: "Deploy across voice and chat channels and start deflecting tickets.",
    },
  ];

  return (
    <section id="how" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">From zero to AI-powered support in three steps</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-300" />
                Step {s.num}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-1 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
