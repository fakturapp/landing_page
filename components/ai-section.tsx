"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence, useMotionValue, useAnimationFrame, useTransform } from "framer-motion"
import { ChevronRight, Sparkles, Check, Mail, BarChart3, Users, TrendingUp, FileText, MessageSquare } from "lucide-react"

/* ============================================================
   ShinyText
   ============================================================ */

function ShinyText({ text, className = "", color = "#71717a", shineColor = "#e4e4e7", speed = 2 }: {
  text: string; className?: string; color?: string; shineColor?: string; speed?: number
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
        backgroundSize: "200% auto", WebkitBackgroundClip: "text", backgroundClip: "text",
        WebkitTextFillColor: "transparent", backgroundPosition,
      }}
    >
      {text}
    </motion.span>
  )
}

/* ============================================================
   3 AI Scenarios
   ============================================================ */

const SCENARIOS = [
  {
    name: "Rédiger un mail de relance",
    icon: Mail,
    thinkingText: "Rédaction du mail...",
    successText: "Mail rédigé",
    result: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 mb-1">
          <Mail className="w-4 h-4 text-indigo-400" />
          <span className="text-zinc-300 text-sm font-medium">Mail de relance — Dupont & Fils</span>
        </div>
        <div className="rounded-lg border border-zinc-800 bg-zinc-800/40 p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-zinc-500 text-xs">À :</span>
            <span className="text-zinc-300 text-xs">contact@dupont-fils.fr</span>
          </div>
          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-zinc-700/50">
            <span className="text-zinc-500 text-xs">Objet :</span>
            <span className="text-zinc-300 text-xs">Relance — Facture FAK-2024-001</span>
          </div>
          <div className="text-zinc-400 text-xs leading-relaxed">
            Bonjour,<br /><br />
            Sauf erreur de notre part, la facture N° FAK-2024-001 d&apos;un montant de <span className="text-indigo-400 font-medium">2 490,00 €</span> émise
            le 15/03/2024 reste impayée à ce jour.<br /><br />
            Nous vous remercions de bien vouloir procéder au règlement...
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Résumer mon mois",
    icon: BarChart3,
    thinkingText: "Analyse de vos données...",
    successText: "Résumé prêt",
    result: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 mb-1">
          <BarChart3 className="w-4 h-4 text-indigo-400" />
          <span className="text-zinc-300 text-sm font-medium">Résumé — Mars 2024</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-lg border border-zinc-800 bg-zinc-800/40 p-3">
            <div className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1">Chiffre d&apos;affaires</div>
            <div className="text-emerald-400 text-lg font-semibold">12 450 €</div>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400 text-[10px]">+23%</span>
            </div>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-800/40 p-3">
            <div className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1">Factures</div>
            <div className="text-zinc-200 text-lg font-semibold">12</div>
            <div className="flex items-center gap-1 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-zinc-500 text-[10px]">8 payées</span>
            </div>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-800/40 p-3">
            <div className="text-zinc-500 text-[10px] uppercase tracking-wider mb-1">En attente</div>
            <div className="text-orange-400 text-lg font-semibold">3 200 €</div>
            <div className="flex items-center gap-1 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              <span className="text-zinc-500 text-[10px]">3 factures</span>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-zinc-800 bg-zinc-800/40 p-3">
          <div className="text-zinc-400 text-xs leading-relaxed">
            <span className="text-indigo-400">✦</span> Votre CA est en hausse de <span className="text-emerald-400 font-medium">23%</span> par rapport à février.
            Le client <span className="text-zinc-200">TechStart SAS</span> a une facture en retard de 15 jours.
            Pensez à envoyer une relance.
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Suggestions clients",
    icon: Users,
    thinkingText: "Analyse des profils clients...",
    successText: "3 suggestions",
    result: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 mb-1">
          <Users className="w-4 h-4 text-indigo-400" />
          <span className="text-zinc-300 text-sm font-medium">Suggestions</span>
        </div>
        {[
          { client: "Dupont & Fils", action: "Proposer un devis pour le projet Q2", tag: "Renouvellement", tagColor: "#818cf8" },
          { client: "TechStart SAS", action: "Relancer la facture impayée de 1 200 €", tag: "Relance", tagColor: "#fb923c" },
          { client: "Studio Créatif", action: "Envoyer la facture mensuelle récurrente", tag: "Récurrent", tagColor: "#34d399" },
        ].map((s) => (
          <div key={s.client} className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-800/40 p-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0"
              style={{ backgroundColor: `${s.tagColor}15` }}>
              <span className="text-xs font-bold" style={{ color: s.tagColor }}>{s.client[0]}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-zinc-200 text-xs font-medium">{s.client}</div>
              <div className="text-zinc-500 text-[11px] truncate">{s.action}</div>
            </div>
            <span className="text-[9px] font-medium px-2 py-0.5 rounded shrink-0"
              style={{ backgroundColor: `${s.tagColor}20`, color: s.tagColor }}>
              {s.tag}
            </span>
          </div>
        ))}
      </div>
    ),
  },
]

const AI_FEATURES = [
  { name: "Rédiger un mail de relance", icon: "✦" },
  { name: "Résumer mon mois", icon: "◆" },
  { name: "Suggestions clients", icon: "◎" },
  { name: "Génération de facture", icon: "◇" },
  { name: "Analyse des revenus", icon: "◈" },
]

/* ============================================================
   AI Demo Animation
   ============================================================ */

type Phase = "idle" | "selecting" | "loading" | "thinking" | "result"

function AIDemoAnimation() {
  const [scenarioIdx, setScenarioIdx] = useState(0)
  const [phase, setPhase] = useState<Phase>("idle")
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const durations: Record<Phase, number> = {
    idle: 1200,
    selecting: 900,
    loading: 1200,
    thinking: 2000,
    result: 4000,
  }

  const nextPhase = useCallback(() => {
    setPhase((p) => {
      if (p === "result") {
        setScenarioIdx((i) => (i + 1) % SCENARIOS.length)
        return "idle"
      }
      const order: Phase[] = ["idle", "selecting", "loading", "thinking", "result"]
      return order[order.indexOf(p) + 1]
    })
  }, [])

  useEffect(() => {
    timerRef.current = setTimeout(nextPhase, durations[phase])
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [phase, nextPhase])

  const scenario = SCENARIOS[scenarioIdx]

  return (
    <div style={{ perspective: "900px", userSelect: "none", WebkitUserSelect: "none", width: "100%", maxWidth: "720px", position: "relative" }}>
      <div style={{ transformOrigin: "top", willChange: "transform", transform: "translateY(0%) rotateX(30deg) scale(1.15)", position: "relative" }}>
        {/* Glass overlay */}
        <div style={{
          border: "1px solid rgba(66,66,66,0.5)",
          background: "linear-gradient(rgba(255,255,255,0.1) 40%, rgba(8,9,10,0.1) 100%)",
          borderRadius: "8px", position: "absolute", top: 0, bottom: 0, left: 0, right: 0,
          boxShadow: "inset 0 1.5px 5.3px rgba(255,255,255,0.04), inset 0 -0.75px 0.75px rgba(255,255,255,0.1)",
          pointerEvents: "none", zIndex: 10,
        }} />
        {/* Bottom fade */}
        <div style={{
          background: "linear-gradient(180deg, transparent 0%, #09090B 100%)", height: "80%",
          position: "absolute", bottom: "-2px", left: "-180px", right: "-180px", pointerEvents: "none", zIndex: 11,
        }} />

        {/* Input field */}
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-t-xl px-5 py-4">
          <AnimatePresence mode="wait">
            {(phase === "loading" || phase === "thinking") ? (
              <motion.div key="think" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <ShinyText text={scenario.thinkingText} className="text-sm font-medium" color="#818cf8" shineColor="#c7d2fe" speed={1.5} />
              </motion.div>
            ) : phase === "result" ? (
              <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">{scenario.successText}</span>
              </motion.div>
            ) : (
              <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-zinc-500 italic text-sm">
                Que souhaitez-vous faire ?
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Content — FIXED HEIGHT */}
        <div className="bg-zinc-900/80 border border-t-0 border-zinc-700 rounded-b-xl overflow-hidden" style={{ height: 340 }}>
          <AnimatePresence mode="wait">
            {/* ── Dropdown ── */}
            {(phase === "idle" || phase === "selecting") && (
              <motion.div key="dropdown" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="py-1">
                {AI_FEATURES.map((f, i) => {
                  const isActive = i === scenarioIdx && phase === "selecting"
                  return (
                    <div
                      key={f.name}
                      style={isActive ? {
                        transform: "scale(1.04) rotateX(17deg)",
                        background: "linear-gradient(#343434 0%, #2d2d2d 100%)",
                        borderRadius: "6px", height: "48px", position: "relative",
                        boxShadow: "inset 0 -2.75px 4.75px rgba(255,255,255,0.14), inset 0 -0.75px 0.75px rgba(255,255,255,0.1), 0 54px 73px 3px rgba(0,0,0,0.5)",
                        zIndex: 20, marginLeft: "-12px", marginRight: "-12px",
                      } : { opacity: 1 - i * 0.12, height: "42px" }}
                    >
                      <div className="flex items-center justify-between h-full" style={{ paddingLeft: 24, paddingRight: 24, gap: 12 }}>
                        <div className="flex items-center gap-3">
                          <span className="text-indigo-400 text-lg">{f.icon}</span>
                          <span className={isActive ? "text-white font-medium" : "text-zinc-300 text-sm"}>{f.name}</span>
                          <span className="text-[10px] bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded">IA</span>
                        </div>
                        {isActive && (
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

            {/* ── Loading / Thinking ── */}
            {(phase === "loading" || phase === "thinking") && (
              <motion.div
                key="loader"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center gap-5 h-full"
              >
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                  <div className="w-10 h-10 rounded-full border-2 border-zinc-700 border-t-indigo-500" />
                </motion.div>
                <ShinyText
                  text={phase === "loading" ? "Chargement..." : scenario.thinkingText}
                  className="text-sm"
                  color="#52525b"
                  shineColor="#a1a1aa"
                  speed={2}
                />
              </motion.div>
            )}

            {/* ── Result ── */}
            {phase === "result" && (
              <motion.div
                key={`result-${scenarioIdx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="p-5 h-full overflow-hidden"
              >
                {scenario.result}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <Sparkles className="w-3 h-3 text-indigo-400" />
                  <span className="text-zinc-600 text-[10px]">Généré par Faktur AI</span>
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
      <div className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{ height: "20%", background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)" }} />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <span className="text-zinc-400 text-sm">Intelligence artificielle</span>
            <ChevronRight className="w-4 h-4 text-zinc-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-3xl mb-8"
            style={{ letterSpacing: "-0.0325em", fontWeight: 538, lineHeight: 1.1 }}
          >
            Facturation assistée par l&apos;IA
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 max-w-md mb-8">
            <span className="text-white font-medium">Faktur AI.</span> Générez vos factures et devis en quelques
            secondes grâce à l&apos;intelligence artificielle. Résumés, suggestions et assistance intégrés.
          </motion.p>

          <motion.button initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
            className="px-5 py-2.5 bg-zinc-800 text-zinc-300 rounded-lg border border-zinc-700 hover:bg-zinc-700 transition-colors text-sm flex items-center gap-2 mb-16">
            En savoir plus
            <ChevronRight className="w-4 h-4" />
          </motion.button>

          {/* AI Demo */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-24">
            <AIDemoAnimation />
          </motion.div>

          {/* Bottom columns */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16">
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
                    <span className="flex items-center gap-1.5 bg-zinc-800/30 rounded-md px-2 py-1 text-sm text-zinc-400">
                      <FileText className="w-3 h-3" />3 lignes détectées
                    </span>
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
                      <button className="flex items-center gap-1.5 border border-zinc-700/60 text-zinc-500 text-sm px-3 py-1.5 rounded-full hover:bg-zinc-700/30 transition-colors">
                        <MessageSquare className="w-3.5 h-3.5" />Demander
                      </button>
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
