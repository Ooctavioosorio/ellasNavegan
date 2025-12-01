import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SobreNosotras from './pages/SobreNosotras';
import LaExperiencia from './pages/LaExperiencia';
import Contacto from './pages/Contacto';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nosotras" element={<SobreNosotras />} />
            <Route path="/la-experiencia" element={<LaExperiencia />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
