import { IMatches } from '../../interfaces/IMatches';

const CountGoals = (match: IMatches[]): number[] => {
  const goalsScored = match.reduce((acc, curr: IMatches) => acc + curr.homeTeamGoals, 0);
  const goalsConceded = match.reduce((acc, curr: IMatches) => acc + curr.awayTeamGoals, 0);

  return [goalsScored, goalsConceded];
};

export default CountGoals;
