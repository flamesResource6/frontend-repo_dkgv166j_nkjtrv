import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Logos from './components/Logos';
import ScrollVideo from './components/ScrollVideo';
import ParallaxShowcase from './components/ParallaxShowcase';
import StickyMetrics from './components/StickyMetrics';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <ScrollVideo />
      <StickyMetrics />
      <ParallaxShowcase />
      <Logos />
      <Features />

      <section id="cta" className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 border-t border-white/10">
          <div className="rounded-3xl bg-gradient-to-tr from-blue-500/15 via-cyan-400/10 to-emerald-400/10 p-10 border border-white/10">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Ready to make your machines smarter?</h3>
              <p className="mt-3 text-white/70">Start your 14‑day free trial. No credit card required.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-medium shadow/50 shadow-white/10 hover:shadow-white/20 transition">Get started</a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white px-5 py-3 font-medium backdrop-blur border border-white/15 hover:bg-white/15 transition">Talk to sales</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-12 border-t border-white/10 text-white/60 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} clevermetrics, Inc.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
