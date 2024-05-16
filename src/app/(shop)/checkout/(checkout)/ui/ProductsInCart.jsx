'use client'

import { SkeletonText } from "@/components"
import Image from "next/image"
import { useCartStore } from "@/store"
import { useEffect, useState } from "react"
import { currencyFormat } from "@/utils"

export const ProductsInCart = ({className}) => {
  const productsInCart = useCartStore(state => state.cart)
  const [loaded, setLoaded] = useState(false)
  
  const {subTotal, itemsInCart} = useCartStore(state => state.getSummaryInformation())

  const textContent = {
    total: 'Total',
    subtotal: 'Subtotal',
    shipping: 'Envio'
  }

  useEffect(() => {
    setLoaded(true)
  },[])

  if (!loaded) {
    return <SkeletonText />
  }

  return (
    <div className={className}>
      {
        productsInCart.map( product => (
          <div key={`${product.slug}-${product.size}`} className="flex mb-5">
            <Image 
              src={product.image}
              width={100}
              height={100}
              alt={product.slug}
              className="mr-5 rounded border-4"
              style={{
                width: '100px',
                height: '100px'
              }}
              />

              <div>
                <p className="font-bold">
                  {product.name} - ({product.quantity})
                </p>
                <p className="font-semibold">{ product.size}</p>
                <p>{currencyFormat(product.price * product.quantity)}</p>
              </div>
          </div>
        ))
      }

      <div className="grid grid-cols-2 mt-8">
        <span>{textContent.subtotal}</span>
        <span className="text-right">{currencyFormat(subTotal)}</span>

        <span className="mt-5 text-2xl font-semibold">{textContent.total}</span>
        <span className="mt-5 text-2xl text-right font-semibold">{currencyFormat(subTotal)}</span>
      </div>

    </div>
  )
}
