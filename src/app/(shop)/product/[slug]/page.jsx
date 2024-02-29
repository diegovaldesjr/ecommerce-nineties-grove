import { ProductGrid } from "./ui/ProductGrid";

export default function({params}) {
  const {slug} = params

  return (
    <>
      <ProductGrid slug={slug} />
    </>
  );
}
