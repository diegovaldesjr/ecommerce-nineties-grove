'use server'

import { updateOrder } from "@/actions";

export const paypalCheckPayment = async(transactionId) => {
  const authToken = await getPaypalBearerToken()
  if (!authToken) {
    return {
      ok: false,
      message: 'No se pudo obtener el token de verificación'
    }
  }

  const res = await verifyPaypalPayment(transactionId, authToken)

  if (!res) {
    return {
      ok: false,
      message: 'Error al verificar el pago'
    }
  }

  const {status, purchase_units} = res

  if (status !== 'COMPLETED') {
    return {
      ok: false,
      message: 'Aún no se ha pagado en Paypal'
    }
  }

  //Actualizar pago de la orden
  try {
    const {invoice_id: orderId} = purchase_units[0]
    const orderData = {
      set_paid: true,
    }
    const {ok} = await updateOrder(orderId, orderData)

    return {
      ok: true,
      orderId: orderId
    }

  } catch (error) {
    return {
      ok: false,
      message: '500 - El pago no se pudo realizar'
    }
  }

}

const getPaypalBearerToken = async() => {
  const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  const PAYPAL_SECRET = process.env.PAYPAL_SECRET
  const oauth2Url = process.env.PAYPAL_OAUTH_URL ?? ''

  const base64Token = Buffer.from(
    `${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`,
    'utf-8'
  ).toString('base64')
  
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append(
    "Authorization", 
    `Basic ${base64Token}`
  );

  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow',
    cache: 'no-store'
  };

  try {
    const {access_token} = await fetch(oauth2Url, requestOptions).then( r=> r.json())
    return access_token 
  } catch (error) {
    console.log(error)
    return null
  }
}

const verifyPaypalPayment = async(transactionId, bearerToken) => {
  const paypalOrderUrl = `${process.env.PAYPAL_ORDERS_URL}/${transactionId}`
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${bearerToken}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
    cache: 'no-store'
  };

  try {
    const res = await fetch(paypalOrderUrl, requestOptions).then( r => r.json())
    return res
  } catch (error) {
    console.log(error)
    return null
  }
}
