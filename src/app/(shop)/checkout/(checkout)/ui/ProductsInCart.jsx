'use client'

import { SkeletonText } from "@/components"
import Image from "next/image"
import { useCartStore } from "@/store"
import { useEffect, useState } from "react"
import { currencyFormat } from "@/utils/currencyFormat"

export const ProductsInCart = () => {
  const productsInCart = useCartStore(state => state.cart)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  },[])

  if (!loaded) {
    return <SkeletonText />
  }

  return (
    <>
      {
        productsInCart.map( product => (
          <div key={`${product.slug}-${product.size}`} className="flex mb-5">
            <Image 
              src={product.image}
              width={100}
              height={100}
              alt={product.slug}
              className="mr-5 rounded"
              style={{
                width: '100px',
                height: '100px'
              }}
              />

              <div>
                <p className="font-bold">
                  {product.name} - ({product.quantity})
                </p>
                <p className="font-bold">{ product.size}</p>
                <p>{currencyFormat(product.price * product.quantity)}</p>
              </div>
          </div>
        ))
      }
    </>
  )
}
