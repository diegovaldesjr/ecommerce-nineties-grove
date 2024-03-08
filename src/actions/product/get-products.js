'use server'

import { getFetchWooCommerce } from "@/utils";

export const getProductsByDrop = async() => {
  try {
    const endpoint = 'products'
    const params = `category=${process.env.DROP1_CATEGORY_ID}`
    
    const wooCommerceProducts = await getFetchWooCommerce(endpoint, params).catch((error) =>
      console.error(error)
    );
  
    if (!wooCommerceProducts) {
      return null
    }
  
    return wooCommerceProducts.data 
  } catch (error) {
    throw new Error (error.message)
  }
}

export const getProductBySlug = async(slug) => {
  try {
    const endpoint = 'products'
    const params = `slug=${slug}`
    
    const wooCommerceProducts = await getFetchWooCommerce(endpoint, params).catch((error) =>
      console.error(error)
    );
  
    if (!wooCommerceProducts) {
      return null
    }
  
    return wooCommerceProducts.data[0] 
  } catch (error) {
    throw new Error (error.message)
  }
}
