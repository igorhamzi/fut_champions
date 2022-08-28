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

  public createMatch = async (data: IMatches) => {
    const newMatche = await MatchesModel.create({ ...data, inProgress: true });
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
