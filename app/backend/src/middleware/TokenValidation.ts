import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

const TokenValidation = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  try {
    if (!token) {
      return res.status(400).json({ message: 'token not found' });
    }
    const verifyToken = jwt.verify(token as string, process.env.JWT_SECRET as string);
    res.locals.data = verifyToken;
    next();
  } catch {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default TokenValidation;
