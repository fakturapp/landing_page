
import { motion } from "framer-motion"
import { ChevronRight, Plus, FileText, Shield, Zap } from "lucide-react"

/* Mini template mockups for the first card */
function TemplateMockups() {
  const templates = [
    { label: "Facture", color: "#6366f1", rotate: -6, x: -20 },
    { label: "Devis", color: "#818cf8", rotate: 0, x: 0 },
    { label: "Avoir", color: "#a5b4fc", rotate: 6, x: 20 },
  ]
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {templates.map((t, i) => (
        <div
          key={t.label}
          className="absolute flex flex-col rounded-lg border bg-zinc-900/90 overflow-hidden"
          style={{
            width: 120, height: 160,
            borderColor: `${t.color}40`,
            transform: `rotate(${t.rotate}deg) translateX(${t.x}px)`,
            zIndex: i + 1,
            boxShadow: `0 8px 30px ${t.color}10`,
          }}
        >
          {/* Header */}
          <div className="px-3 py-2 border-b" style={{ borderColor: `${t.color}20`, backgroundColor: `${t.color}08` }}>
            <div className="flex items-center gap-1.5">
              <FileText className="w-3 h-3" style={{ color: t.color }} />
              <span className="text-[9px] font-medium" style={{ color: t.color }}>{t.label}</span>
            </div>
          </div>
          {/* Body lines */}
          <div className="flex flex-col gap-1.5 p-3">
            <div className="h-1.5 rounded-full bg-zinc-800 w-full" />
            <div className="h-1.5 rounded-full bg-zinc-800 w-3/4" />
            <div className="h-1.5 rounded-full bg-zinc-800/60 w-1/2" />
            <div className="mt-2 h-1.5 rounded-full w-2/3" style={{ backgroundColor: `${t.color}30` }} />
            <div className="h-1.5 rounded-full bg-zinc-800 w-full" />
            <div className="h-1.5 rounded-full bg-zinc-800 w-4/5" />
          </div>
          {/* Footer */}
          <div className="mt-auto px-3 py-2 border-t" style={{ borderColor: `${t.color}15` }}>
            <div className="h-1 rounded-full w-1/2" style={{ backgroundColor: `${t.color}40` }} />
          </div>
        </div>
      ))}
    </div>
  )
}

const featureCards = [
  {
    title: "Factures et devis professionnels",
    icon: FileText,
    illustration: <TemplateMockups />,
  },
  {
    title: "Chiffrement zéro-access",
    icon: Shield,
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div className="relative">
          <Shield className="w-32 h-32 text-indigo-500/30" strokeWidth={1} />
          <div className="absolute inset-0 flex items-center justify-center">
            <Shield className="w-16 h-16 text-indigo-400/60" strokeWidth={1.5} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-indigo-500/80 animate-pulse" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Export PDF Factur-X",
    icon: Zap,
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-28 rounded-lg border border-indigo-500/30 bg-indigo-500/10 flex flex-col items-center justify-center">
            <FileText className="w-8 h-8 text-indigo-400/60 mb-1" />
            <span className="text-[10px] text-indigo-400/80">PDF</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
            <span className="text-[10px] text-emerald-400/60">Factur-X</span>
          </div>
        </div>
      </div>
    ),
  },
]

export function FeatureCardsSection() {
  return (
    <div id="features" className="relative z-20 py-20 md:py-40" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-md"
              style={{
                letterSpacing: "-0.0325em",
                fontVariationSettings: '"opsz" 28',
                fontWeight: 538,
                lineHeight: 1.1,
              }}
            >
              Conçu pour simplifier votre facturation
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-md"
            >
              <p className="text-zinc-400 leading-relaxed">
                Faktur est pensé pour les entrepreneurs qui veulent se concentrer sur leur activité : facturation rapide,
                sécurité maximale et conformité garantie.{" "}
                <a href="https://dash.fakturapp.cc" className="text-indigo-400 inline-flex items-center gap-1 hover:underline">
                  Essayer maintenant <ChevronRight className="w-4 h-4" />
                </a>
              </p>
            </motion.div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featureCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 hover:border-indigo-500/30 transition-colors cursor-pointer group overflow-hidden relative flex flex-col justify-end"
                style={{
                  aspectRatio: "336 / 360",
                  borderRadius: "24px",
                  isolation: "isolate",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                  style={{
                    maskImage: "linear-gradient(#000 70%, transparent 90%)",
                    WebkitMaskImage: "linear-gradient(#000 70%, transparent 90%)",
                  }}
                >
                  {card.illustration}
                </div>
                <div
                  className="relative z-10 flex items-center justify-between w-full"
                  style={{ padding: "0 24px 40px", gap: "16px" }}
                >
                  <h3 className="text-white font-medium text-lg leading-tight">{card.title}</h3>
                  <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-colors flex-shrink-0">
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
