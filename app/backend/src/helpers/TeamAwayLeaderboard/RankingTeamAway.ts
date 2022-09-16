import { ITeamAway } from '../../interfaces/ITeamAway';
import CountAwayGoals from './CountGoalsAway';
import MatchesHomeResults from './MatchesAwayResults';

const rankingTeamAway = ({ teamName, awayTeam }: ITeamAway) => {
  const [goalsScored, goalsConceded] = CountAwayGoals(awayTeam);
  const [wins, losses, draws, totalPoints] = MatchesHomeResults(awayTeam);

  const countEfficiency = Number(((totalPoints / (awayTeam.length * 3)) * 100).toFixed(2));
  const countGoalsBalance = goalsScored - goalsConceded;

  return {
    name: teamName,
    totalPoints,
    totalGames: awayTeam.length,
    totalVictories: wins,
    totalDraws: draws,
    totalLosses: losses,
    goalsFavor: goalsScored,
    goalsOwn: goalsConceded,
    goalsBalance: countGoalsBalance,
    efficiency: countEfficiency,
  };
};

export default rankingTeamAway;
