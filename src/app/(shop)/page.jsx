import { Hero, Marquee, ProductGrid, Title } from "@/components";
import { initialData } from "@/seed"
import { IoEarth } from "react-icons/io5";

const {products} = initialData

export default function Home() {
  return (
    <>
      <Hero/>
      <Marquee className="bg-red-600 text-white" text={"☢️ DROP#1 YA A LA VENTA!"}/>
      <Title title="DROP #1 - NINETIES GAMES" className="text-center"/>
      <ProductGrid products={products} className="mt-8 md:mx-32"/>
      
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
