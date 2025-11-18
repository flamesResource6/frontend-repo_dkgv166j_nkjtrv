export default function Logos() {
  const logos = ["Visa", "Mastercard", "Stripe", "Shopify", "AWS", "GCP"];
  return (
    <section className="bg-slate-950/50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-center text-white/60 text-sm">Trusted infrastructure and integrations</p>
        <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-4 opacity-70">
          {logos.map(l => (
            <div key={l} className="text-white/60 text-center text-sm border border-white/10 rounded-lg py-3">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
