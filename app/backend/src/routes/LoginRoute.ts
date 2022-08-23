import { Router } from 'express';
import LoginController from '../controller/LoginController';
import loginValidation from '../middleware/LoginValidation';
import tokenValidation from '../middleware/TokenValidation';

const router = Router();
const loginController = new LoginController();

router.post('/', loginValidation, loginController.login);
router.get('/validate', tokenValidation, loginController.validateLogin);

export default router;
