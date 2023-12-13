
import { User } from "~/server/models/user"

export default defineEventHandler(async (event) =>{

  const data = await User.find().populate('_service')
  return {
    data: data
  }
})