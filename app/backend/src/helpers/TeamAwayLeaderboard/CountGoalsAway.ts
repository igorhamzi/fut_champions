import { IMatches } from '../../interfaces/IMatches';

const CountGoalsAway = (match: IMatches[]): number[] => {
  const goalsScored = match.reduce((acc, curr: IMatches) => acc + curr.awayTeamGoals, 0);
  const goalsConceded = match.reduce((acc, curr: IMatches) => acc + curr.homeTeamGoals, 0);

  return [goalsScored, goalsConceded];
};

export default CountGoalsAway;
