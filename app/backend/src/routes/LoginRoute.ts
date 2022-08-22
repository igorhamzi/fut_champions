import { Router } from 'express';
import LoginController from '../controller/LoginController';
import loginValidation from '../middleware/LoginValidation';

const router = Router();
const loginController = new LoginController();

router.post('/', loginValidation, loginController.login);

export default router;
