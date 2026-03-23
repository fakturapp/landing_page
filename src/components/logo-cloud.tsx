
import { motion } from "framer-motion"
import { Briefcase, Code, Palette, Camera, Wrench, ShoppingBag, Stethoscope, GraduationCap } from "lucide-react"

const professions = [
  { name: "Freelances", icon: Code },
  { name: "Consultants", icon: Briefcase },
  { name: "Designers", icon: Palette },
  { name: "Photographes", icon: Camera },
  { name: "Artisans", icon: Wrench },
  { name: "Commerces", icon: ShoppingBag },
  { name: "Professions libérales", icon: Stethoscope },
  { name: "Formateurs", icon: GraduationCap },
]

export function LogoCloud() {
  return (
    <div className="relative z-20 pb-24 pt-8" style={{ backgroundColor: "#09090B" }}>
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-zinc-300 mb-2"
          >
            Conçu pour les entrepreneurs et les indépendants.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-zinc-500 mb-16"
          >
            Des auto-entrepreneurs aux PME en pleine croissance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group cursor-pointer"
          >
            {/* Logo grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-10 items-center justify-items-center transition-all duration-300 group-hover:blur-[2.5px] group-hover:opacity-50">
              {professions.map((prof) => (
                <div key={prof.name} className="text-white font-semibold text-xl flex items-center gap-2">
                  <prof.icon className="w-5 h-5 text-indigo-400" />
                  {prof.name}
                </div>
              ))}
            </div>

            {/* Hover overlay button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="px-5 py-2.5 bg-indigo-600/80 backdrop-blur-sm border border-indigo-500 rounded-full text-sm text-white flex items-center gap-2">
                Commencer gratuitement
                <span aria-hidden="true">›</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
