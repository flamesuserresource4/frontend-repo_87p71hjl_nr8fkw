import { Headphones, Workflow, ShieldCheck, Sparkles, Mic, Handshake } from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Voice-native support",
    desc: "Natural, human-like conversations that resolve customer issues without scripts.",
  },
  {
    icon: Workflow,
    title: "Automated workflows",
    desc: "Integrate with your tools to update tickets, fetch data, and complete tasks.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade security",
    desc: "SOC 2-ready design, audit logs, and granular controls for peace of mind.",
  },
  {
    icon: Mic,
    title: "Real-time transcription",
    desc: "Fast, accurate transcripts power context-aware responses and summaries.",
  },
  {
    icon: Handshake,
    title: "Human handoff",
    desc: "Escalates when needed with full context, so your team picks up instantly.",
  },
  {
    icon: Sparkles,
    title: "Continuously improving",
    desc: "Learns from interactions and your knowledge base to get smarter over time.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Built for modern support teams</h2>
          <p className="mt-3 text-white/70">Everything you need to deliver delightful service at scale</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:border-white/20 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-md shadow-fuchsia-500/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
