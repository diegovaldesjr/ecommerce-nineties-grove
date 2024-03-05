import NextAuth, {NextAuthConfig} from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import { getCustomerInfo } from './actions'

const getJWTUser = async (email, password) => {
  const url = `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/?rest_route=/jwt-auth/v1/auth`
  
  const headers = {
    "Content-Type": "application/json"
  };
  
  const body = JSON.stringify({
    "email": email,
    "password": password
  });

  var requestOptions = {
    method: 'POST',
    headers: headers,
    body: body
  };

  const request = await fetch(url, requestOptions)
  const response = await request.json()

  if (response.success) return response.data.jwt
  return null
}

export const authConfig = {
  pages: {
    signIn: 'auth/login',
    newUser: 'auth/new-account'
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parseCredentials = z
          .object({ email: z.string().email(), password: z.string().min(1) })
          .safeParse(credentials)

        if (!parseCredentials) return null

        const {email, password} = parseCredentials.data

        //Validar usuario
        const userJWT = await getJWTUser(email, password)
        if (!userJWT) return null
        const user = await getCustomerInfo(userJWT)
        
        //retornar info de usuario
        const { role, username, avatar_url, meta_data, _links, is_paying_customer, ...rest } = user
        return rest
      }
    })
  ]
}

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig)
