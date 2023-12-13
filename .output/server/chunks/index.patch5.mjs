import { a as defineEventHandler, r as readBody, U as User, R as Role } from './nitro/node-server.mjs';
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
  const user = await readBody(event);
  const userUpdated = await User.findById(user._id);
  userUpdated.fullName = user.fullName;
  userUpdated.rol = user.rol;
  if (userUpdated.rol === Role.ASSISTANT) {
    userUpdated._service = user._service;
  } else {
    userUpdated._service = null;
  }
  await userUpdated.save();
  return await User.findById(userUpdated._id).populate("_service");
});

export { index_patch as default };
//# sourceMappingURL=index.patch5.mjs.map
