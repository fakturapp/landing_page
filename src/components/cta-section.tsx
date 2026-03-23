export function CTASection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium text-white tracking-tight">
            Facturez simplement. Développez sereinement.
          </h2>
          <a href="https://dash.fakturapp.cc" className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 transition-colors text-sm md:text-base">
            Commencer gratuitement
          </a>
        </div>
      </div>
    </section>
  )
}
