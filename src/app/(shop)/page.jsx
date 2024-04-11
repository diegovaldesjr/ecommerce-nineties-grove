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
    </>
  );
}
