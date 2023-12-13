import { a as defineEventHandler, r as readBody } from './nitro/node-server.mjs';
import { C as Course } from './course.mjs';
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
  await Course.findByIdAndUpdate(body._id, body);
  return Course.findById(body._id).populate("_teacher");
});

export { index_patch as default };
//# sourceMappingURL=index.patch.mjs.map
