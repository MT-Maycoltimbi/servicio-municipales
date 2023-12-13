import { a as defineEventHandler, r as readBody, c as createError } from './nitro/node-server.mjs';
import { I as Inscription } from './inscription.mjs';
import moment from 'moment';
import { C as Course } from './course.mjs';
import { Types } from 'mongoose';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'bcrypt';
import 'generate-password';
import 'nodemailer';

const index_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, birdthDate, zone, address, phone, cedula, sexo, _course } = body;
  if (!name || !birdthDate || !zone || !address || !phone || !cedula || !sexo || !_course) {
    throw createError({ status: 400, statusText: `Debe enciar todos los campos: name,birdthDate,zone,address,phone,cedula,sexo,_course` });
  }
  if (zone !== "urbana" && zone !== "rural") {
    throw createError({ status: 400, statusText: "El campo zone debe ser rural o urbana!" });
  }
  if (sexo !== "M" && sexo !== "F") {
    throw createError({ status: 400, statusText: "El campo sexo debe ser M o F!" });
  }
  if (typeof birdthDate !== "number") {
    throw createError({ status: 400, statusText: "El campo birdthDate debe ser un n\xFAmero!" });
  }
  if (!Types.ObjectId.isValid(_course)) {
    throw createError({ status: 400, statusText: "El campo _course debe ser un ObjectId" });
  }
  const course = await Course.findById(_course);
  if (!course) {
    throw createError({ status: 400, statusText: "El curso no existe!" });
  }
  const age = moment().diff(birdthDate, "years");
  if (age < course.rangeAge.min || age > course.rangeAge.max) {
    throw createError({ status: 400, statusText: `La edad debe estar entre ${course.rangeAge.min} y ${course.rangeAge.max}` });
  }
  const inscripcions = await Inscription.find({ _course: course._id });
  if (inscripcions.length > course.spaces) {
    throw createError({ status: 400, statusText: `El curso ya tiene los cupos agotados` });
  }
  const existCedula = await Inscription.findOne({ cedula, _course: course._id });
  if (existCedula) {
    throw createError({ status: 400, statusText: `Ya esta registrado el usuario con la cedula ${cedula}` });
  }
  return await Inscription.create(body);
});

export { index_post as default };
//# sourceMappingURL=index.post2.mjs.map
