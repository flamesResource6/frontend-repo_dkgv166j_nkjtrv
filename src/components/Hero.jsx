import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Activity, Gauge, Wifi, CreditCard } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      {/* 3D background cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for contrast (doesn't block pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950"></div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-36 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <p className="text-xs text-white/80">Real-time vending telemetry</p>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Turn vending data into revenue with clevermetrics
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/80 leading-relaxed">
            Monitor machines, track sales, and predict stock-outs with a modern telemetry platform built for vending operators.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-medium shadow/50 shadow-white/10 hover:shadow-white/20 transition">Start free trial</a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white px-5 py-3 font-medium backdrop-blur border border-white/15 hover:bg-white/15 transition">See live demo</a>
          </div>
        </motion.div>

        {/* Telemetry HUD video card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 md:mt-14"
        >
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
            {/* subtle gradient rim */}
            <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-tr from-emerald-400/25 via-cyan-400/10 to-blue-500/25 opacity-60" />

            <video
              className="relative z-10 w-full h-full aspect-[16/9] object-cover"
              src="https://videos.pexels.com/video-files/3184321/3184321-hd_1280_720_30fps.mp4"
              muted
              playsInline
              autoPlay
              loop
              preload="metadata"
            />

            {/* Overlay telemetry chips */}
            <div className="absolute inset-0 z-10 pointer-events-none p-4 md:p-6">
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-xl bg-slate-900/70 border border-white/10 px-3 py-2 backdrop-blur">
                  <Wifi className="h-4 w-4 text-emerald-300" />
                  <span className="text-xs text-white/80">Online 94% fleet</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl bg-slate-900/70 border border-white/10 px-3 py-2 backdrop-blur">
                  <Gauge className="h-4 w-4 text-cyan-300" />
                  <span className="text-xs text-white/80">Vend rate +18%</span>
                </div>
              </div>
              <div className="mt-auto flex flex-wrap gap-2 absolute bottom-4 left-4">
                <div className="inline-flex items-center gap-2 rounded-xl bg-slate-900/70 border border-white/10 px-3 py-2 backdrop-blur">
                  <CreditCard className="h-4 w-4 text-blue-300" />
                  <span className="text-xs text-white/80">Cashless 72%</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl bg-slate-900/70 border border-white/10 px-3 py-2 backdrop-blur">
                  <Activity className="h-4 w-4 text-pink-300" />
                  <span className="text-xs text-white/80">Pings 1.2k/min</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
