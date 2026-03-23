import { motion } from "framer-motion"
import { Github, Globe, Heart } from "lucide-react"

const team = [
  {
    name: "danbenba",
    role: "Fondateur & Développeur",
    avatar: "https://danbenba.dev/profile.png",
    website: "https://danbenba.dev",
    github: "https://github.com/danbenba",
  },
]

export function TeamSection() {
  return (
    <section className="relative py-20 md:py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-6"
        >
          <Heart className="w-4 h-4 text-pink-500" />
          <span className="text-zinc-400 text-sm">Notre équipe</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-4"
          style={{ letterSpacing: "-0.0325em", fontWeight: 538, lineHeight: 1.1 }}
        >
          Les personnes derrière Faktur
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 max-w-md mb-12"
        >
          Un projet open source construit avec passion pour simplifier la facturation des entrepreneurs.
        </motion.p>

        <div className="flex flex-wrap gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-indigo-500/30 transition-colors w-full sm:w-auto"
            >
              <div className="flex items-center gap-5">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-16 h-16 rounded-full border-2 border-zinc-700 group-hover:border-indigo-500/50 transition-colors object-cover"
                />
                <div>
                  <h3 className="text-white font-medium text-lg">{member.name}</h3>
                  <p className="text-zinc-500 text-sm mb-3">{member.role}</p>
                  <div className="flex items-center gap-3">
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-zinc-400 hover:text-indigo-400 transition-colors text-sm"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      danbenba.dev
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
