import { Menu, BarChart3 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-10 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <BarChart3 className="h-5 w-5 text-white" />
          </div>
          <span className="text-white text-xl font-semibold tracking-tight">clevermetrics</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
          <a href="#docs" className="text-white/80 hover:text-white transition">Docs</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
          <a href="#get-started" className="ml-2 inline-flex items-center rounded-lg bg-white text-slate-900 px-4 py-2 font-medium shadow/50 shadow-white/10 hover:shadow-white/20 transition">Get started</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg bg-white/10 text-white backdrop-blur hover:bg-white/15 transition" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
