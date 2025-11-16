import { useEffect, useRef } from 'react'
import { Star } from 'lucide-react'

const data = [
  { name: 'Ari', text: 'The quality is insane. The tee keeps its shape even after many washes.', rating: 5 },
  { name: 'Nova', text: 'Color palette + fit = perfect. Compliments every time.', rating: 5 },
  { name: 'Kai', text: 'Heavyweight hoodie with buttery interior — instant favorite.', rating: 5 },
]

export default function Reviews() {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const total = track.scrollWidth - track.clientWidth

    let raf
    const step = () => {
      track.scrollLeft += 0.7
      if (track.scrollLeft >= total) track.scrollLeft = 0
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section id="reviews" className="relative bg-black text-white py-28">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_0%,rgba(255,255,255,0.08),transparent)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">What people say</h2>
        </div>
        <div ref={trackRef} className="flex gap-6 overflow-x-auto no-scrollbar pb-2">
          {data.concat(data).map((r, i) => (
            <div key={i} className="min-w-[300px] max-w-[320px] bg-neutral-900/60 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {Array.from({ length: r.rating }).map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-neutral-200">“{r.text}”</p>
              <div className="mt-3 text-sm text-neutral-400">— {r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
