import { Request, Response } from 'express';
import MatchesService from '../service/MatchesService';

class MatchesController {
  private matchesService: MatchesService;
  constructor() {
    this.matchesService = new MatchesService();
  }

  public getAllMatches = async (_req: Request, res: Response) => {
    const matches = await this.matchesService.getAllMatches();
    return res.status(200).json(matches);
  };

  public createMatch = async (req: Request, res: Response) => {
    const newMatche = await this.matchesService.createMatch(req.body);
    return res.status(201).json(newMatche);
  };

  public updateInProgress = async (req: Request, res: Response) => {
    await this.matchesService.updateInProgress(Number(req.params.id));
    return res.status(200).json({ message: 'Finished' });
  };
}

export default MatchesController;
