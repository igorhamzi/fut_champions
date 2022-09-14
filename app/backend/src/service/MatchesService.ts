import MatchesModel from '../database/models/match';
import TeamModel from '../database/models/team';
import { IMatches } from '../interfaces/IMatches';

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
    const newMatche = await MatchesModel.create({ ...match, inProgress: true });
    return newMatche;
  };

  public updateInProgress = async (id: number) => {
    await MatchesModel.update(
      { inProgress: false },
      { where: { id } },
    );
  };

  public updateMatchGoals = async (id: number, homeTeamGoals: number, awayTeamGoals: number) => {
    await MatchesModel.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    ) as unknown as IMatches;
  };
}

export default MatchesService;
