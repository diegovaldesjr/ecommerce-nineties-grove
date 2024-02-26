import { Hero, ProductGrid, Title } from "@/components";
import { initialData } from "@/seed"

const {products} = initialData

export default function Home() {
  return (
    <>
      <Hero/>

      <div className="w-full flex justify-center">
        <Title title="DROP #1 - NINETIES GAMES" className="text-red-600"/>
      </div>
      
      <ProductGrid products={products}/>
    </>
  );
}
