
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import Sinon = require('sinon');
import { app } from '../app';
import User from '../database/models/user';
import { IUser  } from '../interfaces/IUser';
import createToken from '../utils/token';

const { expect } = chai;

chai.use(chaiHttp);

const userMock: IUser = {
  email: 'email@email.com',
  password: '123456',
}


describe('Login', () => {
  describe('Post', () => {
    beforeEach(() => {
      Sinon.stub(User, 'findOne').resolves(userMock as User)
    })

    afterEach(() => {
      Sinon.restore();
    })

    it('should return status 200', async () => {
      const response = await chai.request(app)
      .post('/login')
      .send(userMock)

      expect(response.status).to.equal(200)
    })

    it('should return token ', async () => {
      const response = await chai.request(app)
      .post('/login')
      .send(userMock)

      expect(response.body).to.have.property('token')
    })
  })
})
