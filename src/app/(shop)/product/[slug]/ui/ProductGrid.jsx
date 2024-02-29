'use client'

import { getProductBySlug } from "@/actions"
import { ProductMobileSlideshow, ProductSlideshow, SkeletonText, Spinner } from "@/components"
import { useEffect, useState } from "react"
import { currencyFormat } from "../../../../../../utils/currencyFormat"
import { AddToCart } from "./AddToCart"
import { titleFont } from "@/config/fonts"

export const ProductGrid = ({slug}) => {
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
    getProduct()
  }, [])

  const getProduct = async() => {
    const productBySlug = await getProductBySlug(slug)
    if (!productBySlug) notFound

    setProduct(productBySlug)
    setIsLoading(false)
  }

  const removeTags = (str) => {
    return str.replace(/(<([^>]+)>)/gi, "")
  }

  if (isLoading) {
    return (
      <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="col-span-1 md:col-span-2">
          <div className="w-full h-[800px] flex justify-center items-center">
            <Spinner />
          </div>
        </div>
        <div className="col-span-1 px-5 mt-8">
          <SkeletonText />
        </div>
      </div>
    )
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">

      <div className="col-span-1 md:col-span-2">
        <ProductMobileSlideshow images={product.images} title={product.name} className="block md:hidden"/>
        
        {/* Desktop Slideshow */}
        <ProductSlideshow images={product.images} title={product.name} className="hidden md:block"/>
      </div>

      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-4xl mt-16 mb-2`}>
          {product.name}
        </h1>
        <p className="text-lg font-bold mb-0">{currencyFormat(product.price)}</p>
        <p className="text-sm font-semibold mb-5">Los gastos de envío se calculan en la pantalla de pagos.</p>
        
        <AddToCart product={product}/>

        <h3 className="font-bold mb-2">Descripción</h3>
        <p className="font-light">
          {removeTags(product.description)}
        </p>
      </div>

    </div>
  )
}
