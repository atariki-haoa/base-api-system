/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';

const getAll = (model: any) => async (req: Request, res: Response) => {
  try {
    const items = await model.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: `Error retrieving ${model.name}s`, error });
  }
};

const getById = (model: any) => async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const item = await model.findByPk(id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: `${model.name} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: `Error retrieving ${model.name}`, error });
  }
};

const create = (model: any) => async (req: Request, res: Response) => {
  try {
    const item = await model.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: `Error creating ${model.name}`, error });
  }
};

const update = (model: any) => async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const [updated] = await model.update(req.body, { where: { id } });
    if (updated) {
      const updatedItem = await model.findByPk(id);
      res.json(updatedItem);
    } else {
      res.status(404).json({ message: `${model.name} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: `Error updating ${model.name}`, error });
  }
};

const remove = (model: any) => async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleted = await model.destroy({ where: { id } });
    if (deleted) {
      res.status(204).send('Deleted');
    } else {
      res.status(404).json({ message: `${model.name} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: `Error deleting ${model.name}`, error });
  }
};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};
