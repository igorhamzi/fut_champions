import { Router } from 'express';
import MatchesController from '../controller/MatchesController';
import tokenValidation from '../middleware/TokenValidation';

const router = Router();
const matchesController = new MatchesController();

router.get('/', matchesController.getAllMatches);
router.post('/', tokenValidation, matchesController.createMatch);
router.patch('/:id/finish', tokenValidation, matchesController.updateInProgress);

export default router;
