import MatchesModel from '../database/models/match';
import TeamModel from '../database/models/team';
import { IMatches } from '../interfaces/IMatches';
import CustomError from '../utils/error';

class MatchesService {
  public getAllMatches = async () => {
    const matches = await MatchesModel.findAll({
      include: [{
        model: TeamModel,
        as: 'teamHome',
        attributes: {
          exclude: ['id'],
        } },
      {
        model: TeamModel,
        as: 'teamAway',
        attributes: {
          exclude: ['id'],
        },
      },
      ],
    });
    return matches;
  };

  public createMatch = async (match: IMatches) => {
    const awayTeam = await TeamModel.findOne({ where: { id: match.awayTeam } });
    const homeTeam = await TeamModel.findOne({ where: { id: match.homeTeam } });

    if (!awayTeam || homeTeam) {
      throw new CustomError(
        404,
        'There is no team with such id!',
      );
    }

    if (match.homeTeam === match.awayTeam) {
      throw new CustomError(
        401,
        'It is not possible to create a match with two equal teams',
      );
    }

    const newMatche = await MatchesModel.create({ ...match, inProgress: true });
    return newMatche;
  };

  public updateInProgress = async (id: number) => {
    await MatchesModel.update(
      { inProgress: false },
      { where: { id } },
    );
  };
}

export default MatchesService;
