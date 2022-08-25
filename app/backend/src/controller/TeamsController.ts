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

  public GetById = async (req: Request, res: Response) => {
    const { params } = req;
    const teamId = await this.teamService.getById(params.id);
    return res.status(200).json(teamId);
  };
}

export default TeamsController;
