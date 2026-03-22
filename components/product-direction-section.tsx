"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronRight, FileText, Users, CreditCard, Building2, Lock, ShieldCheck, Database } from "lucide-react"

/* ============================================================
   Encryption Flow Visualization
   Data → Shield → Encrypted DB
   ============================================================ */

export function ProductDirectionSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="security" className="relative py-40 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#09090B" }}>
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
          style={{ letterSpacing: "-0.0325em", fontWeight: 538, lineHeight: 1.1 }}
        >
          Vos données, votre contrôle total
        </h2>

        <p className="text-zinc-400 text-lg max-w-md mb-20">
          <span className="text-white font-medium">Chiffrement zero-access de bout en bout.</span> Vos factures et
          données clients sont chiffrées avec votre mot de passe. Même nous ne pouvons pas les lire.
        </p>

        {/* ===== ENCRYPTION FLOW ===== */}
        <div ref={ref} className="relative w-full mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 justify-between relative">

            {/* ── LEFT: Raw data cards ── */}
            <div className="flex flex-col gap-3 w-full lg:w-[260px] shrink-0 z-10">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0 }}
              >
                <div className="text-zinc-500 text-xs font-medium uppercase tracking-wider mb-3">Vos données</div>
              </motion.div>
              {[
                { icon: FileText, label: "Factures", sub: "FAK-2024-001.pdf", color: "#818cf8" },
                { icon: Users, label: "Clients", sub: "Dupont & Fils SARL", color: "#34d399" },
                { icon: CreditCard, label: "Paiements", sub: "2 490,00 € — Virement", color: "#fb923c" },
                { icon: Building2, label: "Entreprise", sub: "SIREN: 123 456 789", color: "#60a5fa" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/80 px-4 py-3 hover:border-zinc-700 transition-colors"
                >
                  <div
                    className="flex items-center justify-center rounded-md shrink-0"
                    style={{ width: 32, height: 32, backgroundColor: `${item.color}15` }}
                  >
                    <item.icon style={{ width: 16, height: 16, color: item.color }} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-zinc-200 text-sm font-medium">{item.label}</div>
                    <div className="text-zinc-500 text-xs truncate">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ── CENTER: Flowing lines + Shield ── */}
            <div className="flex-1 relative flex items-center justify-center" style={{ minHeight: 320 }}>
              {/* SVG connection lines */}
              <svg className="absolute inset-0 w-full h-full hidden lg:block" viewBox="0 0 600 320" fill="none" preserveAspectRatio="xMidYMid meet">
                {/* Left → Shield paths */}
                {[80, 130, 180, 230].map((y, i) => (
                  <g key={`left-${i}`}>
                    <path
                      d={`M 0 ${y} Q 120 ${y} 240 160`}
                      stroke="url(#lineGradLeft)"
                      strokeWidth="1"
                      opacity={0.4}
                    />
                    {/* Animated dot */}
                    <motion.circle
                      r="3"
                      fill="#818cf8"
                      filter="url(#glow)"
                      initial={{ offsetDistance: "0%" }}
                      animate={inView ? { offsetDistance: "100%" } : {}}
                      transition={{ duration: 2, delay: 0.8 + i * 0.3, repeat: Infinity, repeatDelay: 2 + i * 0.5, ease: "easeInOut" }}
                      style={{ offsetPath: `path("M 0 ${y} Q 120 ${y} 240 160")` }}
                    />
                  </g>
                ))}

                {/* Shield → Right paths */}
                {[80, 130, 180, 230].map((y, i) => (
                  <g key={`right-${i}`}>
                    <path
                      d={`M 360 160 Q 480 ${y} 600 ${y}`}
                      stroke="url(#lineGradRight)"
                      strokeWidth="1"
                      opacity={0.4}
                    />
                    <motion.circle
                      r="3"
                      fill="#22c55e"
                      filter="url(#glow)"
                      initial={{ offsetDistance: "0%" }}
                      animate={inView ? { offsetDistance: "100%" } : {}}
                      transition={{ duration: 2, delay: 1.8 + i * 0.3, repeat: Infinity, repeatDelay: 2 + i * 0.5, ease: "easeInOut" }}
                      style={{ offsetPath: `path("M 360 160 Q 480 ${y} 600 ${y}")` }}
                    />
                  </g>
                ))}

                {/* Gradient defs */}
                <defs>
                  <linearGradient id="lineGradLeft" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#818cf8" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="lineGradRight" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>

              {/* Shield orb */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex items-center justify-center"
              >
                {/* Outer glow rings */}
                <div className="absolute rounded-full" style={{
                  width: 180, height: 180,
                  background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
                }} />
                <motion.div
                  className="absolute rounded-full border border-indigo-500/20"
                  style={{ width: 140, height: 140 }}
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute rounded-full border border-indigo-500/10"
                  style={{ width: 170, height: 170 }}
                  animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />

                {/* Shield body */}
                <div
                  className="relative flex items-center justify-center rounded-full"
                  style={{
                    width: 100, height: 100,
                    background: "linear-gradient(135deg, #312e81 0%, #4338ca 50%, #6366f1 100%)",
                    boxShadow: "0 0 60px rgba(99, 102, 241, 0.4), 0 0 120px rgba(99, 102, 241, 0.15), inset 0 1px 1px rgba(255,255,255,0.1)",
                  }}
                >
                  <ShieldCheck className="text-white" style={{ width: 40, height: 40 }} />

                  {/* Inner shine */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      top: 8, left: 16, width: 50, height: 30,
                      background: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)",
                      borderRadius: "50%",
                    }}
                  />
                </div>

                {/* Lock badge */}
                <motion.div
                  className="absolute flex items-center justify-center rounded-full"
                  style={{
                    width: 30, height: 30, bottom: -4, right: -4,
                    backgroundColor: "#1e1b4b",
                    border: "2px solid #312e81",
                    boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
                  }}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Lock style={{ width: 13, height: 13, color: "#a5b4fc" }} />
                </motion.div>
              </motion.div>
            </div>

            {/* ── RIGHT: Encrypted data ── */}
            <div className="flex flex-col gap-3 w-full lg:w-[260px] shrink-0 z-10">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Database style={{ width: 14, height: 14, color: "#22c55e" }} />
                  <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Base de données chiffrée</span>
                </div>
              </motion.div>
              {[
                { label: "Factures", cipher: "aGVsbG8gd29ybGQ..." },
                { label: "Clients", cipher: "dXNlciBkYXRhIGV..." },
                { label: "Paiements", cipher: "cGF5bWVudCBpbmZ..." },
                { label: "Entreprise", cipher: "Y29tcGFueSBpbmZ..." },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                  className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 hover:border-emerald-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-emerald-400 text-xs font-medium">{item.label}</span>
                    <Lock style={{ width: 10, height: 10, color: "#22c55e" }} />
                  </div>
                  <div className="font-mono text-zinc-600 text-[11px] tracking-wide select-none overflow-hidden">
                    {item.cipher}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Labels under the flow */}
          <div className="hidden lg:flex items-center justify-between mt-10 px-4">
            <motion.span
              className="text-zinc-600 text-xs"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
            >
              Données en clair sur votre appareil
            </motion.span>
            <motion.span
              className="text-indigo-400/60 text-xs font-medium"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.4 }}
            >
              Chiffrement AES-256 + votre mot de passe
            </motion.span>
            <motion.span
              className="text-zinc-600 text-xs"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.6 }}
            >
              Stockage chiffré — illisible sans clé
            </motion.span>
          </div>
        </div>

        {/* ===== BOTTOM: Two-column section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left column */}
          <div className="border-t border-r border-b border-zinc-800 pt-10 pr-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">Gestion complète de vos documents</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Factures, devis, avoirs et factures récurrentes centralisés en un seul endroit.
            </p>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
              <h4 className="text-lg font-medium text-zinc-200 mb-5">Vue d&apos;ensemble</h4>

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

              <div className="flex items-center gap-4 mb-4">
                <span className="text-zinc-500 text-sm w-20">CA mensuel</span>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400 font-medium text-sm">12 450,00 €</span>
                  <span className="text-emerald-400 text-xs">+23% vs mois dernier</span>
                </div>
              </div>

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

          {/* Right column */}
          <div className="border-t border-b border-zinc-800 pt-10 pl-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">Suivi des paiements</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Suivez chaque paiement en temps réel avec des notifications automatiques.
            </p>

            <div className="relative h-48">
              <div
                className="absolute rounded-lg bg-zinc-800/40 border border-zinc-700/30 px-4 py-2"
                style={{ top: 0, left: "10%", width: "80%" }}
              >
                <span className="flex items-center gap-2 text-zinc-500 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  En retard — TechStart SAS
                </span>
              </div>

              <div
                className="absolute rounded-lg bg-zinc-800/60 border border-zinc-700/40 px-4 py-2"
                style={{ top: "30px", left: "5%", width: "85%" }}
              >
                <span className="flex items-center gap-2 text-zinc-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Envoyée — Studio Créatif
                </span>
              </div>

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

        {/* ===== BOTTOM: 4-column features ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="2" width="14" height="16" rx="2" />
                <line x1="6" y1="6" x2="14" y2="6" />
                <line x1="6" y1="10" x2="14" y2="10" />
                <line x1="6" y1="14" x2="10" y2="14" />
              </svg>
              <span className="text-zinc-200 font-medium">Factures</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Créez et envoyez des factures professionnelles.</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="10" cy="10" r="8" />
                <path d="M7 10l2 2 4-4" />
              </svg>
              <span className="text-zinc-200 font-medium">Devis</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Convertissez vos devis en factures en un clic.</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-4 rotate-45 bg-zinc-400" />
              <span className="text-zinc-200 font-medium">Avoirs</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Gérez les remboursements et notes de crédit.</p>
          </div>

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
            <p className="text-zinc-500 text-sm leading-relaxed">Suivez vos revenus et l&apos;état de vos paiements.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
