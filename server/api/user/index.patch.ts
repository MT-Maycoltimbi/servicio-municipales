import { Role } from "~/server/constants"
import { User } from "~/server/models/user"

export default defineEventHandler(async (event) =>{
  const user = await readBody(event)
  const userUpdated = await User.findById(user._id)
  userUpdated!.fullName = user.fullName
  userUpdated!.rol = user.rol
  if(userUpdated!.rol === Role.ASSISTANT){
    userUpdated!._service = user._service
  }else{
    (userUpdated as any)._service = null;
  }
  await userUpdated!.save()
  return await User.findById(userUpdated!._id).populate('_service')
})