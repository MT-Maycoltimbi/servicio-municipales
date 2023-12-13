import { User } from "~/server/models/user"

export default defineEventHandler(async (event) =>{
  const {id} = event.context.params!
  return await User.findByIdAndDelete(id)
})