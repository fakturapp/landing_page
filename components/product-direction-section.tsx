"use client"

import { ChevronRight } from "lucide-react"

export function ProductDirectionSection() {
  return (
    <section id="security" className="relative py-40 px-6 md:px-12 lg:px-24">
      {/* Gradient overlay at top */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-zinc-400 text-sm">Sécurité et conformité</span>
          <ChevronRight className="w-4 h-4 text-zinc-500" />
        </div>

        {/* Section heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-white mb-8 max-w-3xl"
          style={{
            letterSpacing: "-0.0325em",
            fontVariationSettings: '"opsz" 28',
            fontWeight: 538,
            lineHeight: 1.1,
          }}
        >
          Vos données, votre contrôle total
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-lg max-w-md mb-16">
          <span className="text-white font-medium">Chiffrement zero-access de bout en bout.</span> Vos factures et
          données clients sont chiffrées avec votre mot de passe. Même nous ne pouvons pas les lire.
        </p>

        {/* 3D Timeline Visualization - adapted as invoice lifecycle */}
        <div
          className="relative w-full mb-16"
          style={{
            perspective: "1200px",
          }}
        >
          <div
            className="relative"
            style={{
              transform: "rotateX(50deg) rotateZ(-35deg)",
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
          >
            {/* Timeline ruler with tick marks */}
            <div className="relative h-[400px]">
              {/* Diagonal dashed line */}
              <div
                className="absolute w-[1px] bg-zinc-600/50"
                style={{
                  height: "600px",
                  left: "55%",
                  top: "-100px",
                  transform: "rotate(0deg)",
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent, transparent 4px, rgba(113, 113, 122, 0.5) 4px, rgba(113, 113, 122, 0.5) 8px)",
                }}
              />

              {/* Timeline header with dates and tick marks */}
              <div className="absolute top-0 left-0 right-0 flex items-end">
                <div className="flex items-end gap-[3px] absolute bottom-0 left-[5%] right-0">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-indigo-500/40"
                      style={{
                        width: "1px",
                        height: i % 7 === 0 ? "16px" : "8px",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Date labels */}
              <div className="absolute text-zinc-500 text-sm" style={{ left: "8%", top: "80px" }}>
                Création
              </div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "22%", top: "55px" }}>
                Envoi
              </div>
              <div className="absolute text-zinc-500 text-sm" style={{ left: "40%", top: "35px" }}>
                Relance
              </div>
              <div
                className="absolute px-3 py-1 rounded-md bg-emerald-700/80 text-emerald-300 text-sm font-medium"
                style={{ left: "58%", top: "-10px" }}
              >
                Paiement
              </div>
              <div className="absolute text-zinc-500/50 text-sm" style={{ left: "78%", top: "-25px" }}>
                Archivage
              </div>

              {/* Project bars - Invoice lifecycle */}
              <div
                className="absolute rounded-lg bg-zinc-800/90 border border-indigo-500/30 px-4 py-3 flex items-center gap-3"
                style={{
                  left: "5%",
                  top: "100px",
                  width: "45%",
                  height: "48px",
                }}
              >
                <div className="w-4 h-4 rotate-45 bg-indigo-500/60" />
                <span className="text-zinc-300 text-sm font-medium">Facture FAK-2024-001</span>
                <div
                  className="absolute w-5 h-5 rotate-45 border-2 border-emerald-500 bg-transparent"
                  style={{ right: "15%", top: "50%", transform: "translateY(-50%) rotate(45deg)" }}
                />
              </div>

              <div
                className="absolute rounded-lg bg-zinc-800/70 border border-zinc-700/40 px-4 py-3 flex items-center gap-3"
                style={{
                  left: "15%",
                  top: "155px",
                  width: "25%",
                  height: "44px",
                }}
              >
                <div className="w-3 h-3 rotate-45 bg-zinc-600/60" />
                <span className="text-zinc-500 text-sm">Devis DEV-2024-003</span>
              </div>

              <div
                className="absolute rounded-lg bg-zinc-800/90 border border-orange-500/30 px-4 py-3 flex items-center justify-between"
                style={{
                  left: "45%",
                  top: "155px",
                  width: "45%",
                  height: "48px",
                }}
              >
                <span className="text-orange-400 text-sm">Avoir AV-2024-001</span>
                <div className="flex gap-0.5">
                  <div className="w-2.5 h-2.5 rotate-45 bg-orange-500/60" />
                  <div className="w-2.5 h-2.5 rotate-45 bg-orange-500/60" />
                </div>
              </div>

              <div
                className="absolute rounded-lg bg-zinc-800/70 border border-zinc-700/40 px-4 py-3 flex items-center justify-between"
                style={{
                  left: "35%",
                  top: "240px",
                  width: "28%",
                  height: "48px",
                }}
              >
                <span className="text-zinc-400 text-sm">Facture récurrente</span>
                <div className="flex gap-0.5">
                  <div className="w-2.5 h-2.5 rotate-45 bg-indigo-500/60" />
                  <div className="w-2.5 h-2.5 rotate-45 bg-indigo-500/60" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom two-column section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left column - Gestion complète */}
          <div className="border-t border-r border-b border-zinc-800 pt-10 pr-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">Gestion complète de vos documents</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Factures, devis, avoirs et factures récurrentes centralisés en un seul endroit.
            </p>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
              <h4 className="text-lg font-medium text-zinc-200 mb-5">Vue d'ensemble</h4>

              {/* Stats row */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-zinc-500 text-sm w-20">Statut</span>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    8 payées
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-xs">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    3 envoyées
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-red-500/20 text-red-400 text-xs">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    1 en retard
                  </span>
                </div>
              </div>

              {/* Revenue row */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-zinc-500 text-sm w-20">CA mensuel</span>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400 font-medium text-sm">12 450,00 €</span>
                  <span className="text-emerald-400 text-xs">+23% vs mois dernier</span>
                </div>
              </div>

              {/* Milestones row */}
              <div className="flex items-start gap-4">
                <span className="text-zinc-500 text-sm w-20 pt-1">Seuil ME</span>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 text-zinc-300 text-sm">
                    <span className="w-2.5 h-2.5 rotate-45 bg-indigo-500" />
                    Seuil micro-entrepreneur <span className="text-zinc-500">45%</span>
                  </span>
                  <div className="w-full bg-zinc-800 rounded-full h-2 mt-1">
                    <div className="bg-indigo-500 h-2 rounded-full" style={{ width: "45%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Suivi des paiements */}
          <div className="border-t border-b border-zinc-800 pt-10 pl-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">Suivi des paiements</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Suivez chaque paiement en temps réel avec des notifications automatiques.
            </p>

            <div className="relative h-48">
              {/* Overdue card */}
              <div
                className="absolute rounded-lg bg-zinc-800/40 border border-zinc-700/30 px-4 py-2"
                style={{ top: 0, left: "10%", width: "80%" }}
              >
                <span className="flex items-center gap-2 text-zinc-500 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  En retard — TechStart SAS
                </span>
              </div>

              {/* Sent card */}
              <div
                className="absolute rounded-lg bg-zinc-800/60 border border-zinc-700/40 px-4 py-2"
                style={{ top: "30px", left: "5%", width: "85%" }}
              >
                <span className="flex items-center gap-2 text-zinc-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Envoyée — Studio Créatif
                </span>
              </div>

              {/* Paid card */}
              <div
                className="absolute rounded-xl bg-zinc-800/90 border border-zinc-700/50 px-5 py-4"
                style={{ top: "60px", left: 0, width: "95%" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-500" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                    </svg>
                  </span>
                  <span className="text-emerald-500 font-medium text-sm">Payée</span>
                </div>
                <p className="text-zinc-300 text-sm mb-3">Dupont & Fils — 2 450,00 € reçu par virement</p>
                <span className="text-zinc-500 text-xs">18 mars 2024</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-zinc-800">
          {/* Left column - Feature list */}
          <div className="border-r border-zinc-800 pt-16 pr-10 pb-16 flex flex-col justify-center">
            <h3 className="text-2xl font-medium text-zinc-200 mb-8 leading-tight">
              Gérez votre entreprise
              <br />
              en toute simplicité
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-indigo-500" />
                <span className="text-zinc-200 font-medium">Gestion des clients</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-indigo-500/50" />
                <span className="text-zinc-400">Catalogue de produits</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 rounded-full bg-indigo-500/30" />
                <span className="text-zinc-500">Informations entreprise (SIREN/SIRET)</span>
              </div>
            </div>
          </div>

          {/* Right column - Document mockup */}
          <div className="pt-10 pl-10 pb-16">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 text-zinc-400 text-sm">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M3.5 2A1.5 1.5 0 002 3.5v9A1.5 1.5 0 003.5 14h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0012.5 2h-9z" />
                </svg>
                <span>Dupont & Fils</span>
                <span className="text-zinc-600">›</span>
                <span>Fiche client</span>
                <span className="ml-auto text-zinc-600">•••</span>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 8a2 2 0 100-4 2 2 0 000 4zM8 9c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>

                {/* Client details */}
                <div className="mb-3 relative inline-block">
                  <span className="text-zinc-200 text-lg font-medium">Dupont & Fils SARL</span>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  12 Rue de la Paix, 75002 Paris
                  <br />
                  SIRET: 123 456 789 00012
                  <br />
                  contact@dupont-fils.fr
                </p>

                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs">
                    5 factures payées
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-indigo-500/20 text-indigo-400 text-xs">
                    12 450,00 € CA total
                  </span>
                </div>

                {/* Placeholder text lines */}
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex gap-2 flex-wrap">
                    <div className="h-2 bg-zinc-700/50 rounded w-16" />
                    <div className="h-2 bg-zinc-700/30 rounded w-24" />
                    <div className="h-2 bg-zinc-700/50 rounded w-12" />
                    <div className="h-2 bg-indigo-500/40 rounded w-20" />
                    <div className="h-2 bg-zinc-700/30 rounded w-16" />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <div className="h-2 bg-zinc-700/30 rounded w-20" />
                    <div className="h-2 bg-zinc-700/50 rounded w-8" />
                    <div className="h-2 bg-zinc-700/30 rounded w-28" />
                    <div className="h-2 bg-indigo-500/40 rounded w-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
          {/* Factures */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-5 h-5 text-zinc-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="2" width="14" height="16" rx="2" />
                <line x1="6" y1="6" x2="14" y2="6" />
                <line x1="6" y1="10" x2="14" y2="10" />
                <line x1="6" y1="14" x2="10" y2="14" />
              </svg>
              <span className="text-zinc-200 font-medium">Factures</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Créez et envoyez des factures professionnelles.</p>
          </div>

          {/* Devis */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-5 h-5 text-zinc-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="10" cy="10" r="8" />
                <path d="M7 10l2 2 4-4" />
              </svg>
              <span className="text-zinc-200 font-medium">Devis</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Convertissez vos devis en factures en un clic.</p>
          </div>

          {/* Avoirs */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-4 rotate-45 bg-zinc-400" />
              <span className="text-zinc-200 font-medium">Avoirs</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Gérez les remboursements et notes de crédit.</p>
          </div>

          {/* Analytics */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 20 20" fill="currentColor">
                <rect x="2" y="10" width="3" height="8" rx="1" />
                <rect x="7" y="6" width="3" height="12" rx="1" />
                <rect x="12" y="8" width="3" height="10" rx="1" />
                <rect x="17" y="4" width="3" height="14" rx="1" />
              </svg>
              <span className="text-zinc-200 font-medium">Tableau de bord</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Suivez vos revenus et l'état de vos paiements.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
