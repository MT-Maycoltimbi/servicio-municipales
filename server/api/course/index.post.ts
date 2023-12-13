import { Course } from "~/server/models/course"

export default defineEventHandler(async (event) =>{
  const body = await readBody(event)
  const course = await Course.create(body)
  return Course.findById(course._id).populate('_teacher')
})