
import { Teacher } from "~/server/models/teacher"

export default defineEventHandler(async (event) =>{

  const data = await Teacher.find()
  return {
    data: data
  }
})