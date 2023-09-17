import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { JWT_SECRET } from '../config/app'; // Asegúrate de importar tu secreto desde donde lo hayas definido

const ensureAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(403).send({ message: 'The request has no authorization header' });
    }
    const tokenParts = authHeader.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(403).send({ message: 'Invalid authorization format. Expected format: Bearer <token>' });
    }
    const token = tokenParts[1];
    try {
      const payload: JwtPayload | string = jwt.verify(token, JWT_SECRET);
      req.body.authUser = payload;
      return next();
    } catch (error) {
      const jwtError = error as Error;
      if (jwtError.name === 'TokenExpiredError') {
        return res.status(401).send({ message: 'Token expired' });
      }
      return res.status(404).send({ message: 'Token not valid' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error authenticating request', error });
  }
};

export default ensureAuth;
