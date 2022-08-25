import { Router } from 'express';
import TeamsController from '../controller/TeamsController';

const router = Router();
const teamsController = new TeamsController();

router.get('/', teamsController.GetAllController);

export default router;
