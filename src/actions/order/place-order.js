'use server'

import { auth } from "@/auth.config"
import { createWooCommerceOrder } from "@/utils"

export const placeOrder = async(address, productsToOrder) => {
  try {
    const session = await auth()
    const userId = session?.user.id

    if (!userId) {
      return {
        ok:false,
        message: 'No hay sesion de usuario.'
      }
    }

    const data = {
      payment_method: "cash",
      payment_method_title: "Cash",
      set_paid: false,
      billing: {},
      shipping: {
        first_name: address.firstName,
        last_name: address.lastName,
        address_1: address.address,
        address_2: address.address2,
        city: address.city,
        state: address.state,
        postcode: address.postalCode,
        country: address.country
      },
      line_items: productsToOrder,
      customer_id: userId
    }

    const res = await createWooCommerceOrder(data)
    const {id} = res.data


    return {
      ok: true,
      message: 'Orden creada.',
      orderId: id
    }
  } catch (error) {
    throw new Error (error.message)
  }
}
