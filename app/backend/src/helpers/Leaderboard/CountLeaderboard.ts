import rankingTeamAway from '../TeamAwayLeaderboard/RankingTeamAway';
import rankingTeamHome from '../TeamHomeLeaderboard/RankingTeamHome';

const CountLeaderboard = (matches:any) => {
  const teamHome = rankingTeamHome(matches);
  const teamAway = rankingTeamAway(matches);

  const countTotalPoints = Number(teamHome.totalPoints + teamAway.totalPoints);
  const countTotalGames = Number(teamHome.totalGames + teamAway.totalGames);
  const countTotalVictories = Number(teamHome.totalVictories + teamAway.totalVictories);
  const countTotalDraws = Number(teamHome.totalDraws + teamAway.totalDraws);
  const countTotalLosses = Number(teamHome.totalLosses + teamAway.totalLosses);
  const countGoalsFavor = Number(teamHome.goalsFavor + teamAway.goalsFavor);
  const countGoalsOwn = Number(teamHome.goalsOwn + teamAway.goalsOwn);
  const countGoalsBalance = Number(teamHome.goalsBalance + teamAway.goalsBalance);
  const countEfficiency = Number(((countTotalPoints / (countTotalGames * 3)) * 100).toFixed(2));

  return [countTotalPoints, countTotalGames, countTotalVictories, countTotalDraws, countTotalLosses,
    countGoalsFavor, countGoalsOwn, countGoalsBalance, countEfficiency];
};

export default CountLeaderboard;
