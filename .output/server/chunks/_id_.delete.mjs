import { a as defineEventHandler } from './nitro/node-server.mjs';
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

const _id__delete = defineEventHandler(async (event) => {
  const { id } = event.context.params;
  return await Course.findByIdAndDelete(id);
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
