'use client'

import { useEffect, useState } from "react"
import { useCartStore } from "@/store"
import { currencyFormat } from "@/utils/currencyFormat"
import { SkeletonText } from "@/components"
import Link from "next/link"

export const OrderSummary = () => {
  const {subTotal, itemsInCart} = useCartStore(state => state.getSummaryInformation())
  const [loaded, setLoaded] = useState(false)

  const textContent = {
    products: 'N°. Productos',
    subtotal: 'Subtotal',
    btnText: 'Checkout'
  }

  useEffect(() => {
    setLoaded(true)
  },[])

  if (!loaded) {
    return <SkeletonText />
  }

  return (
    <>
      <div className="grid grid-cols-2">
        <span>{textContent.products}</span>
        <span className="text-right">
          { itemsInCart === 1 ? '1 artículo' : `${itemsInCart} artículos`}
        </span>

        <span className="mt-6 font-bold text-xl">{textContent.subtotal}</span>
        <span className="mt-6 text-xl text-right font-bold">{currencyFormat(subTotal)}</span>
      </div>

      <div className="mt-12 mb-2 w-full">
        <Link className="flex btn-primary justify-center" href="/checkout">
          {textContent.btnText}
        </Link>
      </div>
    </>
  )
}
