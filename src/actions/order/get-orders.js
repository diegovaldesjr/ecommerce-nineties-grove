'use server'

import { getFetchWooCommerce } from "@/utils"

export const getOrders = async(userId) => {
  try {
    const endpoint = 'orders'
    const params = `customer=${userId}`
  
    const wooCommerceOrders = await getFetchWooCommerce(endpoint, params)
  
    if (!wooCommerceOrders) {
      return null
    }
  
    return wooCommerceOrders.data 
  } catch (error) {
    throw new Error (error.message)
  }
}

export const getOrderById = async(userId, OrderId) => {
  try {
    
  } catch (error) {
    throw new Error (error.message)
  }
}
