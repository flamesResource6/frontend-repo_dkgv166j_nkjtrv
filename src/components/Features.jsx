import { Gauge, Wifi, TrendingUp, Boxes } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Wifi,
      title: "Live machine health",
      desc: "Heartbeat pings, door events, temperature and error codes in one place.",
    },
    {
      icon: TrendingUp,
      title: "Sales & product mix",
      desc: "Spot top sellers, slow movers, and microtrends across locations.",
    },
    {
      icon: Boxes,
      title: "Smart restocking",
      desc: "Predict stock-outs and optimize truck routes with demand forecasting.",
    },
    {
      icon: Gauge,
      title: "Telemetry SDK",
      desc: "Simple APIs and device adapters for MDB, DEX and cashless readers.",
    },
  ];

  return (
    <section id="features" className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Built for vending operators</h2>
          <p className="mt-3 text-white/70">Everything you need to keep machines selling and customers happy.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 hover:from-white/10 transition">
              <div className="h-10 w-10 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
