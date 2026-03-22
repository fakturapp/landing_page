"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useAnimationFrame, useTransform } from "framer-motion"
import { ChevronRight, ChevronDown, Sparkles, Check, Mail, BarChart3, Users, TrendingUp, FileText, MessageSquare, Loader2, Paperclip } from "lucide-react"

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
   Thinking dots animation
   ============================================================ */

function ThinkingDots() {
  return (
    <span className="inline-flex items-center gap-0.5 ml-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1 h-1 rounded-full bg-zinc-400"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </span>
  )
}

/* ============================================================
   Scenarios
   ============================================================ */

type PickItem = { name: string; sub: string; selected?: boolean }
type ChatFlow = {
  userMessage: string
  attachment?: string
  thoughts: string[]
  generatingText: string
}
type Scenario = {
  name: string
  icon: string
  picking?: { title: string; items: PickItem[] }
  chatFlow: ChatFlow
  successText: string
  result: React.ReactNode
}

const SCENARIOS: Scenario[] = [
  {
    name: "Rédiger un mail de relance",
    icon: "✦",
    picking: {
      title: "Sélectionnez une facture",
      items: [
        { name: "FAK-2024-001", sub: "Dupont & Fils — 2 490,00 €", selected: true },
        { name: "FAK-2024-002", sub: "TechStart SAS — 1 200,00 €" },
        { name: "FAK-2024-003", sub: "Studio Créatif — 850,00 €" },
      ],
    },
    chatFlow: {
      userMessage: "Rédiger un mail de relance",
      attachment: "FAK-2024-001 en pièce jointe",
      thoughts: [
        "Je lis la facture FAK-2024-001 de Dupont & Fils...",
        "Montant impayé : 2 490,00 € — émise le 15/03/2024",
        "Je rédige un mail de relance professionnel...",
      ],
      generatingText: "Génération du mail",
    },
    successText: "Mail envoyé automatiquement",
    result: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 mb-1">
          <Mail className="w-4 h-4 text-indigo-400" />
          <span className="text-zinc-300 text-sm font-medium">Mail de relance — Dupont & Fils</span>
        </div>
        <div className="rounded-lg border border-zinc-700/50 bg-zinc-800/60 p-4">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="text-zinc-500 text-[11px]">À :</span>
            <span className="text-zinc-300 text-[11px]">contact@dupont-fils.fr</span>
          </div>
          <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-zinc-700/40">
            <span className="text-zinc-500 text-[11px]">Objet :</span>
            <span className="text-zinc-300 text-[11px]">Relance — Facture FAK-2024-001</span>
          </div>
          <div className="text-zinc-400 text-xs leading-relaxed">
            Bonjour,<br /><br />
            Sauf erreur de notre part, la facture N° FAK-2024-001 d&apos;un montant de <span className="text-indigo-400 font-medium">2 490,00 €</span> émise
            le 15/03/2024 reste impayée à ce jour.<br /><br />
            Nous vous remercions de bien vouloir procéder au règlement dans les meilleurs délais...
          </div>
        </div>
        <div className="flex items-center gap-2 mt-1 px-1">
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <Check className="w-3 h-3 text-emerald-400" />
          </div>
          <span className="text-emerald-400 text-xs font-medium">Mail envoyé à contact@dupont-fils.fr</span>
          <span className="text-zinc-600 text-[10px] ml-auto">Il y a 2s</span>
        </div>
      </div>
    ),
  },
  {
    name: "Résumer mon mois",
    icon: "◆",
    chatFlow: {
      userMessage: "Résumer mon mois",
      thoughts: [
        "Je parcours vos 12 factures de mars 2024...",
        "8 factures payées, 3 en attente de paiement",
        "Calcul du CA : 12 450 € — en hausse de 23%",
      ],
      generatingText: "Génération du résumé",
    },
    successText: "Résumé mensuel prêt",
    result: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 mb-1">
          <BarChart3 className="w-4 h-4 text-indigo-400" />
          <span className="text-zinc-300 text-sm font-medium">Résumé — Mars 2024</span>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { label: "Chiffre d'affaires", value: "12 450 €", sub: "+23%", subIcon: TrendingUp, subColor: "#34d399" },
            { label: "Factures", value: "12", sub: "8 payées", dotColor: "#22c55e" },
            { label: "En attente", value: "3 200 €", sub: "3 factures", dotColor: "#fb923c" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg border border-zinc-700/50 bg-zinc-800/60 p-3">
              <div className="text-zinc-500 text-[9px] uppercase tracking-wider mb-1">{s.label}</div>
              <div className="text-zinc-100 text-base font-semibold" style={{ color: s.subColor || undefined }}>{s.value}</div>
              <div className="flex items-center gap-1 mt-1">
                {s.subIcon && <s.subIcon className="w-3 h-3" style={{ color: s.subColor }} />}
                {s.dotColor && !s.subIcon && <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.dotColor }} />}
                <span className="text-zinc-500 text-[10px]" style={{ color: s.subColor && "subIcon" in s ? s.subColor : undefined }}>{s.sub}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-zinc-700/50 bg-zinc-800/60 p-3">
          <div className="text-zinc-400 text-xs leading-relaxed">
            <span className="text-indigo-400">✦</span> Votre CA est en hausse de <span className="text-emerald-400 font-medium">23%</span> par rapport à février.
            <span className="text-zinc-200"> TechStart SAS</span> a une facture en retard de 15 jours — pensez à envoyer une relance.
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Suggestions clients",
    icon: "◎",
    picking: {
      title: "Sélectionnez un client",
      items: [
        { name: "Dupont & Fils", sub: "8 factures — 12 450,00 €", selected: true },
        { name: "TechStart SAS", sub: "3 factures — 4 200,00 €" },
        { name: "Studio Créatif", sub: "5 factures — 6 800,00 €" },
      ],
    },
    chatFlow: {
      userMessage: "Suggestions clients",
      attachment: "Dupont & Fils sélectionné",
      thoughts: [
        "J'analyse le profil de Dupont & Fils...",
        "8 factures — 12 450 € de CA sur 6 mois",
        "Je cherche des opportunités commerciales...",
      ],
      generatingText: "Génération des suggestions",
    },
    successText: "3 suggestions trouvées",
    result: (
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-2 mb-1">
          <Users className="w-4 h-4 text-indigo-400" />
          <span className="text-zinc-300 text-sm font-medium">Suggestions — Dupont & Fils</span>
        </div>
        {[
          { client: "Dupont & Fils", action: "Proposer un devis pour le projet Q2", tag: "Renouvellement", tagColor: "#818cf8" },
          { client: "TechStart SAS", action: "Relancer la facture impayée de 1 200 €", tag: "Relance", tagColor: "#fb923c" },
          { client: "Studio Créatif", action: "Envoyer la facture mensuelle récurrente", tag: "Récurrent", tagColor: "#34d399" },
        ].map((s) => (
          <div key={s.client} className="flex items-center gap-3 rounded-lg border border-zinc-700/50 bg-zinc-800/60 p-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0" style={{ backgroundColor: `${s.tagColor}15` }}>
              <span className="text-xs font-bold" style={{ color: s.tagColor }}>{s.client[0]}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-zinc-200 text-xs font-medium">{s.client}</div>
              <div className="text-zinc-500 text-[11px] truncate">{s.action}</div>
            </div>
            <span className="text-[9px] font-medium px-2 py-0.5 rounded shrink-0" style={{ backgroundColor: `${s.tagColor}20`, color: s.tagColor }}>
              {s.tag}
            </span>
          </div>
        ))}
      </div>
    ),
  },
]

const DROPDOWN_ITEMS = [
  { name: "Rédiger un mail de relance", icon: "✦" },
  { name: "Résumer mon mois", icon: "◆" },
  { name: "Suggestions clients", icon: "◎" },
  { name: "Génération de facture", icon: "◇" },
  { name: "Analyse des revenus", icon: "◈" },
]

/* ============================================================
   AI Demo Animation
   ============================================================ */

type Phase = "idle" | "selecting" | "picking" | "thinking" | "result"

/*
  Thinking sub-steps:
    0 = user message (right)
    1 = "Thinking" label (left)
    2..1+N = thoughts (under Thinking, left)
    2+N = "Génération du ..." (replaces Thinking)
  where N = chatFlow.thoughts.length
*/

function AIDemoAnimation() {
  const [scenarioIdx, setScenarioIdx] = useState(0)
  const [phase, setPhase] = useState<Phase>("idle")
  const [thinkStep, setThinkStep] = useState(0)
  const [pickIdx, setPickIdx] = useState(-1)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scenario = SCENARIOS[scenarioIdx]
  const flow = scenario.chatFlow
  const totalThinkSteps = 2 + flow.thoughts.length + 1 // user + thinking + thoughts + generating
  const generatingIdx = 2 + flow.thoughts.length
  const isGenerating = thinkStep >= generatingIdx

  // Phase transitions
  useEffect(() => {
    const clear = () => { if (timerRef.current) clearTimeout(timerRef.current) }
    clear()

    if (phase === "idle") {
      timerRef.current = setTimeout(() => setPhase("selecting"), 1500)
    } else if (phase === "selecting") {
      timerRef.current = setTimeout(() => {
        if (scenario.picking) {
          setPickIdx(-1)
          setPhase("picking")
        } else {
          setThinkStep(0)
          setPhase("thinking")
        }
      }, 1200)
    } else if (phase === "picking") {
      if (pickIdx === -1) {
        timerRef.current = setTimeout(() => {
          const idx = scenario.picking!.items.findIndex((it) => it.selected)
          setPickIdx(idx >= 0 ? idx : 0)
        }, 800)
      } else {
        timerRef.current = setTimeout(() => {
          setThinkStep(0)
          setPhase("thinking")
        }, 1200)
      }
    } else if (phase === "thinking") {
      if (thinkStep < totalThinkSteps - 1) {
        // Timing: user=0.6s, thinking=1s, thoughts=1.3s each, generating=2s
        const delay = thinkStep === 0 ? 600 : thinkStep === 1 ? 1000 : thinkStep < generatingIdx ? 1300 : 2000
        timerRef.current = setTimeout(() => setThinkStep((s) => s + 1), delay)
      } else {
        // Last step (generating), wait then go to result
        timerRef.current = setTimeout(() => setPhase("result"), 2000)
      }
    } else if (phase === "result") {
      timerRef.current = setTimeout(() => {
        setScenarioIdx((i) => (i + 1) % SCENARIOS.length)
        setPhase("idle")
      }, 4500)
    }

    return clear
  }, [phase, thinkStep, pickIdx, scenario, totalThinkSteps, generatingIdx])

  // Top bar text
  const barText = phase === "picking" && scenario.picking
    ? scenario.picking.title
    : phase === "thinking"
      ? isGenerating ? flow.generatingText : "Thinking"
      : ""

  return (
    <div style={{ perspective: "900px", userSelect: "none", WebkitUserSelect: "none", width: "100%", maxWidth: "720px" }}>
      <div style={{ transformOrigin: "top", willChange: "transform", transform: "translateY(0%) rotateX(30deg) scale(1.15)", position: "relative" }}>
        {/* Bottom fade */}
        <div style={{
          background: "linear-gradient(180deg, transparent 0%, #09090B 100%)", height: "80%",
          position: "absolute", bottom: "-2px", left: "-180px", right: "-180px", pointerEvents: "none", zIndex: 11,
        }} />

        {/* ── Modal container (Faktur style) ── */}
        <div style={{
          backgroundColor: "#09090b",
          border: "1px solid #27272a",
          borderRadius: "16px",
          boxShadow: "0 0 80px -20px rgba(99,102,241,0.15), 0 25px 50px -12px rgba(0,0,0,0.7)",
          overflow: "hidden",
        }}>
          {/* Input bar */}
          <div style={{ padding: "16px 20px", borderBottom: "1px solid #1e1e22", backgroundColor: "#111113" }}>
            <AnimatePresence mode="wait">
              {(phase === "thinking" || phase === "picking") ? (
                <motion.div key={`bar-${isGenerating ? "gen" : "think"}`} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="flex items-center gap-2.5">
                  {isGenerating ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                      <Loader2 className="w-4 h-4 text-indigo-400" />
                    </motion.div>
                  ) : (
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                  )}
                  {isGenerating ? (
                    <span className="text-indigo-400 text-sm font-medium">Faktur AI</span>
                  ) : (
                    <ShinyText text={barText} className="text-sm font-medium" color="#a1a1aa" shineColor="#ffffff" speed={1.5} />
                  )}
                  {!isGenerating && <ThinkingDots />}
                </motion.div>
              ) : phase === "result" ? (
                <motion.div key="done-bar" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="flex items-center gap-2.5">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                    <Check className="w-4 h-4 text-emerald-400" />
                  </motion.div>
                  <span className="text-emerald-400 text-sm font-medium">{scenario.successText}</span>
                </motion.div>
              ) : (
                <motion.div key="idle-bar" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-zinc-600" />
                  <span className="text-zinc-500 text-sm">Que souhaitez-vous faire ?</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Content — FIXED HEIGHT */}
          <div style={{ height: 360, position: "relative", overflow: "hidden" }}>
            <AnimatePresence mode="wait">

              {/* ── Dropdown ── */}
              {(phase === "idle" || phase === "selecting") && (
                <motion.div
                  key="dropdown"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.98, y: -8 }}
                  transition={{ duration: 0.25 }}
                  style={{ padding: "4px 0" }}
                >
                  {DROPDOWN_ITEMS.map((f, i) => {
                    const isActive = i === scenarioIdx && phase === "selecting"
                    return (
                      <motion.div
                        key={f.name}
                        animate={isActive ? { backgroundColor: "#27272a", scale: 1.02 } : { backgroundColor: "transparent", scale: 1 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        style={{ height: 44, marginLeft: 8, marginRight: 8, borderRadius: 8, opacity: isActive ? 1 : Math.max(0.3, 1 - i * 0.12) }}
                      >
                        <div className="flex items-center justify-between h-full" style={{ paddingLeft: 16, paddingRight: 16 }}>
                          <div className="flex items-center gap-3">
                            <span className="text-indigo-400">{f.icon}</span>
                            <span className={`text-sm ${isActive ? "text-white font-medium" : "text-zinc-400"}`}>{f.name}</span>
                            <span className="text-[9px] bg-indigo-500/15 text-indigo-400/80 px-1.5 py-0.5 rounded">IA</span>
                          </div>
                          <AnimatePresence>
                            {isActive && (
                              <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                                <Check className="w-4 h-4 text-indigo-400" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              )}

              {/* ── Picking (facture/client selection) ── */}
              {phase === "picking" && scenario.picking && (
                <motion.div key="picking" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }} className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-4 h-4 text-zinc-500" />
                    <span className="text-zinc-400 text-sm">{scenario.picking.title}</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {scenario.picking.items.map((item, i) => {
                      const isSelected = i === pickIdx
                      return (
                        <motion.div
                          key={item.name}
                          animate={isSelected
                            ? { backgroundColor: "#312e81", borderColor: "#4f46e5", scale: 1.02 }
                            : { backgroundColor: "#1c1c1f", borderColor: "#27272a", scale: 1 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="flex items-center justify-between rounded-lg border p-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                              style={{ backgroundColor: isSelected ? "#4f46e520" : "#27272a" }}>
                              <FileText className="w-4 h-4" style={{ color: isSelected ? "#818cf8" : "#52525b" }} />
                            </div>
                            <div>
                              <div className={`text-sm font-medium ${isSelected ? "text-white" : "text-zinc-400"}`}>{item.name}</div>
                              <div className="text-zinc-500 text-[11px]">{item.sub}</div>
                            </div>
                          </div>
                          <AnimatePresence>
                            {isSelected && (
                              <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                                <Check className="w-4 h-4 text-indigo-400" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {/* ── ChatGPT-style thinking chat ── */}
              {phase === "thinking" && (
                <motion.div
                  key="thinking-chat"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col gap-0 p-4 overflow-y-auto"
                  style={{ maxHeight: 360 }}
                >
                  {/* ── Step 0: User message (right-aligned) ── */}
                  {thinkStep >= 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="flex justify-end mb-4"
                    >
                      <div className="max-w-[75%]">
                        <div className="rounded-2xl rounded-br-md px-4 py-2.5" style={{ backgroundColor: "#312e81" }}>
                          <span className="text-white text-sm">{flow.userMessage}</span>
                        </div>
                        {flow.attachment && (
                          <motion.div
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                            className="flex items-center gap-1.5 mt-1.5 justify-end"
                          >
                            <Paperclip className="w-3 h-3 text-zinc-500" />
                            <span className="text-zinc-500 text-[11px]">{flow.attachment}</span>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* ── Step 1+: AI side (left-aligned) ── */}
                  {thinkStep >= 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="flex justify-start"
                    >
                      <div className="max-w-[85%]">
                        {/* Thinking / Generating header */}
                        <div className="flex items-center gap-2 mb-2">
                          {isGenerating ? (
                            <>
                              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                                <Loader2 className="w-3.5 h-3.5 text-indigo-400" />
                              </motion.div>
                              <span className="text-indigo-400 text-sm font-medium">{flow.generatingText}</span>
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
                              <ShinyText text="Thinking" className="text-sm font-medium" color="#a1a1aa" shineColor="#ffffff" speed={1.5} />
                              <ThinkingDots />
                            </>
                          )}
                        </div>

                        {/* Expanded thoughts (under Thinking, with left border line like ChatGPT) */}
                        {!isGenerating && thinkStep >= 2 && (
                          <div className="ml-1.5 pl-3.5" style={{ borderLeft: "2px solid #27272a" }}>
                            {flow.thoughts.map((thought, i) => {
                              const stepIdx = i + 2
                              if (thinkStep < stepIdx) return null
                              const isCurrent = thinkStep === stepIdx
                              return (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, y: 8, height: 0 }}
                                  animate={{ opacity: 1, y: 0, height: "auto" }}
                                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                  className="py-1.5"
                                >
                                  <div className="flex items-center gap-1.5">
                                    {isCurrent ? (
                                      <ShinyText text={thought} className="text-[13px]" color="#71717a" shineColor="#d4d4d8" speed={1.8} />
                                    ) : (
                                      <span className="text-zinc-500 text-[13px]">{thought}</span>
                                    )}
                                    {!isCurrent && (
                                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 400 }}>
                                        <Check className="w-3 h-3 text-zinc-600" />
                                      </motion.div>
                                    )}
                                  </div>
                                </motion.div>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* ── Result ── */}
              {phase === "result" && (
                <motion.div
                  key={`result-${scenarioIdx}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="p-5 h-full overflow-hidden"
                >
                  {scenario.result}
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <Sparkles className="w-3 h-3 text-indigo-400/60" />
                    <span className="text-zinc-600 text-[10px]">Généré par Faktur AI</span>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
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
            style={{ letterSpacing: "-0.0325em", fontWeight: 538, lineHeight: 1.1 }}>
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

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-24">
            <AIDemoAnimation />
          </motion.div>

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
