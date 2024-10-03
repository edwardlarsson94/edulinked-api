import { posts } from "../db/publications";

export const getAllPosts = async (): Promise<any | null> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
  
      const post = posts;
      
      if (!post) {
        return null;
      }
  
      return post;
    } catch (error) {
      throw new Error('Error en la consulta de traer publicaciones');
    }
};