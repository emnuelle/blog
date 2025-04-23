import matter from 'gray-matter';
import { PostType } from '../types/Post';

const postModules = import.meta.glob('../posts/*.md', { as: 'raw' });

export async function getPosts(): Promise<PostType[]> {
  const posts: PostType[] = [];

  for (const path in postModules) {
    const slug = path.split('/').pop()?.replace('.md', '');
    const raw = await postModules[path]();
    const { data, content } = matter(raw);

    // Corrigir aqui: garantir todos os campos obrigatórios
    posts.push({
      slug: slug || '',
      titulo: data.titulo || '',
      data: data.data || '',
      resumo: data.resumo || '',
      imagem: data.imagem || '',
      galeria: data.galeria || [],
      content: content || ''
    });
  }

  return posts.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
}
