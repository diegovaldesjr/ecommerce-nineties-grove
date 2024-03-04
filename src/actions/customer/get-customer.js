'use server'

import { fetchWooCommerceProducts } from "@/utils";
import { jwtDecode } from "jwt-decode"

export const getCustomerInfo = async(userJWT) => {
  const decoded = jwtDecode(userJWT)
  if (!decoded.id) return null

  const endpoint = `customers/${decoded.id}`
  
  const wooCommerceProducts = await fetchWooCommerceProducts(endpoint).catch((error) =>
    console.error(error)
  );

  if (!wooCommerceProducts) {
    return null
  }

  return wooCommerceProducts.data
}
