import { a as defineEventHandler, r as readBody } from './nitro/node-server.mjs';
import { T as Teacher } from './teacher.mjs';
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
  await Teacher.findByIdAndUpdate(body._id, body);
  return await Teacher.findById(body._id);
});

export { index_patch as default };
//# sourceMappingURL=index.patch4.mjs.map
