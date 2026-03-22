"use client"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-[#09090B]/80 backdrop-blur-md">
      <div className="w-full flex justify-center px-6 py-4">
        <div className="w-full max-w-4xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Faktur" className="w-6 h-6" />
            <span className="text-white font-semibold">Faktur</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Fonctionnalités
            </a>
            <a href="#security" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Sécurité
            </a>
            <a href="#ai" className="text-sm text-zinc-400 hover:text-white transition-colors">
              IA
            </a>
            <a href="#integrations" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Intégrations
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://dash.fakturapp.cc" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Connexion
            </a>
            <a
              href="https://dash.fakturapp.cc"
              className="text-sm text-white bg-indigo-600 hover:bg-indigo-500 px-3.5 py-1.5 rounded-md transition-colors"
            >
              Commencer gratuitement
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
