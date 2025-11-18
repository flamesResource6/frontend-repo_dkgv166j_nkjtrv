import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Server, Wifi, Gauge } from "lucide-react";

// An immersive, scroll-aware video block. The video auto-plays when visible
// and pauses when out of view. Overlayed UI cards highlight vending/cloud value.
export default function ScrollVideo() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [inView]);

  return (
    <section ref={containerRef} className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5"
          >
            {/* Subtle gradient ring */}
            <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-tr from-emerald-400/20 via-cyan-400/10 to-blue-500/20 opacity-60" />

            <video
              ref={videoRef}
              className="relative z-10 w-full h-full aspect-video object-cover"
              src="https://videos.pexels.com/video-files/853889/853889-uhd_2560_1440_25fps.mp4"
              muted
              playsInline
              loop
              preload="metadata"
            />

            {/* Overlay chips */}
            <div className="absolute inset-0 z-10 pointer-events-none p-4 md:p-6 flex flex-col gap-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="self-start inline-flex items-center gap-2 rounded-xl bg-slate-900/70 border border-white/10 px-3 py-2 backdrop-blur"
              >
                <Wifi className="h-4 w-4 text-emerald-300" />
                <span className="text-xs text-white/80">Live device signal</span>
              </motion.div>
              <div className="flex-1" />
              <div className="grid grid-cols-2 gap-3 w-full sm:w-auto">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900/70 border border-white/10 px-3 py-2 backdrop-blur"
                >
                  <Gauge className="h-4 w-4 text-cyan-300" />
                  <span className="text-xs text-white/80">Vend rate +18%</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900/70 border border-white/10 px-3 py-2 backdrop-blur"
                >
                  <Cloud className="h-4 w-4 text-blue-300" />
                  <span className="text-xs text-white/80">Cloud sync 99.99%</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className=""
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <p className="text-xs text-white/80">Immersive telemetry</p>
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">See your fleet come alive</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              Real-time video overlays and live event mosaics show open doors, vend cycles, temperature warnings, and cashless authorizations as they happen.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Server className="h-4 w-4" />, title: "Cloud-native", desc: "Horizontally scalable ingest for DEX/MDB and webhooks." },
                { icon: <Wifi className="h-4 w-4" />, title: "Edge online/offline", desc: "Smart buffering for spotty cellular links." },
                { icon: <Cloud className="h-4 w-4" />, title: "Multi-tenant", desc: "Secure partitions for routes and clients." },
                { icon: <Gauge className="h-4 w-4" />, title: "Predictive alerts", desc: "Catch stock-outs before they happen." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-300">{item.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-white">{item.title}</p>
                      <p className="text-xs text-white/70 mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
