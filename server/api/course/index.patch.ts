import { Course } from "~/server/models/course"

export default defineEventHandler(async (event) =>{
  const body = await readBody(event)
  await Course.findByIdAndUpdate(body._id,body)
  return Course.findById(body._id).populate('_teacher')
})