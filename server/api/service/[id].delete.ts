import { Service } from "~/server/models/service"

export default defineEventHandler(async (event) =>{
  const {id} = event.context.params!
  return await Service.findByIdAndDelete(id)
})