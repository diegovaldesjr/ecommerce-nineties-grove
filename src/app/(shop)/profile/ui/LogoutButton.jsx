'use client'

import { logout } from "@/actions"

export const LogoutButton = () => {
  const btnText = 'Cerrar sesión'
  
  return (
    <>
      <button className="btn-primary" onClick={ () =>logout() }>
        {btnText}
      </button>
    </>
  )
}
