'use client'

import { placeOrder, updateOrder } from "@/actions";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"

export const PaypalButton = ({ orderWcId = null, amount, address = null, productsToOrder = null }) => {
  const [{ isPending }] = usePayPalScriptReducer();

  if (isPending) {
    return (
    <div className="animate-pulse">
      <div className="h-12 bg-gray-300 rounded"/>
    </div>
    )
  }

  const rountedAmount = (Math.round(amount * 100)) /100

  const createOrderPaypal = async(data, actions) => {
    let orderId =orderWcId

    if (!orderId) {
      const res = await placeOrder(address, productsToOrder)
      if (!res.ok) {
        throw new Error('No se crear la orden')
      }
      orderId = res.orderId
    }

    const transactionId = await actions.order.create({
      purchase_units: [
        {
          amount: {
            value: `${rountedAmount}`
          }
        }
      ]
    })

    const orderData = {
      transaction_id: transactionId,
    }
    const {ok} = await updateOrder(orderId, orderData)
    
    if (!ok) {
      throw new Error('No se pudo actualizar la orden')
    }
    return transactionId
  }

  return (
    <PayPalButtons 
      createOrder={createOrderPaypal}
      // onApprove={}
    />
  )
}
