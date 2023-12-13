import nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/json-transport";

export const sendEmail = async(options:MailOptions)=>{
  const runtimeConfig = useRuntimeConfig()
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: runtimeConfig.EMAIL_USER, 
      pass: runtimeConfig.EMAIL_PASSWORD
    },
  });
  
  
  if(await transporter.verify()){
    await transporter.sendMail(options)
  }
}