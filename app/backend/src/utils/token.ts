import * as jwt from 'jsonwebtoken';

const createToken = (email: string, role: string) => {
  const token = jwt.sign(
    { email, role },
    process.env.JWT_SECRET as string,
    {
      expiresIn: '7d',
      algorithm: 'HS256',
    },
  );
  return token;
};

export default createToken;
