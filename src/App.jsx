import React from 'react'
import Navbar from './sections/Navbar'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
