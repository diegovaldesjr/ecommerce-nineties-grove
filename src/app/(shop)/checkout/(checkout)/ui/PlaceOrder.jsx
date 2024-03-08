'use client'

import { placeOrder } from "@/actions"
import { useAddressStore, useCartStore } from "@/store"
import { currencyFormat } from "@/utils/currencyFormat"
import clsx from "clsx"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export const PlaceOrder = () => {
  const router = useRouter()

  const [loaded, setLoaded] = useState(false)
  const [isPlacingOrder, setIsPlacingOrder] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const address = useAddressStore(state => state.address)

  const {subTotal, itemsInCart} = useCartStore(state => state.getSummaryInformation())
  const cart = useCartStore(state => state.cart)
  const clearCart = useCartStore(state => state.clearCart)

  useEffect(()=> {
    setLoaded(true)
  }, [])

  const onPlaceOrder = async() => {
    setIsPlacingOrder(true)

    const productsToOrder = cart.map(product => ({
      product_id: product.id,
      quantity: product.quantity,
      size: product.size
    }))

    const res = await placeOrder(address, productsToOrder)

    if (!res.ok) {
      setIsPlacingOrder(false)
      setErrorMessage(res.message)
      return
    }

    clearCart()
    router.replace(`/orders/${res.order.id}`)
  }

  if (!loaded) {
    return <p>Loading</p>
  }

  return (
    <div className="bg-white rounded-xl shadow-xl p-6">
      <h2 className="text-2xl mb-2">Dirección de entrega</h2>
      <div className="mb-5">
        <p className="text-xl">{address.firstName} {address.lastName}</p>
        <p>{address.address}</p>
        <p>{address.address2}</p>
        <p>{address.postalCode}</p>
        <p>{address.city}, {address.country}</p>
        <p>{address.phone}</p>
      </div>

      <div className="w-full h-0.5 rounded bg-gray-200 mb-5" />

      <h2 className="text-2xl mb-2">Resumen de orden</h2>

      <div className="grid grid-cols-2">
        <span>N°. Productos</span>
        <span className="text-right">
          { itemsInCart === 1 ? '1 artículo' : `${itemsInCart} artículos`}
        </span>

        <span>Subtotal</span>
        <span className="text-right">{currencyFormat(subTotal)}</span>

        <span className="mt-5 text-xl font-bold">Total</span>
        <span className="mt-5 text-xl text-right font-bold">{currencyFormat(subTotal)}</span>
      </div>

      <div className="mt-5 mb-2 w-full">
        <p className="mb-5">
          <span className="text-xs">
            Al hacer click en <strong>completar orden</strong>, estas aceptando nuestros <a href="#" className="underline">términos y condiciones</a>.
          </span>
        </p>

        <p className="text-red-500">{errorMessage}</p>

        <button 
          className={clsx(
            "flex justify-center w-full",
            {
              'btn-primary': !isPlacingOrder,
              'btn-disabled': isPlacingOrder,
            }
          )}
          disabled={isPlacingOrder}
          onClick={onPlaceOrder}
          // href="/orders/123"  
        >
          Completar orden
        </button>
      </div>
    </div>
  )
}
