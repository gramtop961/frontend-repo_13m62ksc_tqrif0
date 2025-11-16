import { motion } from 'framer-motion'

const photos = [
  'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542282811-943ef1a977c9?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975922284-8bdf0a2f3f5f?q=80&w=1600&auto=format&fit=crop',
]

export default function Lookbook() {
  return (
    <section id="lookbook" className="relative bg-black text-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Lookbook</h2>
          <p className="text-neutral-300 mt-2">Visual moodboard from the streets.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-6">
            <Card src={photos[0]} />
            <Card src={photos[1]} />
          </div>
          <div className="space-y-6">
            <Card src={photos[2]} />
            <Card src={photos[3]} />
          </div>
          <div className="space-y-6 hidden md:block">
            <Card src={photos[0]} />
            <Card src={photos[2]} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Card({ src }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-2xl border border-white/10"
    >
      <div className="aspect-[3/4]">
        <img src={src} alt="look" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
      </div>
    </motion.div>
  )
}
