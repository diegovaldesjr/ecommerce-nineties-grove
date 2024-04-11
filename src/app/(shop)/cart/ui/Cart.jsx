'use client'

import { Title } from "@/components";
import { ProductsInCart } from "./ProductsInCart";
import { OrderSummary } from "./OrderSummary";
import { useCartStore } from "@/store";
import { useEffect, useState } from "react";
import { Empty } from "./Empty";

export const Cart = () => {
  const {itemsInCart} = useCartStore(state => state.getSummaryInformation())
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  },[])

  if (itemsInCart < 1 || !loaded) {
    return <Empty />
  }

  return (
    <div className="flex justify-center min-h-[800px] px-8 lg:px-64">
      <div className="flex flex-col w-full mt-16">
        
        <Title title='SU CARRITO' className="mb-8"/>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-6">
          
          {/* Carrito */}
          <div className="flex flex-col">
            <span className="mb-5">Los artículos en tu carrito no están reservados. Revisalos y termina el proceso de compra ahora para hacerte con ellos.</span>
            <div className="w-full h-0.5 rounded bg-black mb-10" />

            <ProductsInCart />
          </div>

          {/* Checkout */}
          <div className="bg-white lg:p-12 lg:pt-0">
            <OrderSummary />
          </div>

        </div>
      </div>
    </div>
  );
}
