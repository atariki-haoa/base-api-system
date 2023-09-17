import { UserDTO } from './user.dto';
import User from '../../models/user';

const getUser = async (id: number): Promise<User | null> => {
  const user = User.findOne({ where: { id } });
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

const getUserById = async (id: number): Promise<UserDTO | null> => {
  const user = await getUser(id);
  return user;
};

const updateUser = async (id: number, userData: UserDTO): Promise<UserDTO | null> => {
  const user = await getUser(id);
  await user?.update(userData);
  return user;
};

const removeUser = async (id: number): Promise<void> => {
  const user = await getUser(id);
  user?.destroy();
};

export {
  getUserById,
  updateUser,
  removeUser,
};
