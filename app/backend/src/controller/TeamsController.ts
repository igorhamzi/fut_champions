import { Request, Response } from 'express';
import TeamsService from '../service/TeamsService';

class TeamsController {
  private teamService: TeamsService;
  constructor() {
    this.teamService = new TeamsService();
  }

  public GetAllController = async (_req: Request, res: Response) => {
    const teams = await this.teamService.getAllService();
    return res.status(200).json(teams);
  };
}

export default TeamsController;
