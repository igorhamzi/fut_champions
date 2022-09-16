import { IMatches } from '../../interfaces/IMatches';

const MatchesAwayResults = (match: IMatches[]): number[] => {
  let wins = 0; let draws = 0; let losses = 0;

  match.forEach(({ awayTeamGoals, homeTeamGoals }) => {
    if (awayTeamGoals > homeTeamGoals) {
      wins += 1;
    } else if (awayTeamGoals < homeTeamGoals) {
      losses += 1;
    } else if (awayTeamGoals === homeTeamGoals) {
      draws += 1;
    }
  });

  const totalAwayPoints = (3 * wins) + draws;

  return [wins, losses, draws, totalAwayPoints];
};

export default MatchesAwayResults;
