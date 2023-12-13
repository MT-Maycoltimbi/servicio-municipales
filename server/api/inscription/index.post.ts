import { Inscription } from "~/server/models/inscription"
import moment from "moment";
import { Course } from "~/server/models/course";
import {Schema, Types} from "mongoose";


export default defineEventHandler(async (event) =>{
  const body = await readBody(event)
  const {name,birdthDate,zone,address,phone,cedula,sexo,_course} = body
  if(!name || !birdthDate || !zone || !address || !phone || !cedula || !sexo || !_course){
    throw createError({status:400, statusText: `Debe enciar todos los campos: name,birdthDate,zone,address,phone,cedula,sexo,_course`})
  }
  if(zone !== 'urbana' && zone !== 'rural'){
    throw createError({status:400, statusText: 'El campo zone debe ser rural o urbana!'})
  }
  if(sexo !== 'M' && sexo !== 'F'){
    throw createError({status:400, statusText: 'El campo sexo debe ser M o F!'})
  }
  if(typeof birdthDate !== 'number'){
    throw createError({status:400, statusText: 'El campo birdthDate debe ser un número!'})
  }
  if(!Types.ObjectId.isValid(_course)){
    throw createError({status:400, statusText: 'El campo _course debe ser un ObjectId'})
  }
  const course = await Course.findById(_course)
  if(!course){
    throw createError({status:400, statusText: 'El curso no existe!'})
  }
  const age = moment().diff(birdthDate, 'years')
  if(age < course!.rangeAge!.min! || age > course!.rangeAge!.max!){
    throw createError({status:400, statusText: `La edad debe estar entre ${course!.rangeAge!.min!} y ${course!.rangeAge!.max!}`})
  }
  const inscripcions = await Inscription.find({_course: course._id})
  if(inscripcions.length > course.spaces){
    throw createError({status:400, statusText: `El curso ya tiene los cupos agotados`})
  }
  const existCedula = await Inscription.findOne({cedula: cedula, _course: course!._id})
  if(existCedula){
    throw createError({status:400, statusText: `Ya esta registrado el usuario con la cedula ${cedula}`})
  }
  return await Inscription.create(body)
})