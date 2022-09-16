import TeamModel from '../database/models/team';
import MatchesModel from '../database/models/match';
import { ITeamHome } from '../interfaces/ITeamHome';
import rankingTeamHome from '../helpers/TeamHomeLeaderboard/RankingTeamHome';
import Ranking from '../utils/leaderboardRanking';

class LeaderboardsService {
  public getRankingTeamHome = async () => {
    const matchesFineshed = await TeamModel.findAll({
      include: [{ model: MatchesModel, as: 'homeTeam', where: { inProgress: false } }],
    }) as unknown as ITeamHome[];

    const ranking = matchesFineshed.map(rankingTeamHome);

    const leaderboard = ranking.sort(Ranking);

    return leaderboard;
  };
}

export default LeaderboardsService;
