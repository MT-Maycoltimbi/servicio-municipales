import { NuxtAuthHandler } from '#auth'
import CredentialProvider from "next-auth/providers/credentials";
import { Session } from 'next-auth';
import { User } from '~/server/models/user';
import { Role } from '~/server/constants';

const runtimeConfig = useRuntimeConfig()

export interface SessionType extends Session{
  _id?: string | undefined,
  rol?: string | undefined,
  _service?: string
}

export default NuxtAuthHandler({
  secret: runtimeConfig.SECRET,
  providers: [
    (CredentialProvider as any).default({
      async authorize(credentials:any) {
        const user = await User.findOne({email: credentials.email}) 
        if(!user || !(await (user as any).comparePassword(credentials.password))) return null;
        return {name: user.fullName, email:user.email};
      },
    })
  ],
  callbacks:{
    async session({session}) {
      if(session){
        let currentUser = await User.findOne({email: session!.user!.email})
        session = Object.assign(session, {_id: currentUser!._id, rol: currentUser!.rol, _service: currentUser!.rol == Role.ADMIN ? undefined : currentUser!._service})
      }
      return session as SessionType 
    },
  }
})