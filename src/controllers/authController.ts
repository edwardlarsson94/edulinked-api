import { Request, Response } from 'express';
import { findUserByEmail } from '../models/authModel';

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        status: false,
        data: null,
        errors: {
          code: "AUT-0001",
          message: "Email y contraseña son requeridos"
        }
      });
      return;
    }

    const user = await findUserByEmail(email);

    if (user && user.password === password) {
      res.json({
        status: true,
        data: {
          id: user.id,
          role: user.role,
        },
        errors: null
      });
    } else {
      res.status(401).json({
        status: false,
        data: null,
        errors: {
          code: "AUT-0002",
          message: "Email o contraseña incorrectos"
        }
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      data: null,
      errors: {
        code: "AUT-0003",
        message: "Error interno del servidor"
      }
    });
  }
};
