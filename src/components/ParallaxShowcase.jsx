import { motion, useScroll, useTransform } from "framer-motion";
import { CloudRain, Coins, Boxes, Satellite } from "lucide-react";

export default function ParallaxShowcase() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -450]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute -top-10 -left-10 h-64 w-64 rounded-full blur-3xl opacity-20 bg-emerald-400" />
        <motion.div style={{ y: y2 }} className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full blur-3xl opacity-20 bg-cyan-400" />
        <motion.div style={{ y: y3 }} className="absolute top-1/3 left-1/3 h-64 w-64 rounded-full blur-3xl opacity-20 bg-blue-500" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          {[
            { icon: CloudRain, title: "Cloud ingest", desc: "Billions of events stored, compressed, and queryable in seconds." },
            { icon: Boxes, title: "SKU telemetry", desc: "DEX line-item decoding for exact product performance." },
            { icon: Coins, title: "Cashless", desc: "Tap-to-pay, refunds, and reconciliation APIs." },
            { icon: Satellite, title: "OTA updates", desc: "Secure firmware pushes and config at scale." },
            { icon: Boxes, title: "Route planning", desc: "Demand-aware restock sequences and maps." },
            { icon: Coins, title: "Revenue insights", desc: "Campaigns, price tests, and lift analysis." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <div className="h-10 w-10 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-white font-medium">{title}</p>
              <p className="text-white/70 text-sm mt-1">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
