import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const lexend = Lexend({ subsets: ["latin"] });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: 'Faktur - Facturation professionnelle gratuite',
  description: 'Faktur simplifie votre facturation. Créez des devis et factures professionnels en quelques clics. Gratuit, sécurisé et conçu pour les entrepreneurs.',
  keywords: 'facturation, facture, devis, facturation gratuite, logiciel facturation, facture en ligne, PME, freelance, entrepreneur',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={geist.variable}>
      <body className={`${lexend.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
