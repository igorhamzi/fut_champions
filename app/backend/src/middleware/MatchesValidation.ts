import { Request, Response, NextFunction } from 'express';
import TeamsModel from '../database/models/team';

export const validateEqualTeams = (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;

  if (homeTeam === awayTeam) {
    return res.status(401).json({
      message: 'It is not possible to create a match with two equal teams',
    });
  }

  next();
};

export const validateExistsTeams = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;

  const findHomeTeam = await TeamsModel.findOne({ where: { id: homeTeam } });
  const findAwayTeam = await TeamsModel.findOne({ where: { id: awayTeam } });

  if (!findHomeTeam || !findAwayTeam) {
    return res.status(404).json({
      message: 'There is no team with such id!',
    });
  }

  next();
};
