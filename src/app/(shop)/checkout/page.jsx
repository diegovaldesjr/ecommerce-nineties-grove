import Image from "next/image";
import Link from "next/link";

import { Title } from "@/components";
import { initialData } from "@/seed";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
]

export default function() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        
        <Title title='Verificar orden'/>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span>Ajustar elementos</span>
            <Link href="/cart" className="underline mb-5">
              Editar carrito
            </Link>

          {
            productsInCart.map( product => (
              <div key={product.slug} className="flex mb-5">
                <Image 
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  alt={product.title}
                  className="mr-5 rounded"
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                  />

                  <div>
                    <p>{product.title}</p>
                    <p>${product.price} x 3</p>
                    <p className="font-bold">Subtotal: ${product.price}</p>
                  </div>
              </div>
            ))
          }
          </div>

          {/* Checkout */}
          <div>
            <div className="bg-white rounded-xl shadow-xl p-6">
              <h2 className="text-2xl mb-2">Dirección de entrega</h2>
              <div className="mb-5">
                <p>Direccion larga bla bla</p>
              </div>

              <div className="w-full h-0.5 rounded bg-gray-200 mb-5">

              </div>

              <h2 className="text-2xl mb-2">Resumen de orden</h2>

              <div className="grid grid-cols-2">
                <span>N°. Productos</span>
                <span className="text-right">3 artículos</span>

                <span>Subtotal</span>
                <span className="text-right">$100</span>

                <span>Envio</span>
                <span className="text-right">$100</span>

                <span className="mt-5 text-2xl">Total:</span>
                <span className="mt-5 text-2xl text-right">100$</span>
              </div>

              <div className="mt-5 mb-2 w-full">
                <p className="mb-5">
                  <span className="text-xs">
                    Al hacer click en <strong>completar orden</strong>, aceptas nuestros <a href="#" className="underline">términos y condiciones</a>.
                  </span>
                </p>
                <Link className="flex btn-primary justify-center" href="/orders/123">
                  Completar orden
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
