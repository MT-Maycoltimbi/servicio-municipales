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
  const user = await readBody(event);
  if (await User.findOne({ email: (_a = user == null ? void 0 : user.email) == null ? void 0 : _a.toLocaleLowerCase() })) {
    throw createError({ status: 400, statusText: "El email ya est\xE1 registrado!" });
  }
  user.password = generate({ length: 8 });
  const newUser = await User.create(user);
  await sendEmail({
    subject: "Credenciales del sistema municipal",
    to: user.email,
    html: `
      <h2>Email: ${user.email}</h2>
      <h2>Contrase\xF1a: ${user.password}</h2>
    `
  });
  return await User.findById(newUser._id).populate("_service");
});

export { index_post as default };
//# sourceMappingURL=index.post5.mjs.map
