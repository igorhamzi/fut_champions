import { IMatches } from '../../interfaces/IMatches';

const MatchesHomeResults = (match: IMatches[]): number[] => {
  let wins = 0; let draws = 0; let losses = 0;

  match.forEach(({ homeTeamGoals, awayTeamGoals }) => {
    if (homeTeamGoals > awayTeamGoals) {
      wins += 1;
    } else if (homeTeamGoals < awayTeamGoals) {
      losses += 1;
    } else if (homeTeamGoals === awayTeamGoals) {
      draws += 1;
    }
  });

  const totalHomePoints = (3 * wins) + draws;

  return [wins, losses, draws, totalHomePoints];
};

export default MatchesHomeResults;
