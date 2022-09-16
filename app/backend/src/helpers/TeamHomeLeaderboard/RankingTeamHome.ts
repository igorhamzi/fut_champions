import { ITeamHome } from '../../interfaces/ITeamHome';
import CountGoals from './CountGoals';
import MatchesResults from './MatchesResults';

const rankingTeamHome = ({ teamName, homeTeam }: ITeamHome) => {
  const [goalsScored, goalsConceded] = CountGoals(homeTeam);
  const [wins, draws, losses, totalPoints] = MatchesResults(homeTeam);

  return {
    name: teamName,
    totalPoints,
    totalGames: homeTeam.length,
    totalVictories: wins,
    totalDraws: draws,
    totalLosses: losses,
    goalsFavor: goalsScored,
    goalsOwn: goalsConceded,
    goalsBalance: (goalsScored - goalsConceded),
    efficiency: Number(((totalPoints / (homeTeam.length * 3)) * 100).toFixed(2)),
  };
};

export default rankingTeamHome;
