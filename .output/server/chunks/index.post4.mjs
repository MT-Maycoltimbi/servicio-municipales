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

const index_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  return await Teacher.create(body);
});

export { index_post as default };
//# sourceMappingURL=index.post4.mjs.map
