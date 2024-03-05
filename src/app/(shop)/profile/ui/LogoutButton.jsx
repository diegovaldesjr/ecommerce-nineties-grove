'use client'

import { logout } from "@/actions"

export const LogoutButton = () => {
  return (
    <>
      <button className="btn-primary" onClick={ () =>logout() }>
        Cerrar sesión
      </button>
    </>
  )
}
