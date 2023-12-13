import { a as defineEventHandler, r as readBody, U as User, c as createError, s as sendEmail } from './nitro/node-server.mjs';
import { generate } from 'generate-password';
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
import 'nodemailer';

const index_post = defineEventHandler(async (event) => {
  var _a;
  const body = await readBody(event);
  const user = await User.findOne({ email: (_a = body == null ? void 0 : body.email) == null ? void 0 : _a.toLocaleLowerCase() });
  if (!user) {
    throw createError({ status: 400, statusText: "El email no existe!" });
  }
  const password = generate({ length: 8 });
  user.password = password;
  await user.save();
  await sendEmail({
    subject: "Nueva contrase\xF1a - sistema municipal",
    to: user.email,
    html: `
      <h2>Email: ${user.email}</h2>
      <h2>Contrase\xF1a: ${password}</h2>
    `
  });
  return body;
});

export { index_post as default };
//# sourceMappingURL=index.post6.mjs.map
