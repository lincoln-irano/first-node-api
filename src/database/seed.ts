import { db } from "./client.ts";
import { courses, enrollments, users } from "./schema.ts";
import { fakerPT_BR as faker } from "@faker-js/faker";

async function seed() {
  const insertedUser = await db
    .insert(users)
    .values([
      { name: faker.person.fullName(), email: faker.internet.email() },
      { name: faker.person.fullName(), email: faker.internet.email() },
      { name: faker.person.fullName(), email: faker.internet.email() },
      { name: faker.person.fullName(), email: faker.internet.email() },
      { name: faker.person.fullName(), email: faker.internet.email() },
    ])
    .returning();

  const insertedCourses = await db
    .insert(courses)
    .values([
      { title: faker.lorem.words(4), description: faker.lorem.paragraph(2) },
      { title: faker.lorem.words(4), description: faker.lorem.paragraph(2) },
    ])
    .returning();

  await db.insert(enrollments).values([
    { courseId: insertedCourses[0].id, userId: insertedUser[0].id },
    { courseId: insertedCourses[0].id, userId: insertedUser[1].id },
    { courseId: insertedCourses[1].id, userId: insertedUser[2].id },
  ]);
}

seed();
