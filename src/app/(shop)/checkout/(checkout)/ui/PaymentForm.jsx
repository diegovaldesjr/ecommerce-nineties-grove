'use client'

import { PaypalButton } from "@/components"
import { useAddressStore, useCartStore } from "@/store"
import { useEffect, useState } from "react"
import { redirect } from 'next/navigation'

export const PaymentForm = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [newOrder, setNewOrder] = useState('')

  const cart = useCartStore(state => state.cart)
  const clearCart = useCartStore(state => state.clearCart)
  const productsToOrder = cart.map(product => ({
    product_id: product.id,
    quantity: product.quantity,
    size: product.size
  }))

  const address = useAddressStore(state => state.address)
  // TODO: total con envio
  const {subTotal} = useCartStore(state => state.getSummaryInformation())

  useEffect(()=> {
    if (newOrder) {
      clearCart()
      redirect(`/orders/${newOrder}`)
    }
  }, [newOrder])

  return (
    <>
      <div className="col-span-2">
        <h2 className="text-3xl">Pago</h2>
        {/* <p className="mb-8">Ingrese información de facturación.</p> */}
      </div> 

      <div className="mt-5 mb-2 md:col-span-2">
        <p className="mb-5">
          <span className="text-xs">
            Serás redirigido a una página donde podrás completar tu compar de forma segura.
          </span>
          {/* <span className="text-xs">
            Al hacer click en <strong>completar orden</strong>, estas aceptando nuestros <a href="#" className="underline">términos y condiciones</a>.
          </span> */}
        </p>

        <p className="text-red-500">{errorMessage}</p>

        <PaypalButton 
          address={address}
          amount={subTotal}
          orderWcId={null}
          productsToOrder={productsToOrder}
          setNewOrder={setNewOrder}
        />
      </div>
    </>
  )
}
