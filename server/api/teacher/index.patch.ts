import { Teacher } from "~/server/models/teacher"

export default defineEventHandler(async (event) =>{
  const body = await readBody(event)
  await Teacher.findByIdAndUpdate(body._id,body)
  return await Teacher.findById(body._id)
})