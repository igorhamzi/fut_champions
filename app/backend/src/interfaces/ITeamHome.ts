import { IMatches } from './IMatches';

export interface ITeamHome {
  id?: number,
  teamName: string,
  homeTeam: IMatches[],
}
