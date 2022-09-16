import { IMatches } from './IMatches';

export interface ITeamAway {
  id?: number,
  teamName: string,
  awayTeam: IMatches[],
}
