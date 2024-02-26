import { notFound } from "next/navigation";
import { initialData } from "@/seed"
import { titleFont } from "@/config/fonts";
import { ColorSelector, QuantitySelector, ProductSlideshow, SizeSelector, ProductMobileSlideshow } from "@/components";

const {products} = initialData

export default function({params}) {
  const {slug} = params
  const product = initialData.products.find( product => product.slug === slug)

  if (!product) {
    notFound
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2">
        <ProductMobileSlideshow images={product.images} title={product.title} className="block md:hidden"/>
        
        {/* Desktop Slideshow */}
        <ProductSlideshow images={product.images} title={product.title} className="hidden md:block"/>
      </div>

      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>
        <SizeSelector availableSizes={product.sizes}/>
        <ColorSelector colors={product.colors} />
        <QuantitySelector quantity={1}/>
        <button className="btn-primary my-5">
          Agregar al carrito
        </button>
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">
          {product.description}
        </p>
      </div>
    </div>
  );
}
