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

  // export default class LeaderBoardControllers {
  //   static async GetLeaderBoard(_req: Request, res: Response) {
  //     const teams = await LeaderBoardService.getLeaderBoard();
  //     res.status(200).json(teams);
  //   }
}

export default LeaderboardsController;
