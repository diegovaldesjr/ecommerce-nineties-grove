'use server'

import { signIn } from '@/auth.config';
import { AuthError } from 'next-auth';
 
export async function authenticate(prevState, formData,) {
  try {
    console.log({formData: Object.fromEntries(formData)})
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}