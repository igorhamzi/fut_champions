import { Router } from 'express';
import MatchesController from '../controller/MatchesController';

const router = Router();
const matchesController = new MatchesController();

router.get('/', matchesController.GetAllMatches);

export default router;
