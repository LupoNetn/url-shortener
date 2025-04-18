import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import ShortenForm from '../components/ShortenForm'

const App = () => {
  return (
    <>
      <Navbar />
      <header>
        <Hero />
      </header>
      <section>
        <ShortenForm />
        <Features />
      </section>
      <aside>
        <Cta />
      </aside>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App