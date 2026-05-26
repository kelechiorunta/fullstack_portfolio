import supertest, { Agent } from 'supertest';
import { describe, test, expect, beforeAll, jest } from '@jest/globals';
import dotenv from 'dotenv';
// import nodemailer from 'nodemailer';

dotenv.config();

// import app from '../backend/app';
import { App } from 'supertest/types';

let app: App;
let agent: Agent;

const sendMailMock = jest.fn(() => ({
  response: 'Mail sent successfully'
}));

const createTransportMock = jest.fn(() => ({
  sendMail: sendMailMock
}));

jest.mock('nodemailer', () => ({
  __esModule: true,
  default: {
    createTransport: createTransportMock
  }
}));

// jest.mock('../backend/controllers/mailControllers');
// const spycreateTransport = jest.spyOn('nodemailer', createTransport)

beforeAll(async () => {
  app = (await import('../backend/app')).default;
  agent = supertest.agent(app);
});

describe('api test', () => {
  test('test email api', async () => {
    // const nodemailer = (await import('nodemailer')).default;
    const response = await agent
      .post('/api/sendMessage')
      .set('Content-Type', 'application/json')
      .send({
        firstName: 'testUser',
        lastName: 'testUser',
        email: 'kelechiorunta1@gmail.com',
        subject: 'HI',
        message: 'cool'
      });
    console.log('RESPONSES', response.body);
    expect(response.status).toBe(200);
    // expect(nodemailer.createTransport).toHaveBeenCalledTimes(1);
    // expect(createTransportMock).toHaveBeenCalledTimes(1);
    // expect(sendMailMock).toHaveBeenCalledTimes(1);
  }, 15000);
});
