'use client'

import { useEffect, useState } from "react"
import { useCartStore } from "../../../../../store"
import { currencyFormat } from "../../../../../utils/currencyFormat"

export const OrderSummary = () => {
  const {subTotal, itemsInCart} = useCartStore(state => state.getSummaryInformation())
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  },[])

  if (!loaded) {
    return <p>Loading</p>
  }

  return (
    <>
      <div className="grid grid-cols-2">
        <span>N°. Productos</span>
        <span className="text-right">
          { itemsInCart === 1 ? '1 artículo' : `${itemsInCart} artículos`}
        </span>

        <span>Subtotal</span>
        <span className="text-right">{currencyFormat(subTotal)}</span>

        {/* <span>Envio</span>
        <span className="text-right">$100</span> */}

        <span className="mt-5 text-xl font-bold">Total</span>
        <span className="mt-5 text-xl text-right font-bold">{currencyFormat(subTotal)}</span>
      </div>
    </>
  )
}
