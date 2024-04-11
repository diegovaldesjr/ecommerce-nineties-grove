import Image from "next/image";

import { Title } from "@/components";
import clsx from "clsx";
import { IoCardOutline } from "react-icons/io5";
import { getOrderById } from "@/actions";
import { redirect } from "next/navigation";
import { currencyFormat } from "@/utils/currencyFormat";

export default async function({params}) {
  const {id} = params

  const {ok, order} = await getOrderById(id)
  
  const products = order.line_items
  const shipping = order.shipping
  const status = order.status === 'completed' ? true : false 

  if (!ok) {
    redirect('/')
  }

  return (
    <div className="flex justify-center px-8 lg:px-64 min-h-[800px]">
      <div className="flex flex-col w-full mt-16">
        
        <Title title={`Orden #${id}`} className="mb-8"/>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          
          {/* Carrito */}
          <div className="flex flex-col">
            <div className={
              clsx(
                "flex items-center py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  'bg-red-500': !status,
                  'bg-green-700': status
                }
              )
            }>
              <IoCardOutline size={30}/>
              <span className="mx-2">{status ? 'Pagada' : 'Procesando'}</span>
            </div>

          {
            products.map( product => (
              <div key={product.id} className="flex my-4">
                <Image 
                  src={product.image.src}
                  width={100}
                  height={100}
                  alt={product.name}
                  className="mr-5 rounded"
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                  />

                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p>{currencyFormat(product.price)} x {product.quantity}</p>
                  </div>
              </div>
            ))
          }
          </div>

          {/* Checkout */}
          <div>
            <div className="bg-white px-8 h-fit">
              
              <h3 className="text-xl mb-2">Dirección de entrega</h3>
              <div className="mb-5">
                <p>{shipping.first_name} {shipping.last_name}</p>
                <p>{shipping.address_1}</p>
                <p>{shipping.address_2}</p>
                <p>{shipping.city}, {shipping.state}, {shipping.postcode}, {shipping.country}</p>
                <p>{shipping.phone}</p>
              </div>

              <div className="grid grid-cols-2">
                {/* <span>N°. Productos</span>
                <span className="text-right">3 artículos</span> */}

                {/* <span>Subtotal</span>
                <span className="text-right">$100</span> */}

                {/* <span>Envio</span>
                <span className="text-right">$100</span> */}

                <span className="mt-5 text-2xl">Total:</span>
                <span className="mt-5 text-2xl text-right">{currencyFormat(order.total)}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
