'use client'

export const revalidate = 604800

import { getProductsByDrop } from "@/actions";
import { Hero, Marquee, ProductGrid, Spinner, Title } from "@/components";
import { useEffect, useState } from "react";
import { IoEarth } from "react-icons/io5";

// import { initialData } from "@/seed"
// const {products} = initialData

export default function Home() {
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
    
  return (
    <>
      <Hero/>
      <Marquee className="bg-red-600 text-white" text={"☢️ DROP#1 YA A LA VENTA!"}/>
      <Title title="DROP #1 - NINETIES GAMES" className="text-center"/>

      {
        isLoading 
        ? (
          <div className="w-full h-[400px] flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <ProductGrid products={products} className="mt-8 md:mx-32"/>  
        )
      }

      <div className="bg-black flex items-center justify-center text-white py-8 mb-8 px-4">
        <h3>
          <IoEarth size={128} />
        </h3>
        <div className="h-[100px] w-[2px] bg-white mx-6"/>
        <p className="text-4xl font-semibold text-center">Envíos a todo el mundo</p>
      </div>
    </>
  );
}
