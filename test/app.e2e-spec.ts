import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TodoModule } from './../src/todo/todo.module';
import { Connection } from 'typeorm';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    const connection = app.get(Connection)
    await connection.synchronize(true)
    await app.init();
  });
  
  it('/api/list/ (POST)', () => {
    const list = {
      name: "",
      description: "description"
  };
    return request(app.getHttpServer())
      .post('/api/list')
      .send(list)
      .expect(400)
      .expect('bad request');
  });
});
