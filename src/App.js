import './App.css';
import {useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills/Skills.js'
import Carousel from './components/Skills/Carousel/Carousel.js';
import Education from './components/Education';
import Experience from './components/Experience/Experience.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Projects from './components/Projects/Projects.js';


function App() {
    useEffect(() => {
      document.title = 'Antonio Taseski';
      AOS.init();
    }, []);
  return (
    
    <Router>
      <div className="bg-dark-500">
      {/* Navbar */}
      <Navbar />

        <div className="pt-[80px] px-6 lg:px-20 xl:px-36">
          <section id="Home">
            <Home/>
          </section>
          <section id="Skills">
            <Skills/>
          </section>
          <section id="Experience">
            <Experience/>
          </section>
          <section id="Projects">
            <Projects/>
          </section>

          <section id="Education">
              <Education/>
          </section>




          
        </div>
      
      </div>
    </Router>
  );
}

export default App;
