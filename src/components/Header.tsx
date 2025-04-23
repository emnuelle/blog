import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="blog-header">
      <Link to="/">
        <img src="/logo-sbg.png" alt="Logo Morcegos" />
      </Link>

      <h1>Morcegos Contra o Fascismo</h1>
      <p className="blog-subtitle">
        A noite é abrigo para quem pensa, sente e resiste.
      </p>

      <nav className="blog-nav">
        <Link to="/">Início</Link>
        <Link to="/artigos">Artigos</Link>
        <Link to="/sobre">Quem Somos</Link>
      </nav>

    </header>
  );
}

export default Header;
