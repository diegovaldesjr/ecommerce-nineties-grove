'use server'

import { getFetchWooCommerce } from "@/utils";
import { jwtDecode } from "jwt-decode"

export const getCustomerLogin = async(userJWT) => {
  try {
    const decoded = jwtDecode(userJWT)
    if (!decoded.id) return null
  
    const endpoint = `customers/${decoded.id}`
    
    const wooCommerceCustomer = await getFetchWooCommerce(endpoint)
  
    if (!wooCommerceCustomer) {
      return null
    }
  
    return wooCommerceCustomer.data 
  } catch (error) {
    return {
      ok: false,
      message: error.message
    }
  }
}

export const getCustomer = async(id) => {
  try {
    const endpoint = `customers/${id}`
  
    const wooCommerceCustomer = await getFetchWooCommerce(endpoint)
  
    if (!wooCommerceCustomer) {
      return null
    }
  
    return wooCommerceCustomer.data 
  } catch (error) {
    return {
      ok: false,
      message: error.message
    }
  }
}
