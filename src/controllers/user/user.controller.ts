import { Request, Response } from 'express';
import { updateUser, removeUser, getUserById } from './user.service';

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await getUserById(parseInt(req.params.id, 10));
    res.json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error?.message);
    } else console.error('Se ha producido un error desconocido:', error);
  }
};

export const patchUpdateUser = async (req: Request, res: Response) => {
  try {
    const user = await updateUser(parseInt(req.params.id, 10), req.body);
    res.json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error?.message);
    } else console.error('Se ha producido un error desconocido:', error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await removeUser(parseInt(req.params.id, 10));
    res.status(204).send();
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).send(error?.message);
    } else console.error('Se ha producido un error desconocido:', error);
  }
};
