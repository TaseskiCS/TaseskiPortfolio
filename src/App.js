import './App.css';
import {useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Hiro from './components/Hiro';
import Skills from './components/Skills'
import Honors from './components/Honors';
import Certs from './components/Certs';
import Footer from './components/Footer';
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
          <Route path ="/Honors" element ={<Honors/>}/>
          <Route path ="/Certs" element ={<Certs/>}/> 
          {/* catches any false route and send back to home page */}
          <Route path="*" element={<Hiro/>}/> 
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
