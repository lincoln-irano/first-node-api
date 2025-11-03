import { createCourses } from "./create-course.ts";
import { deleteCourse } from "./delete-course.ts";
import { getCoursesById } from "./get-course-by-id.ts";
import { getCourses } from "./get-courses.ts";
import { updateCourse } from "./update-course.ts";

export const Route = {
  createCourses,
  deleteCourse,
  getCoursesById,
  getCourses,
  updateCourse,
};
