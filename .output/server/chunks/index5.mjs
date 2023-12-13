import { a as defineEventHandler, U as User } from './nitro/node-server.mjs';
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
  const data = await User.find().populate("_service");
  return {
    data
  };
});

export { index as default };
//# sourceMappingURL=index5.mjs.map
