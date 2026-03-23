
import { useRef, useEffect, useState, useCallback, useMemo } from "react"
import { motion, useInView, AnimatePresence, useMotionValue, useAnimationFrame, useTransform } from "framer-motion"
import { ChevronRight, Lock, LockOpen, Database, FileText, Users, Building2, Github, GitBranch, Code2, Globe, CreditCard } from "lucide-react"

/* ============================================================
   DecryptedText — character-by-character reveal
   ============================================================ */

function DecryptedText({
  text,
  speed = 50,
  sequential = false,
  className = "",
  encryptedClassName = "",
  animateOn = "view",
  revealDirection = "start",
}: {
  text: string
  speed?: number
  sequential?: boolean
  className?: string
  encryptedClassName?: string
  animateOn?: "view" | "hover"
  revealDirection?: "start" | "end" | "center"
}) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
  const [displayText, setDisplayText] = useState(text)
  const [isHovering, setIsHovering] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef<HTMLSpanElement>(null)

  const getRevealOrder = useCallback(
    (length: number) => {
      const indices = Array.from({ length }, (_, i) => i)
      switch (revealDirection) {
        case "end":
          return indices.reverse()
        case "center": {
          const mid = Math.floor(length / 2)
          return indices.sort((a, b) => Math.abs(a - mid) - Math.abs(b - mid))
        }
        default:
          return indices
      }
    },
    [revealDirection]
  )

  const revealOrder = useMemo(() => getRevealOrder(text.length), [getRevealOrder, text.length])

  useEffect(() => {
    let isCancelled = false

    const shouldAnimate =
      animateOn === "view" ? !hasAnimated : animateOn === "hover" ? isHovering : false

    if (!shouldAnimate) return

    const revealed = new Set<number>()
    let currentIndex = 0

    const interval = setInterval(() => {
      if (isCancelled) return

      if (currentIndex < revealOrder.length) {
        if (sequential) {
          revealed.add(revealOrder[currentIndex])
          currentIndex++
        } else {
          const batchSize = Math.max(1, Math.floor(revealOrder.length / 10))
          for (let i = 0; i < batchSize && currentIndex < revealOrder.length; i++) {
            revealed.add(revealOrder[currentIndex])
            currentIndex++
          }
        }
      }

      const next = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " "
          if (revealed.has(i)) return char
          return chars[Math.floor(Math.random() * chars.length)]
        })
        .join("")

      setDisplayText(next)

      if (currentIndex >= revealOrder.length) {
        clearInterval(interval)
        setDisplayText(text)
        if (animateOn === "view") setHasAnimated(true)
      }
    }, speed)

    return () => {
      isCancelled = true
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovering, hasAnimated, animateOn])

  useEffect(() => {
    if (animateOn !== "view") return
    const el = containerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) setHasAnimated(true)
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [animateOn, hasAnimated])

  return (
    <span
      ref={containerRef}
      className={className}
      onMouseEnter={() => animateOn === "hover" && setIsHovering(true)}
      onMouseLeave={() => animateOn === "hover" && setIsHovering(false)}
    >
      {displayText.split("").map((char, i) => {
        const isRevealed = char === text[i]
        return (
          <span key={i} className={isRevealed ? "" : encryptedClassName}>
            {char}
          </span>
        )
      })}
    </span>
  )
}

/* ============================================================
   Encryption Flow — Animated pipeline
   3 data sources → dots with trails → padlock closes →
   green dots exit through 4 points → DecryptedText reveal
   ============================================================ */

const DATA_SOURCES = [
  { label: "Factures", color: "#818cf8", icon: FileText },
  { label: "Clients", color: "#34d399", icon: Users },
  { label: "Paiements", color: "#fb923c", icon: CreditCard },
]

const OUTPUT_ITEMS = [
  { label: "Base de données", encrypted: "xK9mR2..vP4nQ8" },
  { label: "Sauvegarde", encrypted: "aH7bY3..wL5jM1" },
  { label: "Synchronisation", encrypted: "cP2nT6..zR8fK4" },
  { label: "Archivage", encrypted: "dQ5sV9..uX3hN7" },
]

type EncryptPhase = "dots-in" | "locking" | "locked" | "dots-out" | "encrypted"

/* Animated trail: a bright tip + fading tail traveling along a path */
function AnimatedTrail({ d, color, delay, duration }: { d: string; color: string; delay: number; duration: number }) {
  return (
    <>
      {/* The trail: short segment that slides along the path */}
      <motion.path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
        animate={{
          pathLength: [0, 0.15, 0.15, 0],
          pathOffset: [0, 0, 0.85, 1],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration,
          delay,
          ease: "easeInOut",
          times: [0, 0.15, 0.85, 1],
        }}
        style={{ filter: `drop-shadow(0 0 8px ${color})` }}
      />
      {/* A wider, dimmer "glow" trail behind */}
      <motion.path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
        animate={{
          pathLength: [0, 0.25, 0.25, 0],
          pathOffset: [0, 0, 0.75, 1],
          opacity: [0, 0.15, 0.15, 0],
        }}
        transition={{
          duration,
          delay,
          ease: "easeInOut",
          times: [0, 0.15, 0.85, 1],
        }}
      />
    </>
  )
}

function EncryptionFlow() {
  const [phase, setPhase] = useState<EncryptPhase>("dots-in")
  const [cycleKey, setCycleKey] = useState(0)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    const t = (fn: () => void, ms: number) => { timers.push(setTimeout(fn, ms)) }

    setPhase("dots-in")
    t(() => setPhase("locking"), 2200)
    t(() => setPhase("locked"), 3200)
    t(() => setPhase("dots-out"), 3800)
    t(() => setPhase("encrypted"), 6000)
    t(() => { setCycleKey((c) => c + 1) }, 9500)

    return () => timers.forEach(clearTimeout)
  }, [cycleKey])

  const isLocked = phase === "locked" || phase === "dots-out" || phase === "encrypted"

  // Input paths: 3 sources → center padlock
  const inputPaths = DATA_SOURCES.map((_, i) => {
    const sy = 100 + i * 100
    return `M 80 ${sy} C 220 ${sy}, 320 200, 370 200`
  })

  // Output paths: center → 4 endpoints
  const outputPaths = OUTPUT_ITEMS.map((_, i) => {
    const ey = 65 + i * 90
    return `M 430 200 C 510 200, 580 ${ey}, 650 ${ey}`
  })

  return (
    <div className="relative py-10 px-4" key={cycleKey}>
      <svg className="w-full" viewBox="0 0 800 400" fill="none" style={{ maxHeight: 420 }}>

        {/* ── "Vos données" label ── */}
        <text x="40" y="52" textAnchor="middle" fill="#52525b" fontSize="9" fontWeight="600" letterSpacing="0.08em">
          VOS DONNÉES
        </text>

        {/* ── Input lines + animated trails ── */}
        {DATA_SOURCES.map((src, i) => {
          const d = inputPaths[i]
          const sy = 100 + i * 100
          return (
            <g key={`in-${i}`}>
              {/* Static line */}
              <path d={d} stroke="#1e1e22" strokeWidth="1.5" />

              {/* Dot with trail */}
              {phase === "dots-in" && (
                <AnimatedTrail d={d} color={src.color} delay={i * 0.35} duration={1.8} />
              )}

              {/* Arrival flash at center */}
              {phase === "locking" && (
                <motion.circle
                  cx="370" cy="200" r="3"
                  fill={src.color}
                  initial={{ opacity: 0, r: 3 }}
                  animate={{ opacity: [1, 0], r: [3, 12] }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                />
              )}

              {/* Source label box */}
              <rect x="6" y={sy - 22} width="68" height="44" rx="10" fill="#111113" stroke="#27272a" strokeWidth="1" />
              <foreignObject x="6" y={sy - 22} width="68" height="44">
                <div className="flex flex-col items-center justify-center h-full gap-0.5">
                  <src.icon style={{ width: 16, height: 16, color: src.color }} />
                  <span style={{ fontSize: 9, color: "#71717a" }}>{src.label}</span>
                </div>
              </foreignObject>
            </g>
          )
        })}

        {/* ── Output lines + green trails + encrypted boxes ── */}
        {OUTPUT_ITEMS.map((item, i) => {
          const d = outputPaths[i]
          const ey = 65 + i * 90
          const showEncrypted = phase === "encrypted"
          const boxX = 650
          const boxW = 150
          const boxH = 56
          return (
            <g key={`out-${i}`}>
              {/* Static line */}
              <path d={d} stroke="#1e1e22" strokeWidth="1.5" />

              {/* Green trail */}
              {phase === "dots-out" && (
                <AnimatedTrail d={d} color="#22c55e" delay={i * 0.2} duration={1.6} />
              )}

              {/* Output box */}
              <motion.rect
                x={boxX} y={ey - boxH / 2} width={boxW} height={boxH} rx="12"
                fill="#111113" strokeWidth="1"
                animate={
                  showEncrypted
                    ? { stroke: "#22c55e30", fill: "#05200e08" }
                    : { stroke: "#1e1e22", fill: "#111113" }
                }
                transition={{ duration: 0.5, delay: showEncrypted ? i * 0.12 : 0 }}
              />
              <foreignObject x={boxX} y={ey - boxH / 2} width={boxW} height={boxH}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 3, padding: "0 8px" }}>
                  {showEncrypted ? (
                    <>
                      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <Lock style={{ width: 10, height: 10, color: "#22c55e", flexShrink: 0 }} />
                        <span style={{ fontSize: 11, fontFamily: "'Lexend', sans-serif", letterSpacing: "0.05em" }}>
                          <DecryptedText
                            text={item.encrypted}
                            speed={35}
                            sequential
                            animateOn="view"
                            className="text-emerald-400/70"
                            encryptedClassName="text-indigo-400/40"
                          />
                        </span>
                      </div>
                      <span style={{ fontSize: 8, color: "#3f3f46", fontFamily: "var(--font-lexend), sans-serif" }}>{item.label}</span>
                    </>
                  ) : (
                    <>
                      <Lock style={{ width: 12, height: 12, color: "#3f3f46" }} />
                      <span style={{ fontSize: 9, color: "#52525b", fontFamily: "var(--font-lexend), sans-serif" }}>{item.label}</span>
                    </>
                  )}
                </div>
              </foreignObject>
            </g>
          )
        })}

        {/* ── Central padlock ── */}
        <g>
          {/* Pulse ring */}
          <motion.circle
            cx="400" cy="200" r="52"
            fill="none" stroke="#6366f1" strokeWidth="1"
            initial={{ opacity: 0.05 }}
            animate={
              phase === "locking"
                ? { r: [52, 65, 52], opacity: [0.1, 0.6, 0.2] }
                : isLocked
                  ? { opacity: 0.25 }
                  : { opacity: 0.05 }
            }
            transition={phase === "locking" ? { duration: 1, repeat: 1 } : { duration: 0.4 }}
          />

          {/* Inner circle */}
          <motion.circle
            cx="400" cy="200" r="42"
            stroke="#27272a" strokeWidth="1.5"
            animate={isLocked ? { fill: "#312e81" } : { fill: "#111113" }}
            transition={{ duration: 0.5 }}
          />

          {/* Lock glow burst when locking */}
          {phase === "locking" && (
            <motion.circle
              cx="400" cy="200" r="44"
              fill="none" stroke="#6366f1"
              initial={{ strokeWidth: 0, opacity: 0 }}
              animate={{ strokeWidth: [0, 5, 0], opacity: [0, 0.7, 0] }}
              transition={{ duration: 1 }}
            />
          )}

          {/* Lock icon (LockOpen → Lock) */}
          <foreignObject x="375" y="175" width="50" height="50">
            <div className="flex items-center justify-center w-full h-full">
              <AnimatePresence mode="wait">
                {isLocked ? (
                  <motion.div
                    key="locked"
                    initial={{ scale: 0.3, opacity: 0, rotate: -30 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  >
                    <Lock className="text-indigo-300" style={{ width: 24, height: 24 }} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    exit={{ scale: 0.3, opacity: 0, rotate: 30 }}
                    transition={{ duration: 0.25 }}
                  >
                    <LockOpen className="text-zinc-600" style={{ width: 24, height: 24 }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </foreignObject>

          {/* AES label */}
          <motion.text
            x="400" y="262" textAnchor="middle" fontSize="10" fontWeight="500"
            animate={isLocked ? { fill: "#818cf8" } : { fill: "#3f3f46" }}
            transition={{ duration: 0.4 }}
          >
            Zero-Access Encryptor
          </motion.text>
        </g>
      </svg>

      {/* Bottom labels */}
      <div className="flex items-center justify-between w-full max-w-2xl mx-auto text-[11px] text-zinc-600 mt-4 px-4">
        <span>Données en clair</span>
        <span className="text-indigo-400/60 font-medium">Chiffrement zéro-access</span>
        <span>Stockage chiffré</span>
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
          <span className="text-white font-medium">Chiffrement zéro-access de bout en bout.</span> Vos factures et
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
            <h3 className="text-xl font-medium text-zinc-200 mb-3">100% Open Source</h3>
            <p className="text-zinc-500 text-base leading-relaxed mb-8">
              Le code source de Faktur est entièrement ouvert. Auditez, contribuez et déployez en toute confiance.
            </p>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
              <div className="flex items-center gap-3 mb-5">
                <Github className="w-6 h-6 text-zinc-200" />
                <div>
                  <div className="text-zinc-200 text-sm font-medium">fakturapp/faktur</div>
                  <div className="text-zinc-500 text-xs">MIT License · TypeScript · Next.js</div>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs">
                  <Code2 className="w-3 h-3" />Open Source
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 text-xs">
                  <Globe className="w-3 h-3" />Self-hostable
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-zinc-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Code source transparent et auditable
                </div>
                <div className="flex items-center gap-2 text-zinc-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Déployez sur vos propres serveurs
                </div>
                <div className="flex items-center gap-2 text-zinc-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Communauté de contributeurs active
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Roadmap & Team ===== */}
        <div className="mt-16 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-10">
          <div className="flex items-center gap-2 mb-6">
            <GitBranch className="w-5 h-5 text-indigo-400" />
            <h3 className="text-xl font-medium text-zinc-200">Roadmap de développement</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            {[
              { quarter: "Q1 2025", label: "Fondations", items: ["Dashboard", "Factures & devis", "Export PDF"], done: true },
              { quarter: "Q2 2025", label: "Croissance", items: ["Faktur AI", "Envoi email", "Factur-X"], current: true },
              { quarter: "Q3 2025", label: "Expansion", items: ["App mobile", "API publique", "Webhooks"] },
              { quarter: "Q4 2025", label: "Enterprise", items: ["Multi-équipes", "SSO", "Audit logs"] },
            ].map((phase) => (
              <div key={phase.quarter} className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${phase.done ? "bg-emerald-500" : phase.current ? "bg-indigo-500 animate-pulse" : "bg-zinc-700"}`} />
                  <span className={`text-xs font-semibold uppercase tracking-wider ${phase.done ? "text-emerald-400" : phase.current ? "text-indigo-400" : "text-zinc-600"}`}>
                    {phase.quarter}
                  </span>
                </div>
                <div className="text-zinc-200 text-sm font-medium mb-2">{phase.label}</div>
                <div className="space-y-1.5">
                  {phase.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-zinc-500 text-xs">
                      {phase.done ? (
                        <span className="text-emerald-400">&#10003;</span>
                      ) : (
                        <span className="w-1 h-1 rounded-full bg-zinc-600" />
                      )}
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-zinc-800 pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-zinc-400" />
              <span className="text-zinc-300 text-sm font-medium">Contribuez au projet</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl">
              Faktur est un projet open source construit par et pour la communauté.
              Que vous soyez développeur, designer ou simplement utilisateur, vos contributions sont les bienvenues.
            </p>
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
