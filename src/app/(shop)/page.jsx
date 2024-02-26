import { Hero, ProductGrid } from "@/components";
import { initialData } from "@/seed"

const {products} = initialData

export default function Home() {
  return (
    <>
      <Hero/>
      <ProductGrid products={products}/>
    </>
  );
}
