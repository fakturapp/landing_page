"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence, useMotionValue, useAnimationFrame, useTransform } from "framer-motion"
import { ChevronRight, Sparkles, Check, Loader2 } from "lucide-react"

/* ============================================================
   ShinyText — animated gradient shine on text
   ============================================================ */

function ShinyText({
  text,
  className = "",
  color = "#71717a",
  shineColor = "#e4e4e7",
  speed = 2,
}: {
  text: string
  className?: string
  color?: string
  shineColor?: string
  speed?: number
}) {
  const progress = useMotionValue(0)
  const lastRef = useRef<number | null>(null)
  const elapsedRef = useRef(0)
  const dur = speed * 1000

  useAnimationFrame((time) => {
    if (lastRef.current === null) { lastRef.current = time; return }
    elapsedRef.current += time - lastRef.current
    lastRef.current = time
    progress.set((elapsedRef.current % dur) / dur * 100)
  })

  const backgroundPosition = useTransform(progress, (p) => `${150 - p * 2}% center`)

  return (
    <motion.span
      className={`inline-block ${className}`}
      style={{
        backgroundImage: `linear-gradient(120deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundPosition,
      }}
    >
      {text}
    </motion.span>
  )
}

/* ============================================================
   AI Demo Animation — auto-playing sequence
   ============================================================ */

type Phase = "idle" | "selecting" | "loading" | "thinking" | "result"

const PHASE_DURATIONS: Record<Phase, number> = {
  idle: 1200,
  selecting: 800,
  loading: 1500,
  thinking: 2500,
  result: 3500,
}

const AI_FEATURES = [
  { name: "Génération de facture", icon: "✦" },
  { name: "Résumé du dashboard", icon: "◆" },
  { name: "Assistant facturation", icon: "◇" },
  { name: "Suggestions clients", icon: "◎" },
  { name: "Analyse des revenus", icon: "◈" },
]

function AIDemoAnimation() {
  const [phase, setPhase] = useState<Phase>("idle")
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const nextPhase = useCallback(() => {
    setPhase((p) => {
      const order: Phase[] = ["idle", "selecting", "loading", "thinking", "result"]
      const next = order[(order.indexOf(p) + 1) % order.length]
      return next
    })
  }, [])

  useEffect(() => {
    timerRef.current = setTimeout(nextPhase, PHASE_DURATIONS[phase])
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [phase, nextPhase])

  return (
    <div
      style={{ perspective: "900px", userSelect: "none", WebkitUserSelect: "none", width: "100%", maxWidth: "720px", position: "relative" }}
    >
      <div style={{ transformOrigin: "top", willChange: "transform", transform: "translateY(0%) rotateX(30deg) scale(1.15)", position: "relative" }}>
        {/* Glass overlay */}
        <div
          style={{
            border: "1px solid rgba(66,66,66,0.5)",
            background: "linear-gradient(rgba(255,255,255,0.1) 40%, rgba(8,9,10,0.1) 100%)",
            borderRadius: "8px", position: "absolute", top: 0, bottom: 0, left: 0, right: 0,
            boxShadow: "inset 0 1.5px 5.3px rgba(255,255,255,0.04), inset 0 -0.75px 0.75px rgba(255,255,255,0.1)",
            pointerEvents: "none", zIndex: 10,
          }}
        />
        {/* Bottom fade */}
        <div
          style={{
            background: "linear-gradient(180deg, transparent 0%, #09090B 100%)", height: "80%",
            position: "absolute", bottom: "-2px", left: "-180px", right: "-180px", pointerEvents: "none", zIndex: 11,
          }}
        />

        {/* Input field */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-t-xl px-5 py-4">
          <AnimatePresence mode="wait">
            {phase === "loading" || phase === "thinking" ? (
              <motion.div
                key="thinking"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3"
              >
                {phase === "loading" ? (
                  <Loader2 className="w-4 h-4 text-indigo-400 animate-spin" />
                ) : (
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                )}
                {phase === "loading" ? (
                  <span className="text-zinc-400 text-sm">Génération en cours...</span>
                ) : (
                  <ShinyText text="Thinking..." className="text-sm font-medium" color="#818cf8" shineColor="#c7d2fe" speed={1.5} />
                )}
              </motion.div>
            ) : phase === "result" ? (
              <motion.div
                key="result-input"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">Facture générée avec succès</span>
              </motion.div>
            ) : (
              <motion.span
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-zinc-500 italic text-sm"
              >
                Que souhaitez-vous faire ?
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Content area */}
        <div className="bg-zinc-900/80 border border-t-0 border-zinc-700 rounded-b-xl overflow-hidden">
          <AnimatePresence mode="wait">
            {(phase === "idle" || phase === "selecting") && (
              <motion.div
                key="dropdown"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="py-1"
              >
                {AI_FEATURES.map((feature, index) => {
                  const isSelected = index === 0 && phase === "selecting"
                  return (
                    <div
                      key={feature.name}
                      style={isSelected ? {
                        transform: "scale(1.04) rotateX(17deg)",
                        background: "linear-gradient(#343434 0%, #2d2d2d 100%)",
                        borderRadius: "6px", height: "48px", position: "relative",
                        boxShadow: "inset 0 -2.75px 4.75px rgba(255,255,255,0.14), inset 0 -0.75px 0.75px rgba(255,255,255,0.1), 0 54px 73px 3px rgba(0,0,0,0.5)",
                        zIndex: 20, marginLeft: "-12px", marginRight: "-12px",
                      } : { opacity: 1 - index * 0.15, height: "42px" }}
                    >
                      <div className="flex items-center justify-between h-full" style={{ paddingLeft: 24, paddingRight: 24, gap: 12 }}>
                        <div className="flex items-center gap-3">
                          <span className="text-indigo-400 text-lg">{feature.icon}</span>
                          <span className={isSelected ? "text-white font-medium" : "text-zinc-300"}>{feature.name}</span>
                          <span className="text-xs bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded">IA</span>
                        </div>
                        {isSelected && (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Check className="w-4 h-4 text-indigo-400" />
                          </motion.div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            )}

            {(phase === "loading" || phase === "thinking") && (
              <motion.div
                key="loading-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-16 gap-4"
              >
                <motion.div
                  className="relative flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-12 h-12 rounded-full border-2 border-zinc-700 border-t-indigo-500" />
                </motion.div>
                {phase === "thinking" && (
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>
                    <ShinyText text="Analyse des données client..." className="text-sm" color="#52525b" shineColor="#a1a1aa" speed={2} />
                  </motion.div>
                )}
              </motion.div>
            )}

            {phase === "result" && (
              <motion.div
                key="result-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="p-5"
              >
                {/* Mini invoice preview */}
                <div className="bg-white rounded-lg p-5 shadow-lg" style={{ maxWidth: 420, margin: "0 auto" }}>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <img src="/logo.svg" alt="" style={{ width: 14, height: 14 }} />
                      <span className="text-zinc-800 text-xs font-semibold">Mon Entreprise SAS</span>
                    </div>
                    <div className="bg-indigo-500 text-white text-[10px] font-bold px-2.5 py-1 rounded">FACTURE</div>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-zinc-400 text-[10px]">N° FAK-2024-042</span>
                    <span className="text-zinc-400 text-[10px]">15/03/2024</span>
                  </div>
                  {/* Client */}
                  <div className="text-right mb-3">
                    <span className="text-zinc-700 text-xs font-medium">Dupont & Fils SARL</span>
                  </div>
                  {/* Table */}
                  <div className="border-t border-zinc-200 pt-2 mb-3">
                    <div className="flex items-center text-[9px] text-zinc-400 uppercase mb-1">
                      <span className="flex-1">Désignation</span>
                      <span className="w-12 text-right">Montant</span>
                    </div>
                    {[
                      { d: "Développement site web", m: "1 500,00 €" },
                      { d: "Design UI/UX", m: "750,00 €" },
                      { d: "Hébergement annuel", m: "200,00 €" },
                    ].map((r) => (
                      <div key={r.d} className="flex items-center py-1 border-b border-zinc-100 text-[10px]">
                        <span className="flex-1 text-zinc-600">{r.d}</span>
                        <span className="w-16 text-right text-zinc-800 font-medium">{r.m}</span>
                      </div>
                    ))}
                  </div>
                  {/* Total */}
                  <div className="flex items-center justify-end">
                    <div className="bg-indigo-500 text-white text-xs font-bold px-3 py-1.5 rounded">
                      Total TTC: 2 490,00 €
                    </div>
                  </div>
                </div>
                {/* AI badge */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <Sparkles className="w-3 h-3 text-indigo-400" />
                  <span className="text-zinc-500 text-xs">Générée par Faktur AI</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

/* ============================================================
   AI Section
   ============================================================ */

export function AISection() {
  return (
    <div id="ai" className="relative z-20 py-40" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{ height: "20%", background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)" }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <span className="text-zinc-400 text-sm">Intelligence artificielle</span>
            <ChevronRight className="w-4 h-4 text-zinc-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-3xl mb-8"
            style={{ letterSpacing: "-0.0325em", fontWeight: 538, lineHeight: 1.1 }}
          >
            Facturation assistée par l&apos;IA
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 max-w-md mb-8"
          >
            <span className="text-white font-medium">Faktur AI.</span> Générez vos factures et devis en quelques
            secondes grâce à l&apos;intelligence artificielle. Résumés, suggestions et assistance intégrés.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-5 py-2.5 bg-zinc-800 text-zinc-300 rounded-lg border border-zinc-700 hover:bg-zinc-700 transition-colors text-sm flex items-center gap-2 mb-16"
          >
            En savoir plus
            <ChevronRight className="w-4 h-4" />
          </motion.button>

          {/* AI Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-24"
          >
            <AIDemoAnimation />
          </motion.div>

          {/* Bottom columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="border-t border-r border-b border-zinc-800/60 pt-12 pr-12 pb-16">
                <h3 className="text-zinc-200 font-medium text-xl mb-3">Génération intelligente de documents</h3>
                <p className="text-zinc-500 text-base mb-8">
                  L&apos;IA analyse vos données clients et produits pour pré-remplir automatiquement vos factures et devis.
                </p>
                <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-5">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <span className="text-zinc-500 text-sm">Faktur <span className="text-indigo-400">AI</span></span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-zinc-600 text-sm w-20">Client</span>
                    <span className="flex items-center gap-1.5 rounded-md px-2 py-1 text-sm" style={{ background: "#6366f1" }}>
                      <span className="w-4 h-4 bg-white/30 rounded-full" />
                      <span className="text-white">Dupont & Fils</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-zinc-600 text-sm w-20">Prestations</span>
                    <span className="flex items-center gap-1.5 bg-zinc-800/30 rounded-md px-2 py-1 text-sm text-zinc-400">3 lignes détectées</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-zinc-600 text-sm w-20">Montant</span>
                    <span className="text-indigo-400 font-medium text-sm">2 450,00 € HT</span>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 text-sm py-2.5 rounded-md transition-colors border border-indigo-500/20">
                    <Check className="w-4 h-4" />Générer la facture
                  </button>
                </div>
              </div>

              <div className="border-t border-b border-zinc-800/60 pt-12 pl-12 pb-16">
                <h3 className="text-zinc-200 font-medium text-xl mb-3">Résumé IA du dashboard</h3>
                <p className="text-zinc-500 text-base mb-8">
                  Obtenez un résumé intelligent de votre activité : revenus, factures en attente et tendances.
                </p>
                <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <span className="text-zinc-400 text-sm font-medium">Résumé mensuel</span>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500 text-sm">Chiffre d&apos;affaires</span>
                      <span className="text-emerald-400 text-sm font-medium">12 450,00 €</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500 text-sm">Factures payées</span>
                      <span className="text-zinc-300 text-sm">8 / 12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500 text-sm">En attente</span>
                      <span className="text-orange-400 text-sm font-medium">3 200,00 €</span>
                    </div>
                  </div>
                  <div className="bg-zinc-800/40 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-0.5 h-5 bg-indigo-500" />
                      <span className="text-zinc-600">Posez une question sur vos données...</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1.5 border border-zinc-700/60 text-zinc-500 text-sm px-3 py-1.5 rounded-full hover:bg-zinc-700/30 transition-colors">Demander</button>
                      <button className="flex items-center gap-1.5 border border-zinc-700/60 text-zinc-500 text-sm px-3 py-1.5 rounded-full hover:bg-zinc-700/30 transition-colors">
                        <Sparkles className="w-3.5 h-3.5" />Analyser
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
