import { Service } from "~/server/models/service"

export default defineEventHandler(async (event) =>{
  const body = await readBody(event)
  return await Service.findByIdAndUpdate(body._id,{
    name: body.name,
    description: body.description
  })
})