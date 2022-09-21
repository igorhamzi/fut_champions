import { Router } from 'express';
import LeaderboardsController from '../controller/LeaderboardsController';

const router = Router();
const leaderboardsController = new LeaderboardsController();

router.get('/', leaderboardsController.getLeaderboard);
router.get('/away', leaderboardsController.getLeaderboardTeamAway);
router.get('/home', leaderboardsController.getLeaderboardTeamHome);

export default router;
