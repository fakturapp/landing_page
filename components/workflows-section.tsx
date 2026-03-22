"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ArrowRight, Mail, FileText, Users, CreditCard, Shield, RefreshCw, Smartphone } from "lucide-react"

const carouselCards = [
  {
    id: 1,
    category: "Envoi par email",
    title: "Envoyez vos factures directement depuis Faktur via Gmail",
    icon: ArrowRight,
    mockup: "email",
  },
  {
    id: 2,
    category: "Export PDF",
    title: "Générez des PDF professionnels conformes Factur-X",
    icon: ArrowRight,
    mockup: "pdf",
  },
  {
    id: 3,
    category: "Gestion d'équipe",
    title: "Collaborez avec votre équipe avec des rôles et permissions",
    icon: ArrowRight,
    mockup: "team",
  },
  {
    id: 4,
    category: "Paiements",
    title: "Suivez vos paiements par virement, espèces ou en ligne",
    icon: ArrowRight,
    mockup: "payment",
  },
  {
    id: 5,
    category: "Sécurité",
    title: "Double authentification et chiffrement AES-256-GCM",
    icon: ArrowRight,
    mockup: "security",
  },
  {
    id: 6,
    category: "Factures récurrentes",
    title: "Automatisez vos factures mensuelles et abonnements",
    icon: ArrowRight,
    mockup: "recurring",
  },
  {
    id: 7,
    category: "Application mobile",
    title: "Gérez votre facturation où que vous soyez",
    icon: ArrowRight,
    mockup: "mobile",
  },
]

function EmailMockup() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <Mail className="w-3.5 h-3.5" />
        <span>Gmail OAuth</span>
        <span className="text-zinc-600">·</span>
        <span className="text-zinc-500">contact@dupont-fils.fr</span>
      </div>
      <p className="text-sm text-zinc-300">
        Votre facture FAK-2024-001 <span className="text-zinc-500">est disponible...</span>
      </p>

      <div className="mt-2 flex items-center gap-2 bg-zinc-800/50 rounded-lg px-3 py-2">
        <div className="w-5 h-5 bg-indigo-500/20 rounded flex items-center justify-center">
          <FileText className="w-3 h-3 text-indigo-400" />
        </div>
        <span className="text-sm text-zinc-300">FAK-2024-001.pdf</span>
        <span className="text-xs text-zinc-500">Pièce jointe</span>
      </div>

      <div className="mt-1 flex items-center gap-2 px-3 py-2">
        <div className="w-4 h-4 rounded-full bg-emerald-500/30 flex items-center justify-center">
          <span className="text-[8px] text-emerald-400">✓</span>
        </div>
        <span className="text-sm text-zinc-500">Envoyé avec succès</span>
      </div>
    </div>
  )
}

function PdfMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-22 rounded-lg border border-indigo-500/30 bg-indigo-500/10 flex flex-col items-center justify-center p-2">
          <FileText className="w-6 h-6 text-indigo-400 mb-1" />
          <span className="text-[8px] text-indigo-400 font-mono">Factur-X</span>
        </div>
        <span className="text-[10px] text-zinc-500">XML + PDF/A-3</span>
      </div>
    </div>
  )
}

function TeamMockup() {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
        <Users className="w-3.5 h-3.5" />
        <span>Équipe</span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-5 h-5 rounded-full bg-indigo-500/30" />
          <span className="text-zinc-300">Marie D.</span>
          <span className="text-xs bg-indigo-500/20 text-indigo-400 px-1.5 py-0.5 rounded ml-auto">Admin</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-5 h-5 rounded-full bg-zinc-600" />
          <span className="text-zinc-400">Paul M.</span>
          <span className="text-xs bg-zinc-700 text-zinc-400 px-1.5 py-0.5 rounded ml-auto">Membre</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-5 h-5 rounded-full bg-zinc-700" />
          <span className="text-zinc-500">Sophie L.</span>
          <span className="text-xs bg-zinc-700 text-zinc-500 px-1.5 py-0.5 rounded ml-auto">Lecteur</span>
        </div>
      </div>
    </div>
  )
}

function PaymentMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center gap-3">
        <CreditCard className="w-12 h-12 text-zinc-400" />
        <div className="flex items-center gap-2">
          <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-1 rounded">Virement</span>
          <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-1 rounded">Espèces</span>
          <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-1 rounded">En ligne</span>
        </div>
      </div>
    </div>
  )
}

function SecurityMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative">
        <Shield className="w-16 h-16 text-indigo-400/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10px] text-indigo-400 font-mono">AES-256</span>
        </div>
      </div>
    </div>
  )
}

function RecurringMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center gap-2">
        <RefreshCw className="w-12 h-12 text-zinc-400" />
        <span className="text-[10px] text-zinc-500">Mensuel · Trimestriel · Annuel</span>
      </div>
    </div>
  )
}

function MobileMockup() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-32 h-56 bg-zinc-900 rounded-2xl border border-zinc-700 overflow-hidden">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-zinc-800 rounded-full" />
        <div className="mt-6 px-3">
          <div className="flex items-center gap-1.5 mb-2">
            <img src="/logo.svg" alt="" className="w-3 h-3" />
            <span className="text-[8px] text-zinc-400">Faktur</span>
          </div>
          <div className="space-y-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-6 bg-zinc-800/50 rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function CardMockup({ type }: { type: string }) {
  switch (type) {
    case "email":
      return <EmailMockup />
    case "pdf":
      return <PdfMockup />
    case "team":
      return <TeamMockup />
    case "payment":
      return <PaymentMockup />
    case "security":
      return <SecurityMockup />
    case "recurring":
      return <RecurringMockup />
    case "mobile":
      return <MobileMockup />
    default:
      return null
  }
}

export function WorkflowsSection() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scrollLeft = () => {
    setScrollPosition(Math.max(0, scrollPosition - 1))
  }

  const scrollRight = () => {
    setScrollPosition(Math.min(carouselCards.length - 4, scrollPosition + 1))
  }

  return (
    <section id="integrations" className="relative py-24" style={{ backgroundColor: "#09090B" }}>
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div className="lg:max-w-xl">
            {/* Orange indicator */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-sm text-zinc-400">Fonctionnalités et intégrations</span>
              <ChevronRight className="w-4 h-4 text-zinc-600" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-medium text-white leading-[1.1]">
              Tout ce dont vous avez
              <br />
              besoin pour facturer
            </h2>
          </div>

          {/* Description */}
          <p className="text-zinc-400 lg:max-w-sm lg:pt-12">
            Faktur regroupe tous les outils nécessaires pour gérer votre facturation : emails, exports PDF, gestion
            d'équipe, suivi des paiements et bien plus.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${scrollPosition * (100 / 4)}%)` }}
          >
            {carouselCards.map((card) => (
              <div key={card.id} className="flex-shrink-0 w-[calc(25%-12px)] min-w-[280px]">
                <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl overflow-hidden h-[340px] flex flex-col hover:border-indigo-500/20 transition-colors">
                  {/* Mockup area */}
                  <div className="flex-1 relative overflow-hidden">
                    <CardMockup type={card.mockup} />
                    {/* Fade overlay */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                      style={{
                        background: "linear-gradient(to top, rgba(9,9,11,0.9), transparent)",
                      }}
                    />
                  </div>

                  {/* Card footer */}
                  <div className="p-4 border-t border-zinc-800/30">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-zinc-500 mb-1">{card.category}</p>
                        <p className="text-sm text-zinc-200 leading-snug">{card.title}</p>
                      </div>
                      <button className="flex-shrink-0 w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 hover:text-indigo-400 hover:border-indigo-500/50 transition-colors">
                        <card.icon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={scrollPosition === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={scrollPosition >= carouselCards.length - 4}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
