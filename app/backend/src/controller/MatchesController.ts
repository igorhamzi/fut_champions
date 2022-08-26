import { Request, Response } from 'express';
import MatchesService from '../service/MatchesService';

class MatchesController {
  private matchesService: MatchesService;
  constructor() {
    this.matchesService = new MatchesService();
  }

  public GetAllMatches = async (_req: Request, res: Response) => {
    const matches = await this.matchesService.getAllMatches();
    return res.status(200).json(matches);
  };
}

export default MatchesController;
