import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedCollection from './components/FeaturedCollection'
import BrandStory from './components/BrandStory'
import Categories from './components/Categories'
import Lookbook from './components/Lookbook'
import Reviews from './components/Reviews'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white">
      <Preloader />
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <BrandStory />
      <Categories />
      <Lookbook />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
