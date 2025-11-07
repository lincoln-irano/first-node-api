import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { db } from "../database/client.ts";
import { courses } from "../database/schema.ts";
import z from "zod";

export const createCourses: FastifyPluginAsyncZod = async (server) => {
  server.post(
    "/courses",
    {
      schema: {
        tags: ["courses"],
        summary: "Create a course",
        description:
          "This route creates a course receiving a title and, optionally, a description",
        body: z.object({
          title: z.string().min(3, "Título precisa ter no mínimo 3 caracteres"),
          description: z.string().optional(),
        }),
        response: {
          201: z.object({ courseId: z.uuid() }),
        },
      },
    },
    async (request, reply) => {
      const courseTitle = request.body.title;
      const courseDescription = request.body.description;

      const result = await db
        .insert(courses)
        .values({
          title: courseTitle,
          description: courseDescription,
        })
        .returning();

      return reply.status(201).send({ courseId: result[0].id });
    }
  );
};
