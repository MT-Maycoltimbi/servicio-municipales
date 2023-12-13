import CredentialProvider from 'next-auth/providers/credentials';
import { N as NuxtAuthHandler, U as User, R as Role, u as useRuntimeConfig } from './nitro/node-server.mjs';
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

const runtimeConfig = useRuntimeConfig();
const _____ = NuxtAuthHandler({
  secret: runtimeConfig.SECRET,
  providers: [
    CredentialProvider.default({
      async authorize(credentials) {
        const user = await User.findOne({ email: credentials.email });
        if (!user || !await user.comparePassword(credentials.password))
          return null;
        return { name: user.fullName, email: user.email };
      }
    })
  ],
  callbacks: {
    async session({ session }) {
      if (session) {
        let currentUser = await User.findOne({ email: session.user.email });
        session = Object.assign(session, { _id: currentUser._id, rol: currentUser.rol, _service: currentUser.rol == Role.ADMIN ? void 0 : currentUser._service });
      }
      return session;
    }
  }
});

export { _____ as default };
//# sourceMappingURL=_..._.mjs.map
