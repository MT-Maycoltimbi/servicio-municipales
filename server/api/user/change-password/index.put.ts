import { User } from "~/server/models/user"

export default defineEventHandler(async (event) =>{
  const body = await readBody(event)
  const user = await User.findOne({email: body?.email?.toLocaleLowerCase()})
  if(!user){
    throw createError({status:400, statusText:'El email no existe!'})
  }
  user.password =  body.password
  await user.save()
  return body
})