'use client'
import { registerUser } from "@/actions"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"

export const RegisterForm = () => {
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState('')
  const [pending, setPending] = useState(false)
  const {register, handleSubmit, formState: {errors}} = useForm()

  const textContent = {
    name: 'Nombre',
    lastName: 'Apellido',
    email: 'Correo electrónico',
    password: 'Contraseña',
    login: 'Ingresar',
    btnText: 'Crear cuenta'
  }

  const onSubmit = async(data) => {
    setErrorMessage('')
    setPending(true)
    const {name, lastName, email, password} = data
    const res = await registerUser(name, lastName, email, password)
    
    if (!res.ok) {
      setErrorMessage(res.message)
      setPending(false)
      return
    }
    router.replace('/auth/login')
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="email">{textContent.name}</label>
      <input
        className={
          clsx(
            "px-5 py-2 border bg-gray-200 rounded mb-5",
            {
              'border-red-500': errors.name
            }
        )}
        type="text"
        {...register('name', {required: true})}
      />

      <label htmlFor="email">{textContent.lastName}</label>
      <input
        className={
          clsx(
            "px-5 py-2 border bg-gray-200 rounded mb-5",
            {
              'border-red-500': errors.lastName
            }
        )}
        type="text"
        {...register('lastName', {required: true})}
      />

      <label htmlFor="email">{textContent.email}</label>
      <input
        className={
          clsx(
            "px-5 py-2 border bg-gray-200 rounded mb-5",
            {
              'border-red-500': errors.email
            }
          )
        }
        type="email" 
        {...register('email', {required: true, pattern: '^[^@]+@[^@]+\.[a-zA-Z]{2,}$' })}
      />

      <label htmlFor="email">{textContent.password}</label>
      <input
        className={
          clsx(
            "px-5 py-2 border bg-gray-200 rounded mb-5",
            {
              'border-red-500': errors.password
            }
          )
        }
        type="password"
        {...register('password', {required: true, minLength: 6})}
      />

      <span className="text-red-500">{errorMessage}</span>

      <button
        type='submit'
        className={
          clsx({
            "btn-primary": !pending,
            "btn-disabled": pending
          })
        }
        disabled={pending}
      >
        {textContent.btnText}
      </button>

      {/* divisor line */ }
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link
        href="/auth/login" 
        className="btn-secondary text-center">
        {textContent.login}
      </Link>

    </form>
  )
}
