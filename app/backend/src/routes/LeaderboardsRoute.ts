import { Router } from 'express';
import LeaderboardsController from '../controller/LeaderboardsController';

const router = Router();
const leaderboardsController = new LeaderboardsController();

router.get('/home', leaderboardsController.getRankingTeamHome);

export default router;
