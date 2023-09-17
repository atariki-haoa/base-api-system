import { Request, Response } from 'express';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

import { AuthDTO, AuthLoginDTO , RegisterDTO } from './auth.dto';
import { loginUser, registerUser } from './auth.service';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const authData = plainToClass(AuthLoginDTO, req.body);
    const errors = await validate(authData);

    if (errors.length > 0) {
      const messages = errors
        .filter((error) => error.constraints !== undefined)
        .map((error) => Object.values(error.constraints!))
        .join(', ');
      return res.status(400).json({ message: messages });
    }

    const user = await loginUser(email, password);
    return res.status(200).json(user);
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof Error && (error.message === 'User not found' || error.message === 'Invalid password')) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Server error' });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const authData = plainToClass(RegisterDTO, req.body);
    const errors = await validate(authData);

    if (errors.length > 0) {
      const messages = errors
        .filter((error) => error.constraints !== undefined)
        .map((error) => Object.values(error.constraints!))
        .join(', ');
      return res.status(400).json({ message: messages });
    }
    const result = await registerUser(authData);
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Registration failed' });
  }
};
