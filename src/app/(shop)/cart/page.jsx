import { Title } from "@/components";
import { ProductsInCart } from "./ui/ProductsInCart";
import { OrderSummary } from "./ui/OrderSummary";

export default function() {
  return (
    <div className="flex justify-center h-[800px] px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        
        <Title title='TU CARRITO' className="mt-14 mb-8"/>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="mb-5">Los artículos en tu carrito no están reservados. Revisalos y termina el proceso de compra ahora para hacerte con ellos.</span>
            <div className="w-full h-0.5 rounded bg-black mb-10" />

            <ProductsInCart />
          </div>

          {/* Checkout */}
          <div className="bg-white border-4 border-black p-8 h-fit">
            <h2 className="text-2xl mb-10 border-b-2 border-black pb-2">Resumen de orden</h2>

            <OrderSummary />
          </div>

        </div>
      </div>
    </div>
  );
}
