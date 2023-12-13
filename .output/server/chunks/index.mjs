import { a as defineEventHandler, g as getQuery } from './nitro/node-server.mjs';
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

const index = defineEventHandler(async (event) => {
  const { idService } = getQuery(event);
  const data = await Course.find(idService ? { _service: idService } : {}).populate("_teacher");
  return {
    data
  };
});

export { index as default };
//# sourceMappingURL=index.mjs.map
