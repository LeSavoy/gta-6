import './App.css'
import Announcement from './components/Announcement'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Games from './components/Games'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {

  return (
      <main className="h-screen">
        <body className="bg-[url('./src/assets/backgrand-gta.jpg')] h-svh contain bg-no-repeat bg-cover bg-top">
          
        <Header />
        <Hero />
        <Cards />
        <Announcement />
        <Games />
        <Footer />
        </body>
      </main>
  )


}

export default App
