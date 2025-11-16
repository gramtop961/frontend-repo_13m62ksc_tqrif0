import { Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xl font-extrabold">TEEQUILA</div>
        <div className="flex items-center gap-6 text-neutral-300">
          <a className="hover:text-white transition" href="#">About</a>
          <a className="hover:text-white transition" href="#">Shipping</a>
          <a className="hover:text-white transition" href="#">Contact</a>
        </div>
        <div className="flex items-center gap-4 text-neutral-300">
          <a className="hover:text-white transition" href="#" aria-label="instagram"><Instagram /></a>
          <a className="hover:text-white transition" href="#" aria-label="twitter"><Twitter /></a>
          <a className="hover:text-white transition" href="#" aria-label="youtube"><Youtube /></a>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-neutral-400">© {new Date().getFullYear()} TEEQUILA. All rights reserved.</div>
    </footer>
  )
}
