import { Course } from "~/server/models/course"

export default defineEventHandler(async (event) =>{
  const {id} = event.context.params!
  return await Course.findByIdAndDelete(id)
})