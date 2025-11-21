import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-lg shadow-fuchsia-500/30">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-white/90 text-lg font-semibold tracking-tight">Staff AI</span>
          </div>

          <nav className="hidden gap-8 text-sm text-white/80 md:flex">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how" className="hover:text-white transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#demo" className="text-white/80 hover:text-white text-sm">Talk to sales</a>
            <a href="#demo" className="inline-flex items-center rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.25)] transition-shadow">Book a demo</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md md:hidden">
            <nav className="flex flex-col divide-y divide-white/5">
              {[
                { href: "#features", label: "Features" },
                { href: "#how", label: "How it works" },
                { href: "#pricing", label: "Pricing" },
                { href: "#faq", label: "FAQ" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="px-4 py-3 text-white/90 hover:bg-white/5">
                  {item.label}
                </a>
              ))}
              <a href="#demo" className="px-4 py-3 text-white font-semibold">Book a demo</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
