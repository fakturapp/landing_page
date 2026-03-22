"use client"

import type React from "react"
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
  Calendar,
  CreditCard,
  Plus,
  LayoutDashboard,
  FileText,
  Receipt,
  Users,
  Package,
  Building2,
  Search,
  TrendingUp,
  Wallet,
  RefreshCw,
  HelpCircle,
} from "lucide-react"

const DASH_FONT = 'var(--font-geist), system-ui, sans-serif'

export function DashboardMockup() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
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

  const A = "#6366f1"

  return (
    <motion.div
      className="w-full h-full flex overflow-hidden"
      style={{ backgroundColor: "#0c0c0e", fontFamily: DASH_FONT, WebkitFontSmoothing: "antialiased" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ===== LEFT SIDEBAR ===== */}
      <motion.div
        className="flex flex-col shrink-0"
        style={{ width: 200, backgroundColor: "#111113", borderRight: "1px solid #1e1e22" }}
        variants={panelVariants}
      >
        <div style={{ padding: 12, borderBottom: "1px solid #1e1e22" }}>
          <div className="flex items-center" style={{ gap: 8, padding: "4px 8px" }}>
            <img src="/logo.svg" alt="Faktur" style={{ width: 18, height: 18, display: "block" }} />
            <span style={{ color: "#fff", fontWeight: 600, fontSize: 13 }}>Faktur</span>
            <ChevronDown style={{ width: 13, height: 13, color: "#52525b", marginLeft: "auto" }} />
          </div>
        </div>

        <div style={{ padding: "10px 12px" }}>
          <div
            className="flex items-center"
            style={{ gap: 6, padding: "5px 8px", backgroundColor: "#1a1a1e", borderRadius: 6, fontSize: 11, color: "#52525b" }}
          >
            <Search style={{ width: 12, height: 12 }} />
            <span>Rechercher...</span>
            <span style={{ marginLeft: "auto", fontSize: 9, backgroundColor: "#27272a", padding: "2px 5px", borderRadius: 3 }}>
              ⌘K
            </span>
          </div>
        </div>

        <div style={{ padding: "0 12px" }}>
          <SidebarItem icon={LayoutDashboard} label="Tableau de bord" />
          <SidebarItem icon={FileText} label="Factures" active badge={5} />
          <SidebarItem icon={Receipt} label="Devis" />
        </div>

        <div style={{ marginTop: 16, padding: "0 12px" }}>
          <SidebarLabel>Gestion</SidebarLabel>
          <SidebarItem icon={Users} label="Clients" hasSubmenu />
          <SidebarItem icon={Package} label="Produits" hasSubmenu />
          <SidebarItem icon={Building2} label="Entreprise" hasSubmenu />
        </div>

        <div style={{ marginTop: 16, padding: "0 12px" }}>
          <SidebarLabel>Raccourcis</SidebarLabel>
          <SidebarItem icon={TrendingUp} label="Revenus" color="#34d399" />
          <SidebarItem icon={Wallet} label="Dépenses" color="#fb923c" />
          <SidebarItem icon={RefreshCw} label="Récurrentes" color="#60a5fa" />
        </div>

        <div style={{ flex: 1 }} />
        <div style={{ padding: 12, borderTop: "1px solid #1e1e22" }}>
          <SidebarItem icon={Settings} label="Paramètres" />
          <SidebarItem icon={HelpCircle} label="Aide" />
        </div>
      </motion.div>

      {/* ===== RIGHT CONTENT ===== */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <motion.div
          className="flex items-center justify-between shrink-0"
          style={{ height: 44, padding: "0 16px", backgroundColor: "#111113", borderBottom: "1px solid #1e1e22" }}
          variants={panelVariants}
        >
          <div className="flex items-center" style={{ gap: 10 }}>
            <div className="flex items-center justify-center" style={{ width: 26, height: 26, borderRadius: 6, backgroundColor: "#1a1a1e" }}>
              <ArrowLeft style={{ width: 13, height: 13, color: "#71717a" }} />
            </div>
            <span style={{ color: "#e4e4e7", fontWeight: 600, fontSize: 12 }}>Modifier la facture</span>
            <span style={{ color: "#52525b", fontSize: 10 }}>FAK-2024-001</span>
          </div>
          <div className="flex items-center" style={{ gap: 8 }}>
            <div className="flex items-center overflow-hidden" style={{ border: "1px solid #27272a", borderRadius: 7 }}>
              <button
                className="flex items-center"
                style={{ padding: "5px 8px", gap: 4, backgroundColor: A, color: "#fff", fontSize: 10, border: "none", cursor: "pointer" }}
              >
                <Pencil style={{ width: 11, height: 11 }} />
                <span>Éditer</span>
              </button>
              <button
                className="flex items-center hover:bg-[#1a1a1e] transition-colors"
                style={{ padding: "5px 8px", gap: 4, color: "#71717a", fontSize: 10, backgroundColor: "transparent", border: "none", cursor: "pointer" }}
              >
                <Eye style={{ width: 11, height: 11 }} />
                <span>Aperçu</span>
              </button>
            </div>
            <button
              className="flex items-center hover:bg-indigo-500/10 transition-colors"
              style={{ padding: "5px 8px", gap: 4, border: "1px solid #312e81", borderRadius: 7, color: "#818cf8", fontSize: 10, backgroundColor: "transparent", cursor: "pointer" }}
            >
              <Download style={{ width: 11, height: 11 }} />
              <span>Télécharger</span>
            </button>
          </div>
        </motion.div>

        {/* Main: A4 + Sidebar */}
        <div className="flex-1 flex overflow-hidden">
          {/* A4 area */}
          <motion.div
            className="flex-1 overflow-auto flex justify-center"
            style={{ padding: 24, backgroundColor: "#18181b" }}
            variants={panelVariants}
          >
            <div
              className="shrink-0"
              style={{
                width: 500,
                backgroundColor: "#fff",
                borderRadius: 8,
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                aspectRatio: "210/297",
              }}
            >
              <div style={{ padding: 28 }}>
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <div>
                    <div
                      className="flex items-center justify-center"
                      style={{ width: 64, height: 32, borderRadius: 4, border: "1px dashed #cbd5e1", marginBottom: 6 }}
                    >
                      <img src="/logo.svg" alt="" style={{ width: 18, height: 18, display: "block" }} />
                    </div>
                    <T s={11} w={600} c="#0f172a">Mon Entreprise SAS</T>
                    <T s={9} c="#64748b" style={{ marginTop: 2 }}>
                      42 Avenue des Champs-Élysées<br />75008 Paris, France<br />contact@monentreprise.fr
                    </T>
                    <T s={8} c="#94a3b8" style={{ marginTop: 2 }}>SIREN: 123 456 789</T>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ display: "inline-block", padding: "5px 12px", borderRadius: 6, backgroundColor: A, color: "#fff", fontSize: 12, fontWeight: 700 }}>
                      FACTURE
                    </div>
                    <T s={10} w={500} c="#475569" style={{ marginTop: 6, display: "block" }}>N° FAK-2024-001</T>
                  </div>
                </div>

                {/* Dates */}
                <div
                  className="flex items-center"
                  style={{ gap: 20, padding: "6px 10px", borderRadius: 5, backgroundColor: "#f0f0ff", border: "1px solid #e0e0f7", marginBottom: 16 }}
                >
                  <DateField label="Date:" value="15/03/2024" />
                  <DateField label="Échéance:" value="15/04/2024" />
                </div>

                {/* Client */}
                <div style={{ textAlign: "right", marginBottom: 16 }}>
                  <T s={11} w={600} c="#0f172a">Dupont & Fils SARL</T>
                  <T s={9} c="#64748b" style={{ marginTop: 2 }}>12 Rue de la Paix<br />75002 Paris, France</T>
                  <T s={8} c="#94a3b8" style={{ marginTop: 2 }}>SIRET: 987 654 321 00012</T>
                </div>

                {/* Subject */}
                <div style={{ marginBottom: 14 }}>
                  <T s={8} c="#64748b" style={{ marginBottom: 3 }}>Objet</T>
                  <div style={{ padding: "4px 8px", borderBottom: "1px dashed #cbd5e1" }}>
                    <T s={10} c="#334155">Développement et design du site web vitrine</T>
                  </div>
                </div>

                {/* Table */}
                <div style={{ marginBottom: 16 }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ backgroundColor: A }}>
                        <Th align="left" first>Désignation</Th>
                        <Th align="center" w={36}>Qté</Th>
                        <Th align="center" w={36}>Unité</Th>
                        <Th align="right" w={64}>P.U. HT</Th>
                        <Th align="center" w={36}>TVA</Th>
                        <Th align="right" w={68} last>Montant</Th>
                      </tr>
                    </thead>
                    <tbody>
                      <Row designation="Développement site web" qty="1" unit="forfait" pu="1 500,00 €" tva="0%" total="1 500,00 €" />
                      <Row designation="Design UI/UX" qty="1" unit="forfait" pu="750,00 €" tva="0%" total="750,00 €" alt />
                      <Row designation="Hébergement annuel" qty="12" unit="mois" pu="16,67 €" tva="20%" total="200,00 €" />
                    </tbody>
                  </table>
                  <div className="flex items-center" style={{ gap: 4, padding: "5px 8px", color: A, fontSize: 9, cursor: "pointer" }}>
                    <Plus style={{ width: 11, height: 11 }} />
                    <span>Ajouter une ligne</span>
                  </div>
                </div>

                {/* Totals */}
                <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20 }}>
                  <div style={{ width: 190 }}>
                    <TotalLine label="Sous-total HT" value="2 450,00 €" />
                    <TotalLine label="TVA 20% (200,00 €)" value="40,00 €" />
                    <TotalLine label="Total TVA" value="40,00 €" />
                    <div
                      className="flex items-center justify-between"
                      style={{ marginTop: 4, padding: "5px 8px", borderRadius: 5, backgroundColor: A, color: "#fff", fontSize: 11, fontWeight: 700 }}
                    >
                      <span>Total TTC</span>
                      <span>2 490,00 €</span>
                    </div>
                  </div>
                </div>

                {/* Payment */}
                <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: 10, marginBottom: 10 }}>
                  <div className="flex items-center" style={{ gap: 4, marginBottom: 3 }}>
                    <CreditCard style={{ width: 10, height: 10, color: "#94a3b8" }} />
                    <T s={8} w={500} c="#64748b">Mode de paiement</T>
                  </div>
                  <T s={9} c="#475569">Virement bancaire</T>
                  <T s={8} c="#94a3b8" style={{ marginTop: 2 }}>IBAN: FR76 •••• •••• •••• •••• •••• 123</T>
                </div>

                {/* Notes */}
                <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: 10 }}>
                  <T s={7} w={600} c="#64748b" style={{ textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 4 }}>Conditions</T>
                  <T s={8} c="#94a3b8" style={{ fontStyle: "italic", lineHeight: 1.5 }}>
                    TVA non applicable, art. 293 B du CGI. En cas de retard de paiement, une pénalité de 3 fois le taux
                    d'intérêt légal sera appliquée, ainsi qu'une indemnité forfaitaire de 40€ pour frais de recouvrement.
                  </T>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== RIGHT SIDEBAR ===== */}
          <motion.div
            className="flex flex-col shrink-0 overflow-auto"
            style={{ width: 210, backgroundColor: "#111113", borderLeft: "1px solid #1e1e22" }}
            variants={panelVariants}
          >
            {/* Tabs */}
            <div className="flex shrink-0" style={{ borderBottom: "1px solid #1e1e22" }}>
              <button
                className="flex-1 flex items-center justify-center"
                style={{ padding: "9px 0", gap: 4, fontSize: 10, fontWeight: 500, color: "#818cf8", borderBottom: "2px solid #6366f1", cursor: "pointer", backgroundColor: "transparent", border: "none", borderBottomStyle: "solid", borderBottomWidth: 2, borderBottomColor: "#6366f1" }}
              >
                <Settings style={{ width: 11, height: 11 }} />
                <span>Options</span>
              </button>
              <button
                className="flex-1 flex items-center justify-center hover:text-zinc-300 transition-colors"
                style={{ padding: "9px 0", gap: 4, fontSize: 10, color: "#52525b", backgroundColor: "transparent", border: "none", borderBottom: "2px solid transparent", cursor: "pointer" }}
              >
                <Sparkles style={{ width: 11, height: 11 }} />
                <span>Faktur AI</span>
              </button>
            </div>

            <div style={{ padding: 12 }}>
              {/* Billing type */}
              <OptSection title="Type de facturation">
                <div className="flex" style={{ gap: 6 }}>
                  <button
                    className="hover:brightness-110 transition-all"
                    style={{ flex: 1, padding: "5px 0", fontSize: 9, fontWeight: 500, color: "#c7d2fe", backgroundColor: "#1e1b4b", border: "1px solid #312e81", borderRadius: 5, cursor: "pointer" }}
                  >
                    Détaillée
                  </button>
                  <button
                    className="hover:bg-[#222226] transition-colors"
                    style={{ flex: 1, padding: "5px 0", fontSize: 9, color: "#71717a", backgroundColor: "#1a1a1e", border: "1px solid #27272a", borderRadius: 5, cursor: "pointer" }}
                  >
                    Rapide
                  </button>
                </div>
              </OptSection>

              {/* Colors */}
              <OptSection title="Couleur d'accent">
                <div className="flex flex-wrap" style={{ gap: 5 }}>
                  {["#6366f1","#8b5cf6","#ec4899","#ef4444","#f97316","#eab308","#22c55e","#06b6d4","#3b82f6","#1e1b4b","#64748b","#171717"].map((c) => (
                    <div
                      key={c}
                      className="hover:scale-125 transition-transform"
                      style={{
                        width: 14, height: 14, borderRadius: "50%", backgroundColor: c, cursor: "pointer",
                        boxShadow: c === A ? `0 0 0 2px #111113, 0 0 0 3px ${c}` : "none",
                      }}
                    />
                  ))}
                </div>
              </OptSection>

              {/* Client */}
              <OptSection title="Client">
                <div
                  className="flex items-center hover:border-zinc-600 transition-colors"
                  style={{ gap: 6, padding: "5px 8px", backgroundColor: "#1a1a1e", borderRadius: 5, border: "1px solid #27272a", cursor: "pointer" }}
                >
                  <div className="flex items-center justify-center" style={{ width: 18, height: 18, borderRadius: "50%", backgroundColor: "#1e1b4b", color: "#818cf8", fontSize: 8, fontWeight: 700, flexShrink: 0 }}>
                    D
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ color: "#d4d4d8", fontSize: 9, fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Dupont & Fils SARL</div>
                    <div style={{ color: "#52525b", fontSize: 8, marginTop: 1 }}>Professionnel</div>
                  </div>
                  <ChevronRight style={{ width: 11, height: 11, color: "#3f3f46", flexShrink: 0 }} />
                </div>
              </OptSection>

              {/* Dates */}
              <OptSection title="Dates">
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <OptRow left="Émission" right="15/03/2024" />
                  <OptRow left="Échéance" right="15/04/2024" />
                </div>
              </OptSection>

              {/* Payment */}
              <OptSection title="Paiement">
                <div
                  className="flex items-center justify-between hover:border-zinc-600 transition-colors"
                  style={{ padding: "5px 8px", backgroundColor: "#1a1a1e", borderRadius: 5, border: "1px solid #27272a", cursor: "pointer" }}
                >
                  <span style={{ color: "#d4d4d8", fontSize: 9 }}>Virement bancaire</span>
                  <ChevronDown style={{ width: 11, height: 11, color: "#3f3f46" }} />
                </div>
              </OptSection>

              {/* Totals */}
              <div style={{ backgroundColor: "#1a1a1e", borderRadius: 6, border: "1px solid #27272a", padding: 10, marginTop: 14 }}>
                <div className="flex items-center justify-between" style={{ padding: "2px 0", fontSize: 9 }}>
                  <span style={{ color: "#71717a" }}>Sous-total</span>
                  <span style={{ color: "#d4d4d8" }}>2 450,00 €</span>
                </div>
                <div className="flex items-center justify-between" style={{ padding: "2px 0", fontSize: 9 }}>
                  <span style={{ color: "#71717a" }}>TVA</span>
                  <span style={{ color: "#d4d4d8" }}>40,00 €</span>
                </div>
                <div className="flex items-center justify-between" style={{ padding: "5px 0 0", marginTop: 4, borderTop: "1px solid #27272a", fontSize: 10, fontWeight: 700 }}>
                  <span style={{ color: "#e4e4e7" }}>Total TTC</span>
                  <span style={{ color: "#818cf8" }}>2 490,00 €</span>
                </div>
              </div>

              {/* Checkboxes */}
              <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 6 }}>
                <Chk label="Objet" checked />
                <Chk label="Adresse de livraison" />
                <Chk label="Conditions d'acceptation" />
                <Chk label="Notes & conditions" checked />
                <Chk label="Signature" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== BOTTOM SAVE BAR ===== */}
        <motion.div
          className="flex items-center justify-end shrink-0"
          style={{ height: 40, padding: "0 16px", gap: 10, backgroundColor: "#111113", borderTop: "1px solid #1e1e22" }}
          variants={panelVariants}
        >
          <span style={{ color: "#71717a", fontSize: 10 }}>Total:</span>
          <span style={{ color: "#e4e4e7", fontWeight: 700, fontSize: 12 }}>EUR 2 490,00</span>
          <button
            className="flex items-center hover:brightness-110 transition-all"
            style={{ padding: "5px 14px", gap: 5, backgroundColor: A, color: "#fff", borderRadius: 6, fontSize: 10, fontWeight: 500, border: "none", cursor: "pointer" }}
          >
            <span>Sauvegarder</span>
            <ChevronRight style={{ width: 11, height: 11 }} />
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}

/* ===== REUSABLE COMPONENTS ===== */

function T({ s, w, c, children, style }: { s: number; w?: number; c: string; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ fontSize: s, fontWeight: w || 400, color: c, lineHeight: 1.4, margin: 0, ...style }}>
      {children}
    </div>
  )
}

function DateField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center" style={{ gap: 4 }}>
      <Calendar style={{ width: 10, height: 10, color: "#94a3b8", flexShrink: 0 }} />
      <span style={{ color: "#64748b", fontSize: 9 }}>{label}</span>
      <span style={{ color: "#334155", fontSize: 9, fontWeight: 500 }}>{value}</span>
    </div>
  )
}

function Th({ children, align, w, first, last }: { children: React.ReactNode; align: string; w?: number; first?: boolean; last?: boolean }) {
  return (
    <th
      style={{
        textAlign: align as "left" | "center" | "right",
        padding: "5px 6px",
        width: w,
        fontSize: 7,
        fontWeight: 600,
        color: "#fff",
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        lineHeight: 1.4,
        borderRadius: first ? "4px 0 0 0" : last ? "0 4px 0 0" : 0,
      }}
    >
      {children}
    </th>
  )
}

function Row({ designation, qty, unit, pu, tva, total, alt }: { designation: string; qty: string; unit: string; pu: string; tva: string; total: string; alt?: boolean }) {
  return (
    <tr style={{ borderBottom: "1px solid #f1f5f9", backgroundColor: alt ? "#fafbfd" : "#fff" }}>
      <td style={{ padding: "6px 6px", color: "#334155", fontSize: 9, lineHeight: 1.4 }}>{designation}</td>
      <td style={{ padding: "6px 4px", color: "#64748b", fontSize: 9, textAlign: "center", lineHeight: 1.4 }}>{qty}</td>
      <td style={{ padding: "6px 4px", color: "#94a3b8", fontSize: 9, textAlign: "center", lineHeight: 1.4 }}>{unit}</td>
      <td style={{ padding: "6px 4px", color: "#475569", fontSize: 9, textAlign: "right", lineHeight: 1.4 }}>{pu}</td>
      <td style={{ padding: "6px 4px", color: "#94a3b8", fontSize: 9, textAlign: "center", lineHeight: 1.4 }}>{tva}</td>
      <td style={{ padding: "6px 6px", color: "#0f172a", fontSize: 9, textAlign: "right", fontWeight: 500, lineHeight: 1.4 }}>{total}</td>
    </tr>
  )
}

function TotalLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between" style={{ padding: "3px 0", fontSize: 9 }}>
      <span style={{ color: "#64748b" }}>{label}</span>
      <span style={{ color: "#334155" }}>{value}</span>
    </div>
  )
}

function SidebarLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: "4px 8px", fontSize: 9, color: "#52525b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>
      {children}
    </div>
  )
}

function SidebarItem({ icon: Icon, label, active, badge, hasSubmenu, color }: {
  icon: React.ElementType; label: string; active?: boolean; badge?: number; hasSubmenu?: boolean; color?: string
}) {
  return (
    <div
      className={`flex items-center ${active ? "" : "hover:bg-[#1a1a1e]"} transition-colors`}
      style={{
        gap: 6, padding: "5px 8px", borderRadius: 5, cursor: "pointer", marginBottom: 1,
        backgroundColor: active ? "#1e1b4b" : "transparent",
        color: active ? "#c7d2fe" : "#a1a1aa",
      }}
    >
      <Icon style={{ width: 14, height: 14, color: color || "inherit", flexShrink: 0 }} />
      <span style={{ flex: 1, fontSize: 11 }}>{label}</span>
      {badge != null && (
        <span className="flex items-center justify-center" style={{ minWidth: 16, height: 16, borderRadius: 8, backgroundColor: "#4f46e5", color: "#fff", fontSize: 9, fontWeight: 600, padding: "0 4px" }}>
          {badge}
        </span>
      )}
      {hasSubmenu && <ChevronRight style={{ width: 11, height: 11, color: "#3f3f46", flexShrink: 0 }} />}
    </div>
  )
}

function OptSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: 14 }}>
      <div style={{ color: "#71717a", fontSize: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>
        {title}
      </div>
      {children}
    </div>
  )
}

function OptRow({ left, right }: { left: string; right: string }) {
  return (
    <div className="flex items-center justify-between" style={{ padding: "5px 8px", backgroundColor: "#1a1a1e", borderRadius: 5, border: "1px solid #27272a" }}>
      <span style={{ color: "#71717a", fontSize: 9 }}>{left}</span>
      <span style={{ color: "#d4d4d8", fontSize: 9 }}>{right}</span>
    </div>
  )
}

function Chk({ label, checked }: { label: string; checked?: boolean }) {
  return (
    <div className="flex items-center hover:opacity-80 transition-opacity" style={{ gap: 6, cursor: "pointer" }}>
      <div
        className="flex items-center justify-center"
        style={{
          width: 13, height: 13, borderRadius: 3, flexShrink: 0,
          backgroundColor: checked ? "#4f46e5" : "transparent",
          border: checked ? "none" : "1px solid #3f3f46",
        }}
      >
        {checked && (
          <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2"><path d="M2 6l3 3 5-5" /></svg>
        )}
      </div>
      <span style={{ color: "#a1a1aa", fontSize: 9 }}>{label}</span>
    </div>
  )
}
