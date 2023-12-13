import { Inscription } from "~/server/models/inscription"

export default defineEventHandler(async (event) =>{
  const {id} = event.context.params!
  return await Inscription.findByIdAndDelete(id)
})