import { Metadata } from "next";
import { getProductBySlug } from "@/actions";
import { ProductMobileSlideshow, ProductSlideshow } from "@/components";
import { AddToCart } from "./ui/AddToCart";
import { titleFont } from "@/config/fonts";
import { currencyFormat } from "@/utils";

export async function generateMetadata( { params }, parent ) {
  const slug = params.slug
  const {product} = await getProductBySlug(slug)
 
  return {
    title: product?.name ?? 'Producto no encontrado',
    description: product?.description ?? '',
    openGraph: {
      title: product?.name,
      description: product?.description ?? '',
      images: [product.images[0].src],
    },
  }
}

const removeTags = (str) => {
  return str.replace(/(<([^>]+)>)/gi, "")
}

export default async function({params}) {
  const {slug} = params
  const {product} = await getProductBySlug(slug)
  const textContent = {
    shippingCost: 'Los gastos de envío se calculan en la pantalla de pagos.'
  }
  
  return (
    <div className="mt-8 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">

      <div className="col-span-1 md:col-span-2">
        <ProductMobileSlideshow images={product.images} title={product.name} className="block md:hidden"/>
        
        {/* Desktop Slideshow */}
        <ProductSlideshow images={product.images} title={product.name} className="hidden md:block"/>
      </div>

      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-4xl mt-16 mb-2`}>
          {product.name}
        </h1>
        <p className="text-lg font-bold mb-0">{currencyFormat(product.price)}</p>
        <p className="text-sm font-semibold mb-5">{textContent.shippingCost}</p>
        
        <AddToCart product={product}/>

        <p className="font-light">
          {removeTags(product.description)}
        </p>
      </div>

    </div>
  )
}
