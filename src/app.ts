import fastify from "fastify";
import {
  validatorCompiler,
  serializerCompiler,
  type ZodTypeProvider,
  jsonSchemaTransform,
} from "fastify-type-provider-zod";
import { fastifySwagger } from "@fastify/swagger";
import scalarApiReference from "@scalar/fastify-api-reference";
import { Route } from "./routes/index.ts";

const server = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname",
      },
    },
  },
}).withTypeProvider<ZodTypeProvider>();

if (process.env.NODE_ENV === "development") {
  server.register(fastifySwagger, {
    openapi: {
      info: {
        title: "Desafio Node.js",
        version: "1.0.0",
      },
    },
    transform: jsonSchemaTransform,
  });

  server.register(scalarApiReference, {
    routePrefix: "/docs",
    configuration: {
      theme: "kepler",
    },
  });
}

server.setValidatorCompiler(validatorCompiler);
server.setSerializerCompiler(serializerCompiler);

server.register(Route.createCourses);
server.register(Route.deleteCourse);
server.register(Route.getCourses);
server.register(Route.getCoursesById);
server.register(Route.updateCourse);

export { server }
