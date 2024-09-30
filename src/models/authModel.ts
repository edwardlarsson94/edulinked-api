import { users } from "../db/userDb";


export const findUserByEmail = async (email: string): Promise<any | null> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
  
      const user = users.find((user) => user.email === email);
      
      if (!user) {
        return null;
      }
  
      return user;
    } catch (error) {
      throw new Error('Error en la consulta de usuario');
    }
};