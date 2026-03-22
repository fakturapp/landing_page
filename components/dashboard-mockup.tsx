"use client"

import type React from "react"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  FileText,
  Receipt,
  Users,
  Package,
  Building2,
  ChevronDown,
  ChevronRight,
  Search,
  Plus,
  MoreHorizontal,
  Settings,
  HelpCircle,
  TrendingUp,
  Wallet,
  RefreshCw,
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
    hidden: {
      opacity: 0,
      x: 100,
      y: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      className="w-full h-full bg-zinc-950 flex overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Sidebar */}
      <motion.div
        className="w-[220px] h-full bg-zinc-900/80 border-r border-zinc-800/50 flex flex-col shrink-0"
        variants={panelVariants}
      >
        {/* Logo */}
        <div className="p-3 border-b border-zinc-800/50">
          <div className="flex items-center gap-2 px-2 py-1.5">
            <img src="/logo.svg" alt="Faktur" className="w-5 h-5" />
            <span className="text-white font-semibold text-sm">Faktur</span>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-500 ml-auto" />
          </div>
        </div>

        {/* Search */}
        <div className="p-3">
          <div className="flex items-center gap-2 px-2.5 py-1.5 bg-zinc-800/50 rounded-md text-zinc-500 text-xs">
            <Search className="w-3.5 h-3.5" />
            <span>Rechercher...</span>
            <span className="ml-auto text-[10px] bg-zinc-700/50 px-1.5 py-0.5 rounded">⌘K</span>
          </div>
        </div>

        {/* Main nav */}
        <div className="px-3 space-y-0.5">
          <NavItem icon={LayoutDashboard} label="Tableau de bord" active />
          <NavItem icon={FileText} label="Factures" badge={5} />
          <NavItem icon={Receipt} label="Devis" />
        </div>

        {/* Gestion section */}
        <div className="mt-5 px-3">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider flex items-center gap-1">
            Gestion
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={Users} label="Clients" hasSubmenu />
            <NavItem icon={Package} label="Produits" hasSubmenu />
            <NavItem icon={Building2} label="Entreprise" hasSubmenu />
          </div>
        </div>

        {/* Raccourcis section */}
        <div className="mt-5 px-3">
          <div className="px-2 py-1 text-[10px] text-zinc-500 font-medium uppercase tracking-wider flex items-center gap-1">
            Raccourcis
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={TrendingUp} label="Revenus" color="text-emerald-400" />
            <NavItem icon={Wallet} label="Dépenses" color="text-orange-400" />
            <NavItem icon={RefreshCw} label="Récurrentes" color="text-blue-400" />
          </div>
        </div>

        {/* Bottom */}
        <div className="flex-1" />
        <div className="p-3 border-t border-zinc-800/50">
          <NavItem icon={Settings} label="Paramètres" />
          <NavItem icon={HelpCircle} label="Aide" />
        </div>
      </motion.div>

      {/* Invoice List */}
      <motion.div
        className="w-[320px] h-full bg-zinc-900/40 border-r border-zinc-800/50 flex flex-col shrink-0"
        variants={panelVariants}
      >
        <div className="px-4 py-3 border-b border-zinc-800/50 flex items-center justify-between">
          <h3 className="text-white font-semibold text-sm">Factures</h3>
          <div className="flex items-center gap-2">
            <button className="text-zinc-500 hover:text-white transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto scrollbar-hide">
          <InvoiceItem
            id="FAK-2024-001"
            client="Dupont & Fils SARL"
            amount="2 450,00 €"
            time="Aujourd'hui"
            status="paid"
            active
          />
          <InvoiceItem
            id="FAK-2024-002"
            client="Studio Créatif"
            amount="1 800,00 €"
            time="Hier"
            status="sent"
          />
          <InvoiceItem
            id="FAK-2024-003"
            client="TechStart SAS"
            amount="5 200,00 €"
            time="Il y a 3j"
            status="overdue"
          />
          <InvoiceItem
            id="FAK-2024-004"
            client="Cabinet Martin"
            amount="980,00 €"
            time="Il y a 5j"
            status="draft"
          />
          <InvoiceItem
            id="FAK-2024-005"
            client="Boulangerie Moreau"
            amount="320,00 €"
            time="Il y a 1sem"
            status="paid"
          />
          <InvoiceItem
            id="DEV-2024-001"
            client="Agence Web Plus"
            amount="3 600,00 €"
            time="Il y a 1sem"
            status="sent"
            isQuote
          />
          <InvoiceItem
            id="FAK-2024-006"
            client="Restaurant Le Jardin"
            amount="1 150,00 €"
            time="Il y a 2sem"
            status="paid"
          />
        </div>
      </motion.div>

      {/* Detail Panel */}
      <motion.div className="flex-1 h-full bg-zinc-950 flex flex-col overflow-hidden" variants={panelVariants}>
        {/* Header breadcrumb */}
        <div className="px-5 py-3 border-b border-zinc-800/50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-zinc-500">Factures</span>
            <span className="text-zinc-600">›</span>
            <span className="text-indigo-400">Dupont & Fils SARL</span>
            <span className="text-zinc-600">›</span>
            <span className="text-zinc-300">FAK-2024-001</span>
          </div>
          <MoreHorizontal className="w-4 h-4 text-zinc-500" />
        </div>

        {/* Content */}
        <div className="flex-1 p-5 overflow-auto scrollbar-hide">
          {/* Status badge */}
          <div className="flex items-center gap-3 mb-5">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Payée
            </span>
            <span className="text-zinc-500 text-xs">Payée le 18 mars 2024</span>
          </div>

          <h2 className="text-white text-xl font-semibold mb-5">Facture FAK-2024-001</h2>

          {/* Invoice details */}
          <div className="bg-zinc-900/80 rounded-lg p-4 text-sm mb-5 border border-zinc-800/50">
            <div className="space-y-3">
              {/* Client info */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/50">
                <div>
                  <p className="text-zinc-400 text-xs mb-1">Client</p>
                  <p className="text-white font-medium">Dupont & Fils SARL</p>
                  <p className="text-zinc-500 text-xs">12 Rue de la Paix, 75002 Paris</p>
                </div>
                <div className="text-right">
                  <p className="text-zinc-400 text-xs mb-1">Date d'émission</p>
                  <p className="text-zinc-300">15/03/2024</p>
                  <p className="text-zinc-500 text-xs mt-1">Échéance: 15/04/2024</p>
                </div>
              </div>

              {/* Line items */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-zinc-500 pb-1">
                  <span className="flex-1">Description</span>
                  <span className="w-16 text-right">Qté</span>
                  <span className="w-24 text-right">Prix HT</span>
                  <span className="w-24 text-right">Total HT</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex-1 text-zinc-300">Développement site web</span>
                  <span className="w-16 text-right text-zinc-400">1</span>
                  <span className="w-24 text-right text-zinc-400">1 500,00 €</span>
                  <span className="w-24 text-right text-white">1 500,00 €</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex-1 text-zinc-300">Design UI/UX</span>
                  <span className="w-16 text-right text-zinc-400">1</span>
                  <span className="w-24 text-right text-zinc-400">750,00 €</span>
                  <span className="w-24 text-right text-white">750,00 €</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex-1 text-zinc-300">Hébergement annuel</span>
                  <span className="w-16 text-right text-zinc-400">1</span>
                  <span className="w-24 text-right text-zinc-400">200,00 €</span>
                  <span className="w-24 text-right text-white">200,00 €</span>
                </div>
              </div>

              {/* Totals */}
              <div className="pt-3 border-t border-zinc-800/50 space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-500">Total HT</span>
                  <span className="text-zinc-300">2 450,00 €</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-500">TVA (0%)</span>
                  <span className="text-zinc-400">0,00 €</span>
                </div>
                <div className="flex items-center justify-between text-sm font-medium pt-1">
                  <span className="text-white">Total TTC</span>
                  <span className="text-indigo-400 text-lg">2 450,00 €</span>
                </div>
              </div>
            </div>
          </div>

          {/* Activity */}
          <div className="pt-4 border-t border-zinc-800/50">
            <div className="text-xs text-zinc-500 font-medium mb-3 uppercase tracking-wider">Activité</div>
            <div className="space-y-3">
              <ActivityItem
                action="Paiement reçu"
                detail="Virement bancaire - 2 450,00 €"
                time="Il y a 4 jours"
                color="text-emerald-400"
              />
              <ActivityItem
                action="Facture envoyée"
                detail="Email envoyé à contact@dupont-fils.fr"
                time="Il y a 7 jours"
                color="text-blue-400"
              />
              <ActivityItem
                action="Facture créée"
                detail="Générée depuis le devis DEV-2024-001"
                time="Il y a 7 jours"
                color="text-zinc-400"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function NavItem({
  icon: Icon,
  label,
  badge,
  active,
  hasSubmenu,
  color,
}: {
  icon: React.ElementType
  label: string
  badge?: number
  active?: boolean
  hasSubmenu?: boolean
  color?: string
}) {
  return (
    <div
      className={`flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer transition-colors ${
        active ? "bg-zinc-800 text-white" : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-300"
      }`}
    >
      <Icon className={`w-4 h-4 ${color || ""}`} />
      <span className="flex-1 text-xs">{label}</span>
      {badge && (
        <span className="bg-indigo-500/80 text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full font-medium px-1">
          {badge}
        </span>
      )}
      {hasSubmenu && <ChevronRight className="w-3 h-3 text-zinc-600" />}
    </div>
  )
}

function InvoiceItem({
  id,
  client,
  amount,
  time,
  status,
  isQuote,
  active,
}: {
  id: string
  client: string
  amount: string
  time: string
  status: string
  isQuote?: boolean
  active?: boolean
}) {
  const statusColors: Record<string, string> = {
    paid: "bg-emerald-500",
    sent: "bg-blue-500",
    overdue: "bg-red-500",
    draft: "bg-zinc-600",
  }

  const statusLabels: Record<string, string> = {
    paid: "Payée",
    sent: "Envoyée",
    overdue: "En retard",
    draft: "Brouillon",
  }

  return (
    <div
      className={`px-4 py-3 border-b border-zinc-800/30 cursor-pointer transition-colors ${
        active ? "bg-zinc-800/50" : "hover:bg-zinc-800/30"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
          {isQuote ? (
            <Receipt className="w-4 h-4 text-indigo-400" />
          ) : (
            <FileText className="w-4 h-4 text-indigo-400" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-zinc-500 text-[10px]">{id}</span>
            {isQuote && <span className="text-violet-400 text-[10px]">Devis</span>}
            <div className={`w-2 h-2 rounded-full ${statusColors[status] || "bg-zinc-500"}`} />
          </div>
          <p className="text-white text-xs truncate leading-tight">{client}</p>
          <div className="flex items-center justify-between mt-0.5">
            <span className="text-indigo-400 text-xs font-medium">{amount}</span>
            <span className="text-zinc-600 text-[10px]">{statusLabels[status]}</span>
          </div>
        </div>
        <span className="text-zinc-600 text-[10px] shrink-0">{time}</span>
      </div>
    </div>
  )
}

function ActivityItem({
  action,
  detail,
  time,
  color,
}: {
  action: string
  detail: string
  time: string
  color: string
}) {
  return (
    <div className="flex items-start gap-2">
      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${color.replace('text-', 'bg-')}`} />
      <div className="flex-1">
        <p className="text-zinc-400 text-xs">
          <span className={color}>{action}</span>
          <span className="text-zinc-500"> — {detail}</span>
        </p>
        <p className="text-zinc-600 text-[10px] mt-0.5">{time}</p>
      </div>
    </div>
  )
}
