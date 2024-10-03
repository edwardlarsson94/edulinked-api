import { Request, Response } from 'express';
import { getAllPosts } from '../models/postModel';

export const getAllPost = async (req: Request, res: Response): Promise<void> => {
  try {

    const post = await getAllPosts();

    if (post) {
      res.json({
        status: true,
        data: post,
        errors: null
      });
    } else {
      res.status(401).json({
        status: false,
        data: null,
        errors: {
          code: "GAP-0001",
          message: "No existen publicaciones"
        }
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      data: null,
      errors: {
        code: "GAP-0002",
        message: "Error en el servidor al traer publicaciones"
      }
    });
  }
};
