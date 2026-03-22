"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronRight, Lock, ShieldCheck, Database, FileText, Users, CreditCard, Building2 } from "lucide-react"

/* ============================================================
   Encryption Flow — Animated pipeline
   Data packets flow through a shield → come out encrypted
   ============================================================ */

const DATA_ITEMS = [
  { icon: FileText, label: "Facture FAK-2024-001", encrypted: "xK9mR2..vP4nQ8", color: "#818cf8" },
  { icon: Users, label: "Dupont & Fils SARL", encrypted: "aH7bY3..wL5jM1", color: "#34d399" },
  { icon: CreditCard, label: "2 490,00 € Virement", encrypted: "cP2nT6..zR8fK4", color: "#fb923c" },
  { icon: Building2, label: "SIREN: 123 456 789", encrypted: "dQ5sV9..uX3hN7", color: "#60a5fa" },
]

function EncryptionFlow() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [phase, setPhase] = useState<"enter" | "encrypt" | "exit">("enter")

  useEffect(() => {
    const cycle = () => {
      setPhase("enter")
      const t1 = setTimeout(() => setPhase("encrypt"), 1000)
      const t2 = setTimeout(() => setPhase("exit"), 2000)
      const t3 = setTimeout(() => {
        setActiveIndex((i) => (i + 1) % DATA_ITEMS.length)
        setPhase("enter")
      }, 3200)
      return [t1, t2, t3]
    }
    const timers = cycle()
    const interval = setInterval(() => {
      cycle()
    }, 3200)
    return () => {
      timers.forEach(clearTimeout)
      clearInterval(interval)
    }
  }, [])

  const item = DATA_ITEMS[activeIndex]
  const Icon = item.icon

  return (
    <div className="relative flex flex-col items-center gap-12 py-16">

      {/* ── Main flow row ── */}
      <div className="flex items-center justify-center gap-6 md:gap-10 w-full max-w-3xl mx-auto">

        {/* Left: data origin */}
        <div className="flex flex-col items-center gap-3 w-[180px] shrink-0">
          <div className="text-zinc-600 text-[10px] font-medium uppercase tracking-widest mb-1">Vos données</div>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeIndex}-left`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/80 px-4 py-3 w-full"
            >
              <div className="flex items-center justify-center rounded-md shrink-0"
                style={{ width: 28, height: 28, backgroundColor: `${item.color}15` }}>
                <Icon style={{ width: 14, height: 14, color: item.color }} />
              </div>
              <span className="text-zinc-300 text-xs font-medium truncate">{item.label}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrow left → shield */}
        <div className="flex-1 relative h-[2px] max-w-[100px]">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-700" />
          <motion.div
            className="absolute top-[-3px] w-2 h-2 rounded-full"
            style={{ backgroundColor: item.color, boxShadow: `0 0 12px ${item.color}` }}
            animate={phase === "enter" ? { left: ["0%", "100%"] } : { left: "100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>

        {/* Center: Shield */}
        <div className="relative flex items-center justify-center shrink-0">
          {/* Outer pulse */}
          <motion.div
            className="absolute rounded-full"
            style={{ width: 120, height: 120 }}
            animate={phase === "encrypt"
              ? { boxShadow: ["0 0 0px rgba(99,102,241,0)", "0 0 60px rgba(99,102,241,0.4)", "0 0 0px rgba(99,102,241,0)"] }
              : {}
            }
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="absolute rounded-full border border-indigo-500/20"
            style={{ width: 110, height: 110 }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Shield body */}
          <motion.div
            className="relative flex items-center justify-center rounded-full z-10"
            style={{
              width: 80, height: 80,
              background: "linear-gradient(135deg, #312e81 0%, #4338ca 50%, #6366f1 100%)",
              boxShadow: "0 0 40px rgba(99,102,241,0.3), inset 0 1px 1px rgba(255,255,255,0.1)",
            }}
            animate={phase === "encrypt" ? { scale: [1, 1.12, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            <ShieldCheck className="text-white" style={{ width: 32, height: 32 }} />
          </motion.div>

          {/* Lock badge */}
          <motion.div
            className="absolute flex items-center justify-center rounded-full z-20"
            style={{
              width: 24, height: 24, bottom: 0, right: 0,
              backgroundColor: "#1e1b4b", border: "2px solid #312e81",
            }}
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Lock style={{ width: 10, height: 10, color: "#a5b4fc" }} />
          </motion.div>
        </div>

        {/* Arrow shield → right */}
        <div className="flex-1 relative h-[2px] max-w-[100px]">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-700 to-zinc-800" />
          <motion.div
            className="absolute top-[-3px] w-2 h-2 rounded-full bg-emerald-400"
            style={{ boxShadow: "0 0 12px #34d399" }}
            animate={phase === "exit" ? { left: ["0%", "100%"] } : { left: "0%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>

        {/* Right: encrypted output */}
        <div className="flex flex-col items-center gap-3 w-[180px] shrink-0">
          <div className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-widest text-zinc-600 mb-1">
            <Database style={{ width: 10, height: 10 }} />
            <span>Chiffré</span>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeIndex}-right`}
              initial={{ opacity: 0, y: 12 }}
              animate={phase === "exit" ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, delay: phase === "exit" ? 0.6 : 0 }}
              className="flex items-center gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 w-full"
            >
              <Lock style={{ width: 12, height: 12, color: "#22c55e", flexShrink: 0 }} />
              <span className="font-mono text-emerald-400/70 text-[11px] truncate">{item.encrypted}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Step indicators ── */}
      <div className="flex items-center gap-2">
        {DATA_ITEMS.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === activeIndex ? 20 : 6,
              height: 6,
              backgroundColor: i === activeIndex ? "#6366f1" : "#27272a",
            }}
          />
        ))}
      </div>

      {/* ── Bottom labels ── */}
      <div className="flex items-center justify-between w-full max-w-3xl text-[11px] text-zinc-600 px-4">
        <span>Données en clair sur votre appareil</span>
        <span className="text-indigo-400/50 font-medium">AES-256</span>
        <span>Stockage chiffré — illisible sans clé</span>
      </div>
    </div>
  )
}

/* ============================================================
   Main Section
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

        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-white mb-8 max-w-3xl"
          style={{ letterSpacing: "-0.0325em", fontWeight: 538, lineHeight: 1.1 }}
        >
          Vos données, votre contrôle total
        </h2>

        <p className="text-zinc-400 text-lg max-w-md mb-16">
          <span className="text-white font-medium">Chiffrement zero-access de bout en bout.</span> Vos factures et
          données clients sont chiffrées avec votre mot de passe. Même nous ne pouvons pas les lire.
        </p>

        {/* ===== ENCRYPTION FLOW ANIMATION ===== */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 mb-20 overflow-hidden"
        >
          <EncryptionFlow />
        </motion.div>

        {/* ===== BOTTOM: Two-column ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2">
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
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />8 payées
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-xs">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />3 envoyées
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-red-500/20 text-red-400 text-xs">
                    <span className="w-2 h-2 rounded-full bg-red-500" />1 en retard
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

          <div className="border-t border-b border-zinc-800 pt-10 pl-10 pb-16">
            <h3 className="text-xl font-medium text-zinc-200 mb-3">Suivi des paiements</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Suivez chaque paiement en temps réel avec des notifications automatiques.
            </p>
            <div className="relative h-48">
              <div className="absolute rounded-lg bg-zinc-800/40 border border-zinc-700/30 px-4 py-2" style={{ top: 0, left: "10%", width: "80%" }}>
                <span className="flex items-center gap-2 text-zinc-500 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />En retard — TechStart SAS
                </span>
              </div>
              <div className="absolute rounded-lg bg-zinc-800/60 border border-zinc-700/40 px-4 py-2" style={{ top: "30px", left: "5%", width: "85%" }}>
                <span className="flex items-center gap-2 text-zinc-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />Envoyée — Studio Créatif
                </span>
              </div>
              <div className="absolute rounded-xl bg-zinc-800/90 border border-zinc-700/50 px-5 py-4" style={{ top: "60px", left: 0, width: "95%" }}>
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

        {/* Bottom 4-col */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="2" width="14" height="16" rx="2" /><line x1="6" y1="6" x2="14" y2="6" /><line x1="6" y1="10" x2="14" y2="10" /><line x1="6" y1="14" x2="10" y2="14" />
              </svg>
              <span className="text-zinc-200 font-medium">Factures</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">Créez et envoyez des factures professionnelles.</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="10" cy="10" r="8" /><path d="M7 10l2 2 4-4" />
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
                <rect x="2" y="10" width="3" height="8" rx="1" /><rect x="7" y="6" width="3" height="12" rx="1" /><rect x="12" y="8" width="3" height="10" rx="1" /><rect x="17" y="4" width="3" height="14" rx="1" />
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
