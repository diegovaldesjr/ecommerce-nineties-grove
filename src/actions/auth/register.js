'use server'

import { createWooCommerceCustomer } from "@/utils";

const createCustomer = async(data) => {
  try {
    const costumerData = {
      email: data.email,
      first_name: data.name,
      last_name: data.lastName,
      username: data.email.substring(0, data.email.indexOf("@")),
      password: data.password
    }

    const customer = await createWooCommerceCustomer(costumerData)
    
    if (!customer) {
      return null
    }

    return customer.data
  } catch (error) {
    throw new Error(error.message)
  }
}

export const registerUser = async(name, lastName, email, password) => {
  try {
    const user = await createCustomer({
      name: name,
      lastName: lastName,
      email: email,
      password: password
    })

    return {
      ok: true,
      user: user,
      message: 'Usuario creado.'
    }
  } catch(error){
    console.log(error)
    return {
      ok: false,
      message: 'Correo ya registrado.'
    }
  }
}