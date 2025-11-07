import { faker } from "@faker-js/faker";
import { db } from "../../database/client.ts";
import { courses } from "../../database/schema.ts";

export async function makeCourse(title?: string) {
  const result = await db
    .insert(courses)
    .values({
      title: title ?? faker.lorem.word(4),
      description: faker.lorem.sentence(3)
    }).returning()

  return result[0]
}
