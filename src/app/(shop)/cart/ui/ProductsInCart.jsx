'use client'

import { QuantitySelector, SkeletonText } from "@/components"
import Image from "next/image"
import { useCartStore } from "@/store"
import { useEffect, useState } from "react"
import Link from "next/link"
import { currencyFormat } from "@/utils/currencyFormat"

export const ProductsInCart = () => {
  const removeProduct = useCartStore(state => state.removeProduct)
  const updateProductQuantity = useCartStore(state => state.updateProductQuantity)
  const productsInCart = useCartStore(state => state.cart)
  const [loaded, setLoaded] = useState(false)

  const btnText = 'Remover'

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
                <Link className="hover:underline cursor-pointer font-bold" href={`/product/${product.slug}`}>
                  {product.name}
                </Link>
                <p className="font-bold">{product.size}</p>
                <p>{currencyFormat(product.price)}</p>
                <QuantitySelector className="mt-2" quantity={ product.quantity} onQuantityChanged={quantity => updateProductQuantity(product, quantity)}/>
                <button className="underline mt-3" onClick={() => removeProduct(product)}>
                  {btnText}
                </button>
              </div>
          </div>
        ))
      }
    </>
  )
}
