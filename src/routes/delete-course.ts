import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { db } from "../database/client.ts";
import { courses } from "../database/schema.ts";
import z from "zod";
import { eq } from "drizzle-orm";

export const deleteCourse: FastifyPluginAsyncZod = async (server) => {
  server.delete(
    "/courses/:id",
    {
      schema: {
        tags: ["courses"],
        summary: "Delete a course by ID",
        params: z.object({
          id: z.uuid(),
        }),
        response: {
          204: z.null(),
          404: z.null().describe("Course not found"),
        },
      },
    },
    async (request, reply) => {
      const courseId = request.params.id;

      const result = await db
        .delete(courses)
        .where(eq(courses.id, courseId))
        .returning();

      if (result) {
        return reply.status(204).send();
      }

      return reply.status(404).send();
    }
  );
};
