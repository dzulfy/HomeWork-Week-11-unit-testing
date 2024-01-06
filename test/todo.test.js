const app = require('../app');
const request = require('supertest');

describe('Todo Routes', () => {
  it('should return all todos get /todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .then((response) => {
        const firstData = response.body[0];
        expect(firstData.title).toBe('Belajar Sequelize');
        done();
      })
      .catch((error) => done(error));
  });
  it('should return all todos get /todos', (done) => {
    request(app)
      .post('/todos')
      .send(
        {
            title: 'belajar express',
            status: 'active'
        }
      )
      .expect(201)
      .then((response) => {
        const data = response.body
        expect(data.title).toBe('belajar express');
        expect(data.status).toBe('active');
        done();
      })
      .catch((error) => done(error));
  });
  it('should return a specific todo by ID via GET /todos/:id', (done) => {
    const todoId = 1;

    request(app)
      .get(`/todos/${todoId}`)
      .expect(200)
      .then((response) => {
        const todo = response.body;
        expect(todo.id).toBe(todoId);
        done();
      })
      .catch((error) => done(error));
  });
});
