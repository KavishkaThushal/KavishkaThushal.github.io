import "./app.scss"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"

import Hero from "./components/Hero/Hero"
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Navbar from "./components/Navbar/Navbar"
import Parallax from "./components/Parallax/Parallax"
import Portfolio from "./components/Portfolio/Portfolio"
import Skills from "./components/Skills/Skills"
function App() {

  return (
    <div>
      
      <section id="Homepage">
        <Navbar/>
        <Hero/>
      </section>
      <section id="about" >
        <About/>
      </section>
      <section id="skills" >
        <Parallax type='skills'/>
      </section>
      <section style={{height:'160vh'}}>
        <Skills/>
      </section>
      <section id="projects">
      <Parallax type='project'/>
      </section>
      <Portfolio/>
      <section id="contact">
        <Contact/>
      </section>
      <ToastContainer/>
    </div>
    
  )
}

export default App
