import MatchesModel from '../database/models/match';
import Team from '../database/models/team';

class MatchesService {
  public getAllMatches = async () => {
    const matches = await MatchesModel.findAll({
      include: [{
        model: Team,
        as: 'teamHome',
        attributes: {
          exclude: ['id'],
        } },
      {
        model: Team,
        as: 'teamAway',
        attributes: {
          exclude: ['id'],
        },
      },
      ],
    });
    return matches;
  };
}

export default MatchesService;
