import { Hero, Marquee, ProductGrid, Title } from "@/components";
import { initialData } from "@/seed"

const {products} = initialData

export default function Home() {
  return (
    <>
      <Hero/>
      <Marquee className="bg-red-600 text-white" text={"☢️ DROP#1 YA A LA VENTA!"}/>
      <Title title="DROP #1 - NINETIES GAMES" className="text-center"/>
      <ProductGrid products={products} className="mt-8"/>
    </>
  );
}
