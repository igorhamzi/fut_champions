import { Request, Response } from 'express';
import LeaderboardsService from '../service/LeaderboardsService';

class LeaderboardsController {
  private leaderboardsService: LeaderboardsService;
  constructor() {
    this.leaderboardsService = new LeaderboardsService();
  }

  public getRankingTeamHome = async (_req: Request, res: Response) => {
    const leaderboardHome = await this.leaderboardsService.getRankingTeamHome();
    res.status(200).json(leaderboardHome);
  };

  public getRankingTeamAway = async (_req: Request, res: Response) => {
    const leaderboardAway = await this.leaderboardsService.getRankingTeamAway();
    res.status(200).json(leaderboardAway);
  };
}

export default LeaderboardsController;
