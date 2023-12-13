import { Course } from "~/server/models/course"

export default defineEventHandler(async (event) =>{
  const {idService} = getQuery(event)
  const data = await Course.find(idService ? {_service: idService}:{}).populate('_teacher')
  return {
    data: data
  }
})