import supertest, { Agent } from 'supertest';
import { describe, test, expect, beforeAll, afterAll, jest } from '@jest/globals';
import dotenv from 'dotenv';

dotenv.config();

// import app from '../backend/app';
import { App } from 'supertest/types';
// import sharp from 'sharp';
import path from 'path';

// import { getTransport } from '../backend/controllers/mailControllers';

let app: App;
let agent: Agent;

// const sendMailMock = jest.fn(() => ({
//   response: 'Mail sent successfully'
// }));

// const createTransportMock = jest.fn(() => ({
//   sendMail: sendMailMock
// }));

// jest.mock('nodemailer', () => ({
//   __esModule: true,
//   default: {
//     createTransport: createTransportMock
//   }
// }));

// jest.mock('../backend/controllers/mailControllers');
// const spycreateTransport = jest.spyOn('nodemailer', createTransport)

beforeAll(async () => {
  // jest.mock('../backend/controllers/placeholderController', () => {
  //   // const originalFile = jest.requireActual<typeof import('path')>('path');

  //   return {
  //     __esModule: true,
  //     res: () => ({ status: mockPath })
  //   };
  // });

  // jest.mock('sharp', () => {
  //   return jest.fn(() => ({
  //     resize: jest.fn().mockReturnThis(),
  //     blur: jest.fn().mockReturnThis(),
  //     toBuffer: jest.fn().mockResolvedValue('mock-image' as never)
  //   }));
  // });
  // const mockSharp = jest.fn();
  // jest.mock('sharp', () => {
  //   const originalFile = jest.requireActual<typeof import('sharp')>('sharp');
  //   return {
  //     __esModule: true,
  //     ...originalFile,
  //     default: mockSharp
  //   };
  //   //() => ({ path: mockPath })
  // });
  jest.clearAllMocks();
  app = (await import('../backend/app')).default;
  agent = supertest.agent(app);
});

afterAll(async () => jest.restoreAllMocks());

describe('api test', () => {
  test('test email api', async () => {
    // const nodemailer = (await import('nodemailer')).default;
    // const spyNodemailer = jest.spyOn(nodemailer, 'createTransport');
    // console.log('SPYNODEMAILER', spyNodemailer);
    // spyNodemailer.mockClear();
    const response = await agent
      .post('/api/mail/sendMessage')
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

    // expect(spyTransport).toHaveBeenCalled();
    //   // expect(nodemailer.createTransport).toHaveBeenCalledTimes(1);
    // expect(createTransportMock).toHaveBeenCalledTimes(1);
    // expect(sendMailMock).toHaveBeenCalledTimes(1);
  }, 15000);

  test('test cv api', async () => {
    const cvDownloadResponse = await agent.get('/api/cv/downloadCV');
    expect(cvDownloadResponse.status).toBe(200);
    expect(cvDownloadResponse.headers['content-type']).toContain('application/pdf');
    expect(cvDownloadResponse.headers['content-disposition']).toContain(
      'attachment; filename="CV.pdf"'
    );
  }, 5000);

  test('test placeholder api', async () => {
    const spyPathResolveFn = jest.spyOn(path, 'resolve');

    spyPathResolveFn.mockClear();

    spyPathResolveFn.mock.calls.forEach((call) => console.log('calls', call));

    // const initialCalls = spyPathResolveFn.mock.calls.length;
    const placeholderResponse = await agent.get('/api/placeholder/Me.jpg');
    console.log('calls', spyPathResolveFn.mock.calls);

    // console.log('DIRNAME', __dirname);
    expect(placeholderResponse.status).toBe(200);

    const isCalledWithImage = spyPathResolveFn.mock.calls.some((call) =>
      call.some((arg) => typeof arg === 'string' && arg.includes('Me.jpg'))
    );

    const calledWithImageList = spyPathResolveFn.mock.calls.map((call) =>
      call.some((c) => c.includes('Me.jpg') || c.includes('public'))
    );
    console.log('ImageList', calledWithImageList);
    console.log('WithImage', isCalledWithImage);

    expect(calledWithImageList).toContain(true);
    expect(isCalledWithImage).toBe(true);
  }, 5000);
});
