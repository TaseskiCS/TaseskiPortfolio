import './App.css';
import {useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Hiro from './components/Hiro';
import Skills from './components/Skills'
import Education from './components/Education';
import Experience from './components/Experience';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
    useEffect(() => {
      document.title = 'Antonio Taseski';
      AOS.init();
    }, []);
  return (
    <Router>
      <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
        <Navbar/>
        <Routes>
          <Route path ="/" element ={<Hiro/>}/>
          <Route path ="/Skills" element ={<Skills/>}/>
          <Route path ="/Education" element ={<Education/>}/>
          <Route path ="/Experience" element ={<Experience/>}/> 
          {/* catches any false route and send back to home page */}
          <Route path="*" element={<Hiro/>}/> 
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
