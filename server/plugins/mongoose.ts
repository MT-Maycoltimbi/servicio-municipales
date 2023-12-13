import {connect} from "mongoose";
import { User } from "../models/user";
import { Role } from "../constants";
import {generate} from "generate-password";
import { sendEmail } from "../utils/sendEmail";

export default defineNitroPlugin(async(nitroApp)=>{
  const runtimeConfig = useRuntimeConfig()
  
  await connect(runtimeConfig.MONGO_URI)
  console.log('MONGO DB conectado!');
  const user = {
    fullName: 'Administrador', 
    email: 'luisjo3lml@gmail.com',
    rol: Role.ADMIN,
    password: ''
  }
  if(!(await User.findOne({email: user.email}))){
    user.password = generate({length: 8})
    await User.create(user)
    await sendEmail({
      subject:'Credenciales del sistema municipal',
      to: user.email,
      html: `
        <h2>Email: ${user.email}</h2>
        <h2>Contraseña: ${user.password}</h2>
      `
    })
  }
  
})