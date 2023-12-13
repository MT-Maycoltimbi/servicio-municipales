import { a as defineEventHandler } from './nitro/node-server.mjs';
import { I as Inscription } from './inscription.mjs';
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

const _idCourse__get = defineEventHandler(async (event) => {
  const { idCourse } = event.context.params;
  const data = await Inscription.find({ _course: idCourse });
  return {
    data
  };
});

export { _idCourse__get as default };
//# sourceMappingURL=_idCourse_.get.mjs.map
