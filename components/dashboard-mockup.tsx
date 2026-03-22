"use client"

import { motion } from "framer-motion"
import {
  ArrowLeft,
  Download,
  Pencil,
  Eye,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Settings,
  Palette,
  Calendar,
  CreditCard,
  Plus,
  Trash2,
} from "lucide-react"

export function DashboardMockup() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  }

  const panelVariants = {
    hidden: { opacity: 0, x: 100, y: -80 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const accentColor = "#6366f1"

  return (
    <motion.div
      className="w-full h-full bg-[#f8fafc] flex flex-col overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Top Header Bar */}
      <motion.div
        className="h-[48px] bg-white border-b border-slate-200 flex items-center justify-between px-4 shrink-0"
        variants={panelVariants}
      >
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center">
            <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
          </div>
          <div>
            <span className="text-slate-900 font-semibold text-[12px]">Modifier la facture</span>
            <span className="text-slate-400 text-[10px] ml-2">FAK-2024-001</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden text-[10px]">
            <button className="px-2.5 py-1.5 bg-indigo-600 text-white flex items-center gap-1">
              <Pencil className="w-3 h-3" />
              Éditer
            </button>
            <button className="px-2.5 py-1.5 text-slate-500 flex items-center gap-1">
              <Eye className="w-3 h-3" />
              Aperçu
            </button>
          </div>
          <button className="px-2.5 py-1.5 border border-indigo-200 text-indigo-600 rounded-lg text-[10px] flex items-center gap-1">
            <Download className="w-3 h-3" />
            Télécharger
          </button>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* A4 Sheet Area */}
        <motion.div
          className="flex-1 overflow-auto p-6 flex justify-center"
          variants={panelVariants}
          style={{ background: "#f1f5f9" }}
        >
          {/* A4 Paper */}
          <div
            className="bg-white rounded-lg shrink-0"
            style={{
              width: "520px",
              minHeight: "735px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)",
              aspectRatio: "210 / 297",
            }}
          >
            {/* Invoice Content */}
            <div className="p-7">
              {/* Header: Company + Invoice Title */}
              <div className="flex justify-between items-start mb-6">
                {/* Company Info (Left) */}
                <div className="flex-1">
                  {/* Logo placeholder */}
                  <div
                    className="w-[70px] h-[35px] rounded border border-dashed border-slate-300 flex items-center justify-center mb-2"
                  >
                    <img src="/logo.svg" alt="" className="w-5 h-5" />
                  </div>
                  <p className="text-slate-900 font-semibold text-[11px] leading-tight">Mon Entreprise SAS</p>
                  <p className="text-slate-500 text-[9px] leading-relaxed mt-0.5">
                    42 Avenue des Champs-Élysées
                    <br />
                    75008 Paris, France
                    <br />
                    contact@monentreprise.fr
                    <br />
                    <span className="text-slate-400">SIREN: 123 456 789</span>
                  </p>
                </div>

                {/* Invoice Title (Right) */}
                <div className="text-right">
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-[12px] font-bold"
                    style={{ backgroundColor: accentColor }}
                  >
                    FACTURE
                  </div>
                  <p className="text-slate-600 text-[10px] mt-1.5 font-medium">N° FAK-2024-001</p>
                </div>
              </div>

              {/* Dates Bar */}
              <div
                className="flex items-center gap-6 px-3 py-2 rounded-md mb-5 text-[9px]"
                style={{ backgroundColor: `${accentColor}08`, border: `1px solid ${accentColor}15` }}
              >
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span className="text-slate-500">Date:</span>
                  <span className="text-slate-700 font-medium">15/03/2024</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span className="text-slate-500">Échéance:</span>
                  <span className="text-slate-700 font-medium">15/04/2024</span>
                </div>
              </div>

              {/* Client Info */}
              <div className="flex justify-end mb-5">
                <div className="text-right">
                  <p className="text-slate-900 font-semibold text-[11px]">Dupont & Fils SARL</p>
                  <p className="text-slate-500 text-[9px] leading-relaxed mt-0.5">
                    12 Rue de la Paix
                    <br />
                    75002 Paris, France
                    <br />
                    <span className="text-slate-400">SIRET: 987 654 321 00012</span>
                  </p>
                </div>
              </div>

              {/* Subject */}
              <div className="mb-4">
                <p className="text-slate-500 text-[9px] mb-0.5">Objet</p>
                <p className="text-slate-700 text-[10px] px-2 py-1.5 border-b border-dashed border-slate-300">
                  Développement et design du site web vitrine
                </p>
              </div>

              {/* Line Items Table */}
              <div className="mb-5">
                {/* Table Header */}
                <div
                  className="grid items-center px-2 py-1.5 rounded-t-md text-[8px] font-semibold text-white uppercase tracking-wider"
                  style={{
                    backgroundColor: accentColor,
                    gridTemplateColumns: "1fr 42px 42px 68px 42px 68px",
                    gap: "4px",
                  }}
                >
                  <span>Désignation</span>
                  <span className="text-center">Qté</span>
                  <span className="text-center">Unité</span>
                  <span className="text-right">P.U. HT</span>
                  <span className="text-center">TVA</span>
                  <span className="text-right">Montant HT</span>
                </div>

                {/* Row 1 */}
                <div
                  className="grid items-center px-2 py-2 text-[9px] border-b border-slate-100 bg-white group"
                  style={{
                    gridTemplateColumns: "1fr 42px 42px 68px 42px 68px",
                    gap: "4px",
                  }}
                >
                  <span className="text-slate-700">Développement site web</span>
                  <span className="text-center text-slate-500">1</span>
                  <span className="text-center text-slate-400">forfait</span>
                  <span className="text-right text-slate-600">1 500,00 €</span>
                  <span className="text-center text-slate-400">0%</span>
                  <span className="text-right text-slate-800 font-medium">1 500,00 €</span>
                </div>

                {/* Row 2 */}
                <div
                  className="grid items-center px-2 py-2 text-[9px] border-b border-slate-100 group"
                  style={{
                    gridTemplateColumns: "1fr 42px 42px 68px 42px 68px",
                    gap: "4px",
                    backgroundColor: "#fafbfc",
                  }}
                >
                  <span className="text-slate-700">Design UI/UX</span>
                  <span className="text-center text-slate-500">1</span>
                  <span className="text-center text-slate-400">forfait</span>
                  <span className="text-right text-slate-600">750,00 €</span>
                  <span className="text-center text-slate-400">0%</span>
                  <span className="text-right text-slate-800 font-medium">750,00 €</span>
                </div>

                {/* Row 3 */}
                <div
                  className="grid items-center px-2 py-2 text-[9px] border-b border-slate-100 bg-white group"
                  style={{
                    gridTemplateColumns: "1fr 42px 42px 68px 42px 68px",
                    gap: "4px",
                  }}
                >
                  <span className="text-slate-700">Hébergement annuel</span>
                  <span className="text-center text-slate-500">12</span>
                  <span className="text-center text-slate-400">mois</span>
                  <span className="text-right text-slate-600">16,67 €</span>
                  <span className="text-center text-slate-400">20%</span>
                  <span className="text-right text-slate-800 font-medium">200,00 €</span>
                </div>

                {/* Add line button */}
                <div className="flex items-center gap-1 px-2 py-1.5 text-[9px] text-indigo-500 cursor-pointer">
                  <Plus className="w-3 h-3" />
                  <span>Ajouter une ligne</span>
                </div>
              </div>

              {/* Totals */}
              <div className="flex justify-end mb-6">
                <div className="w-[200px]">
                  <div className="flex justify-between text-[9px] py-1">
                    <span className="text-slate-500">Sous-total HT</span>
                    <span className="text-slate-700">2 450,00 €</span>
                  </div>
                  <div className="flex justify-between text-[9px] py-1">
                    <span className="text-slate-500">TVA 20% (200,00 € HT)</span>
                    <span className="text-slate-700">40,00 €</span>
                  </div>
                  <div className="flex justify-between text-[9px] py-1">
                    <span className="text-slate-500">Total TVA</span>
                    <span className="text-slate-700">40,00 €</span>
                  </div>
                  <div
                    className="flex justify-between text-[11px] font-bold mt-1 px-2 py-1.5 rounded-md text-white"
                    style={{ backgroundColor: accentColor }}
                  >
                    <span>Total TTC</span>
                    <span>2 490,00 €</span>
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="border-t border-slate-200 pt-3 mb-4">
                <div className="flex items-center gap-1.5 mb-1">
                  <CreditCard className="w-3 h-3 text-slate-400" />
                  <span className="text-slate-500 text-[9px] font-medium">Mode de paiement</span>
                </div>
                <p className="text-slate-600 text-[9px]">Virement bancaire</p>
                <p className="text-slate-400 text-[8px] mt-0.5">IBAN: FR76 •••• •••• •••• •••• •••• 123</p>
              </div>

              {/* Notes */}
              <div className="border-t border-slate-200 pt-3">
                <p className="text-slate-500 text-[8px] font-medium uppercase tracking-wider mb-1">Conditions</p>
                <p className="text-slate-400 text-[8px] leading-relaxed italic">
                  TVA non applicable, art. 293 B du CGI. En cas de retard de paiement, une pénalité de 3 fois le taux
                  d'intérêt légal sera appliquée, ainsi qu'une indemnité forfaitaire de 40€ pour frais de recouvrement.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Sidebar - Options Panel */}
        <motion.div
          className="w-[220px] bg-white border-l border-slate-200 flex flex-col shrink-0 overflow-auto"
          variants={panelVariants}
        >
          {/* Tabs */}
          <div className="flex border-b border-slate-200 shrink-0">
            <button className="flex-1 px-3 py-2.5 text-[10px] font-medium text-indigo-600 border-b-2 border-indigo-600 flex items-center justify-center gap-1">
              <Settings className="w-3 h-3" />
              Options
            </button>
            <button className="flex-1 px-3 py-2.5 text-[10px] text-slate-400 flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3" />
              Faktur AI
            </button>
          </div>

          {/* Document Options */}
          <div className="p-3 space-y-4 text-[10px]">
            {/* Billing Type */}
            <OptionSection title="Type de facturation" icon={<span className="text-[9px]">📋</span>}>
              <div className="flex gap-1.5">
                <button className="flex-1 px-2 py-1.5 bg-indigo-50 text-indigo-600 rounded-md border border-indigo-200 text-[9px] font-medium">
                  Détaillée
                </button>
                <button className="flex-1 px-2 py-1.5 bg-slate-50 text-slate-500 rounded-md border border-slate-200 text-[9px]">
                  Rapide
                </button>
              </div>
            </OptionSection>

            {/* Color */}
            <OptionSection title="Couleur d'accent" icon={<Palette className="w-3 h-3 text-slate-400" />}>
              <div className="flex items-center gap-1.5 flex-wrap">
                {["#6366f1", "#8b5cf6", "#ec4899", "#ef4444", "#f97316", "#eab308", "#22c55e", "#06b6d4", "#3b82f6", "#1e1b4b", "#64748b", "#171717"].map((c) => (
                  <div
                    key={c}
                    className="w-4 h-4 rounded-full cursor-pointer"
                    style={{
                      backgroundColor: c,
                      boxShadow: c === accentColor ? `0 0 0 2px white, 0 0 0 3px ${c}` : "none",
                    }}
                  />
                ))}
              </div>
            </OptionSection>

            {/* Client */}
            <OptionSection title="Client" icon={<span className="text-[9px]">👤</span>}>
              <div className="flex items-center gap-2 px-2 py-1.5 bg-slate-50 rounded-md border border-slate-200">
                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-[8px] text-indigo-600 font-bold">D</div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-700 text-[9px] font-medium truncate">Dupont & Fils SARL</p>
                  <p className="text-slate-400 text-[8px]">Professionnel</p>
                </div>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </div>
            </OptionSection>

            {/* Dates */}
            <OptionSection title="Dates" icon={<Calendar className="w-3 h-3 text-slate-400" />}>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between px-2 py-1.5 bg-slate-50 rounded-md border border-slate-200">
                  <span className="text-slate-500 text-[9px]">Émission</span>
                  <span className="text-slate-700 text-[9px]">15/03/2024</span>
                </div>
                <div className="flex items-center justify-between px-2 py-1.5 bg-slate-50 rounded-md border border-slate-200">
                  <span className="text-slate-500 text-[9px]">Échéance</span>
                  <span className="text-slate-700 text-[9px]">15/04/2024</span>
                </div>
              </div>
            </OptionSection>

            {/* Payment */}
            <OptionSection title="Paiement" icon={<CreditCard className="w-3 h-3 text-slate-400" />}>
              <div className="px-2 py-1.5 bg-slate-50 rounded-md border border-slate-200 flex items-center justify-between">
                <span className="text-slate-700 text-[9px]">Virement bancaire</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>
            </OptionSection>

            {/* Totals Summary */}
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-3 space-y-1.5">
              <div className="flex justify-between text-[9px]">
                <span className="text-slate-500">Sous-total</span>
                <span className="text-slate-700">2 450,00 €</span>
              </div>
              <div className="flex justify-between text-[9px]">
                <span className="text-slate-500">TVA</span>
                <span className="text-slate-700">40,00 €</span>
              </div>
              <div className="flex justify-between text-[10px] font-bold pt-1.5 border-t border-slate-200">
                <span className="text-slate-800">Total TTC</span>
                <span className="text-indigo-600">2 490,00 €</span>
              </div>
            </div>

            {/* Additional Options */}
            <div className="space-y-1.5">
              <OptionCheckbox label="Objet" checked />
              <OptionCheckbox label="Adresse de livraison" />
              <OptionCheckbox label="Conditions d'acceptation" />
              <OptionCheckbox label="Notes & conditions" checked />
              <OptionCheckbox label="Signature" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Save Bar */}
      <motion.div
        className="h-[42px] bg-white/90 backdrop-blur-sm border-t border-slate-200 flex items-center justify-end px-5 gap-3 shrink-0"
        variants={panelVariants}
      >
        <span className="text-slate-500 text-[10px]">Total:</span>
        <span className="text-slate-900 font-bold text-[12px]">EUR 2 490,00</span>
        <button
          className="px-4 py-1.5 text-white rounded-lg text-[10px] font-medium flex items-center gap-1.5"
          style={{ backgroundColor: accentColor }}
        >
          Sauvegarder
          <ChevronRight className="w-3 h-3" />
        </button>
      </motion.div>
    </motion.div>
  )
}

function OptionSection({
  title,
  icon,
  children,
}: {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 mb-1.5">
        {icon}
        <span className="text-slate-600 font-medium text-[9px] uppercase tracking-wider">{title}</span>
      </div>
      {children}
    </div>
  )
}

function OptionCheckbox({ label, checked }: { label: string; checked?: boolean }) {
  return (
    <div className="flex items-center gap-2 px-1">
      <div
        className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
          checked
            ? "bg-indigo-600 border-indigo-600"
            : "bg-white border-slate-300"
        }`}
      >
        {checked && (
          <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 6l3 3 5-5" />
          </svg>
        )}
      </div>
      <span className="text-slate-600 text-[9px]">{label}</span>
    </div>
  )
}
