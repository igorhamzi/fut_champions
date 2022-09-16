import { Model, INTEGER, BOOLEAN } from 'sequelize';
import Team from './team';
import db from '.';

class Match extends Model {
  id!: number;
  homeTeam!: number;
  homeTeamGoals!: number;
  awayTeam!: number;
  awayTeamGoals!: number;
  inProgress!: boolean;
}

Match.init({
  homeTeam: INTEGER,
  homeTeamGoals: INTEGER,
  awayTeam: INTEGER,
  awayTeamGoals: INTEGER,
  inProgress: BOOLEAN,
}, {
  underscored: true,
  sequelize: db,
  modelName: 'match',
  timestamps: false,
});

Match.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome' });
Match.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway' });

Team.hasMany(Match, { foreignKey: 'homeTeam', as: 'homeTeam' });
Team.hasMany(Match, { foreignKey: 'awayTeam', as: 'teamAway' });

// Matches.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome' });
// Matches.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway' });

// Team.hasMany(Matches, { foreignKey: 'homeTeam', as: 'homeTeam' });
// Team.hasMany(Matches, { foreignKey: 'awayTeam', as: 'awayTeam' });

export default Match;
