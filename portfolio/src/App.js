import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
