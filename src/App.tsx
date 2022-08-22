
import './App.css';
import FirstContent from './components/content/FirstContent';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero />
     <FirstContent/>
     <Projects/>
     <Footer/>
    </div>
  );
}

export default App;
