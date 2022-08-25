import TeamsModel from '../database/models/team';

class TeamsService {
  public getAllService = async () => {
    const teams = await TeamsModel.findAll();
    return teams;
  };

  public getById = async (id: string) => {
    const teamId = await TeamsModel.findOne({ where: { id } });
    return teamId;
  };
}

export default TeamsService;
