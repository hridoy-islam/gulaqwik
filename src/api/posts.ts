const base = import.meta.env.PUBLIC_API_URL + 'blog';

export const getPosts = async (): Promise<PostPaginated> => {
  return await (await fetch(base + '?skip=0&limit=100&published=true&sort=createdAt%20DESC')).json();
}

export const getPostbySlug = async (slug: string): Promise<PostPaginated> => {
    return await (await fetch(base + `?where={"published":"true","slug":"${slug}"}`)).json();
  }

export interface Post {
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    id: string;
    title: string;
    slug: string;
    seoTitle: string;
    seoDescription: string;
    published: boolean;
    shortDescription: string;
    previewImage: string;
    bannerOption: string;
    description: string;
}

export interface PostPaginated {
    totalCount: number;
    results: Post[];
  }