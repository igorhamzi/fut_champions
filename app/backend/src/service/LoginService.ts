import * as Bcrypt from 'bcryptjs';
import User from '../database/models/user';
import createToken from '../utils/token';

class LoginService {
  public login = async (email: string, password: string) => {
    const verifyEmail = await User.findOne({ where: { email } });
    if (!verifyEmail) {
      throw new Error('Incorrect email or password');
    }
    const passwordHash = Bcrypt.compareSync(password, verifyEmail.password);
    if (!passwordHash) {
      throw new Error('Incorrect email or password');
    }
    const generateToken = createToken(email, verifyEmail.role);
    return { token: generateToken };
  };
}

export default LoginService;
