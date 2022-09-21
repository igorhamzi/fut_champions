import TeamModel from '../database/models/team';
import MatchesModel from '../database/models/match';
import { ITeamHome } from '../interfaces/ITeamHome';
import RankingTeamHome from '../helpers/TeamHomeLeaderboard/RankingTeamHome';
import Ranking from '../utils/leaderboardRanking';
import { ITeamAway } from '../interfaces/ITeamAway';
import rankingTeamAway from '../helpers/TeamAwayLeaderboard/RankingTeamAway';
import { ILeaderboard } from '../interfaces/ILeaderboard';
import Leaderboard from '../helpers/Leaderboard/Leaderboard';

class LeaderboardsService {
  public getLeaderboard = async (): Promise<ILeaderboard[]> => {
    const matchesFineshedGeneral = await TeamModel.findAll({
      include: [
        { model: MatchesModel,
          as: 'homeTeam',
          where:
          { inProgress: false } },

        { model: MatchesModel,
          as: 'awayTeam',
          where:
          { inProgress: false } },
      ],
    });

    const LeaderboardAll = matchesFineshedGeneral.map(Leaderboard).sort(Ranking);

    return LeaderboardAll;
  };

  public getLeaderboardTeamAway = async () => {
    const matchesFineshed = await TeamModel.findAll({
      include: [{
        model: MatchesModel,
        as: 'awayTeam',
        where: { inProgress: false } }],
    }) as unknown as ITeamAway[];

    const leaderboardTeamAway = matchesFineshed.map(rankingTeamAway).sort(Ranking);

    return leaderboardTeamAway;
  };

  public getLeaderboardTeamHome = async () => {
    const matchesFineshed = await TeamModel.findAll({
      include: [
        { model: MatchesModel,
          as: 'homeTeam',
          where: { inProgress: false } }],
    }) as unknown as ITeamHome[];

    const leaderboardTeamHome = matchesFineshed.map(RankingTeamHome).sort(Ranking);

    return leaderboardTeamHome;
  };
}

export default LeaderboardsService;
