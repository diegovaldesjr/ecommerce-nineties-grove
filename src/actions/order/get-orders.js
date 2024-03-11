'use server'

import { auth } from "@/auth.config"
import { getFetchWooCommerce } from "@/utils"

export const getOrders = async(userId) => {
  try {
    const session = await auth()

    if(!session?.user) {
      return {
        ok: false,
        message: 'Usuario no autenticado'
      }
    }

    const endpoint = 'orders'
    const params = `customer=${userId}`
  
    const wooCommerceOrders = await getFetchWooCommerce(endpoint, params)
  
    if (!wooCommerceOrders) {
      throw 'No tiene ordenes existentes.'
    }
  
    return {
      ok: true,
      orders: wooCommerceOrders.data
    }
  } catch (error) {
    return {
      ok: false,
      message: error.message
    }
  }
}

export const getOrderById = async(orderId) => {
  try {
    const session = await auth()

    if(!session?.user) {
      return {
        ok: false,
        message: 'Usuario no autenticado'
      }
    }

    const endpoint = `orders/${orderId}`
  
    const wooCommerceOrder = await getFetchWooCommerce(endpoint)
  
    if (!wooCommerceOrder) {
      throw `${orderId} no existe.`
    }

    if (session.user.id !== wooCommerceOrder.data.customer_id)
      throw `${id} no es de este usuario.`
  
    return {
      ok: true,
      order: wooCommerceOrder.data
    } 
  } catch (error) {
    return {
      ok: false,
      message: error.message
    }
  }
}
