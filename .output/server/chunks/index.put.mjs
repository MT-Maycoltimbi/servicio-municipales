import { a as defineEventHandler, r as readBody, U as User, c as createError } from './nitro/node-server.mjs';
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

const index_put = defineEventHandler(async (event) => {
  var _a;
  const body = await readBody(event);
  const user = await User.findOne({ email: (_a = body == null ? void 0 : body.email) == null ? void 0 : _a.toLocaleLowerCase() });
  if (!user) {
    throw createError({ status: 400, statusText: "El email no existe!" });
  }
  user.password = body.password;
  await user.save();
  return body;
});

export { index_put as default };
//# sourceMappingURL=index.put.mjs.map
