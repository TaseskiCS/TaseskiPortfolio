import './App.css';
import {useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Skills from './components/Skills/Skills.jsx'
import Education from './components/Education.jsx';
import Experience from './components/Experience/Experience.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Projects from './components/Projects/Projects.jsx';


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
