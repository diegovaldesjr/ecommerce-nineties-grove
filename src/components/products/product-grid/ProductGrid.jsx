import { ProductGridItem } from "./ProductGridItem"

export const ProductGrid = ({products}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10 px-0 sm:px-8">
        {
            products.map( product => (
                <ProductGridItem key={product.slug} product={product}/>
            ))
        }
    </div>
  )
}
