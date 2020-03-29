const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/conections');

describe('ONG', () => {

  beforeEach( async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll( async () => {
    await connection.destroy();
  });

  it('deve ser possivel uma nova ONG', async() => {
    const response = await request(app)
    .post('/ongs')
    //.set('authorization','') para passar o header
    .send({
      
        name:"ONGs2",
        email:"contato@ongs.com.br",
        whatsapp:"85000099993",
        city:"fortaleza",
        uf:"ce"
      
    });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);


  })
})