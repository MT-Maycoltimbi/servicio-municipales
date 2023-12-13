
import { generate } from "generate-password"
import { User } from "~/server/models/user"

export default defineEventHandler(async (event) =>{
  const user = await readBody(event)
  if(await User.findOne({email: user?.email?.toLocaleLowerCase()})){
    throw createError({status:400, statusText:'El email ya está registrado!'})
  }
  user.password = generate({length: 8})
  const newUser = await User.create(user)
  await sendEmail({
    subject:'Credenciales del sistema municipal',
    to: user.email,
    html: `
      <h2>Email: ${user.email}</h2>
      <h2>Contraseña: ${user.password}</h2>
    `
  })
  return await User.findById(newUser._id).populate('_service')
})