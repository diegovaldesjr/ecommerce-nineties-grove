import NextAuth, {NextAuthConfig} from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'

export const authConfig = {
  pages: {
    signIn: 'auth/login',
    newUser: 'auth/new-account'
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parseCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials)

        console.log(parseCredentials.success)
        if (!parseCredentials) return null

        const {email, password} = parseCredentials.data

        console.log('Auth Config')
        console.log({email, password})

        //Buscar usuario
      }
    })
  ]
}

export const { signIn, signOut} = NextAuth(authConfig)
