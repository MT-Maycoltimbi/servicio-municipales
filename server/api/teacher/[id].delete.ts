import { Teacher } from "~/server/models/teacher"

export default defineEventHandler(async (event) =>{
  const {id} = event.context.params!
  return await Teacher.findByIdAndDelete(id)
})