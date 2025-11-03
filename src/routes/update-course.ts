import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { db } from "../database/client.ts";
import { courses } from "../database/schema.ts";
import z from "zod";
import { eq } from "drizzle-orm";

export const updateCourse: FastifyPluginAsyncZod = async (server) => {
  server.put(
    "/courses/:id",
    {
      schema: {
        tags: ["courses"],
        summary: "Delete a course by ID",
        params: z.object({
          id: z.uuid(),
        }),
        body: z.object({
          title: z.string().optional(),
          description: z.string().optional(),
        }),
        response: {
          204: z.null(),
          404: z.null().describe("Course not found"),
        },
      },
    },
    async (request, reply) => {
      const courseId = request.params.id;
      const courseTitle = request.body.title;
      const courseDescription = request.body.description;

      const result = await db
        .update(courses)
        .set({
          title: courseTitle,
          description: courseDescription,
        })
        .where(eq(courses.id, courseId));

      if (result) {
        return reply.status(204).send();
      }

      return reply.status(404).send();
    }
  );
};
