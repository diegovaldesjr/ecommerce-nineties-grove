'use client'

import { useEffect, useState } from "react";

import { notFound } from "next/navigation";
import { titleFont } from "@/config/fonts";
import { ColorSelector, QuantitySelector, ProductSlideshow, SizeSelector, ProductMobileSlideshow, Spinner } from "@/components";
import { getProductBySlug } from "@/actions";

// import { initialData } from "@/seed"
// const {products} = initialData

export default function({params}) {
  const {slug} = params
  // const product = initialData.products.find( product => product.slug === slug)

  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [sizes, setSizes] = useState([])

  useEffect(() =>{
    getProduct()
  }, [])

  const getProduct = async() => {
    const productBySlug = await getProductBySlug(slug)
    if (!productBySlug) notFound

    setProduct(productBySlug)
    const sizesAtt = productBySlug.attributes.find( (attribute) => attribute.name === 'sizes')

    if (sizesAtt) setSizes(sizesAtt.options)
    setIsLoading(false)
  }

  const removeTags = (str) => {
    return str.replace(/(<([^>]+)>)/gi, "")
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">

      {
        isLoading
        ? (
          <>
            <div className="col-span-1 md:col-span-2">
              <div className="w-full h-[800px] flex justify-center items-center">
                <Spinner />
              </div>
            </div>
            <div className="col-span-1 px-5 mt-8">
              <div role="status" className="animate-pulse">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col-span-1 md:col-span-2">
              <ProductMobileSlideshow images={product.images} title={product.name} className="block md:hidden"/>
              
              {/* Desktop Slideshow */}
              <ProductSlideshow images={product.images} title={product.name} className="hidden md:block"/>
            </div>

            <div className="col-span-1 px-5">
              <h1 className={`${titleFont.className} antialiased font-bold text-4xl mt-16 mb-2`}>
                {product.name}
              </h1>
              <p className="text-lg font-bold mb-0">${product.price}</p>
              <p className="text-sm font-semibold mb-5">Los gastos de envío se calculan en la pantalla de pagos.</p>
              <SizeSelector availableSizes={sizes} selectedSize={sizes[0]}/>
              {/* <ColorSelector colors={product.colors} /> */}
              <button className="btn-primary mb-8">
                Agregar al carrito
              </button>
              <h3 className="font-bold mb-2">Descripción</h3>
              <p className="font-light">
                {removeTags(product.description)}
              </p>
            </div>
          </>
        )
      }

    </div>
  );
}
