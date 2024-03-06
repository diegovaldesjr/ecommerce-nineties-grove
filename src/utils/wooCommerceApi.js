import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// initialise the WooCommerceRestApi //
const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WOOCOMMERCE_KEY,
  consumerSecret: process.env.WOOCOMMERCE_SECRET,
  version: "wc/v3",
});

// fetch all products from WooCommerce //
export async function fetchWooCommerceProducts(endpoint, params) {
  if (params)
    endpoint = `${endpoint}?${params}`

  try {
    const response = await api.get(endpoint);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createWooCommerceCustomer(data) {
  try {
    const response = await api.post("customers", data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createWooCommerceOrder(data) {
  try {
    const response = await api.post("orders", data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
