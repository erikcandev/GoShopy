import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import DisclaimerModal from './components/DisclaimerModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-container">
        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
        <Link to="/" className="logo">Go<span>Shopy</span></Link>
        <div className="spacer"></div>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Início</Link></li>
            <li><Link to="/servicos" onClick={() => setIsMenuOpen(false)}>Serviços</Link></li>
            <li><Link to="/precos" onClick={() => setIsMenuOpen(false)}>Preços</Link></li>
            <li><Link to="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link></li>
            <li><Link to="/contato" onClick={() => setIsMenuOpen(false)}>Contato</Link></li>
          </ul>
        </nav>
        <div 
          className={`nav-overlay ${isMenuOpen ? 'visible' : ''}`}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      </div>
    </header>
  );
};

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <footer>
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Erik. Feito para portfólio</p>
          <div className="footer-links">
            <a href="#" onClick={handleOpenModal}>Termos de Serviço</a>
            <a href="#" onClick={handleOpenModal}>Política de Privacidade</a>
          </div>
        </div>
      </footer>
      <DisclaimerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/precos" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
