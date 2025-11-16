import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1800)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
              className="text-center"
            >
              <div className="text-[52px] sm:text-7xl font-extrabold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-orange-400 to-yellow-400 drop-shadow-[0_0_25px_rgba(255,90,31,0.45)]">
                  TEEQUILA
                </span>
              </div>
              <div className="mt-2 text-xs sm:text-sm text-neutral-300">Wear The Vibe.</div>
            </motion.div>

            <motion.div
              className="mt-8 h-1.5 w-56 overflow-hidden rounded-full bg-neutral-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="h-full w-1/3 rounded-full bg-gradient-to-r from-fuchsia-500 via-rose-500 to-amber-400"
                initial={{ x: '-100%' }}
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
