import * as jwt from 'jsonwebtoken';

const createToken = (email: string) => {
  const token = jwt.sign(
    { email },
    process.env.JWT_SECRET as string,
    {
      expiresIn: '1d',
      algorithm: 'HS256',
    },
  );
  return token;
};

export default createToken;
