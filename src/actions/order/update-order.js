'use server'

import { auth } from "@/auth.config"
import { updateWooCommerceOrder } from "@/actions"

export const updateOrder = async(orderId, data) => {
  try {
    const session = await auth()
    const userId = session?.user.id

    if (!userId) {
      return {
        ok:false,
        message: 'No hay sesion de usuario.'
      }
    }

    const res = await updateWooCommerceOrder(orderId, data)
    const {id} = res.data

    return {
      ok: true,
      message: 'Orden actualizada.',
      orderId: id
    }
  } catch (error) {
    return {
      ok: false,
      message: error.message
    }
  }
}
