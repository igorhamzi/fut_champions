import { Request, Response } from 'express';
import LeaderboardsService from '../service/LeaderboardsService';

class LeaderboardsController {
  private leaderboardsService: LeaderboardsService;
  constructor() {
    this.leaderboardsService = new LeaderboardsService();
  }

  public getRankingTeamHome = async (_req: Request, res: Response) => {
    const leaderboard = await this.leaderboardsService.getRankingTeamHome();
    res.status(200).json(leaderboard);
  };
}

export default LeaderboardsController;
