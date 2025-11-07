import { expect, test } from 'vitest'
import request from 'supertest'
import { server as appServer } from '../app.ts'
import { faker } from '@faker-js/faker'

test('create a course', async () => {
  await appServer.ready()

  const response = await request(appServer.server)
    .post('/courses')
    .set('Content-type', 'application/json')
    .send({
      title: faker.lorem.word(4)
    })

  expect(response.status).toEqual(201)
  expect(response.body).toEqual({
    courseId: expect.any(String)
  })
})
