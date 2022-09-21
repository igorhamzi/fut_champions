import { Request, Response } from 'express';
import LeaderboardsService from '../service/LeaderboardsService';

class LeaderboardsController {
  private leaderboardsService: LeaderboardsService;
  constructor() {
    this.leaderboardsService = new LeaderboardsService();
  }

  public getLeaderboard = async (_req: Request, res: Response) => {
    const leaderboard = await this.leaderboardsService.getLeaderboard();
    res.status(200).json(leaderboard);
  };

  public getLeaderboardTeamAway = async (_req: Request, res: Response) => {
    const leaderboardAway = await this.leaderboardsService.getLeaderboardTeamAway();
    res.status(200).json(leaderboardAway);
  };

  public getLeaderboardTeamHome = async (_req: Request, res: Response) => {
    const leaderboardHome = await this.leaderboardsService.getLeaderboardTeamHome();
    res.status(200).json(leaderboardHome);
  };
}

export default LeaderboardsController;
