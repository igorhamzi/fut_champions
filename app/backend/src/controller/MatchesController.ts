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

  // public createMatch = async (req: Request, res: Response) => {
  //   try {
  //     const newMatche = await this.matchesService.createMatch(req.body);
  //     return res.status(201).json(newMatche);
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       return res.status(401).json({ message: error.message });
  //     }
  //   }
  // };

  public updateInProgress = async (req: Request, res: Response) => {
    await this.matchesService.updateInProgress(Number(req.params.id));
    return res.status(200).json({ message: 'Finished' });
  };

  public updateMatchGoals = async (req: Request, res: Response) => {
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this.matchesService.updateMatchGoals(Number(req.params.id), homeTeamGoals, awayTeamGoals);
    return res.status(200).json({ message: 'goals update completed' });
  };
}

export default MatchesController;
