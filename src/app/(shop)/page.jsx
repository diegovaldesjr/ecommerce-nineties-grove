import { ProductGrid } from "@/components";
import { initialData } from "@/seed"

const {products} = initialData

export default function Home() {
  return (
    <>
      <ProductGrid products={products}/>
    </>
  );
}
