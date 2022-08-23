import { Request, Response } from 'express';
import LoginService from '../service/LoginService';

class LoginController {
  private loginService: LoginService;
  constructor() {
    this.loginService = new LoginService();
  }

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const token = await this.loginService.login(email, password);
      return res.status(200).json(token);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(401).json({ message: error.message });
      }
    }
  };

  public validateLogin = async (req: Request, res: Response) => {
    try {
      const { role } = res.locals.data;
      return res.status(200).json(role);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(401).json({ message: error.message });
      }
    }
  };
}

export default LoginController;
