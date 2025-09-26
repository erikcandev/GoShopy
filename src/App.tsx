import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import Home from './pages/Home';
import Services from './pages/Services';

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
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} GoShopy. Feito para portfólio.</p>
        <div className="footer-links">
          <a href="#">Termos de Serviço</a>
          <a href="#">Política de Privacidade</a>
        </div>
      </div>
    </footer>
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
