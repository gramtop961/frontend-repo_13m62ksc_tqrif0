import { motion } from 'framer-motion'

const items = [
  { title: 'We design fearless streetwear that speaks your vibe.', sub: 'Shapes, color, rhythm — built for expression.' },
  { title: 'Custom crafted designs.', sub: 'Art-led drops with precision screen prints.' },
  { title: 'Premium fabric. Limitless creativity.', sub: 'Comfort-engineered blends for daily flow.' },
]

export default function BrandStory() {
  return (
    <section id="story" className="relative bg-black text-white py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_100%,rgba(255,170,50,0.2),transparent),radial-gradient(600px_300px_at_90%_0%,rgba(250,80,255,0.15),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Our Story</h2>
          <p className="text-neutral-300 mt-2">Energy, craft, and attitude in motion.</p>
        </div>

        <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[85%] sm:min-w-[55%] lg:min-w-[40%] snap-center rounded-3xl p-8 bg-gradient-to-br from-neutral-900/70 to-neutral-800/40 border border-white/10"
            >
              <div className="text-2xl sm:text-3xl font-bold mb-2">{it.title}</div>
              <div className="text-neutral-300">{it.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
