import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../../models/user';
import { JWT_SECRET } from '../../config/app';
import { AuthDTO, RegisterDTO } from './auth.dto';
import Role from '../../models/role';
import Producer from '../../models/producer';

const generateToken = (user: AuthDTO) => {
  const payload = {
    email: user.email,
    id: user.id,
    roleId: user.roleId,
    producerId: user.producerId,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '24h',
  });

  return token;
};

const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (err) {
    return null;
  }
};

const registerUser = async (userData: RegisterDTO) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userData.password, salt);

  const newUser = await User.create({
    ...userData,
    password: hashedPassword,
  });
  const data = newUser.get();
  delete data?.password;
  return data;
};

const loginUser = async (email: string, password: string) => {
  const user = await User.findOne(
    {
      where:
      {
        email,
      },
      include: [
        {
          model: Role,
          attributes: ['name'],
        },
      ],
    },
  );
  if (!user) throw new Error('User not found');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid password');
  const isProducer = await Producer.findOne(
    {
      where: { userId: user.id },
    },
  );

  const data = user.get();
  delete data?.password;
  data.producerId = isProducer?.id;

  return {
    ...data,
    token: generateToken(data),
  };
};

export {
  generateToken, verifyToken, registerUser, loginUser,
};
