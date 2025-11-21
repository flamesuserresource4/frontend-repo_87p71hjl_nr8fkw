export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$49",
      desc: "For small teams getting started",
      features: ["Up to 1k conversations/mo", "Basic integrations", "Email support"],
    },
    {
      name: "Growth",
      price: "$199",
      desc: "For scaling teams",
      features: ["Up to 10k conversations/mo", "Advanced workflows", "Priority support"],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For large organizations",
      features: ["Unlimited conversations", "SSO, SAML", "Dedicated CSM"],
    },
  ];

  return (
    <section id="pricing" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.05),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Choose a plan that fits your growth</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`relative overflow-hidden rounded-2xl border ${t.featured ? 'border-white/20 bg-white/10' : 'border-white/10 bg-white/5'} p-6 backdrop-blur-md`}>
              {t.featured && (
                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">Most popular</div>
              )}
              <h3 className="text-white text-lg font-semibold">{t.name}</h3>
              <div className="mt-2 text-4xl font-semibold text-white">{t.price}<span className="text-base text-white/70 font-normal">/mo</span></div>
              <p className="mt-1 text-sm text-white/70">{t.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {t.features.map((f) => (<li key={f}>• {f}</li>))}
              </ul>
              <a href="#demo" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-semibold ${t.featured ? 'bg-white text-slate-900' : 'border border-white/15 text-white/90'}`}>Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
