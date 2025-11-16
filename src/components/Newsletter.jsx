import { motion } from 'framer-motion'

export default function Newsletter() {
  return (
    <section id="newsletter" className="relative bg-black text-white py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute -inset-40 opacity-40" style={{ background: 'radial-gradient(900px 900px at 50% 120%, rgba(255,80,20,0.35), transparent), radial-gradient(700px 600px at 0% 0%, rgba(250,120,255,0.2), transparent)' }} />
        <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.15) 1px, transparent 0), radial-gradient(1px 1px at 80% 60%, rgba(255,255,255,0.12) 1px, transparent 0)', backgroundSize: '120px 120px' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.h3 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-3xl sm:text-5xl font-extrabold tracking-tight">Join the TEEQUILA tribe</motion.h3>
        <p className="text-neutral-300 mt-3">Drops, invites, and early access — straight to your inbox.</p>

        <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center">
          <input type="email" placeholder="you@domain.com" className="w-full sm:w-96 px-4 py-3 rounded-xl bg-white/10 border border-white/15 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-rose-400" />
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-amber-400 text-black font-semibold shadow-[0_0_30px_rgba(255,120,60,0.45)] hover:opacity-90 transition">Subscribe</button>
        </motion.form>
      </div>
    </section>
  )
}
