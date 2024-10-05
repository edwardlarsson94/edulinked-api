import { Router } from 'express';
import { getAllPost } from '../controllers/postController';


const postRouter = Router();

postRouter.post('/get_all_post', getAllPost);

export default postRouter;
