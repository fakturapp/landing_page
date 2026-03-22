export function Footer() {
  const footerLinks = {
    Produit: ["Factures", "Devis", "Avoirs", "Clients", "Produits", "Tableau de bord", "Export PDF"],
    Fonctionnalités: ["Intelligence artificielle", "Chiffrement zero-access", "Factures récurrentes", "Gestion d'équipe", "Intégration email", "SIREN/SIRET"],
    Entreprise: ["À propos", "Blog", "Contact", "Changelog"],
    Légal: ["Confidentialité", "CGU", "Mentions légales", "DPA"],
    Communauté: ["GitHub", "X (Twitter)", "Discord"],
  }

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
              Facturation professionnelle gratuite avec chiffrement zero-access.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-medium text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">
                      {link}
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
