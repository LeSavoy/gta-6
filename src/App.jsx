import './App.css'
import Cards from './components/Cards'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {

  return (
      <main className="h-screen">
        <body className="bg-[url('./src/assets/backgrand-gta.jpg')] h-svh contain bg-no-repeat bg-cover bg-top">
          
        <Header />
        <Hero />
        <Cards />
        </body>
      </main>
  )


}

export default App
