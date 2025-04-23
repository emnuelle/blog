import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPosts } from '../utils/getPosts';
import { marked } from 'marked';
import { PostType } from '../types/Post'; 

function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    getPosts().then((posts) => {
      const found = posts.find((p) => p.slug === slug);
      setPost(found || null);
    });
  }, [slug]);

  if (!post) return <p>Carregando...</p>;

  return (
    <main style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem' }}>
      <h1>{post.titulo}</h1>
      <p><em>{post.data}</em></p>
      <img src={post.imagem} alt={post.titulo} style={{ maxWidth: '100%' }} />
      <div dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
    </main>
  );
}

export default Post;
