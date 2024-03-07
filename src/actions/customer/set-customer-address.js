'use server'

import { updateWooCommerceCustomer } from "@/utils"

export const setCustomerAddress = async(userId, address) => {
  try {
    const data = {
      shipping: {
        first_name: address.firstName,
        last_name: address.lastName,
        address_1: address.address,
        address_2: address.address2,
        city: address.city,
        state: address.state,
        postcode: address.postalCode,
        country: address.country,
        phone: address.phone
      }
    }

    const res = await updateWooCommerceCustomer(userId, data)

    return {
      ok: true,
      message: 'Dirección guardada.',
      // address: address
    }
  } catch (error) {
    throw new Error (error.message)
  }
}
