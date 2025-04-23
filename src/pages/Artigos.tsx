import { useEffect, useState } from 'react';
import { getPosts } from '../utils/getPosts';
import { PostType } from '../types/Post';
import { Link } from 'react-router-dom';

function Artigos() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [filtroTag, setFiltroTag] = useState<string | null>(null);
  const [ordem, setOrdem] = useState<'recentes' | 'antigos'>('recentes');
  const [busca, setBusca] = useState('');

  useEffect(() => {
    getPosts().then((dados) => {
      console.log("POSTS CARREGADOS:", dados);
      setPosts(dados);
    });
  }, []);

  const todasTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  const postsFiltrados = posts
    .filter(post =>
      (!filtroTag || post.tags.includes(filtroTag)) &&
      (post.titulo.toLowerCase().includes(busca.toLowerCase()) ||
       post.resumo.toLowerCase().includes(busca.toLowerCase()))
    )
    .sort((a, b) =>
      ordem === 'recentes'
        ? new Date(b.data).getTime() - new Date(a.data).getTime()
        : new Date(a.data).getTime() - new Date(b.data).getTime()
    );

  return (
    <main className="blog-main" style={{ backgroundColor: 'var(--bg)' }}>
      <h2>Todos os Artigos</h2>

      <input
        type="text"
        placeholder="Buscar por título ou conteúdo..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />

      <div style={{ marginBottom: '1rem' }}>
        <strong>Filtrar por tag:</strong>{' '}
        <button onClick={() => setFiltroTag(null)}>Todas</button>
        {todasTags.map(tag => (
          <button
            key={tag}
            onClick={() => setFiltroTag(tag)}
            style={{
              margin: '0.25rem',
              padding: '0.25rem 0.5rem',
              background: filtroTag === tag ? 'var(--accent)' : '#222',
              color: 'var(--text)',
              border: '1px solid var(--accent)',
              cursor: 'pointer',
              borderRadius: '4px'
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <strong>Ordenar por:</strong>{' '}
        <select
          value={ordem}
          onChange={(e) => setOrdem(e.target.value as 'recentes' | 'antigos')}
          style={{ marginLeft: '0.5rem', padding: '0.3rem' }}
        >
          <option value="recentes">Mais recentes</option>
          <option value="antigos">Mais antigos</option>
        </select>
      </div>

      {postsFiltrados.length === 0 ? (
        <p>Nenhum artigo encontrado.</p>
      ) : (
        postsFiltrados.map(post => (
          <article key={post.slug} className="blog-post">
            <h3>{post.titulo}</h3>
            <p><em>{post.data}</em></p>
            <p>{post.resumo}</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Tags: {post.tags.map(tag => `#${tag}`).join(' ')}
            </p>
            <Link to={`/post/${post.slug}`}>Ler mais →</Link>
          </article>
        ))
      )}
    </main>
  );
}

export default Artigos;
