import { expect, test } from 'vitest'
import request from 'supertest'
import { server as appServer } from '../app.ts'
import { makeCourse } from '../tests/factories/make-course.ts'
import { randomUUID } from 'node:crypto'

test('get course by id', async () => {
  await appServer.ready()

  const course = await makeCourse()

  console.log(course)
  const response = await request(appServer.server)
    .get(`/courses/${course.id}`)

  expect(response.status).toEqual(200)
  expect(response.body).toEqual({
    course: {
      id: expect.any(String),
      title: expect.any(String),
      description: expect.any(String)
    }
  })
})

test('return 404 for non existing course', async () => {
  await appServer.ready()
  const uuid = randomUUID()

  const response = await request(appServer.server)
    .get(`/courses/${uuid}`)

  expect(response.status).toEqual(404)
})
