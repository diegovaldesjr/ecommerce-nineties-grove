'use server'

import { getFetchWooCommerce } from "@/actions";

export const getProductsByDrop = async() => {
  try {
    const endpoint = 'products'
    const params = `category=${process.env.DROP1_CATEGORY_ID}`
    
    const wooCommerceProducts = await getFetchWooCommerce(endpoint, params).catch((error) =>
      console.error(error)
    );
  
    if (!wooCommerceProducts) {
      throw 'No hay productos registrados.'
    }
  
    return {
      ok: true,
      products: wooCommerceProducts.data
    }
  } catch (error) {
    return {
      ok: false,
      message: error.message
    }
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
      throw 'No hay productos registrados.'
    }
  
    return {
      ok: true,
      product: wooCommerceProducts.data[0]
    }
  } catch (error) {
    return {
      ok: false,
      message: error.message
    }
  }
}
