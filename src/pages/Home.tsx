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


    </>
  );
}

export default Home;
