// const request = require('supertest');
// const app = require('../app'); // Importe o app do arquivo principal
// const mongoose = require('mongoose');
// const { Usuarios } = require('../app/models/UsuariosModels');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// let tokenAdmin, tokenCliente;

// beforeAll(async () => {
//   // Conectando ao banco de dados
//   await mongoose.connect(`${process.env.MONGODB}`, { useNewUrlParser: true, useUnifiedTopology: true });

//   // Criando usuários para teste
//   const admin = new Usuarios({
//     nome: 'Admin User',
//     email: 'admin@example.com',
//     password: await bcrypt.hash('password123', 10),
//     regra: 'Admin'
//   });
//   await admin.save();
//   tokenAdmin = jwt.sign({ usuario: { id: admin._id, regra: admin.regra } }, process.env.JWT_SECRET, { expiresIn: '1h' });

//   const cliente = new Usuarios({
//     nome: 'Cliente User',
//     email: 'cliente@example.com',
//     password: await bcrypt.hash('password123', 10),
//     regra: 'Cliente'
//   });
//   await cliente.save();
//   tokenCliente = jwt.sign({ usuario: { id: cliente._id, regra: cliente.regra } }, process.env.JWT_SECRET, { expiresIn: '1h' });
// });

// beforeEach(async () => {
//   // Limpar a coleção de usuários antes de cada teste
//   await Usuarios.deleteMany({});
// });

// afterAll(async () => {
//   if (mongoose.connection.readyState === 1) {
//     await mongoose.connection.db.dropDatabase();
//     await mongoose.connection.close();
//   }
// });

// describe('User Endpoints', () => {
//   it('should register a new user', async () => {
//     const res = await request(app)
//       .post('/usuario/register')
//       .send({
//         nome: 'Test User',
//         email: 'test@example.com',
//         password: 'password123',
//         regra: 'Cliente'
//       });
//     expect(res.statusCode).toEqual(201); // Corrigido para 201 - Created
//     expect(res.body).toHaveProperty('token');
//   });

//   it('should login an existing user', async () => {
//     const res = await request(app)
//       .post('/usuario/login')
//       .send({
//         email: 'admin@example.com',
//         password: 'password123'
//       });
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toHaveProperty('token');
//     expect(res.body.email).toEqual('admin@example.com');
//   });

//   it('should get all users for admin', async () => {
//     const res = await request(app)
//       .get('/usuario/all')
//       .set('Authorization', `Bearer ${tokenAdmin}`);
//     expect(res.statusCode).toEqual(200);
//     expect(res.body.length).toBeGreaterThan(0);
//   });

//   it('should not get all users for client', async () => {
//     const res = await request(app)
//       .get('/usuario/all')
//       .set('Authorization', `Bearer ${tokenCliente}`);
//     expect(res.statusCode).toEqual(403);
//   });

//   it('should get a user by ID for admin', async () => {
//     const adminUser = await Usuarios.findOne({ email: 'admin@example.com' });
//     const res = await request(app)
//       .get(`/usuario/${adminUser._id}`)
//       .set('Authorization', `Bearer ${tokenAdmin}`);
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toHaveProperty('email', 'admin@example.com');
//   });

//   it('should delete a user by ID for admin', async () => {
//     const clientUser = await Usuarios.findOne({ email: 'cliente@example.com' });
//     const res = await request(app)
//       .delete(`/usuario/${clientUser._id}`)
//       .set('Authorization', `Bearer ${tokenAdmin}`);
//     expect(res.statusCode).toEqual(200);
//   });
// });