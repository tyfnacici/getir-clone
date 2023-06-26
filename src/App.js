import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"
import Categories from "./pages/Categories"
import Promotions from "./pages/Promotions"
import Favorites from "./pages/Favorites"
import Cards from "./pages/Cards"
import Footer from "./pages/Footer"

function App() {
  return (
    <div className="w-min-full flex flex-col h-screen relative bg-white">
      <Navbar />
      <div>
        <Hero />
        <Categories />
        <Promotions />
        <Favorites />
        <Cards />
        <Footer />
      </div>
    </div>
  )
}

export default App
