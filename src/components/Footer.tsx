function Footer() {
    return (
      <footer className="blog-footer">
        <p>© {new Date().getFullYear()} Morcegos Contra o Fascismo</p>
        <p>
          Nos siga:
          <a href="https://instagram.com/..." target="_blank" rel="noopener noreferrer">Instagram</a> |
          <a href="https://twitter.com/..." target="_blank" rel="noopener noreferrer">Twitter</a>
        </p>
      </footer>
    );
  }
  
  export default Footer;
  