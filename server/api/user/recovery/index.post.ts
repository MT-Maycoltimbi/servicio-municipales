
import { generate } from "generate-password"
import { User } from "~/server/models/user"

export default defineEventHandler(async (event) =>{
  const body = await readBody(event)
  const user = await User.findOne({email: body?.email?.toLocaleLowerCase()})
  if(!user){
    throw createError({status:400, statusText:'El email no existe!'})
  }
  const password = generate({length: 8})
  user.password =  password
  await user.save()
  await sendEmail({
    subject:'Nueva contraseña - sistema municipal',
    to: user.email,
    html: `
      <h2>Email: ${user.email}</h2>
      <h2>Contraseña: ${password}</h2>
    `
  })
  return body
})