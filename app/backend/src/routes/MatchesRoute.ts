import { Router } from 'express';
import MatchesController from '../controller/MatchesController';
import tokenValidation from '../middleware/TokenValidation';
import { validateEqualTeams, validateExistsTeams } from '../middleware/MatchesValidation';

const router = Router();
const matchesController = new MatchesController();

router.get('/', matchesController.getAllMatches);
router.post(
  '/',
  tokenValidation,
  validateEqualTeams,
  validateExistsTeams,
  matchesController.createMatch,
);
router.patch('/:id/finish', tokenValidation, matchesController.updateInProgress);
router.patch('/:id', matchesController.updateMatchGoals);

export default router;
