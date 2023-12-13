import { Course } from "~/server/models/course"
import { Inscription } from "~/server/models/inscription"
import moment from "moment";

export default defineEventHandler(async (event) =>{
  const body = await readBody(event)
  const course = await Course.findById(body._course)
  const age = moment().diff(body.birdthDate, 'years')
  if(age < course!.rangeAge!.min! || age > course!.rangeAge!.max!){
    throw createError({status:400, statusText: `La edad debe estar entre ${course!.rangeAge!.min!} y ${course!.rangeAge!.max!}`})
  }
  const inscription = await Inscription.findById(body._id)
  const existCedula = await Inscription.findOne({cedula: body.cedula, _course: course!._id})
  if(existCedula && body.cedula !== inscription?.cedula){
    throw createError({status:400, statusText: `Ya esta registrado el usuario con la cedula ${body.cedula}`})
  }
  await Inscription.findByIdAndUpdate(body._id,body)
  return Inscription.findById(body._id)
})