import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { LoadingScreen } from './components/LoadingScreen'

export default function Home() {
  return (
    <div className="relative bg-white dark:bg-gray-900 transition-colors duration-300 font-poppins">
      <LoadingScreen />
      <Header />
      <div className="container mx-auto px-4">
        <main className="pt-16">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  )
}

