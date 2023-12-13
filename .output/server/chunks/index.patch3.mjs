import { a as defineEventHandler, r as readBody } from './nitro/node-server.mjs';
import { S as Service } from './service.mjs';
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
  return await Service.findByIdAndUpdate(body._id, {
    name: body.name,
    description: body.description
  });
});

export { index_patch as default };
//# sourceMappingURL=index.patch3.mjs.map
