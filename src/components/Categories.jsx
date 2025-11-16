import { motion } from 'framer-motion'

const cats = [
  { name: 'T-shirts', img: 'https://images.unsplash.com/photo-1520975922284-8bdf0a2f3f5f?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Hoodies', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Oversized fits', img: 'https://images.unsplash.com/photo-1542282811-943ef1a977c9?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Limited Editions', img: 'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1600&auto=format&fit=crop' },
]

export default function Categories() {
  return (
    <section id="categories" className="relative bg-black text-white py-28">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_100%,rgba(255,90,20,0.2),transparent)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Shop by Category</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cats.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <div className="aspect-[4/5]">
                <img src={c.img} alt={c.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="font-semibold">{c.name}</div>
                <button className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition">Explore</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
