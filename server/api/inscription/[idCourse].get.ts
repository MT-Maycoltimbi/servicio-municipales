import { Inscription } from "~/server/models/inscription"

export default defineEventHandler(async (event) =>{
  const {idCourse} = event.context.params!
  const data = await Inscription.find({_course: idCourse})
  return {
    data: data
  }
})