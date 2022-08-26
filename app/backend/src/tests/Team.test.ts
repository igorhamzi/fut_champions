import * as chai from 'chai';
import chaiHttp = require('chai-http');
import Sinon = require('sinon');
import { app } from '../app';
import Team from '../database/models/team';
import { ITeam  } from '../interfaces/ITeam';

const { expect } = chai;

chai.use(chaiHttp);

const teamMock: ITeam = {
  id: 1,
  teamName: 'any-team-name'
}

describe('Team', () => {
  describe('list', () => {

    beforeEach(() => {
      Sinon.stub(Team, "findAll").resolves([teamMock as Team])
    })

    afterEach(() => {
      Sinon.restore();
    })

    it('should return status 200', async () => {
      const response = await chai.request(app)
      .get('/teams')

      expect(response.status).to.equal(200)
    })

    it('should return teams ', async () => {
      const response = await chai.request(app)
      .get('/teams')
      const [team] = response.body as ITeam[];

      expect(team.id).to.equal(team.id)
      expect(team.teamName).to.equal(team.teamName)
    })
  })
})