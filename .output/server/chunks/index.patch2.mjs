import { a as defineEventHandler, r as readBody, c as createError } from './nitro/node-server.mjs';
import { C as Course } from './course.mjs';
import { I as Inscription } from './inscription.mjs';
import moment from 'moment';
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
import 'mongoose';
import 'bcrypt';
import 'generate-password';
import 'nodemailer';

const index_patch = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const course = await Course.findById(body._course);
  const age = moment().diff(body.birdthDate, "years");
  if (age < course.rangeAge.min || age > course.rangeAge.max) {
    throw createError({ status: 400, statusText: `La edad debe estar entre ${course.rangeAge.min} y ${course.rangeAge.max}` });
  }
  const inscription = await Inscription.findById(body._id);
  const existCedula = await Inscription.findOne({ cedula: body.cedula, _course: course._id });
  if (existCedula && body.cedula !== (inscription == null ? void 0 : inscription.cedula)) {
    throw createError({ status: 400, statusText: `Ya esta registrado el usuario con la cedula ${body.cedula}` });
  }
  await Inscription.findByIdAndUpdate(body._id, body);
  return Inscription.findById(body._id);
});

export { index_patch as default };
//# sourceMappingURL=index.patch2.mjs.map
