
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { DashboardMockup } from "./dashboard-mockup"
import { Navbar } from "./navbar"
import { LogoCloud } from "./logo-cloud"
import { FeatureCardsSection } from "./feature-cards-section"
import { AISection } from "./ai-section"
import { ProductDirectionSection } from "./product-direction-section"
import { WorkflowsSection } from "./workflows-section"
import { CTASection } from "./cta-section"
import { Footer } from "./footer"

function GitHubStarButton() {
  const [stars, setStars] = useState<number | null>(null)

  useEffect(() => {
    fetch("https://api.github.com/repos/fakturapp/faktur")
      .then((r) => r.json())
      .then((data) => {
        if (typeof data.stargazers_count === "number") setStars(data.stargazers_count)
      })
      .catch(() => {})
  }, [])

  return (
    <a
      href="https://github.com/fakturapp/faktur"
      target="_blank"
      rel="noopener noreferrer"
      className="github-star-btn group inline-flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        <span>Star on GitHub</span>
      </div>
      <div className="flex items-center gap-1">
        <svg
          className="size-4 text-zinc-500 transition-colors duration-200 group-hover:text-yellow-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
          />
        </svg>
        <span className="tabular-nums tracking-wider font-medium">
          {stars !== null ? stars : "..."}
        </span>
      </div>
    </a>
  )
}

export function Hero3DStage() {
  const [yOffset, setYOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const offset = Math.min(scrollY / 300, 1) * -20
      setYOffset(offset)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const baseTransform = {
    translateX: 2,
    scale: 1.2,
    rotateX: 47,
    rotateY: 31,
    rotateZ: 324,
  }

  return (
    <>
      <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#09090B" }}>
        <Navbar />

        {/* Subtle glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -30%)",
            width: "1200px",
            height: "800px",
            background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",
          }}
        />

        {/* Main content */}
        <div className="relative z-10 pt-28 flex flex-col">
          {/* Hero text - contained and centered */}
          <div className="w-full flex justify-center px-6 mt-16">
            <div className="w-full max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white leading-[1.1] text-balance"
              >
                Créez vos factures et devis en toute confiance
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 text-lg text-zinc-400"
              >
                Logiciel de facturation gratuit avec chiffrement zero-access.
                <br />
                Faktur chiffre vos données avec votre mot de passe, même nous ne pouvons pas les lire.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 flex items-center gap-6"
              >
                <a href="https://dash.fakturapp.cc" className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 transition-colors text-sm">
                  Commencer gratuitement
                </a>
                <GitHubStarButton />
                  <button className="text-zinc-300 font-medium hover:text-white transition-colors flex items-center gap-2 text-sm">
                    <span className="text-zinc-500">Fait avec</span>❤️  par danbenba
                </button>
              </motion.div>
            </div>
          </div>

          {/* 3D Stage - full bleed */}
          <div
            className="relative mt-16"
            style={{
              width: "100vw",
              marginLeft: "-50vw",
              marginRight: "-50vw",
              position: "relative",
              left: "50%",
              right: "50%",
              height: "700px",
              marginTop: "-60px",
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 h-72 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to top, #09090B 20%, transparent 100%)",
              }}
            />

            {/* Perspective container */}
            <div
              style={{
                transform: `translateY(${yOffset}px)`,
                transition: "transform 0.1s ease-out",
                perspective: "4000px",
                perspectiveOrigin: "100% 0",
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
                position: "relative",
              }}
            >
              {/* Transformed base */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  backgroundColor: "#09090B",
                  transformOrigin: "0 0",
                  willChange: "transform",
                  border: "1px solid #1e1e1e",
                  borderRadius: "10px",
                  width: "1600px",
                  height: "900px",
                  margin: "280px auto auto",
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  transform: `translate(${baseTransform.translateX}%) scale(${baseTransform.scale}) rotateX(${baseTransform.rotateX}deg) rotateY(${baseTransform.rotateY}deg) rotate(${baseTransform.rotateZ}deg)`,
                  transformStyle: "preserve-3d",
                  overflow: "hidden",
                }}
              >
                <DashboardMockup />
              </motion.div>
            </div>
          </div>

          <LogoCloud />
          <FeatureCardsSection />
          <AISection />
          <ProductDirectionSection />
          <WorkflowsSection />
          <CTASection />
          <Footer />
        </div>
      </section>
    </>
  )
}
