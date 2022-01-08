import Navbar from './components/Navbar/Navbar'
import Menu from './components/Menu/Menu'
import Intro from './components/Intro/Intro'
import Portfolio from './components/Portfolio/Portfolio'
import Works from './components/Works/Works'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import './App.scss'
import {useState} from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className = "app">
      <Navbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
