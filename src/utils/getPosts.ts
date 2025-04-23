import matter from 'gray-matter';
import { PostType } from '../types/Post';

// Corrigir caminho para garantir que funcione em produção e dev
const postModules = import.meta.glob('../posts/*.md', { as: 'raw' });

export async function getPosts(): Promise<PostType[]> {
  const posts: PostType[] = [];

  for (const path in postModules) {
    const slug = path.split('/').pop()?.replace('.md', '') || 'sem-slug';

    try {
      const raw = await postModules[path]();
      const { data, content } = matter(raw);

      posts.push({
        slug,
        titulo: data.titulo || 'Sem título',
        data: data.data || '2000-01-01',
        resumo: data.resumo || '',
        imagem: data.imagem || '',
        galeria: data.galeria || [],
        content: content || '',
        tags: data.tags || [],
      });

    } catch (err) {
      console.error(`Erro ao processar post ${slug}:`, err);
    }
  }

  console.log("✔️ POSTS CARREGADOS:", posts);
  return posts.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
}
