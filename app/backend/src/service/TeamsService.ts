import TeamsModel from '../database/models/team';

class TeamsService {
  public getAllService = async () => {
    const team = await TeamsModel.findAll();
    return team;
  };
}

export default TeamsService;
