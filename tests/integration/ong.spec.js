const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ong', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  })

  afterAll(async () => {
    await connection.destroy();
  })

  it('should be create a ong', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "APAD",
        email: "contato@contato.com",
        whatsapp: "1600000000",
        city: "Do Brasil",
        uf: "BR",
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
})