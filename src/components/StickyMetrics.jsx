import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Activity, DollarSign, Map, Signal } from "lucide-react";

export default function StickyMetrics() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const scale = useTransform(progress, [0, 1], [0.9, 1]);

  const metrics = [
    { icon: Activity, label: "Live pings", value: "1.2M/day" },
    { icon: Signal, label: "Online", value: "98.7%" },
    { icon: DollarSign, label: "GMV (30d)", value: "$4.3M" },
    { icon: Map, label: "Routes", value: "128" },
  ];

  return (
    <section className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <motion.div style={{ scale }} className="sticky top-6 z-10">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-tr from-white/10 to-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="flex items-center gap-2 text-white/80">
                    <Icon className="h-4 w-4" />
                    <span className="text-xs">{label}</span>
                  </div>
                  <p className="mt-1 text-xl font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
