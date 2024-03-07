export const revalidate = 604800

import { Hero, Marquee, ProductGrid, Title } from "@/components";
// import { IoEarth } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <Hero/>
      <Marquee className="bg-red-600 text-white" text={"☢️ DROP#1 YA A LA VENTA!"}/>
      
      <div className="w-full mt-16 mb-16">
        <div className="flex justify-center p-4">
          <Title title="DROP #1 - NINETIES GAMES" underline={false} className="text-center border-8 border-black p-4"/>
        </div>
        <ProductGrid className="my-16 md:mx-32"/>
      </div> 

      {/* <div className="w-full flex justify-center mb-8">
        <div className="flex flex-col items-center justify-center p-4 border-8 border-black">
          <h3>
            <IoEarth size={256} />
          </h3>
          <div className="w-[100px] h-[8px] bg-black mx-6"/>
          <p className="text-xl font-semibold text-center">Envíos a todo el mundo</p>
        </div>
      </div> */}

      {/* <div className="bg-black flex items-center justify-center text-white py-8 mb-8 px-4">
        <h3>
          <IoEarth size={128} />
        </h3>
        <div className="h-[100px] w-[2px] bg-white mx-6"/>
        <p className="text-4xl font-semibold text-center">Envíos a todo el mundo</p>
      </div> */}
    </>
  );
}
