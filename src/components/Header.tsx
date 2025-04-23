import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="blog-header">
        <img src="../../public/logo-sbg.png" alt="Logo" />
        <h1>Morcegos Contra o Fascismo</h1>
        <p>A noite é abrigo para quem pensa, sente e resiste.</p>

        <br></br>

      <nav className="blog-nav">
        <Link to="/">Início</Link>
        <Link to="/sobre">Quem Somos</Link>
      </nav>
    </header>
  );
}

export default Header;
