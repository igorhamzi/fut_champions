import CountLeaderboard from './CountLeaderboard';

const Leaderboard = (matches:any) => {
  const [countTotalPoints, countTotalGames,
    countTotalVictories, countTotalDraws,
    countTotalLosses, countGoalsFavor,
    countGoalsOwn, countGoalsBalance,
    countEfficiency,
  ] = CountLeaderboard(matches);

  return {
    name: matches.teamName,
    totalPoints: Number(countTotalPoints),
    totalGames: Number(countTotalGames),
    totalVictories: Number(countTotalVictories),
    totalDraws: Number(countTotalDraws),
    totalLosses: Number(countTotalLosses),
    goalsFavor: Number(countGoalsFavor),
    goalsOwn: Number(countGoalsOwn),
    goalsBalance: Number(countGoalsBalance),
    efficiency: Number(countEfficiency),
  };
};

export default Leaderboard;
