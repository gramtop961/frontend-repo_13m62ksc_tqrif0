import { motion } from 'framer-motion'

const products = [
  { id: 1, name: 'Neon Flux Tee', price: '$48', img: 'https://images.unsplash.com/photo-1520975922284-8bdf0a2f3f5f?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, name: 'City Pulse Hoodie', price: '$88', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, name: 'Orbit Oversize', price: '$62', img: 'https://images.unsplash.com/photo-1542282811-943ef1a977c9?q=80&w=1600&auto=format&fit=crop' },
  { id: 4, name: 'Vibe Spectrum', price: '$54', img: 'https://images.unsplash.com/photo-1520975922284-8bdf0a2f3f5f?q=80&w=1600&auto=format&fit=crop' },
  { id: 5, name: 'Prism Drop', price: '$58', img: 'https://images.unsplash.com/photo-1542282811-943ef1a977c9?q=80&w=1600&auto=format&fit=crop' },
  { id: 6, name: 'Monolith LTD', price: '$96', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1600&auto=format&fit=crop' },
]

export default function FeaturedCollection() {
  return (
    <section id="collection" className="relative py-28 bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_80%_-10%,rgba(255,70,20,0.25),transparent),radial-gradient(600px_400px_at_10%_10%,rgba(250,120,255,0.18),transparent)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Featured Collection</h2>
            <p className="text-neutral-300 mt-2">Signature drops engineered for the streets.</p>
          </div>
          <button className="hidden sm:inline-flex px-5 py-2.5 rounded-full bg-white text-black font-semibold hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] transition">Explore More</button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-neutral-900/60 border border-white/10"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-neutral-300">{p.price}</div>
                </div>
                <button className="px-4 py-2 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition">View</button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <button className="px-5 py-2.5 rounded-full bg-white text-black font-semibold">Explore More</button>
        </div>
      </div>
    </section>
  )
}
