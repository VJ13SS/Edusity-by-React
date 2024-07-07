import './App.css'
import MainImg from './Components/mainImg.jsx'
import Nav from './Components/nav.jsx'
import Hero from './Components/hero.jsx'
import Programs from './Components/programs.jsx'
import About from './Components/About.jsx'
import Campus from './Components/Campus.jsx'
import Testimonials from './Components/Testimonials.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'

export default function App() {
  return (
    <main>
      <Nav />
      <MainImg />
      <Hero />
      <Programs />
      <About />
      <Campus/>
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
