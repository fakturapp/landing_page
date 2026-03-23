import { useCallback } from "react"

type FooterLink = { label: string; href: string }

const footerLinks: Record<string, FooterLink[]> = {
  Produit: [
    { label: "Factures", href: "#features" },
    { label: "Devis", href: "#features" },
    { label: "Avoirs", href: "#features" },
    { label: "Clients", href: "https://dash.fakturapp.cc" },
    { label: "Produits", href: "https://dash.fakturapp.cc" },
    { label: "Tableau de bord", href: "https://dash.fakturapp.cc" },
    { label: "Export PDF", href: "#integrations" },
  ],
  Fonctionnalités: [
    { label: "Intelligence artificielle", href: "#ai" },
    { label: "Chiffrement zéro-access", href: "#security" },
    { label: "Factures récurrentes", href: "#integrations" },
    { label: "Gestion d'équipe", href: "#integrations" },
    { label: "Intégration email", href: "#integrations" },
    { label: "SIREN/SIRET", href: "#security" },
  ],
  Légal: [
    { label: "Confidentialité", href: "https://dash.fakturapp.cc/legal/privacy" },
    { label: "CGU", href: "https://dash.fakturapp.cc/legal/terms" },
    { label: "Mentions légales", href: "https://dash.fakturapp.cc/legal/mentions" },
    { label: "Cookies", href: "https://dash.fakturapp.cc/legal/cookies" },
  ],
  Communauté: [
    { label: "GitHub", href: "https://github.com/fakturapp/faktur" },
    { label: "X (Twitter)", href: "https://x.fakturapp.cc" },
    { label: "Discord", href: "https://discord.fakturapp.cc" },
  ],
}

function smoothScrollTo(href: string) {
  if (!href.startsWith("#") || href === "#") return false

  const id = href.slice(1)
  const el = document.getElementById(id)
  if (!el) return false

  el.scrollIntoView({ behavior: "smooth", block: "start" })

  // Flash animation on the target section
  el.style.transition = "none"
  el.style.boxShadow = "inset 0 0 0 0 transparent"
  requestAnimationFrame(() => {
    el.style.transition = "box-shadow 0.6s ease-out"
    el.style.boxShadow = "inset 0 2px 0 0 #6366f1"
    setTimeout(() => {
      el.style.transition = "box-shadow 1s ease-out"
      el.style.boxShadow = "inset 0 0 0 0 transparent"
    }, 800)
  })

  return true
}

export function Footer() {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (smoothScrollTo(href)) {
      e.preventDefault()
    }
  }, [])

  return (
    <footer className="border-t border-zinc-800 py-16 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="Faktur" className="w-6 h-6" />
              <span className="text-white font-semibold text-sm">Faktur</span>
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Devis et facturation professionnels. Gratuit, pour toujours.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-medium text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            © 2026 Faktur. Tous droits réservés.
          </p>
          <p className="text-zinc-600 text-xs">
            Fait avec soin pour les entrepreneurs.
          </p>
        </div>
      </div>
    </footer>
  )
}
