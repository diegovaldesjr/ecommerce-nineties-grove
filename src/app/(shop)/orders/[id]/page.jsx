import Image from "next/image";

import { OrderStatus, PaypalButton, Title } from "@/components";
import { getOrderById } from "@/actions";
import { redirect } from "next/navigation";
import { currencyFormat } from "@/utils";

export default async function({params}) {
  const {id} = params

  const {ok, order} = await getOrderById(id)
  
  const products = order.line_items
  const shipping = order.shipping
  const status = order.status === 'pending' ? false : true 

  const textContent = {
    title: `Orden #${id}`,
    address: 'Dirección de entrega',
    total: 'Total:'
  }

  if (!ok) {
    redirect('/')
  }

  return (
    <div className="flex justify-center px-8 lg:px-64 min-h-[800px]">
      <div className="flex flex-col w-full mt-16">
        
        <Title title={textContent.title} className="mb-8"/>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          
          {/* Carrito */}
          <div className="flex flex-col">
            <OrderStatus status={status} />

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
              
              <h3 className="text-xl mb-2">{textContent.address}</h3>
              <div className="mb-5">
                <p>{shipping.first_name} {shipping.last_name}</p>
                <p>{shipping.address_1}</p>
                <p>{shipping.address_2}</p>
                <p>{shipping.city}, {shipping.state}, {shipping.postcode}, {shipping.country}</p>
                <p>{shipping.phone}</p>
              </div>

              <div className="grid grid-cols-2 mb-8">
                <span className="mt-5 text-2xl">{textContent.total}</span>
                <span className="mt-5 text-2xl text-right">{currencyFormat(order.total)}</span>
              </div>

              {
                !status && (
                  <PaypalButton 
                    orderWcId={order.id}
                  />
                )
              }

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
