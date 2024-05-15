export const revalidate = 604800

import { Hero, Marquee, ProductGrid, Title } from "@/components";

export default function Home() {
  const textContent = {
    marquee: '☢️ DROP#1 YA A LA VENTA!',
    productsTitle: 'DROP #1 - NINETIES GAMES'
  }
  
  return (
    <>
      <Hero/>
      <Marquee className="bg-red-600 text-white" text={textContent.marquee}/>
      
      <div className="w-full mt-16 mb-16">
        <div className="flex justify-center p-4">
          <Title title={textContent.productsTitle} underline={false} className="text-center border-8 border-black p-4"/>
        </div>
        <ProductGrid className="my-16 md:mx-32"/>
      </div> 
    </>
  );
}
