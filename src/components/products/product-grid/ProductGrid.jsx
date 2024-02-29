'use client'

import { useEffect, useState } from "react"
import { ProductGridItem } from "./ProductGridItem"
import { getProductsByDrop } from "@/actions"
import { Spinner } from "@/components"

export const ProductGrid = ({className}) => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
    getProducts()
  }, [])

  const getProducts = async() => {
    const allProducts = await getProductsByDrop()
    setProducts(allProducts)
    setIsLoading(false)
  }

  if (isLoading) {
    return (
      <div className="w-full h-[400px] flex justify-center items-center">
        <Spinner />
      </div>
    )
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-10 px-0 sm:px-8 ${className}`}>
        {
            products.map( product => (
                <ProductGridItem key={product.slug} product={product}/>
            ))
        }
    </div>
  )
}
