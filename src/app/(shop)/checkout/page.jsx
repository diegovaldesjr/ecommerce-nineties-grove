import Image from "next/image";
import Link from "next/link";

import { Title } from "@/components";
import { ProductsInCart } from "./(checkout)/ui/ProductsInCart";
import { PlaceOrder } from "./(checkout)/ui/PlaceOrder";

const productsInCart = [
]

export default function() {
  return (
    <div className="flex justify-center items-center mb-72 px-8 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        
        <Title title='Verificar orden' className="mt-14 mb-10"/>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="mb-5">
              Si quieres hacer un ajuste en tus productos puedes volver al carrito <Link href="/cart" className="underline">aqui</Link>.
            </span>

            <div className="w-full h-0.5 rounded bg-gray-200 mb-5" />

          <ProductsInCart />
          </div>

          {/* Checkout */}
          <PlaceOrder />

        </div>
      </div>
    </div>
  );
}
