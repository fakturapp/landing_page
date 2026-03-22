"use client"

import { motion } from "framer-motion"
import { ChevronRight, Check, Sparkles, FileText, MessageSquare, BarChart3 } from "lucide-react"

const aiFeatures = [
  { name: "Génération de facture", isAI: true, selected: true, icon: "✦" },
  { name: "Résumé du dashboard", isAI: true, selected: false, icon: "◆" },
  { name: "Assistant facturation", isAI: true, selected: false, icon: "◇" },
  { name: "Suggestions clients", isAI: true, selected: false, icon: "◎" },
  { name: "Analyse des revenus", isAI: true, selected: false, icon: "◈" },
  { name: "Rédaction de devis", isAI: true, selected: false, icon: "○" },
]

export function AISection() {
  return (
    <div id="ai" className="relative z-20 py-40" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)",
        }}
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

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-3xl mb-8"
            style={{
              letterSpacing: "-0.0325em",
              fontVariationSettings: '"opsz" 28',
              fontWeight: 538,
              lineHeight: 1.1,
            }}
          >
            Facturation assistée par l'IA
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 max-w-md mb-8"
          >
            <span className="text-white font-medium">Faktur AI.</span> Générez vos factures et devis en quelques
            secondes grâce à l'intelligence artificielle. Résumés, suggestions et assistance intégrés.
          </motion.p>

          {/* Learn more button */}
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

          {/* AI dropdown mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-24"
          >
            <div
              style={{
                perspective: "900px",
                userSelect: "none",
                WebkitUserSelect: "none",
                width: "100%",
                maxWidth: "720px",
                position: "relative",
              }}
            >
              <div
                style={{
                  transformOrigin: "top",
                  willChange: "transform",
                  transform: "translateY(0%) rotateX(30deg) scale(1.15)",
                  position: "relative",
                }}
              >
                {/* Glass overlay effect */}
                <div
                  style={{
                    border: "1px solid rgba(66, 66, 66, 0.5)",
                    background: "linear-gradient(rgba(255, 255, 255, 0.1) 40%, rgba(8, 9, 10, 0.1) 100%)",
                    borderRadius: "8px",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    boxShadow:
                      "inset 0 1.503px 5.261px rgba(255, 255, 255, 0.04), inset 0 -0.752px 0.752px rgba(255, 255, 255, 0.1)",
                    pointerEvents: "none",
                    zIndex: 10,
                  }}
                />

                <div
                  style={{
                    background: "linear-gradient(180deg, transparent 0%, #09090B 100%)",
                    height: "80%",
                    position: "absolute",
                    bottom: "-2px",
                    left: "-180px",
                    right: "-180px",
                    pointerEvents: "none",
                    zIndex: 11,
                  }}
                />

                {/* Input field */}
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-t-xl px-5 py-4">
                  <span className="text-zinc-500 italic">Que souhaitez-vous faire ?</span>
                </div>

                {/* Dropdown options */}
                <div className="bg-zinc-900/80 border border-t-0 border-zinc-700 rounded-b-xl py-1">
                  {aiFeatures.map((feature, index) => (
                    <div
                      key={feature.name}
                      style={
                        feature.selected
                          ? {
                              transform: "scale(1.04) rotateX(17deg)",
                              background: "linear-gradient(#343434 0%, #2d2d2d 100%)",
                              borderRadius: "6px",
                              height: "48px",
                              position: "relative",
                              boxShadow:
                                "inset 0 -2.75px 4.75px rgba(255, 255, 255, 0.14), inset 0 -0.752px 0.752px rgba(255, 255, 255, 0.1), 0 54px 73px 3px rgba(0, 0, 0, 0.5)",
                              zIndex: 20,
                              marginLeft: "-12px",
                              marginRight: "-12px",
                            }
                          : {
                              opacity: 1 - index * 0.15,
                              height: "42px",
                            }
                      }
                    >
                      <div
                        className="flex items-center justify-between h-full"
                        style={{
                          paddingLeft: "24px",
                          paddingRight: "24px",
                          gap: "12px",
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-indigo-400 text-lg">{feature.icon}</span>
                          <span className={feature.selected ? "text-white font-medium" : "text-zinc-300"}>
                            {feature.name}
                          </span>
                          {feature.isAI && (
                            <span className="text-xs bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded">IA</span>
                          )}
                        </div>
                        {feature.selected && <Check className="w-4 h-4 text-indigo-400" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom divider with two columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left column */}
              <div className="border-t border-r border-b border-zinc-800/60 pt-12 pr-12 pb-16">
                <h3 className="text-zinc-200 font-medium text-xl mb-3">Génération intelligente de documents</h3>
                <p className="text-zinc-500 text-base mb-8">
                  L'IA analyse vos données clients et produits pour pré-remplir automatiquement vos factures et devis.
                </p>

                {/* AI Document Card */}
                <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-5">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <span className="text-zinc-500 text-sm">
                      Faktur <span className="text-indigo-400">AI</span>
                    </span>
                  </div>

                  {/* Generated invoice preview */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-zinc-600 text-sm w-20">Client</span>
                    <div className="flex items-center gap-2">
                      <span
                        className="flex items-center gap-1.5 rounded-md px-2 py-1 text-sm"
                        style={{ background: "#6366f1" }}
                      >
                        <span className="w-4 h-4 bg-white/30 rounded-full" />
                        <span className="text-white">Dupont & Fils</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-zinc-600 text-sm w-20">Prestations</span>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1.5 bg-zinc-800/30 rounded-md px-2 py-1 text-sm text-zinc-400">
                        <FileText className="w-3 h-3" />
                        3 lignes détectées
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-zinc-600 text-sm w-20">Montant</span>
                    <span className="text-indigo-400 font-medium text-sm">2 450,00 € HT</span>
                  </div>

                  {/* Accept button */}
                  <button className="w-full flex items-center justify-center gap-2 bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 text-sm py-2.5 rounded-md transition-colors border border-indigo-500/20">
                    <Check className="w-4 h-4" />
                    Générer la facture
                  </button>
                </div>
              </div>

              {/* Right column */}
              <div className="border-t border-b border-zinc-800/60 pt-12 pl-12 pb-16">
                <h3 className="text-zinc-200 font-medium text-xl mb-3">Résumé IA du dashboard</h3>
                <p className="text-zinc-500 text-base mb-8">
                  Obtenez un résumé intelligent de votre activité : revenus, factures en attente et tendances.
                </p>

                {/* AI Summary Card */}
                <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart3 className="w-4 h-4 text-indigo-400" />
                    <span className="text-zinc-400 text-sm font-medium">Résumé mensuel</span>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500 text-sm">Chiffre d'affaires</span>
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

                  {/* AI Chat input */}
                  <div className="bg-zinc-800/40 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-0.5 h-5 bg-indigo-500" />
                      <span className="text-zinc-600">Posez une question sur vos données...</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1.5 border border-zinc-700/60 text-zinc-500 text-sm px-3 py-1.5 rounded-full hover:bg-zinc-700/30 transition-colors">
                        <MessageSquare className="w-3.5 h-3.5" />
                        Demander
                      </button>
                      <button className="flex items-center gap-1.5 border border-zinc-700/60 text-zinc-500 text-sm px-3 py-1.5 rounded-full hover:bg-zinc-700/30 transition-colors">
                        <Sparkles className="w-3.5 h-3.5" />
                        Analyser
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
