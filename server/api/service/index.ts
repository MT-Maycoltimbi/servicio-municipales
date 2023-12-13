import { Service } from "~/server/models/service"

export default defineEventHandler(async (event) =>{
  const data = await Service.find()
  return {
    data: data
  }
})