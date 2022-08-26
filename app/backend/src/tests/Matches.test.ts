import * as chai from 'chai';
import chaiHttp = require('chai-http');
import Sinon = require('sinon');
import { app } from '../app';
import Match from '../database/models/match'
import { IMatches } from '../interfaces/IMatches'

const { expect } = chai;

chai.use(chaiHttp);

const matchesMock: IMatches = {
  id: 1,
  homeTeam: 1,
  homeTeamGoals: 1,
  awayTeam: 1,
  awayTeamGoals: 1,
  inProgress: true,
}


describe('Matches', () => {
  describe('list', () => {

    beforeEach(() => {
      Sinon.stub(Match, "findAll").resolves([matchesMock as Match])
    })

    afterEach(() => {
      Sinon.restore();
    })

    it('should return status 200', async () => {
      const response = await chai.request(app)
      .get('/matches')

      expect(response.status).to.equal(200)
    })

    it('should return teams ', async () => {
      const response = await chai.request(app)
      .get('/matches')
      const [match] = response.body as IMatches[];

      expect(match.id).to.equal(match.id)
      expect(match.homeTeam).to.equal(match.homeTeam)
      expect(match.homeTeamGoals).to.equal(match.homeTeamGoals)
      expect(match.awayTeam).to.equal(match.awayTeam)
      expect(match.awayTeamGoals).to.equal(match.awayTeamGoals)
      expect(match.inProgress).to.equal(match.inProgress)
    })
  })
})