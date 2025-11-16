import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

      <div className="relative z-10 h-[100svh] max-w-7xl mx-auto px-6 flex flex-col items-start justify-end pb-24">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-[12vw] leading-none font-extrabold tracking-tight drop-shadow-[0_4px_40px_rgba(255,120,60,0.45)]"
        >
          TEEQUILA
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-xl sm:text-2xl text-neutral-200"
        >
          Wear The Vibe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="text-xs uppercase tracking-widest text-neutral-300">Scroll</div>
          <div className="h-9 w-[1px] bg-gradient-to-b from-transparent via-white/80 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  )
}
