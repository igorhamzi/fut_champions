import TeamModel from '../database/models/team';
import MatchesModel from '../database/models/match';
import { ITeamHome } from '../interfaces/ITeamHome';
import RankingTeamHome from '../helpers/TeamHomeLeaderboard/RankingTeamHome';
import Ranking from '../utils/leaderboardRanking';
import { ITeamAway } from '../interfaces/ITeamAway';
import rankingTeamAway from '../helpers/TeamAwayLeaderboard/RankingTeamAway';

class LeaderboardsService {
  public getRankingTeamHome = async () => {
    const matchesFineshed = await TeamModel.findAll({
      include: [{ model: MatchesModel, as: 'homeTeam', where: { inProgress: false } }],
    }) as unknown as ITeamHome[];

    const ranking = matchesFineshed.map(RankingTeamHome);

    const leaderboardHome = ranking.sort(Ranking);

    return leaderboardHome;
  };

  public getRankingTeamAway = async () => {
    const matchesFineshed = await TeamModel.findAll({
      include: [{ model: MatchesModel, as: 'awayTeam', where: { inProgress: false } }],
    }) as unknown as ITeamAway[];

    const ranking = matchesFineshed.map(rankingTeamAway);

    const leaderboardAway = ranking.sort(Ranking);

    return leaderboardAway;
  };
}

export default LeaderboardsService;
