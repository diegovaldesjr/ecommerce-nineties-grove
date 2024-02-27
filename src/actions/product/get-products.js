'use server'

import { fetchWooCommerceProducts } from "../../../utils/wooCommerceApi";

export const getProductsByDrop = async() => {
  const endpoint = 'products'
  const params = `category=${process.env.DROP1_CATEGORY_ID}`
  
  const wooCommerceProducts = await fetchWooCommerceProducts(endpoint, params).catch((error) =>
    console.error(error)
  );

  if (!wooCommerceProducts) {
    return null
  }

  return wooCommerceProducts.data
}