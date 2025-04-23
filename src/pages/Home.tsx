import { useEffect, useState } from 'react';
import { getPosts } from '../utils/getPosts';
import { Link } from 'react-router-dom';
import { PostType } from '../types/Post';

function Home() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <>
      <header className="blog-header">
        <img src="../../public/logo.png" alt="Logo" />
        <h1>Morcegos Contra o Fascismo</h1>
        <p>🦇 Blog de ideias, resistência e escuridão poética</p>
      </header>

      <main className="blog-main">
        {posts.map((post) => (
          <article key={post.slug} className="blog-post">
            <h2>{post.titulo}</h2>
            <p><em>{post.data}</em></p>
            <p>{post.resumo}</p>
            <Link to={`/post/${post.slug}`}>
              Ler post completo →
            </Link>
          </article>
        ))}
      </main>

      <footer className="blog-footer">
        <p>© {new Date().getFullYear()} Morcegos Contra o Fascismo</p>
        <p>
          Nos siga:
          <a href="https://instagram.com/..." target="_blank">Instagram</a> |
          <a href="https://twitter.com/..." target="_blank">Twitter</a>
        </p>
      </footer>
    </>
  );
}

export default Home;
