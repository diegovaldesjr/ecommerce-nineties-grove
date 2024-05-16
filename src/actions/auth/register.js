'use server'

import { createWooCommerceCustomer } from "@/actions";

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

    return {
      ok: true,
      customer: customer.data
    }
  } catch (error) {
    return {
      ok: false,
      message: error.message
    }
  }
}

export const registerUser = async(name, lastName, email, password) => {
  try {
    const {customer: user, ok} = await createCustomer({
      name: name,
      lastName: lastName,
      email: email,
      password: password
    })

    if (!ok) {
      throw 'Error al crear usuario (posiblemente correo ya registrado).'
    }

    return {
      ok: true,
      user: user,
      message: 'Usuario creado.'
    }
  } catch(error){
    return {
      ok: false,
      message: error.message
    }
  }
}