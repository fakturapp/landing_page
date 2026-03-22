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
  Palette,
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

  const accentColor = "#6366f1"

  return (
    <motion.div
      className="w-full h-full flex overflow-hidden"
      style={{ backgroundColor: "#0c0c0e" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ========== LEFT SIDEBAR ========== */}
      <motion.div
        className="w-[200px] h-full flex flex-col shrink-0"
        style={{ backgroundColor: "#111113", borderRight: "1px solid #1e1e22" }}
        variants={panelVariants}
      >
        {/* Logo */}
        <div style={{ padding: "12px", borderBottom: "1px solid #1e1e22" }}>
          <div className="flex items-center" style={{ gap: "8px", padding: "4px 8px" }}>
            <img src="/logo.svg" alt="Faktur" style={{ width: "18px", height: "18px" }} />
            <span style={{ color: "#fff", fontWeight: 600, fontSize: "13px", lineHeight: "1" }}>Faktur</span>
            <ChevronDown style={{ width: "13px", height: "13px", color: "#52525b", marginLeft: "auto" }} />
          </div>
        </div>

        {/* Search */}
        <div style={{ padding: "10px 12px" }}>
          <div
            className="flex items-center"
            style={{
              gap: "6px",
              padding: "5px 8px",
              backgroundColor: "#1a1a1e",
              borderRadius: "6px",
              fontSize: "11px",
              color: "#52525b",
            }}
          >
            <Search style={{ width: "12px", height: "12px" }} />
            <span>Rechercher...</span>
            <span
              style={{
                marginLeft: "auto",
                fontSize: "9px",
                backgroundColor: "#27272a",
                padding: "2px 5px",
                borderRadius: "3px",
              }}
            >
              ⌘K
            </span>
          </div>
        </div>

        {/* Main nav */}
        <div style={{ padding: "0 12px" }}>
          <SidebarItem icon={LayoutDashboard} label="Tableau de bord" />
          <SidebarItem icon={FileText} label="Factures" active badge={5} />
          <SidebarItem icon={Receipt} label="Devis" />
        </div>

        {/* Gestion section */}
        <div style={{ marginTop: "16px", padding: "0 12px" }}>
          <div
            style={{
              padding: "4px 8px",
              fontSize: "9px",
              color: "#52525b",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              lineHeight: "1",
            }}
          >
            Gestion
          </div>
          <div style={{ marginTop: "4px" }}>
            <SidebarItem icon={Users} label="Clients" hasSubmenu />
            <SidebarItem icon={Package} label="Produits" hasSubmenu />
            <SidebarItem icon={Building2} label="Entreprise" hasSubmenu />
          </div>
        </div>

        {/* Raccourcis */}
        <div style={{ marginTop: "16px", padding: "0 12px" }}>
          <div
            style={{
              padding: "4px 8px",
              fontSize: "9px",
              color: "#52525b",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              lineHeight: "1",
            }}
          >
            Raccourcis
          </div>
          <div style={{ marginTop: "4px" }}>
            <SidebarItem icon={TrendingUp} label="Revenus" color="#34d399" />
            <SidebarItem icon={Wallet} label="Dépenses" color="#fb923c" />
            <SidebarItem icon={RefreshCw} label="Récurrentes" color="#60a5fa" />
          </div>
        </div>

        <div style={{ flex: 1 }} />
        <div style={{ padding: "12px", borderTop: "1px solid #1e1e22" }}>
          <SidebarItem icon={Settings} label="Paramètres" />
          <SidebarItem icon={HelpCircle} label="Aide" />
        </div>
      </motion.div>

      {/* ========== RIGHT CONTENT ========== */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header Bar */}
        <motion.div
          className="flex items-center justify-between shrink-0"
          style={{
            height: "44px",
            padding: "0 16px",
            backgroundColor: "#111113",
            borderBottom: "1px solid #1e1e22",
          }}
          variants={panelVariants}
        >
          <div className="flex items-center" style={{ gap: "10px" }}>
            <div
              className="flex items-center justify-center"
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "6px",
                backgroundColor: "#1a1a1e",
              }}
            >
              <ArrowLeft style={{ width: "13px", height: "13px", color: "#71717a" }} />
            </div>
            <span style={{ color: "#e4e4e7", fontWeight: 600, fontSize: "12px", lineHeight: "1" }}>
              Modifier la facture
            </span>
            <span style={{ color: "#52525b", fontSize: "10px", lineHeight: "1" }}>FAK-2024-001</span>
          </div>
          <div className="flex items-center" style={{ gap: "8px" }}>
            <div
              className="flex items-center overflow-hidden"
              style={{ border: "1px solid #27272a", borderRadius: "7px" }}
            >
              <button
                className="flex items-center"
                style={{
                  padding: "5px 8px",
                  gap: "4px",
                  backgroundColor: accentColor,
                  color: "#fff",
                  fontSize: "10px",
                  lineHeight: "1",
                  border: "none",
                }}
              >
                <Pencil style={{ width: "11px", height: "11px" }} />
                Éditer
              </button>
              <button
                className="flex items-center"
                style={{
                  padding: "5px 8px",
                  gap: "4px",
                  color: "#71717a",
                  fontSize: "10px",
                  lineHeight: "1",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <Eye style={{ width: "11px", height: "11px" }} />
                Aperçu
              </button>
            </div>
            <button
              className="flex items-center"
              style={{
                padding: "5px 8px",
                gap: "4px",
                border: "1px solid #312e81",
                borderRadius: "7px",
                color: "#818cf8",
                fontSize: "10px",
                lineHeight: "1",
                backgroundColor: "transparent",
              }}
            >
              <Download style={{ width: "11px", height: "11px" }} />
              Télécharger
            </button>
          </div>
        </motion.div>

        {/* Main area: A4 sheet + Options sidebar */}
        <div className="flex-1 flex overflow-hidden">
          {/* A4 Sheet Area */}
          <motion.div
            className="flex-1 overflow-auto flex justify-center"
            style={{ padding: "24px", backgroundColor: "#18181b" }}
            variants={panelVariants}
          >
            {/* A4 Paper */}
            <div
              className="shrink-0"
              style={{
                width: "500px",
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                aspectRatio: "210 / 297",
              }}
            >
              <div style={{ padding: "28px" }}>
                {/* ---- Header: Company + FACTURE ---- */}
                <div className="flex justify-between" style={{ marginBottom: "20px", alignItems: "flex-start" }}>
                  <div>
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: "64px",
                        height: "32px",
                        borderRadius: "4px",
                        border: "1px dashed #cbd5e1",
                        marginBottom: "6px",
                      }}
                    >
                      <img src="/logo.svg" alt="" style={{ width: "18px", height: "18px" }} />
                    </div>
                    <p style={{ color: "#0f172a", fontWeight: 600, fontSize: "11px", lineHeight: "1.2", margin: 0 }}>
                      Mon Entreprise SAS
                    </p>
                    <p style={{ color: "#64748b", fontSize: "9px", lineHeight: "1.5", margin: "2px 0 0 0" }}>
                      42 Avenue des Champs-Élysées<br />
                      75008 Paris, France<br />
                      contact@monentreprise.fr
                    </p>
                    <p style={{ color: "#94a3b8", fontSize: "8px", lineHeight: "1.4", margin: "2px 0 0 0" }}>
                      SIREN: 123 456 789
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        display: "inline-block",
                        padding: "5px 12px",
                        borderRadius: "6px",
                        backgroundColor: accentColor,
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: 700,
                        lineHeight: "1",
                      }}
                    >
                      FACTURE
                    </div>
                    <p style={{ color: "#475569", fontSize: "10px", lineHeight: "1", margin: "6px 0 0 0", fontWeight: 500 }}>
                      N° FAK-2024-001
                    </p>
                  </div>
                </div>

                {/* ---- Dates Bar ---- */}
                <div
                  className="flex items-center"
                  style={{
                    gap: "20px",
                    padding: "6px 10px",
                    borderRadius: "5px",
                    backgroundColor: "#f0f0ff",
                    border: "1px solid #e0e0f7",
                    marginBottom: "16px",
                  }}
                >
                  <div className="flex items-center" style={{ gap: "4px" }}>
                    <Calendar style={{ width: "10px", height: "10px", color: "#94a3b8" }} />
                    <span style={{ color: "#64748b", fontSize: "9px", lineHeight: "1" }}>Date:</span>
                    <span style={{ color: "#334155", fontSize: "9px", lineHeight: "1", fontWeight: 500 }}>15/03/2024</span>
                  </div>
                  <div className="flex items-center" style={{ gap: "4px" }}>
                    <Calendar style={{ width: "10px", height: "10px", color: "#94a3b8" }} />
                    <span style={{ color: "#64748b", fontSize: "9px", lineHeight: "1" }}>Échéance:</span>
                    <span style={{ color: "#334155", fontSize: "9px", lineHeight: "1", fontWeight: 500 }}>15/04/2024</span>
                  </div>
                </div>

                {/* ---- Client Info ---- */}
                <div style={{ textAlign: "right", marginBottom: "16px" }}>
                  <p style={{ color: "#0f172a", fontWeight: 600, fontSize: "11px", lineHeight: "1.2", margin: 0 }}>
                    Dupont & Fils SARL
                  </p>
                  <p style={{ color: "#64748b", fontSize: "9px", lineHeight: "1.5", margin: "2px 0 0 0" }}>
                    12 Rue de la Paix<br />
                    75002 Paris, France
                  </p>
                  <p style={{ color: "#94a3b8", fontSize: "8px", lineHeight: "1.4", margin: "2px 0 0 0" }}>
                    SIRET: 987 654 321 00012
                  </p>
                </div>

                {/* ---- Subject ---- */}
                <div style={{ marginBottom: "14px" }}>
                  <p style={{ color: "#64748b", fontSize: "8px", lineHeight: "1", margin: "0 0 3px 0" }}>Objet</p>
                  <p
                    style={{
                      color: "#334155",
                      fontSize: "10px",
                      lineHeight: "1.3",
                      margin: 0,
                      padding: "4px 8px",
                      borderBottom: "1px dashed #cbd5e1",
                    }}
                  >
                    Développement et design du site web vitrine
                  </p>
                </div>

                {/* ---- Line Items Table ---- */}
                <div style={{ marginBottom: "16px" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "9px" }}>
                    <thead>
                      <tr
                        style={{
                          backgroundColor: accentColor,
                          color: "#fff",
                          fontSize: "7px",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                        }}
                      >
                        <th style={{ textAlign: "left", padding: "5px 8px", borderRadius: "4px 0 0 0" }}>Désignation</th>
                        <th style={{ textAlign: "center", padding: "5px 4px", width: "36px" }}>Qté</th>
                        <th style={{ textAlign: "center", padding: "5px 4px", width: "36px" }}>Unité</th>
                        <th style={{ textAlign: "right", padding: "5px 4px", width: "64px" }}>P.U. HT</th>
                        <th style={{ textAlign: "center", padding: "5px 4px", width: "36px" }}>TVA</th>
                        <th style={{ textAlign: "right", padding: "5px 8px", width: "68px", borderRadius: "0 4px 0 0" }}>Montant</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                        <td style={{ padding: "6px 8px", color: "#334155" }}>Développement site web</td>
                        <td style={{ padding: "6px 4px", color: "#64748b", textAlign: "center" }}>1</td>
                        <td style={{ padding: "6px 4px", color: "#94a3b8", textAlign: "center" }}>forfait</td>
                        <td style={{ padding: "6px 4px", color: "#475569", textAlign: "right" }}>1 500,00 €</td>
                        <td style={{ padding: "6px 4px", color: "#94a3b8", textAlign: "center" }}>0%</td>
                        <td style={{ padding: "6px 8px", color: "#0f172a", textAlign: "right", fontWeight: 500 }}>1 500,00 €</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #f1f5f9", backgroundColor: "#fafbfd" }}>
                        <td style={{ padding: "6px 8px", color: "#334155" }}>Design UI/UX</td>
                        <td style={{ padding: "6px 4px", color: "#64748b", textAlign: "center" }}>1</td>
                        <td style={{ padding: "6px 4px", color: "#94a3b8", textAlign: "center" }}>forfait</td>
                        <td style={{ padding: "6px 4px", color: "#475569", textAlign: "right" }}>750,00 €</td>
                        <td style={{ padding: "6px 4px", color: "#94a3b8", textAlign: "center" }}>0%</td>
                        <td style={{ padding: "6px 8px", color: "#0f172a", textAlign: "right", fontWeight: 500 }}>750,00 €</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                        <td style={{ padding: "6px 8px", color: "#334155" }}>Hébergement annuel</td>
                        <td style={{ padding: "6px 4px", color: "#64748b", textAlign: "center" }}>12</td>
                        <td style={{ padding: "6px 4px", color: "#94a3b8", textAlign: "center" }}>mois</td>
                        <td style={{ padding: "6px 4px", color: "#475569", textAlign: "right" }}>16,67 €</td>
                        <td style={{ padding: "6px 4px", color: "#94a3b8", textAlign: "center" }}>20%</td>
                        <td style={{ padding: "6px 8px", color: "#0f172a", textAlign: "right", fontWeight: 500 }}>200,00 €</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Add line */}
                  <div className="flex items-center" style={{ gap: "4px", padding: "5px 8px", color: accentColor, fontSize: "9px", cursor: "pointer" }}>
                    <Plus style={{ width: "11px", height: "11px" }} />
                    <span style={{ lineHeight: "1" }}>Ajouter une ligne</span>
                  </div>
                </div>

                {/* ---- Totals ---- */}
                <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
                  <div style={{ width: "190px" }}>
                    <div className="flex justify-between" style={{ padding: "3px 0", fontSize: "9px" }}>
                      <span style={{ color: "#64748b", lineHeight: "1" }}>Sous-total HT</span>
                      <span style={{ color: "#334155", lineHeight: "1" }}>2 450,00 €</span>
                    </div>
                    <div className="flex justify-between" style={{ padding: "3px 0", fontSize: "9px" }}>
                      <span style={{ color: "#64748b", lineHeight: "1" }}>TVA 20% (200,00 €)</span>
                      <span style={{ color: "#334155", lineHeight: "1" }}>40,00 €</span>
                    </div>
                    <div className="flex justify-between" style={{ padding: "3px 0", fontSize: "9px" }}>
                      <span style={{ color: "#64748b", lineHeight: "1" }}>Total TVA</span>
                      <span style={{ color: "#334155", lineHeight: "1" }}>40,00 €</span>
                    </div>
                    <div
                      className="flex justify-between"
                      style={{
                        marginTop: "4px",
                        padding: "5px 8px",
                        borderRadius: "5px",
                        backgroundColor: accentColor,
                        color: "#fff",
                        fontSize: "11px",
                        fontWeight: 700,
                      }}
                    >
                      <span style={{ lineHeight: "1" }}>Total TTC</span>
                      <span style={{ lineHeight: "1" }}>2 490,00 €</span>
                    </div>
                  </div>
                </div>

                {/* ---- Payment ---- */}
                <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "10px", marginBottom: "10px" }}>
                  <div className="flex items-center" style={{ gap: "4px", marginBottom: "3px" }}>
                    <CreditCard style={{ width: "10px", height: "10px", color: "#94a3b8" }} />
                    <span style={{ color: "#64748b", fontSize: "8px", lineHeight: "1", fontWeight: 500 }}>Mode de paiement</span>
                  </div>
                  <p style={{ color: "#475569", fontSize: "9px", lineHeight: "1.3", margin: 0 }}>Virement bancaire</p>
                  <p style={{ color: "#94a3b8", fontSize: "8px", lineHeight: "1.3", margin: "2px 0 0 0" }}>
                    IBAN: FR76 •••• •••• •••• •••• •••• 123
                  </p>
                </div>

                {/* ---- Notes ---- */}
                <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "10px" }}>
                  <p style={{ color: "#64748b", fontSize: "7px", lineHeight: "1", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", margin: "0 0 4px 0" }}>
                    Conditions
                  </p>
                  <p style={{ color: "#94a3b8", fontSize: "7.5px", lineHeight: "1.5", margin: 0, fontStyle: "italic" }}>
                    TVA non applicable, art. 293 B du CGI. En cas de retard de paiement, une pénalité de 3 fois le taux
                    d'intérêt légal sera appliquée, ainsi qu'une indemnité forfaitaire de 40€ pour frais de recouvrement.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========== RIGHT SIDEBAR - OPTIONS ========== */}
          <motion.div
            className="flex flex-col shrink-0 overflow-auto"
            style={{
              width: "210px",
              backgroundColor: "#111113",
              borderLeft: "1px solid #1e1e22",
            }}
            variants={panelVariants}
          >
            {/* Tabs */}
            <div className="flex shrink-0" style={{ borderBottom: "1px solid #1e1e22" }}>
              <button
                className="flex-1 flex items-center justify-center"
                style={{
                  padding: "9px 0",
                  gap: "4px",
                  fontSize: "10px",
                  lineHeight: "1",
                  fontWeight: 500,
                  color: "#818cf8",
                  borderBottom: "2px solid #6366f1",
                }}
              >
                <Settings style={{ width: "11px", height: "11px" }} />
                Options
              </button>
              <button
                className="flex-1 flex items-center justify-center"
                style={{
                  padding: "9px 0",
                  gap: "4px",
                  fontSize: "10px",
                  lineHeight: "1",
                  color: "#52525b",
                  borderBottom: "2px solid transparent",
                }}
              >
                <Sparkles style={{ width: "11px", height: "11px" }} />
                Faktur AI
              </button>
            </div>

            {/* Options content */}
            <div style={{ padding: "12px" }}>
              {/* Billing type */}
              <OptionSection title="Type de facturation">
                <div className="flex" style={{ gap: "6px" }}>
                  <button
                    style={{
                      flex: 1,
                      padding: "5px 0",
                      fontSize: "9px",
                      lineHeight: "1",
                      fontWeight: 500,
                      color: "#c7d2fe",
                      backgroundColor: "#1e1b4b",
                      border: "1px solid #312e81",
                      borderRadius: "5px",
                    }}
                  >
                    Détaillée
                  </button>
                  <button
                    style={{
                      flex: 1,
                      padding: "5px 0",
                      fontSize: "9px",
                      lineHeight: "1",
                      color: "#71717a",
                      backgroundColor: "#1a1a1e",
                      border: "1px solid #27272a",
                      borderRadius: "5px",
                    }}
                  >
                    Rapide
                  </button>
                </div>
              </OptionSection>

              {/* Color picker */}
              <OptionSection title="Couleur d'accent">
                <div className="flex flex-wrap" style={{ gap: "5px" }}>
                  {["#6366f1", "#8b5cf6", "#ec4899", "#ef4444", "#f97316", "#eab308", "#22c55e", "#06b6d4", "#3b82f6", "#1e1b4b", "#64748b", "#171717"].map((c) => (
                    <div
                      key={c}
                      style={{
                        width: "14px",
                        height: "14px",
                        borderRadius: "50%",
                        backgroundColor: c,
                        cursor: "pointer",
                        boxShadow: c === accentColor ? `0 0 0 2px #111113, 0 0 0 3px ${c}` : "none",
                      }}
                    />
                  ))}
                </div>
              </OptionSection>

              {/* Client */}
              <OptionSection title="Client">
                <div
                  className="flex items-center"
                  style={{
                    gap: "6px",
                    padding: "5px 8px",
                    backgroundColor: "#1a1a1e",
                    borderRadius: "5px",
                    border: "1px solid #27272a",
                  }}
                >
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      backgroundColor: "#1e1b4b",
                      color: "#818cf8",
                      fontSize: "8px",
                      fontWeight: 700,
                      lineHeight: "1",
                    }}
                  >
                    D
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ color: "#d4d4d8", fontSize: "9px", lineHeight: "1.2", fontWeight: 500, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      Dupont & Fils SARL
                    </p>
                    <p style={{ color: "#52525b", fontSize: "8px", lineHeight: "1", margin: "1px 0 0 0" }}>
                      Professionnel
                    </p>
                  </div>
                  <ChevronRight style={{ width: "11px", height: "11px", color: "#3f3f46", flexShrink: 0 }} />
                </div>
              </OptionSection>

              {/* Dates */}
              <OptionSection title="Dates">
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div
                    className="flex items-center justify-between"
                    style={{ padding: "5px 8px", backgroundColor: "#1a1a1e", borderRadius: "5px", border: "1px solid #27272a" }}
                  >
                    <span style={{ color: "#71717a", fontSize: "9px", lineHeight: "1" }}>Émission</span>
                    <span style={{ color: "#d4d4d8", fontSize: "9px", lineHeight: "1" }}>15/03/2024</span>
                  </div>
                  <div
                    className="flex items-center justify-between"
                    style={{ padding: "5px 8px", backgroundColor: "#1a1a1e", borderRadius: "5px", border: "1px solid #27272a" }}
                  >
                    <span style={{ color: "#71717a", fontSize: "9px", lineHeight: "1" }}>Échéance</span>
                    <span style={{ color: "#d4d4d8", fontSize: "9px", lineHeight: "1" }}>15/04/2024</span>
                  </div>
                </div>
              </OptionSection>

              {/* Payment */}
              <OptionSection title="Paiement">
                <div
                  className="flex items-center justify-between"
                  style={{ padding: "5px 8px", backgroundColor: "#1a1a1e", borderRadius: "5px", border: "1px solid #27272a" }}
                >
                  <span style={{ color: "#d4d4d8", fontSize: "9px", lineHeight: "1" }}>Virement bancaire</span>
                  <ChevronDown style={{ width: "11px", height: "11px", color: "#3f3f46" }} />
                </div>
              </OptionSection>

              {/* Totals summary */}
              <div
                style={{
                  backgroundColor: "#1a1a1e",
                  borderRadius: "6px",
                  border: "1px solid #27272a",
                  padding: "10px",
                  marginTop: "14px",
                }}
              >
                <div className="flex justify-between" style={{ padding: "2px 0", fontSize: "9px" }}>
                  <span style={{ color: "#71717a", lineHeight: "1" }}>Sous-total</span>
                  <span style={{ color: "#d4d4d8", lineHeight: "1" }}>2 450,00 €</span>
                </div>
                <div className="flex justify-between" style={{ padding: "2px 0", fontSize: "9px" }}>
                  <span style={{ color: "#71717a", lineHeight: "1" }}>TVA</span>
                  <span style={{ color: "#d4d4d8", lineHeight: "1" }}>40,00 €</span>
                </div>
                <div
                  className="flex justify-between"
                  style={{ padding: "5px 0 0", marginTop: "4px", borderTop: "1px solid #27272a", fontSize: "10px", fontWeight: 700 }}
                >
                  <span style={{ color: "#e4e4e7", lineHeight: "1" }}>Total TTC</span>
                  <span style={{ color: "#818cf8", lineHeight: "1" }}>2 490,00 €</span>
                </div>
              </div>

              {/* Checkboxes */}
              <div style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <DarkCheckbox label="Objet" checked />
                <DarkCheckbox label="Adresse de livraison" />
                <DarkCheckbox label="Conditions d'acceptation" />
                <DarkCheckbox label="Notes & conditions" checked />
                <DarkCheckbox label="Signature" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========== BOTTOM SAVE BAR ========== */}
        <motion.div
          className="flex items-center justify-end shrink-0"
          style={{
            height: "40px",
            padding: "0 16px",
            gap: "10px",
            backgroundColor: "#111113",
            borderTop: "1px solid #1e1e22",
          }}
          variants={panelVariants}
        >
          <span style={{ color: "#71717a", fontSize: "10px", lineHeight: "1" }}>Total:</span>
          <span style={{ color: "#e4e4e7", fontWeight: 700, fontSize: "12px", lineHeight: "1" }}>EUR 2 490,00</span>
          <button
            className="flex items-center"
            style={{
              padding: "5px 14px",
              gap: "5px",
              backgroundColor: accentColor,
              color: "#fff",
              borderRadius: "6px",
              fontSize: "10px",
              lineHeight: "1",
              fontWeight: 500,
              border: "none",
            }}
          >
            Sauvegarder
            <ChevronRight style={{ width: "11px", height: "11px" }} />
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}

/* ========== SIDEBAR NAV ITEM ========== */
function SidebarItem({
  icon: Icon,
  label,
  active,
  badge,
  hasSubmenu,
  color,
}: {
  icon: React.ElementType
  label: string
  active?: boolean
  badge?: number
  hasSubmenu?: boolean
  color?: string
}) {
  return (
    <div
      className="flex items-center"
      style={{
        gap: "6px",
        padding: "5px 8px",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: active ? "#1e1b4b" : "transparent",
        color: active ? "#c7d2fe" : "#a1a1aa",
        marginBottom: "1px",
      }}
    >
      <Icon style={{ width: "14px", height: "14px", color: color || "inherit", flexShrink: 0 }} />
      <span style={{ flex: 1, fontSize: "11px", lineHeight: "1" }}>{label}</span>
      {badge != null && (
        <span
          className="flex items-center justify-center"
          style={{
            minWidth: "16px",
            height: "16px",
            borderRadius: "8px",
            backgroundColor: "#4f46e5",
            color: "#fff",
            fontSize: "9px",
            lineHeight: "1",
            fontWeight: 600,
            padding: "0 4px",
          }}
        >
          {badge}
        </span>
      )}
      {hasSubmenu && <ChevronRight style={{ width: "11px", height: "11px", color: "#3f3f46", flexShrink: 0 }} />}
    </div>
  )
}

/* ========== OPTION SECTION ========== */
function OptionSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: "14px" }}>
      <p
        style={{
          color: "#71717a",
          fontSize: "8px",
          lineHeight: "1",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          margin: "0 0 6px 0",
        }}
      >
        {title}
      </p>
      {children}
    </div>
  )
}

/* ========== DARK CHECKBOX ========== */
function DarkCheckbox({ label, checked }: { label: string; checked?: boolean }) {
  return (
    <div className="flex items-center" style={{ gap: "6px" }}>
      <div
        className="flex items-center justify-center"
        style={{
          width: "13px",
          height: "13px",
          borderRadius: "3px",
          backgroundColor: checked ? "#4f46e5" : "transparent",
          border: checked ? "none" : "1px solid #3f3f46",
          flexShrink: 0,
        }}
      >
        {checked && (
          <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M2 6l3 3 5-5" />
          </svg>
        )}
      </div>
      <span style={{ color: "#a1a1aa", fontSize: "9px", lineHeight: "1" }}>{label}</span>
    </div>
  )
}
