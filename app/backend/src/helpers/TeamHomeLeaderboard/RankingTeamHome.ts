import { ITeamHome } from '../../interfaces/ITeamHome';
import CountGoalsHome from './CountGoalsHome';
import MatchesHomeResults from './MatchesHomeResults';

const rankingTeamHome = ({ teamName, homeTeam }: ITeamHome) => {
  const [goalsScored, goalsConceded] = CountGoalsHome(homeTeam);
  const [wins, losses, draws, totalPoints] = MatchesHomeResults(homeTeam);

  const countEfficiency = Number(((totalPoints / (homeTeam.length * 3)) * 100).toFixed(2));
  const countGoalsBalance = goalsScored - goalsConceded;

  return {
    name: teamName,
    totalPoints,
    totalGames: homeTeam.length,
    totalVictories: wins,
    totalDraws: draws,
    totalLosses: losses,
    goalsFavor: goalsScored,
    goalsOwn: goalsConceded,
    goalsBalance: countGoalsBalance,
    efficiency: countEfficiency,
  };
};

export default rankingTeamHome;
