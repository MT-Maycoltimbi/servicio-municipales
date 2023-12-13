import { Teacher } from "~/server/models/teacher"

export default defineEventHandler(async (event) =>{
  const body = await readBody(event)
  return  await Teacher.create(body)
})