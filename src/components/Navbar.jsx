import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-black/40 shadow-lg' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <button onClick={() => go('hero')} className="text-xl font-extrabold tracking-tight text-white">
          TEEQUILA
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm text-neutral-200">
          <button onClick={() => go('collection')} className="hover:text-white transition">Collection</button>
          <button onClick={() => go('story')} className="hover:text-white transition">Story</button>
          <button onClick={() => go('categories')} className="hover:text-white transition">Categories</button>
          <button onClick={() => go('lookbook')} className="hover:text-white transition">Lookbook</button>
          <button onClick={() => go('reviews')} className="hover:text-white transition">Reviews</button>
          <button onClick={() => go('newsletter')} className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition shadow">Join</button>
        </div>
        <button className="md:hidden text-white/90" aria-label="menu"><Menu size={22} /></button>
      </div>
    </div>
  )
}
